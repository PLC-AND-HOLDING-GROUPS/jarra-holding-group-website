import React from "react";
import { getTranslations } from "next-intl/server";
import { Building2 } from "lucide-react";

import PageHeader from "@/components/pages/home-page-components/PageHeader";
import EditorialIntro from "@/components/pages/facilities-page-components/EditorialIntro";
import FacilityEditorialShowcase from "@/components/pages/facilities-page-components/FacilityEditorialShowcase";
import PhysicalFootprint from "@/components/pages/facilities-page-components/PhysicalFootprint";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "nav" });
    return {
        title: t("facilities") || "Facilities - Jarra Holding Group",
    };
}

export default function FacilitiesPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col">
            <PageHeader
                pageIdentifier="facilities"
                title="Our Physical Footprint"
                icon={<Building2 />}
                description="Jarra Holding Group’s presence is supported by substantial physical facilities and infrastructure across strategic locations. Explore our corporate, industrial, and operational sites that form the foundation of our organization."
            />
            <EditorialIntro />
            <FacilityEditorialShowcase />
            <PhysicalFootprint />
        </main>
    );
}
