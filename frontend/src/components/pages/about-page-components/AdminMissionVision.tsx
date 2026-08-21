"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Save, Plus, Trash2 } from "lucide-react";

import {
    useGetStrategiesQuery,
    useCreateStrategyMutation,
    useUpdateStrategyMutation
} from "@/redux/api/strategyApi";
import { CreateStrategyPayload } from "@/redux/types/strategy";
import { ImageUploadField } from "@/components/common/ImageUploadField";

// Default empty attachment arrays

export default function AdminMissionVision() {
    // State for title/description
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // State for sections
    const [mission, setMission] = useState("");
    const [vision, setVision] = useState("");
    const [values, setValues] = useState<{ title: string }[]>([]);

    // Individual attachment states for mission, vision, and core values section icon
    const [missionAttachment, setMissionAttachment] = useState<string[]>([]);
    const [visionAttachment, setVisionAttachment] = useState<string[]>([]);
    const [coreValuesSectionAttachment, setCoreValuesSectionAttachment] = useState<string[]>([]);

    // Store the strategy ID
    const [strategyId, setStrategyId] = useState<string | null>(null);

    // RTK Query hooks
    const { data: strategiesData, isLoading } = useGetStrategiesQuery();
    const [createStrategy] = useCreateStrategyMutation();
    const [updateStrategy, { isLoading: isUpdating }] = useUpdateStrategyMutation();

    // Map fetched strategy to state or create if empty
    useEffect(() => {
        if (!strategiesData) return;

        if (strategiesData.length === 0) {
            // Reset to defaults when no strategy exists
            setStrategyId(null);
            setTitle("");
            setDescription("");
            setMission("");
            setVision("");
            setMissionAttachment([]);
            setVisionAttachment([]);
            setCoreValuesSectionAttachment([]);
            setValues([]);
            return;
        }

        const strategy = strategiesData[0];
        setStrategyId(strategy.strategy_id);

        setTitle(strategy.title || "");
        setDescription(strategy.description || "");

        strategy.sections?.forEach((sec) => {
            if (sec.type === "mission") {
                setMission(sec.content || "");
                if ((sec as any).attachment_id) {
                    setMissionAttachment([(sec as any).attachment_id]);
                }
            }
            else if (sec.type === "vision") {
                setVision(sec.content || "");
                if ((sec as any).attachment_id) {
                    setVisionAttachment([(sec as any).attachment_id]);
                }
            }
            else if (sec.type === "core_values") {
                if ((sec as any).attachment_id) {
                    setCoreValuesSectionAttachment([(sec as any).attachment_id]);
                }
                const coreVals = sec.core_values?.map((v: any) => ({
                    title: v.title || "",
                })) || [];
                setValues(coreVals);
            }
        });
    }, [strategiesData]);

    const addValue = () => setValues([...values, { title: "" }]);
    const removeValue = (index: number) => setValues(values.filter((_, i) => i !== index));
    const updateValue = (index: number, text: string) => {
        const newValues = [...values];
        newValues[index].title = text;
        setValues(newValues);
    };

    // Save handler
    const handleSave = async () => {
        const sections = [
            {
                type: "mission" as const,
                title: "Our Mission",
                attachment_id: missionAttachment[0], // Use the first attachment ID
                content: mission,
            },
            {
                type: "vision" as const,
                title: "Our Vision",
                attachment_id: visionAttachment[0], // Use the first attachment ID
                content: vision,
            },
            {
                type: "core_values" as const,
                title: "Core Values",
                attachment_id: coreValuesSectionAttachment[0], // Use the first attachment ID for the section icon
                core_values: values.filter(v => v.title.trim() !== "").map((v) => ({
                    title: v.title,
                    content: v.title,
                })),
            },
        ];

        const payload: CreateStrategyPayload = {
            title: title || "Organizational Strategy",
            description: description || "Our long term direction",
            sections,
        };

        try {
            if (strategyId) {
                // Update existing strategy
                await updateStrategy({ id: strategyId, data: payload }).unwrap();
                alert("Strategy updated successfully");
            } else {
                // Create new strategy
                await createStrategy(payload).unwrap();
                alert("Strategy created successfully");
            }
        } catch (err: any) {
            console.error("Save failed:", err);
            alert("Failed to save strategy");
        }
    };

    if (isLoading) return <p>Loading strategy...</p>;

    return (
        <div className="space-y-6">
            <Card>
                <CardContent className="space-y-6">
                    <div className="flex justify-between items-center">
                        <CardTitle className="text-xl font-bold text-primary">Title & Description</CardTitle>
                        <Button
                            onClick={handleSave}
                            className="bg-golden-dark hover:bg-golden-darkHover"
                            disabled={isUpdating}
                        >
                            <Save className="w-4 h-4 mr-2" />
                            {isUpdating ? "Saving..." : "Save"}
                        </Button>
                    </div>

                    <div className="space-y-2">
                        <Label>Title</Label>
                        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <Label>Description</Label>
                        <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle className="text-xl font-bold text-primary">Mission & Vision</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="flex flex-col space-y-2 p-4">
                            <CardTitle className="text-xl font-bold text-primary">Mission</CardTitle>
                            <div className="space-y-2">
                                <ImageUploadField
                                    id="mission-icon"
                                    label="Icon Image"
                                    value={missionAttachment}
                                    onChange={(ids) => setMissionAttachment(ids)}
                                    category="headline"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Content</Label>
                                <Textarea
                                    value={mission}
                                    onChange={(e) => setMission(e.target.value)}
                                    className="min-h-[120px]"
                                />
                            </div>
                        </Card>

                        <Card className="flex flex-col space-y-2 p-4">
                            <CardTitle className="text-xl font-bold text-primary">Vision</CardTitle>
                            <div className="space-y-2">
                                <ImageUploadField
                                    id="vision-icon"
                                    label="Icon Image"
                                    value={visionAttachment}
                                    onChange={(ids) => setVisionAttachment(ids)}
                                    category="headline"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Content</Label>
                                <Textarea
                                    value={vision}
                                    onChange={(e) => setVision(e.target.value)}
                                    className="min-h-[120px]"
                                />
                            </div>
                        </Card>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle className="text-xl font-bold text-primary">Core Values</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-6">
                        {/* Left side - Section Icon Image Upload */}
                        <div className="w-64 space-y-2">
                            <ImageUploadField
                                id="core-values-section-icon"
                                label="Section Icon Image"
                                value={coreValuesSectionAttachment}
                                onChange={(ids) => setCoreValuesSectionAttachment(ids)}
                                category="headline"
                            />
                        </div>

                        {/* Right side - Content */}
                        <div className="flex-1 space-y-4">
                            <div className="flex justify-between items-center mb-2">
                                <Label>Core Value Points</Label>
                                <Button variant="outline" onClick={addValue} size="sm" className="h-8">
                                    <Plus className="w-4 h-4 mr-2" /> Add Point
                                </Button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {values.map((val, idx) => (
                                    <div key={idx} className="flex gap-2 items-center bg-gray-50 p-2 rounded-md border border-gray-100">
                                        <Input 
                                            value={val.title} 
                                            onChange={(e) => updateValue(idx, e.target.value)} 
                                            placeholder="e.g. Integrity" 
                                            className="h-8 bg-white"
                                        />
                                        <Button variant="destructive" size="icon" onClick={() => removeValue(idx)} className="h-8 w-8 shrink-0">
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                            {values.length === 0 && (
                                <p className="text-sm text-gray-500 italic">No value points added yet.</p>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}