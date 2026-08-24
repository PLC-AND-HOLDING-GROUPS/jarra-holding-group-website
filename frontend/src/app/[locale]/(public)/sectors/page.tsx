import React from "react";
import { getTranslations } from "next-intl/server";
import { Layers } from "lucide-react";

import PageHeader from "@/components/pages/home-page-components/PageHeader";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: "nav" });
    return {
        title: t("sectors") || "Sectors - Jarra Holding Group",
    };
}

export default function SectorsPage() {
    return (
        <main className="min-h-screen bg-slate-50 flex flex-col">
            <PageHeader
                pageIdentifier="sectors"
                title="Our Sectors"
                icon={<Layers />}
                description="Explore the various sectors Jarra Holding Group operates in and our impact across industries."
            />
            <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
                <div className="bg-card shadow-lg rounded-xl p-6 border border-border">
                    <p className="text-muted-foreground text-center">
                        Information about our sectors will be available here soon.
                    </p>
                </div>
            </div>
        </main>
    );
}
