import React from "react";
import { getTranslations } from "next-intl/server";
import { Settings } from "lucide-react";

import PageHeader from "@/components/pages/home-page-components/PageHeader";
import ServicesOverview from "@/components/pages/services-page-components/ServicesOverview";
import CoreServicesGrid from "@/components/pages/services-page-components/CoreServicesGrid";
import ServiceExperience from "@/components/pages/services-page-components/ServiceExperience";
import MultiSectorCapability from "@/components/pages/services-page-components/MultiSectorCapability";
import WhyJarraHoldings from "@/components/pages/services-page-components/WhyJarraHoldings";
import ServicesCTA from "@/components/pages/services-page-components/ServicesCTA";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: "nav" });
    return {
        title: t("services") || "Services - Jarra Holding Group",
    };
}

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-slate-50 flex flex-col">
            <PageHeader
                pageIdentifier="services"
                title="Our Services"
                icon={<Settings />}
                description="Explore the professional services offered by Jarra Holding Group to our partners and clients globally."
            />
            
            <ServicesOverview />
            <CoreServicesGrid />
            <ServiceExperience />
            <MultiSectorCapability />
            <WhyJarraHoldings />
            <ServicesCTA />
        </main>
    );
}
