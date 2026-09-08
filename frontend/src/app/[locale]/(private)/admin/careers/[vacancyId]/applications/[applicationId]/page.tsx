"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useGetApplicationByIdQuery, useUpdateApplicationStatusMutation, useUpdateApplicationFeedbackMutation } from "@/redux/api/jobApplicationApi";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Mail, Phone, Calendar, Loader2, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { notify } from "@/utils/notification";
import { getFileUrl } from "@/utils/fileUrl";
import Link from "next/link";
import { formatDateOnly } from "@/utils/datetime";

const STATUS_COLORS: Record<string, string> = {
    new: "bg-blue-100 text-blue-800",
    reviewed: "bg-purple-100 text-purple-800",
    shortlisted: "bg-amber-100 text-amber-800",
    rejected: "bg-red-100 text-red-800",
    hired: "bg-green-100 text-green-800",
};

export default function AdminApplicationDetail() {
    const params = useParams();
    const router = useRouter();
    const vacancyId = params.vacancyId as string;
    const applicationId = params.applicationId as string;

    const { data: response, isLoading } = useGetApplicationByIdQuery(applicationId, { skip: !applicationId });
    const application = response?.data;

    const [updateStatus, { isLoading: isUpdating }] = useUpdateApplicationStatusMutation();
    const [updateFeedback, { isLoading: isUpdatingFeedback }] = useUpdateApplicationFeedbackMutation();
    const [feedbackText, setFeedbackText] = useState("");

    useEffect(() => {
        if (application?.feedback) {
            setFeedbackText(application.feedback);
        }
    }, [application?.feedback]);

    if (isLoading) {
        return <div className="p-8 text-center text-muted-foreground">Loading application details...</div>;
    }

    if (!application) {
        return <div className="p-8 text-center text-red-500">Application not found.</div>;
    }

    const handleStatusChange = async (value: string) => {
        try {
            await updateStatus({ id: applicationId, status: value }).unwrap();
            notify.success("Application status updated successfully");
        } catch (error) {
            notify.error("Failed to update status");
        }
    };

    const handleSaveFeedback = async () => {
        try {
            await updateFeedback({ id: applicationId, feedback: feedbackText }).unwrap();
            notify.success("Feedback saved successfully");
        } catch (error) {
            notify.error("Failed to save feedback");
        }
    };

    const attachmentUrl = application.cv_attachment?.file_path
        ? getFileUrl(application.cv_attachment.file_path)
        : null;

    return (
        <div className="space-y-6 w-full mx-auto pb-12">
            <div>
                <Button variant="link" asChild className="px-0 mb-4 text-muted-foreground">
                    <Link href={`/admin/careers/${vacancyId}/applications`}>
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Applications
                    </Link>
                </Button>
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold tracking-tight">Application Details</h1>
                    <div className="flex items-center gap-3">
                        <Label>Status:</Label>
                        <Select
                            defaultValue={application.status}
                            onValueChange={handleStatusChange}
                            disabled={isUpdating}
                        >
                            <SelectTrigger className={`w-[140px] font-semibold ${STATUS_COLORS[application.status] || ""}`}>
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="new">New</SelectItem>
                                <SelectItem value="reviewed">Reviewed</SelectItem>
                                <SelectItem value="shortlisted">Shortlisted</SelectItem>
                                <SelectItem value="rejected">Rejected</SelectItem>
                                <SelectItem value="hired">Hired</SelectItem>
                            </SelectContent>
                        </Select>
                        {isUpdating && <Loader2 className="w-4 h-4 animate-spin text-primary" />}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Applicant Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label className="text-muted-foreground">Full Name</Label>
                                <p className="font-medium text-lg">{application.first_name} {application.last_name}</p>
                            </div>
                            <div>
                                <Label className="text-muted-foreground">Applied For</Label>
                                <p className="font-medium text-lg">{application.vacancy?.job_title || "Unknown"}</p>
                            </div>
                            <div>
                                <Label className="text-muted-foreground">Email</Label>
                                <p className="font-medium flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-muted-foreground" />
                                    <a href={`mailto:${application.email}`} className="text-blue-600 hover:underline">{application.email}</a>
                                </p>
                            </div>
                            <div>
                                <Label className="text-muted-foreground">Phone</Label>
                                <p className="font-medium flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-muted-foreground" />
                                    {application.phone}
                                </p>
                            </div>
                        </div>

                        {application.cover_letter && (
                            <div className="pt-4 border-t">
                                <Label className="text-muted-foreground mb-2 block">Cover Letter / Message</Label>
                                <div className="bg-slate-50 p-4 rounded-lg whitespace-pre-wrap text-sm text-slate-700">
                                    {application.cover_letter}
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Resume / CV</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {attachmentUrl ? (
                            <div className="space-y-4">
                                <div className="p-3 bg-slate-50 rounded border text-sm text-slate-600 break-all">
                                    {application.cv_attachment?.file_name}
                                </div>
                                <div className="border rounded-md overflow-hidden bg-slate-100">
                                    <iframe
                                        src={attachmentUrl}
                                        className="w-full h-[500px]"
                                        title="CV Attachment"
                                    />
                                </div>
                                <div className="flex gap-3 w-full">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="outline" className="flex-1">
                                                <Eye className="w-4 h-4 mr-2" /> Preview CV
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[80vw] !max-w-[80vw] w-[80vw] h-[95vh] flex flex-col p-0 gap-0">
                                            <DialogHeader className="px-6 py-4 border-b">
                                                <DialogTitle>CV Preview</DialogTitle>
                                                <DialogDescription className="truncate">
                                                    {application.cv_attachment?.file_name}
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="flex-1 overflow-hidden bg-slate-100 p-0 m-0">
                                                <iframe
                                                    src={attachmentUrl}
                                                    className="w-full h-full border-0"
                                                    title="CV Attachment Full"
                                                />
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                    <Button asChild className="flex-1" variant="default">
                                        <a href={attachmentUrl} target="_blank" rel="noopener noreferrer">
                                            <Download className="w-4 h-4 mr-2" /> Download CV
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <p className="text-sm text-muted-foreground">No CV attached.</p>
                        )}

                        <div className="pt-6 border-t mt-6">
                            <Label className="text-muted-foreground block mb-1">Applied On</Label>
                            <p className="font-medium flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-muted-foreground" />
                                {formatDateOnly(application.created_at)}
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:col-span-3">
                    <CardHeader>
                        <CardTitle>Internal Feedback & Notes</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Textarea
                            placeholder="Add your feedback or notes about this applicant here..."
                            className="min-h-[150px]"
                            value={feedbackText}
                            onChange={(e) => setFeedbackText(e.target.value)}
                        />
                        <div className="flex justify-end">
                            <Button onClick={handleSaveFeedback} disabled={isUpdatingFeedback}>
                                {isUpdatingFeedback && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                                Save Feedback
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
