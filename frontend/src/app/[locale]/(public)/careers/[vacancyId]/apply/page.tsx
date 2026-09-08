"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";
import { useGetVacancyByIdQuery } from "@/redux/api/vacancyApi";
import { useSubmitJobApplicationMutation } from "@/redux/api/jobApplicationApi";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { EditFileUpload } from "@/components/common/EditFileUpload";
import { notify, extractErrorMessage } from "@/utils/notification";
import { TenderVacancyDetailSkeleton } from "@/components/skeletons";

export default function ApplyPage() {
    const params = useParams();
    const router = useRouter();
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
            <main className="min-h-screen py-24 bg-slate-50">
                <div className="max-w-3xl mx-auto px-4 md:px-8">
                    <TenderVacancyDetailSkeleton />
                </div>
            </main>
        );
    }

    if (isVacancyError || !vacancy || vacancy.display_status !== "open") {
        return (
            <main className="min-h-screen py-24 bg-slate-50">
                <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Application Unavailable</h1>
                    <p className="text-gray-600 mb-4">
                        This vacancy is no longer accepting applications or does not exist.
                    </p>
                    <Link
                        href="/careers#opportunities"
                        className="text-golden-dark hover:underline"
                    >
                        Back to Careers
                    </Link>
                </div>
            </main>
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
            <main className="min-h-screen py-24 bg-slate-50">
                <div className="max-w-2xl mx-auto px-4 md:px-8">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border text-center space-y-6">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">Application Submitted!</h2>
                        <p className="text-slate-600 text-lg">
                            Your application for <strong>{vacancy.job_title}</strong> has been submitted successfully. Thank you for your interest in joining our organization.
                        </p>
                        <div className="pt-6">
                            <Button asChild size="lg">
                                <Link href="/careers#opportunities">Back to Careers</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-8">
                <Link
                    href={`/careers/${vacancyId}`}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-golden-dark mb-6"
                >
                    <ArrowLeft size={14} /> Back to Job Details
                </Link>

                <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-10">
                    <div className="mb-8 border-b pb-6">
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Apply for {vacancy.job_title}</h1>
                        {vacancy.department && <p className="text-slate-600">Department: {vacancy.department}</p>}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                rows={6}
                                value={coverLetter}
                                onChange={(e) => setCoverLetter(e.target.value)}
                                placeholder="Tell us why you are a great fit for this role..."
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
                            <p className="text-xs text-slate-500 mt-2">Max file size: 5MB. Accepted formats: PDF, DOC, DOCX.</p>
                        </div>

                        <div className="pt-6 border-t flex justify-end">
                            <Button 
                                type="submit" 
                                size="lg" 
                                disabled={isSubmitting} 
                                className="w-full md:w-auto font-semibold px-12"
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
            </div>
        </main>
    );
}
