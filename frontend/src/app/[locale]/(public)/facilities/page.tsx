import React from "react";
import { getTranslations } from "next-intl/server";

import FacilitiesHero from "@/components/pages/facilities-page-components/FacilitiesHero";
import EditorialIntro from "@/components/pages/facilities-page-components/EditorialIntro";
import FacilityEditorialShowcase from "@/components/pages/facilities-page-components/FacilityEditorialShowcase";
import PhysicalFootprint from "@/components/pages/facilities-page-components/PhysicalFootprint";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: "nav" });
    return {
        title: t("facilities") || "Facilities - Jarra Holding Group",
    };
}

export default function FacilitiesPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col">
            <FacilitiesHero />
            <EditorialIntro />
            <FacilityEditorialShowcase />
            <PhysicalFootprint />
        </main>
    );
}
