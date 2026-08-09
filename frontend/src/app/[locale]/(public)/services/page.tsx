import React from "react";
import { getTranslations } from "next-intl/server";
import ClientServices from "@/components/pages/services-page-components/ClientServices";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: "nav" });
    return {
        title: t("services"),
    };
}

export default function ServicesPage() {
    return (
        <div className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
                Our Services
            </h1>
            <ClientServices />
        </div>
    );
}
