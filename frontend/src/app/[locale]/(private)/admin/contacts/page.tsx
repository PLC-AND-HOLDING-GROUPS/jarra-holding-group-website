"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminContactInfo from "@/components/pages/contact-page-components/AdminContactInfo";
import AdminContactMessages from "@/components/pages/contact-page-components/AdminContactMessages";
import AdminContactRegionalOffices from "@/components/pages/contact-page-components/AdminContactRegionalOffices";
import AdminRegionList from "@/components/pages/contact-page-components/AdminRegionsList";

const AdminContactsPage = () => {
    return (
        <div className="mx-auto space-y-6">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold text-primary">Contacts Management</h1>
                <p className="text-muted-foreground text-lg">
                    Manage your office contact information and view messages from the public.
                </p>
            </div>

            <Tabs defaultValue="messages" className="w-full">
                <TabsList className="grid max-w-2xl grid-cols-4 mb-8 h-12">
                    <TabsTrigger value="messages">
                        Messages
                    </TabsTrigger>

                    <TabsTrigger value="contact-info">
                        Contact Details
                    </TabsTrigger>
                    
                    <TabsTrigger value="regions">
                        Regions
                    </TabsTrigger>
                    
                    <TabsTrigger value="regional-offices">
                        Regional Offices
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="messages">
                    <AdminContactMessages />
                </TabsContent>

                <TabsContent value="contact-info">
                    <AdminContactInfo />
                </TabsContent>
                <TabsContent value="regions">
                    <AdminRegionList />
                </TabsContent>
                <TabsContent value="regional-offices">
                    <AdminContactRegionalOffices />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default AdminContactsPage;