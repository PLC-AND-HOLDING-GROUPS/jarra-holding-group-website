"use client";

import React from "react";
import Image from "next/image";
import { useGetFacilityOverviewQuery } from "@/redux/api/facilityApi";
import { useGetAttachmentsQuery } from "@/redux/api/attachementApi";
import { getImageUrl } from "@/utils/fileUrl";

export default function EditorialIntro() {
    const { data: overview, isLoading } = useGetFacilityOverviewQuery();
    const { data: attachmentsResponse } = useGetAttachmentsQuery();

    if (isLoading) {
        return <div className="py-24 text-center">Loading overview...</div>;
    }

    const heading = overview?.heading || "The Foundation of Our Global Operations";
    const subheading = overview?.subheading || "Our Physical Presence";
    const description = overview?.description || "Our facilities form part of the physical foundation of Jarra Holdings, providing the robust environments and infrastructure that support the company's wider organizational activities.\n\nFrom strategic operational depots to large-scale industrial sites, each location is physically designed and equipped to ensure continuous capability across our ecosystem.";
    
    let imageUrl = "/factory3.jpg";
    if (overview?.image) {
        const attachments = attachmentsResponse?.attachments || [];
        const found = attachments.find(a => a.attachment_id === overview.image);
        if (found) {
            imageUrl = getImageUrl(found, "large") || imageUrl;
        } else if (overview.image.startsWith("/") || overview.image.startsWith("http")) {
            imageUrl = overview.image;
        }
    }

    const descriptionParagraphs = description.split("\n").filter(p => p.trim() !== "");

    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    
                    {/* Editorial Text */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <div className="inline-flex items-center space-x-4 mb-4">
                            <div className="w-12 h-px bg-primary" />
                            <span className="text-sm font-bold tracking-widest text-primary uppercase">
                                {subheading}
                            </span>
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl font-bold text-heading leading-tight whitespace-pre-line">
                            {heading}
                        </h2>
                        
                        <div className="prose prose-lg text-muted-foreground leading-relaxed">
                            {descriptionParagraphs.map((para, idx) => (
                                <p key={idx}>{para}</p>
                            ))}
                        </div>
                    </div>

                    {/* Large Image */}
                    <div className="relative w-full aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
                        <Image 
                            src={imageUrl} 
                            alt="Facility Overview" 
                            fill 
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                    </div>
                </div>
            </div>
        </section>
    );
}
