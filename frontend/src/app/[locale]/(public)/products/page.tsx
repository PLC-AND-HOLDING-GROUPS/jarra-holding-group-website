import React from "react";
import { getTranslations } from "next-intl/server";

import ProductHero from "@/components/pages/product-page-components/ProductHero";
import ProductGrid from "@/components/pages/product-page-components/ProductGrid";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: "nav" });
    return {
        title: t("products") || "Products - Jarra Holding Group",
    };
}

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-slate-50 flex flex-col">
            <ProductHero />
            <ProductGrid />
        </main>
    );
}
