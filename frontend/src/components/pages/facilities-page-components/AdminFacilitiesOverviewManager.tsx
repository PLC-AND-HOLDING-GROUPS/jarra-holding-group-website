"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Save, Loader2 } from "lucide-react";
import { useGetFacilityOverviewQuery, useUpdateFacilityOverviewMutation } from "@/redux/api/facilityApi";
import { toast } from "sonner";
import { ImageUploadField } from "@/components/common/ImageUploadField";

export default function AdminFacilitiesOverviewManager() {
    const { data, isLoading: isFetching, refetch } = useGetFacilityOverviewQuery();
    const [updateOverview, { isLoading: isUpdating }] = useUpdateFacilityOverviewMutation();

    const [heading, setHeading] = useState("");
    const [subheading, setSubheading] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [listHeading, setListHeading] = useState("");

    useEffect(() => {
        if (data) {
            setHeading(data.heading || "");
            setSubheading(data.subheading || "");
            setDescription(data.description || "");
            setImage(data.image || "");
            setListHeading(data.list_heading || "");
        }
    }, [data]);

    const handleSave = async () => {
        try {
            await updateOverview({
                heading,
                subheading,
                description,
                image,
                list_heading: listHeading,
            }).unwrap();
            toast.success("Facility Overview updated successfully!");
            refetch();
        } catch (error) {
            console.error("Failed to update overview", error);
            toast.error("Failed to update facility overview.");
        }
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
                    <h2 className="text-lg font-bold text-primary">Physical Presence Overview</h2>
                    <p className="text-sm text-gray-500">Manage the physical footprint overview and list headings.</p>
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
                        Physical Presence Details
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                        <Label>Subheading (e.g. Our Physical Presence)</Label>
                        <Input
                            value={subheading}
                            onChange={(e) => setSubheading(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Heading</Label>
                        <Input
                            value={heading}
                            onChange={(e) => setHeading(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Description</Label>
                        <Textarea
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <ImageUploadField
                            id="physical-presence-image"
                            label="Image (Next to Overview)"
                            value={image ? [image] : []}
                            onChange={(val) => setImage(val[0] || "")}
                        />
                    </div>
                </CardContent>
            </Card>

            <Card className="border-gray-200">
                <CardHeader className="border-b py-3 px-4">
                    <CardTitle className="text-base font-semibold text-primary">
                        Facilities List Heading
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                        <Label>Heading for Facilities List (e.g. Featured Facilities)</Label>
                        <Input
                            value={listHeading}
                            onChange={(e) => setListHeading(e.target.value)}
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
