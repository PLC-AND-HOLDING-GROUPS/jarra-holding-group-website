import React from "react";
import { getTranslations } from "next-intl/server";

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Placeholder Service Cards */}
                <div className="bg-card shadow-lg rounded-xl p-6 border border-border">
                    <h2 className="text-2xl font-semibold mb-4 text-heading">Service 1</h2>
                    <p className="text-body">
                        Description of the first service goes here. We provide excellent solutions tailored to your needs.
                    </p>
                </div>
                <div className="bg-card shadow-lg rounded-xl p-6 border border-border">
                    <h2 className="text-2xl font-semibold mb-4 text-heading">Service 2</h2>
                    <p className="text-body">
                        Description of the second service goes here. We provide excellent solutions tailored to your needs.
                    </p>
                </div>
                <div className="bg-card shadow-lg rounded-xl p-6 border border-border">
                    <h2 className="text-2xl font-semibold mb-4 text-heading">Service 3</h2>
                    <p className="text-body">
                        Description of the third service goes here. We provide excellent solutions tailored to your needs.
                    </p>
                </div>
            </div>
        </div>
    );
}
