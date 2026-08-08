import React from "react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: "nav" });
    return {
        title: t("businesses") || "Businesses - Jarra Holding Group",
    };
}

export default function BusinessesPage() {
    return (
        <div className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
                Our Businesses
            </h1>
            <div className="bg-card shadow-lg rounded-xl p-6 border border-border">
                <p className="text-muted-foreground text-center">
                    Information about Jarra Holding Group's businesses will be available here soon.
                </p>
            </div>
        </div>
    );
}
