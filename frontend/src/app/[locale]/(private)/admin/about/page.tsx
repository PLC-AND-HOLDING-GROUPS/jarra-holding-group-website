"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminLeadership from "@/components/pages/about-page-components/AdminLeadership";
import AdminBackground from "@/components/pages/about-page-components/AdminBackground";
import AdminMissionVision from "@/components/pages/about-page-components/AdminMissionVision";
import AdminCertifications from "@/components/pages/about-page-components/AdminCertifications";

export default function AboutAdminPage() {
    return (
        <div className=" mx-auto space-y-6">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold text-primary">About Us Management</h1>
                <p className="text-muted-foreground text-lg">
                    Configure the ministry's background, leadership structure, core principles, and certifications.
                </p>
            </div>

            <Tabs defaultValue="leadership" className="w-full">
                <TabsList className="grid max-w-2xl grid-cols-4 mb-8 h-12">
                    <TabsTrigger value="background">
                        Background
                    </TabsTrigger>

                    <TabsTrigger value="leadership">
                        Leadership
                    </TabsTrigger>

                    <TabsTrigger value="vision-mission">
                        Vision, Mission & Core
                    </TabsTrigger>

                    <TabsTrigger value="certifications">
                        Certifications
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="background">
                    <AdminBackground />
                </TabsContent>

                <TabsContent value="leadership">
                    <AdminLeadership />
                </TabsContent>

                <TabsContent value="vision-mission">
                    <AdminMissionVision />
                </TabsContent>

                <TabsContent value="certifications">
                    <AdminCertifications />
                </TabsContent>
            </Tabs>
        </div>
    );
}