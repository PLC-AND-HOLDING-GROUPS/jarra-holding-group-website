"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Save, Loader2, Plus, Trash2, ArrowUp, ArrowDown } from "lucide-react";
import { useGetServiceOverviewQuery, useUpdateServiceOverviewMutation } from "@/redux/api/serviceApi";
import { toast } from "sonner";
import { LucideIconPicker } from "@/components/common/LucideIconPicker";

export default function AdminServicesOverviewManager() {
    const { data, isLoading: isFetching, refetch } = useGetServiceOverviewQuery();
    const [updateOverview, { isLoading: isUpdating }] = useUpdateServiceOverviewMutation();

    const [heading, setHeading] = useState("");
    const [subheading, setSubheading] = useState("");
    const [description, setDescription] = useState("");
    const [cards, setCards] = useState<{name: string, icon: string}[]>([]);

    useEffect(() => {
        if (data) {
            setHeading(data.heading || "");
            setSubheading(data.subheading || "");
            setDescription(data.description || "");
            setCards(data.cards || []);
        }
    }, [data]);

    const handleSave = async () => {
        try {
            await updateOverview({
                heading,
                subheading,
                description,
                cards,
            }).unwrap();
            toast.success("Service Overview updated successfully!");
            refetch();
        } catch (error) {
            console.error("Failed to update overview", error);
            toast.error("Failed to update service overview.");
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
                    <h2 className="text-lg font-bold text-primary">Service Overview</h2>
                    <p className="text-sm text-gray-500">Manage the WHAT WE DO section.</p>
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
                        <Label>Subheading (e.g. WHAT WE DO)</Label>
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
                </CardContent>
            </Card>

            <Card className="border-gray-200">
                <CardHeader className="border-b py-3 px-4">
                    <CardTitle className="text-base font-semibold text-primary">
                        Overview Cards
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                    {cards.map((card, index) => (
                        <div key={index} className="flex gap-4 items-start border p-4 rounded-md relative">
                            <div className="flex-1 space-y-2">
                                <Label>Card Name</Label>
                                <Input
                                    value={card.name}
                                    onChange={(e) => {
                                        const newCards = [...cards];
                                        newCards[index].name = e.target.value;
                                        setCards(newCards);
                                    }}
                                />
                            </div>
                            <div className="flex-1 space-y-2">
                                <Label>Icon</Label>
                                <LucideIconPicker
                                    value={card.icon}
                                    onChange={(val) => {
                                        const newCards = [...cards];
                                        newCards[index].icon = val;
                                        setCards(newCards);
                                    }}
                                />
                            </div>
                            <div className="flex items-center gap-2 mt-8">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => {
                                        if (index > 0) {
                                            const newCards = [...cards];
                                            const temp = newCards[index];
                                            newCards[index] = newCards[index - 1];
                                            newCards[index - 1] = temp;
                                            setCards(newCards);
                                        }
                                    }}
                                    disabled={index === 0}
                                >
                                    <ArrowUp className="w-4 h-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => {
                                        if (index < cards.length - 1) {
                                            const newCards = [...cards];
                                            const temp = newCards[index];
                                            newCards[index] = newCards[index + 1];
                                            newCards[index + 1] = temp;
                                            setCards(newCards);
                                        }
                                    }}
                                    disabled={index === cards.length - 1}
                                >
                                    <ArrowDown className="w-4 h-4" />
                                </Button>
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    onClick={() => {
                                        const newCards = cards.filter((_, i) => i !== index);
                                        setCards(newCards);
                                    }}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                    <Button
                        variant="outline"
                        onClick={() => setCards([...cards, { name: "", icon: "circle" }])}
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Card
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
