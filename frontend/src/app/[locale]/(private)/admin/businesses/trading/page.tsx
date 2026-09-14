"use client";

import { Layout, Network, Globe2, RefreshCcw } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TradingOverviewForm } from './TradingOverviewForm';

const TradingAdminPage = () => {
    return (
        <div className="mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-primary">Trading Management</h1>
            <p className="text-muted-foreground mt-2">Manage trading overview content.</p>

            <Tabs defaultValue="tab1" className="space-y-6">
                <TabsList className="w-full flex justify-start h-auto gap-2 min-w-max overflow-x-auto pb-2 border-b border-transparent">
                    <TabsTrigger 
                        value="tab1" 
                        className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-6 py-2.5 transition-all whitespace-nowrap"
                    >
                        <Layout className="w-4 h-4 mr-2 hidden lg:inline" /> Banner & Hero
                    </TabsTrigger>
                    <TabsTrigger 
                        value="tab2" 
                        className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-6 py-2.5 transition-all whitespace-nowrap"
                    >
                        <Network className="w-4 h-4 mr-2 hidden lg:inline" /> Principles & Network
                    </TabsTrigger>
                    <TabsTrigger 
                        value="tab3" 
                        className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-6 py-2.5 transition-all whitespace-nowrap"
                    >
                        <Globe2 className="w-4 h-4 mr-2 hidden lg:inline" /> Market Gap & Ecosystem
                    </TabsTrigger>
                    <TabsTrigger 
                        value="tab4" 
                        className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-6 py-2.5 transition-all whitespace-nowrap"
                    >
                        <RefreshCcw className="w-4 h-4 mr-2 hidden lg:inline" /> Stats & Loop
                    </TabsTrigger>
                </TabsList>

                <TradingOverviewForm />
            </Tabs>
        </div>
    );
};

export default TradingAdminPage;
