"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminWarehouseList from '@/components/pages/businesses-page-components/AdminWarehouseList';
import { WarehousingOverviewForm } from './WarehousingOverviewForm';

const WarehousingAdminPage = () => {
    return (
        <div className="mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-primary">Warehousing Facilities Management</h1>
            <p className="text-muted-foreground mt-2">Manage warehousing content and facilities.</p>

            <Tabs defaultValue="tab1" className="space-y-6">
                <TabsList className="w-full flex justify-start h-auto gap-2 min-w-max overflow-x-auto pb-2 border-b border-transparent">
                    <TabsTrigger 
                        value="tab1" 
                        className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-6 py-2.5 transition-all whitespace-nowrap"
                    >
                        Banner & Hero
                    </TabsTrigger>
                    <TabsTrigger 
                        value="tab2" 
                        className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-6 py-2.5 transition-all whitespace-nowrap"
                    >
                        Stats & Flow
                    </TabsTrigger>
                    <TabsTrigger 
                        value="tab3" 
                        className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-6 py-2.5 transition-all whitespace-nowrap"
                    >
                        Editorials & Viz
                    </TabsTrigger>
                    <TabsTrigger 
                        value="tab4" 
                        className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-6 py-2.5 transition-all whitespace-nowrap"
                    >
                        Business & Facilities
                    </TabsTrigger>
                    <TabsTrigger 
                        value="facilities" 
                        className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-6 py-2.5 transition-all whitespace-nowrap"
                    >
                        Facilities List
                    </TabsTrigger>
                </TabsList>

                <WarehousingOverviewForm />

                <TabsContent value="facilities" className="space-y-6 mt-0">
                    <AdminWarehouseList />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default WarehousingAdminPage;
