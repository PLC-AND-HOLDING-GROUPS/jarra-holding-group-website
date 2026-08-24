import React from "react";
import { getTranslations } from "next-intl/server";
import { Settings } from "lucide-react";

import PageHeader from "@/components/pages/home-page-components/PageHeader";
import ClientServices from "@/components/pages/services-page-components/ClientServices";

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
            <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
                <ClientServices />
            </div>
        </main>
    );
}
