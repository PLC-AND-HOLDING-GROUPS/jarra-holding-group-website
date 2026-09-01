"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Save, Loader2, Plus, Trash2, ArrowUp, ArrowDown } from "lucide-react";
import { useGetFacilityFootprintQuery, useUpdateFacilityFootprintMutation } from "@/redux/api/facilityApi";
import { toast } from "sonner";

export default function AdminFacilityFootprintManager() {
    const { data, isLoading: isFetching, refetch } = useGetFacilityFootprintQuery();
    const [updateFootprint, { isLoading: isUpdating }] = useUpdateFacilityFootprintMutation();

    const [heading, setHeading] = useState("");
    const [description, setDescription] = useState("");
    const [cardHeading, setCardHeading] = useState("");
    const [cardDescription, setCardDescription] = useState("");
    const [locations, setLocations] = useState<{ id: string; name: string; order: number }[]>([]);

    useEffect(() => {
        if (data) {
            setHeading(data.heading || "");
            setDescription(data.description || "");
            setCardHeading(data.card_heading || "");
            setCardDescription(data.card_description || "");
            setLocations(data.locations || []);
        }
    }, [data]);

    const handleSave = async () => {
        try {
            // Ensure order is correct before saving
            const orderedLocations = locations.map((loc, index) => ({ ...loc, order: index }));
            
            await updateFootprint({
                heading,
                description,
                card_heading: cardHeading,
                card_description: cardDescription,
                locations: orderedLocations,
            }).unwrap();
            
            toast.success("Facility Footprint updated successfully!");
            refetch();
        } catch (error) {
            console.error("Failed to update footprint", error);
            toast.error("Failed to update facility footprint.");
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
                    <h2 className="text-lg font-bold text-primary">Geographic Footprint Manager</h2>
                    <p className="text-sm text-gray-500">Manage footprint text and countless locations.</p>
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
                        General Info & Card Section
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Heading</Label>
                            <Input
                                value={heading}
                                onChange={(e) => setHeading(e.target.value)}
                                placeholder="e.g. Our Geographic Footprint"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Card Heading (Side Box)</Label>
                            <Input
                                value={cardHeading}
                                onChange={(e) => setCardHeading(e.target.value)}
                                placeholder="e.g. Strategic Positioning"
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
                            <Label>Card Description</Label>
                            <Textarea
                                rows={4}
                                value={cardDescription}
                                onChange={(e) => setCardDescription(e.target.value)}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-gray-200">
                <CardHeader className="border-b py-3 px-4">
                    <CardTitle className="text-base font-semibold text-primary">
                        Countless Locations
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                    {locations.map((loc, index) => (
                        <div key={loc.id} className="flex gap-4 items-center border p-4 rounded-md relative">
                            <div className="flex-1 space-y-2">
                                <Label>Location Name</Label>
                                <Input
                                    value={loc.name}
                                    onChange={(e) => {
                                        const newLocs = [...locations];
                                        newLocs[index] = { ...newLocs[index], name: e.target.value };
                                        setLocations(newLocs);
                                    }}
                                    placeholder="e.g. Addis Ababa, Ethiopia"
                                />
                            </div>
                            
                            <div className="flex items-center gap-2 mt-8">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => {
                                        if (index > 0) {
                                            const newLocs = [...locations];
                                            const temp = newLocs[index];
                                            newLocs[index] = newLocs[index - 1];
                                            newLocs[index - 1] = temp;
                                            setLocations(newLocs);
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
                                        if (index < locations.length - 1) {
                                            const newLocs = [...locations];
                                            const temp = newLocs[index];
                                            newLocs[index] = newLocs[index + 1];
                                            newLocs[index + 1] = temp;
                                            setLocations(newLocs);
                                        }
                                    }}
                                    disabled={index === locations.length - 1}
                                >
                                    <ArrowDown className="w-4 h-4" />
                                </Button>
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    onClick={() => {
                                        const newLocs = locations.filter((_, i) => i !== index);
                                        setLocations(newLocs);
                                    }}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                    <Button
                        variant="outline"
                        onClick={() => setLocations([...locations, { id: Date.now().toString(), name: "", order: locations.length }])}
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Location
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
