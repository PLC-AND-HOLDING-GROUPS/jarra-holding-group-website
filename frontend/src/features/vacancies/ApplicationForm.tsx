"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Loader2, CheckCircle2 } from "lucide-react";
import { useGetVacancyByIdQuery } from "@/redux/api/vacancyApi";
import { useSubmitJobApplicationMutation } from "@/redux/api/jobApplicationApi";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { EditFileUpload } from "@/components/common/EditFileUpload";
import { notify, extractErrorMessage } from "@/utils/notification";

export default function ApplicationForm() {
    const params = useParams();
    const vacancyId = params.vacancyId as string;

    const { data: vacancy, isLoading: isVacancyLoading, isError: isVacancyError } = useGetVacancyByIdQuery(
        { id: vacancyId },
        { skip: !vacancyId }
    );
    const [submitApplication, { isLoading: isSubmitting }] = useSubmitJobApplicationMutation();

    const [isSuccess, setIsSuccess] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [coverLetter, setCoverLetter] = useState("");
    const [cvAttachmentIds, setCvAttachmentIds] = useState<string[]>([]);

    if (isVacancyLoading) {
        return (
            <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-10 flex items-center justify-center min-h-[400px]">
                <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
            </div>
        );
    }

    if (isVacancyError || !vacancy || vacancy.display_status !== "open") {
        return (
            <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-10 text-center flex flex-col items-center justify-center min-h-[400px]">
                <h2 className="text-xl font-bold text-slate-800 mb-2">Application Closed</h2>
                <p className="text-slate-600 mb-4">
                    This vacancy is no longer accepting applications.
                </p>
                <Link
                    href="/careers#opportunities"
                    className="text-primary hover:underline font-medium"
                >
                    View other opportunities
                </Link>
            </div>
        );
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !phone) {
            notify.error("Please fill in all required fields.");
            return;
        }

        if (cvAttachmentIds.length === 0) {
            notify.error("Please upload your CV/Resume.");
            return;
        }

        try {
            await submitApplication({
                vacancy_id: vacancyId,
                first_name: firstName,
                last_name: lastName,
                email,
                phone,
                cover_letter: coverLetter,
                cv_attachment_id: cvAttachmentIds[0]
            }).unwrap();

            setIsSuccess(true);
        } catch (error) {
            notify.error(extractErrorMessage(error, "Failed to submit application. Please try again."));
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border text-center space-y-6 flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Application Submitted!</h2>
                <p className="text-slate-600">
                    Your application for <strong>{vacancy.job_title}</strong> has been submitted successfully. Thank you for your interest!
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8">
            <div className="mb-6 border-b pb-4">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">Apply Now</h2>
                <p className="text-slate-500 text-sm mt-1">Submit your details to apply for this position.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
                        <Input
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            placeholder="e.g. John"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
                        <Input
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            placeholder="e.g. Doe"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="john@example.com"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                        <Input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            placeholder="+251 ..."
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter / Message</Label>
                    <Textarea
                        id="coverLetter"
                        rows={4}
                        value={coverLetter}
                        onChange={(e) => setCoverLetter(e.target.value)}
                        placeholder="Tell us why you are a great fit..."
                    />
                </div>

                <div className="space-y-2">
                    <Label>Resume / CV <span className="text-red-500">*</span></Label>
                    <EditFileUpload
                        id="cv-upload"
                        label="Upload CV (PDF, DOCX)"
                        value={cvAttachmentIds}
                        onChange={(ids) => setCvAttachmentIds(ids.slice(0, 1))}
                        accept=".pdf,.doc,.docx"
                    />
                    <p className="text-xs text-slate-500 mt-1">Max file size: 5MB. Formats: PDF, DOC, DOCX.</p>
                </div>

                <div className="pt-4 mt-2">
                    <Button 
                        type="submit" 
                        size="lg" 
                        disabled={isSubmitting} 
                        className="w-full font-semibold"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            "Submit Application"
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}
