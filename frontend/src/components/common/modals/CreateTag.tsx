"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useCreateTagMutation } from "@/redux/api/tagApi";

interface CreateTagModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CreateTagModal = ({ isOpen, onClose }: CreateTagModalProps) => {
    const [name, setName] = useState("");

    const [createTag, { isLoading }] = useCreateTagMutation();

    const resetForm = () => {
        setName("");
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim()) {
            toast.error("Tag name is required");
            return;
        }

        try {
            await createTag({
                name: name.trim()
            }).unwrap();

            toast.success("Tag created successfully");
            resetForm();
            onClose();
        } catch (err: any) {
            toast.error(
                err?.data?.message || err?.message || "Failed to create tag"
            );
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create Tag</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">
                            Tag Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="name"
                            placeholder="Enter tag name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={isLoading}
                            required
                        />
                    </div>
                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleClose}
                            disabled={isLoading}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={isLoading || !name.trim()}
                        >
                            {isLoading ? "Creating..." : "Create Tag"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default CreateTagModal;
