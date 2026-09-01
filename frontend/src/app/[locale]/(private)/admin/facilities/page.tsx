"use client";

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminFacilitiesList from '@/components/pages/facilities-page-components/AdminFacilitiesList';
import AdminFacilitiesOverviewManager from '@/components/pages/facilities-page-components/AdminFacilitiesOverviewManager';
import AdminFacilityFootprintManager from '@/components/pages/facilities-page-components/AdminFacilityFootprintManager';

const FacilitiesPage = () => {
    return (
        <div className="mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-primary">Facilities Management</h1>
            <Tabs defaultValue="facilities" className="space-y-6">
                <TabsList className="w-full flex justify-start h-auto gap-2 min-w-max">
                    <TabsTrigger
                        value="facilities"
                        className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-6 py-2.5 transition-all"
                    >
                        Facilities List
                    </TabsTrigger>
                    <TabsTrigger
                        value="overview"
                        className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-6 py-2.5 transition-all"
                    >
                        Overview
                    </TabsTrigger>
                    <TabsTrigger
                        value="footprint"
                        className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-6 py-2.5 transition-all"
                    >
                        Geographic Footprint
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="facilities" className="space-y-6 mt-0">
                    <AdminFacilitiesList />
                </TabsContent>
                <TabsContent value="overview" className="space-y-6 mt-0">
                    <AdminFacilitiesOverviewManager />
                </TabsContent>
                <TabsContent value="footprint" className="space-y-6 mt-0">
                    <AdminFacilityFootprintManager />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default FacilitiesPage;
