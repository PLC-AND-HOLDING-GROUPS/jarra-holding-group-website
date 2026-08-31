"use strict";
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Save, Loader2, Plus, Trash } from "lucide-react";
import { useGetServiceCapabilityQuery, useUpdateServiceCapabilityMutation } from "@/redux/api/serviceApi";
import { toast } from "sonner";
import { ImageUploadField } from "@/components/common/ImageUploadField";

export default function AdminCapabilitiesManager() {
    const { data, isLoading: isFetching, refetch } = useGetServiceCapabilityQuery();
    const [updateCapability, { isLoading: isUpdating }] = useUpdateServiceCapabilityMutation();

    const [heading, setHeading] = useState("");
    const [subheading, setSubheading] = useState("");
    const [capabilities, setCapabilities] = useState<{ id: string; name: string; desc: string; image: string }[]>([]);

    useEffect(() => {
        if (data) {
            setHeading(data.heading || "");
            setSubheading(data.subheading || "");
            setCapabilities(data.capabilities || []);
        }
    }, [data]);

    const handleSave = async () => {
        try {
            await updateCapability({
                heading,
                subheading,
                capabilities,
            }).unwrap();
            toast.success("Service Capability updated successfully!");
            refetch();
        } catch (error) {
            console.error("Failed to update capability", error);
            toast.error("Failed to update service capability.");
        }
    };

    const addCapability = () => {
        setCapabilities([...capabilities, { id: `sector-${Date.now()}`, name: "", desc: "", image: "" }]);
    };

    const updateCapabilityField = (index: number, key: string, value: string) => {
        const newCaps = [...capabilities];
        newCaps[index] = { ...newCaps[index], [key]: value };
        setCapabilities(newCaps);
    };

    const removeCapability = (index: number) => {
        const newCaps = [...capabilities];
        newCaps.splice(index, 1);
        setCapabilities(newCaps);
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
                    <h2 className="text-lg font-bold text-primary">Service Capabilities</h2>
                    <p className="text-sm text-gray-500">Manage the 'Multiple Sectors' section.</p>
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
                        Headings & Description
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                        <Label>Heading</Label>
                        <Input
                            value={heading}
                            onChange={(e) => setHeading(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Subheading</Label>
                        <Textarea
                            rows={2}
                            value={subheading}
                            onChange={(e) => setSubheading(e.target.value)}
                        />
                    </div>
                </CardContent>
            </Card>

            <Card className="border-gray-200">
                <CardHeader className="border-b py-3 px-4 flex justify-between items-center flex-row">
                    <CardTitle className="text-base font-semibold text-primary">
                        Sectors / Capabilities
                    </CardTitle>
                    <Button variant="outline" size="sm" onClick={addCapability}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Sector
                    </Button>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                    {capabilities.map((cap, index) => (
                        <div key={cap.id || index} className="flex flex-col gap-4 p-4 border rounded-lg">
                            <div className="flex justify-between items-center">
                                <Label className="font-bold text-primary">Sector {index + 1}</Label>
                                <Button variant="ghost" size="icon" onClick={() => removeCapability(index)} className="text-red-500 h-6 w-6">
                                    <Trash className="w-4 h-4" />
                                </Button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Name</Label>
                                    <Input
                                        value={cap.name}
                                        onChange={(e) => updateCapabilityField(index, "name", e.target.value)}
                                        placeholder="e.g. AGRICULTURE"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Image (Path or URL)</Label>
                                    <ImageUploadField
                                        id={`sector-image-${index}`}
                                        label="Sector Image"
                                        value={cap.image ? [cap.image] : []}
                                        onChange={(urls) => updateCapabilityField(index, "image", urls[0] || "")}
                                        category="headline"
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <Label>Description</Label>
                                    <Textarea
                                        value={cap.desc}
                                        onChange={(e) => updateCapabilityField(index, "desc", e.target.value)}
                                        placeholder="Description"
                                        rows={2}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                    {capabilities.length === 0 && (
                        <p className="text-sm text-gray-500 text-center py-4">No sectors added yet.</p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
