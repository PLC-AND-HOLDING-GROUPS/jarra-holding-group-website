"use client";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
    useCreateFacilityMutation,
    useUpdateFacilityMutation,
} from "@/redux/api/facilityApi";
import { Facility } from "@/redux/types/facility";
import { ImageUploadField } from "@/components/common/ImageUploadField";

interface FacilityModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    currentFacility: Facility | null;
    setCurrentFacility: (facility: Facility | null) => void;
}

export default function FacilityModal({
    open,
    onOpenChange,
    currentFacility,
    setCurrentFacility,
}: FacilityModalProps) {
    const isEditing = Boolean(currentFacility?.facility_id);

    const [createFacility, { isLoading: creating }] = useCreateFacilityMutation();
    const [updateFacility, { isLoading: updating }] = useUpdateFacilityMutation();

    const handleSave = async () => {
        if (!currentFacility) return;

        const payload = {
            name: currentFacility.name,
            location: currentFacility.location,
            short_description: currentFacility.short_description,
            image: currentFacility.image,
        };

        try {
            if (isEditing) {
                await updateFacility({
                    id: currentFacility.facility_id,
                    data: payload,
                }).unwrap();
            } else {
                await createFacility(payload).unwrap();
            }

            onOpenChange(false);
            setCurrentFacility(null);
        } catch (error) {
            console.error("Failed to save facility:", error);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-primary">
                        {isEditing ? "Edit Facility" : "Add Facility"}
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    {/* NAME */}
                    <div className="space-y-2">
                        <Label>Name</Label>
                        <Input
                            value={currentFacility?.name ?? ""}
                            onChange={(e) =>
                                setCurrentFacility({
                                    ...(currentFacility as Facility),
                                    name: e.target.value,
                                })
                            }
                            placeholder="Facility name"
                        />
                    </div>

                    {/* LOCATION */}
                    <div className="space-y-2">
                        <Label>Location</Label>
                        <Input
                            value={currentFacility?.location ?? ""}
                            onChange={(e) =>
                                setCurrentFacility({
                                    ...(currentFacility as Facility),
                                    location: e.target.value,
                                })
                            }
                            placeholder="e.g. Addis Ababa, Ethiopia"
                        />
                    </div>

                    {/* SHORT DESCRIPTION */}
                    <div className="space-y-2">
                        <Label>Description</Label>
                        <Textarea
                            value={currentFacility?.short_description ?? ""}
                            onChange={(e) =>
                                setCurrentFacility({
                                    ...(currentFacility as Facility),
                                    short_description: e.target.value,
                                })
                            }
                            rows={4}
                            placeholder="Facility description"
                        />
                    </div>

                    {/* IMAGE UPLOAD */}
                    <div className="space-y-2">
                        <ImageUploadField
                            id="facility-image"
                            label="Facility Image"
                            value={currentFacility?.image ? [currentFacility.image] : []}
                            onChange={(urls) => {
                                setCurrentFacility({
                                    ...(currentFacility as Facility),
                                    image: urls[0] || "",
                                });
                            }}
                        />
                    </div>
                </div>

                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSave}
                        disabled={creating || updating}
                        className="bg-primary hover:bg-primary/80 text-white font-semibold"
                    >
                        {isEditing ? "Update Facility" : "Save Facility"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
