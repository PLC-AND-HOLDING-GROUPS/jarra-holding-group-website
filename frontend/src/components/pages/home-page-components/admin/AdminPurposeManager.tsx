"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Save, Loader2, Plus, Trash2 } from "lucide-react";
import { useGetPurposeQuery, useCreateOrUpdatePurposeMutation } from "@/redux/api/purposeApi";
import { ImageUploadField } from "@/components/common/ImageUploadField";
import { LucideIconPicker } from "@/components/common/LucideIconPicker";
import { toast } from "sonner";
import { PurposePillar } from "@/redux/types/purpose";

export default function AdminPurposeManager() {
    const { data: purposeData, isLoading: isFetching, refetch } = useGetPurposeQuery();
    const [updatePurpose, { isLoading: isUpdating }] = useCreateOrUpdatePurposeMutation();

    const [subtitle, setSubtitle] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [quote, setQuote] = useState("");
    const [attachmentId, setAttachmentId] = useState("");
    const [pillars, setPillars] = useState<PurposePillar[]>([]);

    useEffect(() => {
        if (purposeData) {
            setSubtitle(purposeData.subtitle || "");
            setTitle(purposeData.title || "");
            setDescription(purposeData.description || "");
            setQuote(purposeData.quote || "");
            setAttachmentId(purposeData.attachment_id || "");
            setPillars(purposeData.pillars || []);
        }
    }, [purposeData]);

    const handleSave = async () => {
        try {
            await updatePurpose({
                subtitle,
                title,
                description,
                quote,
                attachment_id: attachmentId || null,
                pillars,
            }).unwrap();
            toast.success("Purpose section updated successfully!");
            refetch();
        } catch (error) {
            console.error("Failed to update purpose", error);
            toast.error("Failed to update purpose section.");
        }
    };

    const addPillar = () => {
        setPillars([...pillars, { title: "", description: "", icon: "Star" }]);
    };

    const removePillar = (index: number) => {
        const newPillars = [...pillars];
        newPillars.splice(index, 1);
        setPillars(newPillars);
    };

    const updatePillar = (index: number, field: keyof PurposePillar, value: string) => {
        const newPillars = [...pillars];
        newPillars[index] = { ...newPillars[index], [field]: value };
        setPillars(newPillars);
    };

    if (isFetching) {
        return (
            <div className="flex items-center justify-center p-12">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center bg-white p-4 rounded-lg border shadow-sm">
                <div>
                    <h2 className="text-lg font-bold text-primary">Purpose Section Management</h2>
                    <p className="text-sm text-gray-500">Manage the purpose section on the home page.</p>
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="admin-primary"
                        onClick={handleSave}
                        disabled={isUpdating}
                    >
                        {isUpdating ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                        Save Changes
                    </Button>
                </div>
            </div>

            <Card className="border-gray-200">
                <CardHeader className="border-b py-3 px-4">
                    <CardTitle className="text-base font-semibold text-primary">
                        Main Content
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <Label>Subtitle (e.g., "Our Purpose")</Label>
                                <Input
                                    value={subtitle}
                                    onChange={(e) => setSubtitle(e.target.value)}
                                    placeholder="Enter subtitle"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Title</Label>
                                <Input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Enter title"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Description</Label>
                                <Textarea
                                    rows={5}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Enter description"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Floating Quote</Label>
                                <Input
                                    value={quote}
                                    onChange={(e) => setQuote(e.target.value)}
                                    placeholder="Enter the quote overlaying the image"
                                />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <ImageUploadField
                                id="purpose-image"
                                label="Main Image"
                                value={attachmentId ? [attachmentId] : []}
                                onChange={(ids) => setAttachmentId(ids[0] || "")}
                                category="profile"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-gray-200">
                <CardHeader className="border-b py-3 px-4 flex flex-row items-center justify-between space-y-0">
                    <CardTitle className="text-base font-semibold text-primary">
                        Pillars
                    </CardTitle>
                    <Button variant="outline" size="sm" onClick={addPillar}>
                        <Plus className="w-4 h-4 mr-1" /> Add Pillar
                    </Button>
                </CardHeader>
                <CardContent className="p-6">
                    {pillars.length === 0 ? (
                        <p className="text-sm text-gray-500">No pillars added yet.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {pillars.map((pillar, index) => (
                                <div key={index} className="p-4 border rounded-lg relative space-y-4">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute top-2 right-2 text-destructive h-8 w-8 hover:bg-red-100"
                                        onClick={() => removePillar(index)}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                    <h4 className="font-medium text-sm text-primary">Pillar {index + 1}</h4>

                                    <div className="space-y-2">
                                        <Label>Icon</Label>
                                        <LucideIconPicker
                                            value={pillar.icon}
                                            onChange={(iconName) => updatePillar(index, "icon", iconName)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Title</Label>
                                        <Input
                                            value={pillar.title}
                                            onChange={(e) => updatePillar(index, "title", e.target.value)}
                                            placeholder="Enter title"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Description</Label>
                                        <Textarea
                                            rows={3}
                                            value={pillar.description}
                                            onChange={(e) => updatePillar(index, "description", e.target.value)}
                                            placeholder="Enter description"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
