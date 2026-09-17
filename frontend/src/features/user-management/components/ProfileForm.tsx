"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserCircle, Mail, Phone, Loader2, KeyRound } from "lucide-react";
import { notify, extractErrorMessage } from "@/utils/notification";
import { useGetProfileQuery, useUpdateProfileMutation, useChangePasswordMutation } from "@/redux/api/userApi";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ProfileForm = () => {
    /* API Hooks */
    const { data: userData, isLoading: isUserLoading } = useGetProfileQuery();
    const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();
    const [changePassword, { isLoading: isChangingPassword }] = useChangePasswordMutation();

    /* Form State */
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    /* Password State */
    const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    /* Populate Form on Load */
    useEffect(() => {
        if (userData && isInitialLoad) {
            setFullName(userData.full_name || "");
            setEmail(userData.email || "");
            setPhoneNumber(userData.phone_number || "");
            setIsInitialLoad(false);
        }
    }, [userData, isInitialLoad]);

    const handleUpdateProfile = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!fullName) {
            notify.warning("Full name is required.");
            return;
        }

        try {
            notify.loading("Updating profile...", { id: "profile-form" });
            await updateProfile({ full_name: fullName, phone_number: phoneNumber }).unwrap();
            notify.success("Profile updated successfully.", { id: "profile-form" });
        } catch (err: any) {
            notify.error(extractErrorMessage(err, "Failed to update profile."), { id: "profile-form" });
        }
    };

    const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (newPassword !== confirmPassword) {
            notify.warning("New passwords do not match.");
            return;
        }
        
        if (newPassword.length < 6) {
            notify.warning("Password must be at least 6 characters long.");
            return;
        }

        try {
            notify.loading("Changing password...", { id: "change-password" });
            await changePassword({ 
                current_password: currentPassword, 
                new_password: newPassword, 
                confirm_password: confirmPassword 
            }).unwrap();
            
            notify.success("Password changed successfully.", { id: "change-password" });
            setIsPasswordDialogOpen(false);
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
        } catch (err: any) {
            notify.error(extractErrorMessage(err, "Failed to change password."), { id: "change-password" });
        }
    };

    if (isUserLoading) return <div className="p-10 text-center"><Loader2 className="w-6 h-6 animate-spin mx-auto text-golden-dark" /></div>;

    return (
        <div className="w-full space-y-6 pb-8">
            <form onSubmit={handleUpdateProfile}>
                <Card className="border-golden-dark/20 shadow-sm">
                    <CardHeader className="bg-golden-dark/5 border-b border-golden-dark/10">
                        <CardTitle className="text-xl text-golden-dark flex items-center gap-2">
                            <UserCircle className="h-6 w-6" />
                            My Profile
                        </CardTitle>
                        <CardDescription className="text-muted-foreground mt-1">
                            Update your personal information and account settings.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="p-6 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="fullName" className="text-sm font-medium flex items-center gap-1.5 text-golden-dark/80">
                                    Full Name <span className="text-red-500">*</span>
                                </Label>
                                <div className="relative">
                                    <UserCircle className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-golden-dark/50" />
                                    <Input
                                        id="fullName"
                                        className="pl-10 border-golden-dark/20 focus-visible:ring-golden-dark/30"
                                        placeholder="Enter full name"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium flex items-center gap-1.5 text-golden-dark/80">
                                    Email Address (Read-only)
                                </Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-golden-dark/50" />
                                    <Input
                                        id="email"
                                        type="email"
                                        className="pl-10 bg-slate-50 text-slate-500 border-golden-dark/10"
                                        value={email}
                                        disabled
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phoneNumber" className="text-sm font-medium flex items-center gap-1.5 text-golden-dark/80">
                                    Phone Number
                                </Label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-golden-dark/50" />
                                    <Input
                                        id="phoneNumber"
                                        className="pl-10 border-golden-dark/20 focus-visible:ring-golden-dark/30"
                                        placeholder="+251 ..."
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </CardContent>

                    <CardFooter className="bg-golden-dark/5 border-t border-golden-dark/10 px-6 py-4 flex items-center justify-end gap-3 rounded-b-lg">
                        <Button
                            type="submit"
                            disabled={isUpdating}
                            className="bg-golden-dark hover:bg-golden-dark/90 text-white px-8 flex items-center gap-2"
                        >
                            {isUpdating && <Loader2 className="w-4 h-4 animate-spin" />}
                            Update Profile
                        </Button>
                    </CardFooter>
                </Card>
            </form>

            <Card className="border-red-500/20 shadow-sm mt-8">
                <CardHeader className="bg-red-500/5 border-b border-red-500/10">
                    <CardTitle className="text-lg text-red-600 flex items-center gap-2">
                        <KeyRound className="h-5 w-5" />
                        Security Settings
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <h3 className="font-semibold text-slate-800 text-sm">Change Password</h3>
                            <p className="text-xs text-slate-500 mt-1">Update your password to keep your account secure.</p>
                        </div>
                        
                        <Dialog open={isPasswordDialogOpen} onOpenChange={setIsPasswordDialogOpen}>
                            <DialogTrigger asChild>
                                <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700">
                                    Change Password
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <form onSubmit={handleChangePassword}>
                                    <DialogHeader>
                                        <DialogTitle>Change Password</DialogTitle>
                                        <DialogDescription>
                                            Enter your current password and a new strong password.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="space-y-4 py-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="currentPassword">Current Password</Label>
                                            <Input 
                                                id="currentPassword" 
                                                type="password" 
                                                value={currentPassword}
                                                onChange={(e) => setCurrentPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="newPassword">New Password</Label>
                                            <Input 
                                                id="newPassword" 
                                                type="password" 
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                required
                                                minLength={6}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                            <Input 
                                                id="confirmPassword" 
                                                type="password" 
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                required
                                                minLength={6}
                                            />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="button" variant="outline" onClick={() => setIsPasswordDialogOpen(false)}>
                                            Cancel
                                        </Button>
                                        <Button type="submit" className="bg-golden-dark hover:bg-golden-dark/90 text-white" disabled={isChangingPassword}>
                                            {isChangingPassword && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                                            Save Password
                                        </Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProfileForm;
