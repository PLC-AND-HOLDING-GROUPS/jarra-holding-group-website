"use client";

import React from "react";
import Image from "next/image";
import { useGetFacilitiesQuery, useGetFacilityOverviewQuery } from "@/redux/api/facilityApi";
import { useGetAttachmentsQuery } from "@/redux/api/attachementApi";
import { getImageUrl } from "@/utils/fileUrl";

export default function FacilityEditorialShowcase() {
    const { data: facilities, isLoading: isLoadingFacilities } = useGetFacilitiesQuery();
    const { data: overview, isLoading: isLoadingOverview } = useGetFacilityOverviewQuery();
    const { data: attachmentsResponse } = useGetAttachmentsQuery();

    if (isLoadingFacilities || isLoadingOverview) {
        return <div className="py-24 text-center">Loading facilities...</div>;
    }

    const listHeading = overview?.list_heading || "Featured Facilities";
    const attachments = attachmentsResponse?.attachments || [];

    const getImg = (imgId?: string) => {
        let imageUrl = "/factory.jpg";
        if (imgId) {
            const found = attachments.find(a => a.attachment_id === imgId);
            if (found) {
                imageUrl = getImageUrl(found, "large") || imageUrl;
            } else if (imgId.startsWith("/") || imgId.startsWith("http")) {
                imageUrl = imgId;
            }
        }
        return imageUrl;
    };

    if (!facilities || facilities.length === 0) {
        return null;
    }

    return (
        <section className="py-24 bg-slate-50 border-t border-border">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="mb-20 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-heading">{listHeading}</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mt-6" />
                </div>

                <div className="space-y-32">
                    {facilities.map((facility, index) => {
                        const isEven = index % 2 === 1; // 1, 3 etc will reverse layout
                        const displayIndex = String(index + 1).padStart(2, '0');
                        const imgUrl = getImg(facility.image);

                        return (
                            <div key={facility.facility_id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                                {/* Image Column */}
                                <div className={`relative w-full aspect-[4/3] shadow-xl rounded-xl overflow-hidden ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <Image
                                        src={imgUrl}
                                        alt={facility.name}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                {/* Text Column */}
                                <div className={`flex flex-col justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <div className="mb-4 text-primary font-bold text-6xl md:text-8xl opacity-10 font-serif leading-none">
                                        {displayIndex}
                                    </div>

                                    <div className="uppercase tracking-widest text-sm font-semibold text-muted-foreground mb-4">
                                        Facility — {facility.location}
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold text-heading mb-6">
                                        {facility.name}
                                    </h3>

                                    <p className="text-lg text-muted-foreground leading-relaxed mb-8 border-l-2 border-primary/20 pl-6">
                                        {facility.short_description}
                                    </p>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
