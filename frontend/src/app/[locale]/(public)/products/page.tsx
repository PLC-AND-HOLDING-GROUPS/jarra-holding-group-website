import React from "react";
import { getTranslations } from "next-intl/server";
import { Package } from "lucide-react";

import PageHeader from "@/components/pages/home-page-components/PageHeader";
import ProductGrid from "@/components/pages/product-page-components/ProductGrid";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "nav" });
    return {
        title: t("products") || "Products - Jarra Holdings",
    };
}

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-slate-50 flex flex-col">
            <PageHeader
                pageIdentifier="products"
                title="Our Product Portfolio"
                icon={<Package />}
                description="Jarra Holdings offers a comprehensive and diverse range of products across agriculture, chemicals, manufacturing, and industrial sectors. Explore our catalog or send an inquiry for specific sourcing and trading needs."
            />
            <ProductGrid />
        </main>
    );
}
