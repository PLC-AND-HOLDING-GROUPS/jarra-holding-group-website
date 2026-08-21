"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Save, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { ImageUploadField } from "@/components/common/ImageUploadField";
import {
    useGetBackgroundsQuery,
    useCreateBackgroundMutation,
    useUpdateBackgroundMutation
} from "@/redux/api/backgroundApi";
import { LucideIconPicker } from "@/components/common/LucideIconPicker";

export default function AdminBackground() {
    // Fetch backgrounds
    const { data: backgrounds, isLoading: isFetching } = useGetBackgroundsQuery();
    const [createBackground, { isLoading: isCreating }] = useCreateBackgroundMutation();
    const [updateBackground, { isLoading: isUpdating }] = useUpdateBackgroundMutation();

    // Form state
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [backgroundId, setBackgroundId] = useState<string | null>(null);
    const [icon, setIcon] = useState<string>("Info");

    // Map background data to form when fetched
    useEffect(() => {
        if (backgrounds && backgrounds.length > 0) {
            const background = backgrounds[0]; // Get the first/only background

            setBackgroundId(background.background_id);
            setTitle(background.title || "Ministry Background");
            setSubtitle(background.description || "Established to regulate and develop Ethiopia's mineral and petroleum resources for sustainable economic growth and national development.");
            setIcon(background.icon || "Info");
        } else {
            // Set default values for new background
            setTitle("Ministry Background");
            setSubtitle("Established to regulate and develop Ethiopia's mineral and petroleum resources for sustainable economic growth and national development.");
            setIcon("Info");
            setBackgroundId(null);
        }
    }, [backgrounds]);

    const handleSave = async () => {
        const payload = {
            title,
            description: subtitle,
            icon: icon ?? "Info",
        };

        try {
            if (backgroundId) {
                // Update existing background
                await updateBackground({
                    id: backgroundId,
                    data: {
                        title,
                        description: subtitle,
                        icon: icon ?? "Info",
                    },
                }).unwrap();
                toast.success("Background updated successfully");
            } else {
                // Create new background
                await createBackground(payload).unwrap();
                toast.success("Background created successfully");
            }
        } catch (error: any) {
            toast.error(error?.data?.message || `Failed to ${backgroundId ? 'update' : 'save'} background`);
        }
    };

    const isLoading = isFetching || isCreating || isUpdating;

    if (isFetching) {
        return (
            <Card>
                <CardContent className="flex items-center justify-center min-h-[400px]">
                    <Loader2 className="w-8 h-8 animate-spin text-golden-dark" />
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-bold text-primary">
                        Edit Background Section
                    </CardTitle>

                    <Button
                        onClick={handleSave}
                        disabled={isLoading}
                        className="bg-golden-dark hover:bg-golden-darkHover"
                    >
                        {isLoading ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                            <Save className="w-4 h-4 mr-2" />
                        )}
                        {backgroundId ? 'Update' : 'Save'} Changes
                    </Button>
                </div>
            </CardHeader>

            <CardContent className="space-y-6">
                {/* ICON */}
                <div className="space-y-2">
                    <Label>Icon</Label>
                    <LucideIconPicker
                        value={icon}
                        onChange={(iconName) => setIcon(iconName)}
                    />
                </div>
                {/* TITLE */}
                <div className="space-y-2">
                    <Label htmlFor="title">Main Title</Label>
                    <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter main title"
                    />
                </div>

                {/* SUBTITLE */}
                <div className="space-y-2">
                    <Label htmlFor="subtitle">Subtitle / Intro</Label>
                    <Textarea
                        id="subtitle"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        className="min-h-[80px]"
                        placeholder="Enter subtitle"
                    />
                </div>

                {/* CONTENT REMOVED */}
                {/* ATTACHMENTS REMOVED */}


            </CardContent>
        </Card>
    );
}