"use client";

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminServicesList from '@/components/pages/services-page-components/AdminServicesList'
import AdminServicesOverviewManager from '@/components/pages/services-page-components/AdminServicesOverviewManager'
import AdminServiceExperienceManager from '@/components/pages/services-page-components/AdminServiceExperienceManager'
import AdminCapabilitiesManager from '@/components/pages/services-page-components/AdminCapabilitiesManager'
import AdminWhyUsManager from '@/components/pages/services-page-components/AdminWhyUsManager'

const ServicesPage = () => {
    return (
        <div className="mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-primary">Services Management</h1>
            <Tabs defaultValue="services" className="space-y-6">
                <TabsList className="w-full flex justify-start h-auto  gap-2 min-w-max">
                    <TabsTrigger
                        value="services"
                        className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-6 py-2.5 transition-all"
                    >
                        Services List
                    </TabsTrigger>
                    <TabsTrigger
                        value="overview"
                        className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-6 py-2.5 transition-all"
                    >
                        Overview
                    </TabsTrigger>
                    <TabsTrigger
                        value="experience"
                        className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-6 py-2.5 transition-all"
                    >
                        Experience
                    </TabsTrigger>
                    <TabsTrigger
                        value="capabilities"
                        className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-6 py-2.5 transition-all"
                    >
                        Capabilities
                    </TabsTrigger>
                    <TabsTrigger
                        value="whyus"
                        className="data-[state=active]:bg-admin-primary data-[state=active]:text-white rounded-md px-6 py-2.5 transition-all"
                    >
                        Why Us
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="services" className="space-y-6 mt-0">
                    <AdminServicesList />
                </TabsContent>
                <TabsContent value="overview" className="space-y-6 mt-0">
                    <AdminServicesOverviewManager />
                </TabsContent>
                <TabsContent value="experience" className="space-y-6 mt-0">
                    <AdminServiceExperienceManager />
                </TabsContent>
                <TabsContent value="capabilities" className="space-y-6 mt-0">
                    <AdminCapabilitiesManager />
                </TabsContent>
                <TabsContent value="whyus" className="space-y-6 mt-0">
                    <AdminWhyUsManager />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default ServicesPage
