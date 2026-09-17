"use client";

import ProfileForm from "@/features/user-management/components/ProfileForm";

export default function ProfilePage() {
    return (
        <div className="w-full">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-golden-dark">Account Settings</h1>
                <p className="text-slate-500 text-sm mt-1">Manage your personal profile and security preferences.</p>
            </div>
            <ProfileForm />
        </div>
    );
}
