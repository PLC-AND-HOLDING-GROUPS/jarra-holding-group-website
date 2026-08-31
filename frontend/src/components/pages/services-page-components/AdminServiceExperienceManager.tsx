"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Save, Loader2, Plus, Trash } from "lucide-react";
import { useGetServiceExperienceQuery, useUpdateServiceExperienceMutation } from "@/redux/api/serviceApi";
import { toast } from "sonner";

export default function AdminServiceExperienceManager() {
    const { data, isLoading: isFetching, refetch } = useGetServiceExperienceQuery();
    const [updateExperience, { isLoading: isUpdating }] = useUpdateServiceExperienceMutation();

    const [heading, setHeading] = useState("");
    const [subheading, setSubheading] = useState("");
    const [steps, setSteps] = useState<{ num: string; title: string; desc: string }[]>([]);

    useEffect(() => {
        if (data) {
            setHeading(data.heading || "");
            setSubheading(data.subheading || "");
            setSteps(data.steps || []);
        }
    }, [data]);

    const handleSave = async () => {
        try {
            await updateExperience({
                heading,
                subheading,
                steps,
            }).unwrap();
            toast.success("Service Experience updated successfully!");
            refetch();
        } catch (error) {
            console.error("Failed to update experience", error);
            toast.error("Failed to update service experience.");
        }
    };

    const addStep = () => {
        setSteps([...steps, { num: `0${steps.length + 1}`, title: "", desc: "" }]);
    };

    const updateStep = (index: number, key: string, value: string) => {
        const newSteps = [...steps];
        newSteps[index] = { ...newSteps[index], [key]: value };
        setSteps(newSteps);
    };

    const removeStep = (index: number) => {
        const newSteps = [...steps];
        newSteps.splice(index, 1);
        setSteps(newSteps);
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
                    <h2 className="text-lg font-bold text-primary">Service Experience</h2>
                    <p className="text-sm text-gray-500">Manage the 'From Source to Market' section.</p>
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
                        Experience Steps
                    </CardTitle>
                    <Button variant="outline" size="sm" onClick={addStep}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Step
                    </Button>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                    {steps.map((step, index) => (
                        <div key={index} className="flex gap-4 items-start p-4 border rounded-lg">
                            <div className="space-y-2 w-16">
                                <Label>Number</Label>
                                <Input
                                    value={step.num}
                                    onChange={(e) => updateStep(index, "num", e.target.value)}
                                    placeholder="01"
                                />
                            </div>
                            <div className="space-y-2 flex-1">
                                <Label>Title</Label>
                                <Input
                                    value={step.title}
                                    onChange={(e) => updateStep(index, "title", e.target.value)}
                                    placeholder="e.g. Understand"
                                />
                            </div>
                            <div className="space-y-2 flex-1">
                                <Label>Description</Label>
                                <Input
                                    value={step.desc}
                                    onChange={(e) => updateStep(index, "desc", e.target.value)}
                                    placeholder="Description"
                                />
                            </div>
                            <Button variant="ghost" size="icon" onClick={() => removeStep(index)} className="mt-6 text-red-500">
                                <Trash className="w-4 h-4" />
                            </Button>
                        </div>
                    ))}
                    {steps.length === 0 && (
                        <p className="text-sm text-gray-500 text-center py-4">No steps added yet.</p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
