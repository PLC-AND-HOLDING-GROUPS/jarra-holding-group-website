"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, Save, X } from "lucide-react";
import { ImageUploadField, UploadedFileInfo } from "@/components/common/ImageUploadField";
import { toast } from "sonner";
import {
    useGetCertificationsQuery,
    useCreateCertificationMutation,
    useUpdateCertificationMutation,
    useDeleteCertificationMutation,
} from "@/redux/api/certificationApi";
import {
    useGetPageHeaderByIdentifierQuery,
    useUpdatePageHeaderMutation,
} from "@/redux/api/pageHeaderApi";
import { Certification } from "@/redux/types/certification";
import { getImageUrl } from "@/utils/fileUrl";
import { Loader2 } from "lucide-react";

export default function AdminCertifications() {
    const { data: response, isLoading } = useGetCertificationsQuery();
    const certifications = response?.data || [];

    const [createCertification] = useCreateCertificationMutation();
    const [updateCertification] = useUpdateCertificationMutation();
    const [deleteCertification] = useDeleteCertificationMutation();

    // Section Header State
    const { data: headerData, isLoading: isHeaderLoading } = useGetPageHeaderByIdentifierQuery("about-certifications");
    const [updatePageHeader, { isLoading: isUpdatingHeader }] = useUpdatePageHeaderMutation();
    
    const [headerTitle, setHeaderTitle] = useState("");
    const [headerSubtitle, setHeaderSubtitle] = useState("");
    const [headerDescription, setHeaderDescription] = useState("");

    useEffect(() => {
        if (headerData) {
            setHeaderTitle(headerData.title || "Company Certifications");
            setHeaderSubtitle(headerData.icon && headerData.icon !== "Award" ? headerData.icon : "Certifications");
            setHeaderDescription(headerData.description || "");
        } else if (!isHeaderLoading) {
            // Default content as requested
            setHeaderTitle("Company Certifications");
            setHeaderSubtitle("Certifications");
            setHeaderDescription("Our company operates under strict international guidelines to meet your project's needs, ensuring quality from collaboration meetings all the way to project completion. We believe that maintaining top-tier certifications is vital to delivering excellence.");
        }
    }, [headerData, isHeaderLoading]);

    const handleSaveHeader = async () => {
        try {
            await updatePageHeader({
                identifier: "about-certifications",
                body: { title: headerTitle, description: headerDescription, icon: headerSubtitle },
            }).unwrap();
            toast.success("Section header updated successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to update section header");
        }
    };

    const [editingId, setEditingId] = useState<string | null>(null);
    const [draft, setDraft] = useState<Partial<Certification> | null>(null);

    const handleCreateNew = () => {
        setEditingId("new");
        setDraft({
            title: "",
            description: "",
            order: certifications.length,
            is_active: true,
        });
    };

    const handleEdit = (cert: Certification) => {
        setEditingId(cert.certification_id);
        setDraft({ ...cert });
    };

    const handleCancel = () => {
        setEditingId(null);
        setDraft(null);
    };

    const handleSave = async () => {
        if (!draft?.title) {
            toast.error("Title is required");
            return;
        }

        try {
            const payload = {
                title: draft.title,
                description: draft.description || "",
                order: draft.order || 0,
                is_active: draft.is_active !== undefined ? draft.is_active : true,
                // Assuming draft.attachments stores the current state from the image uploader
                attachments: draft.attachments,
            };

            if (editingId === "new") {
                await createCertification(payload).unwrap();
                toast.success("Certification created successfully!");
            } else if (editingId) {
                await updateCertification({ certification_id: editingId, ...payload }).unwrap();
                toast.success("Certification updated successfully!");
            }
            handleCancel();
        } catch (error) {
            console.error(error);
            toast.error("Failed to save certification.");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this certification?")) return;
        try {
            await deleteCertification(id).unwrap();
            toast.success("Certification deleted successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete certification.");
        }
    };

    const handleImageChange = (ids: string[], files?: UploadedFileInfo[]) => {
        const fileInfo = files?.[0];
        setDraft((prev) => ({
            ...prev,
            attachments: fileInfo?.attachment_id ? [{ attachment_id: fileInfo.attachment_id }] as any : [],
        }));
    };

    if (isLoading) {
        return <div className="py-12 flex justify-center animate-pulse text-muted">Loading certifications...</div>;
    }

    return (
        <div className="space-y-6 py-6">
            <div className="flex justify-between items-center bg-card px-6 py-4 rounded-md shadow-sm">
                <div>
                    <h2 className="text-xl font-bold text-primary">Manage Certifications</h2>
                    <p className="text-sm text-muted-foreground">Add, edit, or remove company certifications displayed on the About page.</p>
                </div>
                {!editingId && (
                    <Button onClick={handleCreateNew} className="bg-primary text-white hover:bg-primary/80">
                        <Plus className="w-4 h-4 mr-2" /> Add Certification
                    </Button>
                )}
            </div>

            {/* Section Header Form */}
            {!editingId && (
                <Card>
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <CardTitle className="text-xl font-bold text-primary">Section Header Content</CardTitle>
                            <Button 
                                onClick={handleSaveHeader} 
                                disabled={isUpdatingHeader}
                                className="bg-golden-dark hover:bg-golden-darkHover text-white"
                            >
                                {isUpdatingHeader ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                                Save Header
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Subtitle (Primary Color Text)</Label>
                            <Input
                                value={headerSubtitle}
                                onChange={(e) => setHeaderSubtitle(e.target.value)}
                                placeholder="e.g. Certifications"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Main Title (Split Style)</Label>
                            <Input
                                value={headerTitle}
                                onChange={(e) => setHeaderTitle(e.target.value)}
                                placeholder="e.g. Company Certifications"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Description</Label>
                            <Textarea
                                value={headerDescription}
                                onChange={(e) => setHeaderDescription(e.target.value)}
                                placeholder="Enter the subtitle and description text..."
                                className="min-h-[120px]"
                            />
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Editor Form */}
            {editingId && draft && (
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-bold text-primary">{editingId === "new" ? "New Certification" : "Edit Certification"}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 bg-card px-6 py-4 rounded-md shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Title</Label>
                                    <Input
                                        value={draft.title || ""}
                                        onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                                        placeholder="e.g. ISO 9001: Quality"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Order (Sorting)</Label>
                                    <Input
                                        type="number"
                                        value={draft.order || 0}
                                        onChange={(e) => setDraft({ ...draft, order: parseInt(e.target.value) || 0 })}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Icon / Logo Image</Label>
                                <ImageUploadField
                                    id="certification-image"
                                    label="Upload Logo"
                                    value={
                                        draft.attachments && draft.attachments.length > 0
                                            ? [draft.attachments[0].attachment_id]
                                            : []
                                    }
                                    onChange={handleImageChange}
                                    category="profile" // Generic upload category
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Description</Label>
                            <Textarea
                                value={draft.description || ""}
                                onChange={(e) => setDraft({ ...draft, description: e.target.value })}
                                placeholder="Enter a brief description..."
                                className="min-h-[100px]"
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-3">
                        <Button variant="outline" onClick={handleCancel}>
                            <X className="w-4 h-4 mr-2" /> Cancel
                        </Button>
                        <Button onClick={handleSave} className="bg-golden-dark hover:bg-golden-darkHover text-white">
                            <Save className="w-4 h-4 mr-2" /> Save
                        </Button>
                    </CardFooter>
                </Card>
            )}

            {/* List View */}
            {!editingId && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.length === 0 ? (
                        <div className="col-span-full py-12 text-center text-muted-foreground border-2 border-dashed rounded-xl">
                            No certifications found. Click "Add Certification" to create one.
                        </div>
                    ) : (
                        certifications.map((cert) => (
                            <Card key={cert.certification_id} className="relative group overflow-hidden">
                                <CardHeader className="pb-3 border-b border-gray-100 flex flex-row justify-between items-start space-y-0">
                                    <div>
                                        <CardTitle className="text-lg font-bold">{cert.title}</CardTitle>
                                        <CardDescription className="text-xs mt-1">Order: {cert.order}</CardDescription>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="sm" onClick={() => handleEdit(cert)}>
                                            Edit
                                        </Button>
                                        <Button variant="destructive" size="icon" className="h-8 w-8" onClick={() => handleDelete(cert.certification_id)}>
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 flex flex-col items-center">
                                    {cert.attachments && cert.attachments.length > 0 && cert.attachments[0].attachment ? (
                                        <img
                                            src={getImageUrl(cert.attachments[0].attachment, "medium")}
                                            alt={cert.title}
                                            className="w-16 h-16 object-contain mb-4 rounded-md border p-1 bg-slate-50"
                                        />
                                    ) : (
                                        <div className="w-16 h-16 bg-gray-100 rounded-md border flex items-center justify-center text-xs text-gray-400 mb-4">
                                            No Image
                                        </div>
                                    )}
                                    <p className="text-sm text-gray-600 text-center line-clamp-3">
                                        {cert.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
