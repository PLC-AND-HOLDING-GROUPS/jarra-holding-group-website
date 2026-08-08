"use client";

import React from "react";
import { Quote } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import PageHeader from "@/components/pages/home-page-components/PageHeader";
import { Button } from "@/components/ui/button";

const items = [
    { label: "Our Businesses", slug: "/businesses", description: "Connecting trade, logistics, warehousing, and distribution" },
    { label: "Overview", slug: "/businesses/overview", description: "Jarra Holding Group business overview and operations" },
    { label: "Import & Export", slug: "/businesses/import-export", description: "Cross-border trading and supply operations" },
    { label: "Warehousing", slug: "/businesses/warehousing", description: "Multi-location storage and inventory infrastructure" },
    { label: "Trading", slug: "/businesses/trading", description: "Product sourcing and commercial goods" },
];

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();

    // remove locale prefix: /en/about -> /about
    const normalizedPathname = pathname.replace(/^\/(en|am)/, "");

    // Find active item for title & breadcrumb
    const activeItem = items.find((item) => item.slug === normalizedPathname);
    const title = activeItem?.label ?? "Our Businesses";
    const description = activeItem?.description ?? "Connecting trade, logistics, warehousing, and distribution";

    return (
        <>
            {/* Hero / Page Header (shared across all administration pages) */}
            <PageHeader
                title="Our Businesses"
                icon={<Quote />}
                description="Connecting trade, logistics, warehousing, and distribution"
            />

            {/* Main container with relative positioning for overlay */}
            <div className="relative">
                {/* Overlay Search Bar - positioned to cover half of the PageHeader */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-full max-w-7xl z-[999] pointer-events-auto">
                    <div className="pt-5 pb-10 w-full bg-white rounded-2xl shadow-xl border border-border overflow-hidden space-y-6 px-4 md:px-7">
                        <h1 className="text-2xl font-bold text-primary text-center">Explore Our Businesses</h1>

                        <div className={`bg-white flex flex-row items-stretch justify-between gap-4 overflow-x-auto pb-4 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x`}>
                            {items.map((item) => {
                                const active = normalizedPathname === item.slug;
                                return (
                                    <Button
                                        key={item.slug}
                                        onClick={() => router.push(item.slug)}
                                        className={`flex-1 min-w-[180px] p-6 cursor-pointer transition-colors bg-background-secondary border border-border  ${active ? "bg-primary text-white font-semibold border-l-4 border-primary shadow-xl hover:bg-primary/90" : "text-muted hover:bg-background-secondary"
                                            }`}
                                    >
                                        {item.label}
                                    </Button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Content section starts below the overlay */}
                <section className="pt-20 md:pt-28 max-w-7xl mx-auto px-6 py-12">
                    {/* CENTER MAIN CONTENT (route content) */}
                    <div className="w-full md:pl-8">
                        <div className="flex items-start gap-6 mb-8">
                            <div>
                                <h1 className="text-2xl flex gap-2 flex-col font-serif text-teal-800 leading-tight">
                                    {title}
                                    <span className="text-primary h-1 w-1/2 bg-teal-800"></span>
                                    <p className="text-muted text-lg text-teal-800">{description}</p>
                                </h1>
                            </div>
                        </div>

                        {/* Route-specific content renders here */}
                        <div className="prose max-w-none">{children}</div>
                    </div>
                </section>
            </div>
        </>
    );
}