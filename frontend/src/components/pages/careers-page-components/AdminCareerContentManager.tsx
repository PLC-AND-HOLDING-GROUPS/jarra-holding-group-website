"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Save, Loader2, Plus, Trash } from "lucide-react";
import { useGetCareerContentQuery, useUpdateCareerContentMutation } from "@/redux/api/careerContentApi";
import { notify, extractErrorMessage } from "@/utils/notification";
import { EditFileUpload } from "@/components/common/EditFileUpload";
import { LucideIconPicker } from "@/components/common/LucideIconPicker";

export default function AdminCareerContentManager() {
    const { data, isLoading: isFetching, refetch } = useGetCareerContentQuery();
    const [updateContent, { isLoading: isUpdating }] = useUpdateCareerContentMutation();

    // Intro state
    const [introTitle, setIntroTitle] = useState("");
    const [introTitleHighlight, setIntroTitleHighlight] = useState("");
    const [introDesc1, setIntroDesc1] = useState("");
    const [introDesc2, setIntroDesc2] = useState("");
    const [introImageIds, setIntroImageIds] = useState<string[]>([]);
    const [introCardFocus, setIntroCardFocus] = useState("");
    const [introCardGrowth, setIntroCardGrowth] = useState("");

    // Culture state
    const [cultureTopTitle, setCultureTopTitle] = useState("");
    const [cultureTitle, setCultureTitle] = useState("");
    const [cultureTitleHighlight, setCultureTitleHighlight] = useState("");
    const [cultureDesc, setCultureDesc] = useState("");
    const [cultureMainImageIds, setCultureMainImageIds] = useState<string[]>([]);
    const [cultureSubImageIds, setCultureSubImageIds] = useState<string[]>([]);
    const [features, setFeatures] = useState<{ icon: string; title: string; description: string }[]>([]);

    useEffect(() => {
        if (data) {
            setIntroTitle(data.intro_title || "");
            setIntroTitleHighlight(data.intro_title_highlight || "");
            setIntroDesc1(data.intro_description_1 || "");
            setIntroDesc2(data.intro_description_2 || "");
            setIntroImageIds(data.intro_image_id ? [data.intro_image_id] : []);
            setIntroCardFocus(data.intro_card_focus || "");
            setIntroCardGrowth(data.intro_card_growth || "");

            setCultureTopTitle(data.culture_top_title || "");
            setCultureTitle(data.culture_title || "");
            setCultureTitleHighlight(data.culture_title_highlight || "");
            setCultureDesc(data.culture_description || "");
            setCultureMainImageIds(data.culture_image_main_id ? [data.culture_image_main_id] : []);
            setCultureSubImageIds(data.culture_image_sub_id ? [data.culture_image_sub_id] : []);
            setFeatures(data.culture_features || []);
        }
    }, [data]);

    const handleSave = async () => {
        try {
            await updateContent({
                intro_title: introTitle,
                intro_title_highlight: introTitleHighlight,
                intro_description_1: introDesc1,
                intro_description_2: introDesc2,
                intro_image_id: introImageIds[0] || undefined,
                intro_card_focus: introCardFocus,
                intro_card_growth: introCardGrowth,
                culture_top_title: cultureTopTitle,
                culture_title: cultureTitle,
                culture_title_highlight: cultureTitleHighlight,
                culture_description: cultureDesc,
                culture_image_main_id: cultureMainImageIds[0] || undefined,
                culture_image_sub_id: cultureSubImageIds[0] || undefined,
                culture_features: features,
            }).unwrap();
            notify.success("Career content updated successfully.");
            refetch();
        } catch (error) {
            console.error("Failed to update content", error);
            notify.error(extractErrorMessage(error, "Failed to update career content."));
        }
    };

    const addFeature = () => {
        setFeatures([...features, { icon: "Star", title: "", description: "" }]);
    };

    const updateFeature = (index: number, key: string, value: string) => {
        const newFeatures = [...features];
        newFeatures[index] = { ...newFeatures[index], [key]: value };
        setFeatures(newFeatures);
    };

    const removeFeature = (index: number) => {
        const newFeatures = [...features];
        newFeatures.splice(index, 1);
        setFeatures(newFeatures);
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
                    <h2 className="text-lg font-bold text-primary">Introduction & Culture</h2>
                    <p className="text-sm text-gray-500">Manage the content for the public careers page.</p>
                </div>
                <Button
                    variant="admin-primary"
                    onClick={handleSave}
                    disabled={isUpdating}
                >
                    {isUpdating ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                    Save Changes
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Introduction Content */}
                <Card className="border-gray-200">
                    <CardHeader className="border-b py-3 px-4">
                        <CardTitle className="text-base font-semibold text-primary">
                            Introduction Section
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Title Normal Text</Label>
                                <Input value={introTitle} onChange={(e) => setIntroTitle(e.target.value)} placeholder="Build Your Career With" />
                            </div>
                            <div className="space-y-2">
                                <Label>Title Highlighted</Label>
                                <Input value={introTitleHighlight} onChange={(e) => setIntroTitleHighlight(e.target.value)} placeholder="Purpose" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Paragraph 1</Label>
                            <Textarea rows={3} value={introDesc1} onChange={(e) => setIntroDesc1(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label>Paragraph 2</Label>
                            <Textarea rows={3} value={introDesc2} onChange={(e) => setIntroDesc2(e.target.value)} />
                        </div>

                        <div className="space-y-2 border-t pt-4">
                            <Label className="font-semibold text-md text-primary">Overlapping Card Content</Label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label>Card Focus</Label>
                                    <Input value={introCardFocus} onChange={(e) => setIntroCardFocus(e.target.value)} placeholder="MULTI-SECTOR" />
                                </div>
                                <div>
                                    <Label>Card Growth</Label>
                                    <Input value={introCardGrowth} onChange={(e) => setIntroCardGrowth(e.target.value)} placeholder="GROWTH" />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t">
                            <EditFileUpload
                                id="intro-image"
                                label="Main Background Image"
                                value={introImageIds}
                                onChange={(ids) => setIntroImageIds(ids.slice(0, 1))}
                                accept="image/*"
                                showPreview
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Our Culture Content */}
                <Card className="border-gray-200">
                    <CardHeader className="border-b py-3 px-4">
                        <CardTitle className="text-base font-semibold text-primary">
                            Our Culture Section
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <div className="space-y-2">
                            <Label>Top Small Title</Label>
                            <Input value={cultureTopTitle} onChange={(e) => setCultureTopTitle(e.target.value)} placeholder="OUR CULTURE" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Title Normal Text</Label>
                                <Input value={cultureTitle} onChange={(e) => setCultureTitle(e.target.value)} placeholder="People Power Our" />
                            </div>
                            <div className="space-y-2">
                                <Label>Title Highlighted</Label>
                                <Input value={cultureTitleHighlight} onChange={(e) => setCultureTitleHighlight(e.target.value)} placeholder="Progress" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Description</Label>
                            <Textarea rows={4} value={cultureDesc} onChange={(e) => setCultureDesc(e.target.value)} />
                        </div>

                        <div className="grid grid-cols-1 gap-4 pt-4 border-t">
                            <EditFileUpload
                                id="culture-main-img"
                                label="Culture Main Image (Large)"
                                value={cultureMainImageIds}
                                onChange={(ids) => setCultureMainImageIds(ids.slice(0, 1))}
                                accept="image/*"
                                showPreview
                            />
                            <EditFileUpload
                                id="culture-sub-img"
                                label="Culture Sub Image (Small)"
                                value={cultureSubImageIds}
                                onChange={(ids) => setCultureSubImageIds(ids.slice(0, 1))}
                                accept="image/*"
                                showPreview
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Features Editor */}
            <Card className="border-gray-200">
                <CardHeader className="border-b py-3 px-4 flex justify-between items-center flex-row">
                    <CardTitle className="text-base font-semibold text-primary">
                        Culture Features
                    </CardTitle>
                    <Button variant="outline" size="sm" onClick={addFeature}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Feature
                    </Button>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col gap-4 p-4 border rounded-lg bg-card relative">
                                <div className="absolute top-2 right-2">
                                    <Button variant="ghost" size="icon" onClick={() => removeFeature(index)} className="text-red-500 hover:text-red-700 h-8 w-8">
                                        <Trash className="w-4 h-4" />
                                    </Button>
                                </div>
                                <div className="space-y-2 w-full pr-8">
                                    <Label>Title</Label>
                                    <Input
                                        value={feature.title}
                                        onChange={(e) => updateFeature(index, "title", e.target.value)}
                                        placeholder="e.g. Innovative Thinking"
                                    />
                                </div>
                                <div className="space-y-2 w-full">
                                    <Label>Icon</Label>
                                    <LucideIconPicker
                                        value={feature.icon}
                                        onChange={(newIcon) => updateFeature(index, "icon", newIcon)}
                                    />
                                </div>
                                <div className="space-y-2 w-full">
                                    <Label>Description</Label>
                                    <Textarea
                                        rows={2}
                                        value={feature.description}
                                        onChange={(e) => updateFeature(index, "description", e.target.value)}
                                        placeholder="Feature description"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    {features.length === 0 && (
                        <p className="text-sm text-gray-500 text-center py-4">No features added yet.</p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
