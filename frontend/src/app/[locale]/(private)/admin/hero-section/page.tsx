"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminHeroManager from "@/components/pages/home-page-components/admin/AdminHeroManager";
import AdminCardManager from "@/components/pages/home-page-components/admin/AdminCardManager";
import AdminPartnerManager from "@/components/pages/home-page-components/admin/AdminPartnerManager";

const HeroSectionManagement = () => {
    return (
        <div className="mx-auto space-y-6">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold text-primary">Home Page Content Management</h1>
                <p className="text-muted-foreground text-lg">
                    Manage the main content sections of your home page.
                </p>
            </div>

            <Tabs defaultValue="hero" className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-3 mb-8 h-12">
                    <TabsTrigger value="hero">
                        Hero Slider
                    </TabsTrigger>

                    <TabsTrigger value="card">
                        Card Section
                    </TabsTrigger>
                    
                    <TabsTrigger value="partners">
                        Partners
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="hero">
                    <AdminHeroManager />
                </TabsContent>

                <TabsContent value="card">
                    <AdminCardManager />
                </TabsContent>

                <TabsContent value="partners">
                    <AdminPartnerManager />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default HeroSectionManagement;