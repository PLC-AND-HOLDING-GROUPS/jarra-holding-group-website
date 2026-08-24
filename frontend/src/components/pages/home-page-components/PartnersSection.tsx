"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { useGetPartnersQuery } from "@/redux/api/partnerApi";
import { getImageUrl } from "@/utils/fileUrl";

type PartnersSectionProps = {
    speed?: number; // higher = faster (react-fast-marquee logic)
};

const PartnersSection: React.FC<PartnersSectionProps> = ({ speed = 50 }) => {
    const { data: cmsPartners = [], isLoading } = useGetPartnersQuery();

    const activeLogos = cmsPartners.flatMap((p: any) => 
        (p.attachments || []).map((a: any) => getImageUrl(a.attachment, "large"))
    ).filter(Boolean) as string[];

    if (!isLoading && activeLogos.length === 0) {
        return null;
    }
    const sectionTitle = cmsPartners.length > 0 ? cmsPartners[0].title : "Our Partners";
    const sectionDescription = cmsPartners.length > 0 ? cmsPartners[0].description : "We collaborate with trusted national and international partners to support sustainable industrial and economic development.";

    return (
        <section className="w-full max-w-7xl pb-28 overflow-hidden">
            {/* Header */}
            <div className="mb-10 px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                    {sectionTitle || "Our Partners"}
                </h2>
                <div className="mt-2 h-1 w-20 bg-primary rounded-full"></div>
                {sectionDescription && (
                    <p className="mt-3 text-muted max-w-2xl">
                        {sectionDescription}
                    </p>
                )}
            </div>

            {/* Marquee */}
            <Marquee
                speed={speed}
                pauseOnHover
                gradient={false}
                className="overflow-hidden"
            >
                {activeLogos.map((logo, index) => (
                    <div
                        key={index}
                        className="mx-6 flex items-center justify-center md:min-w-[150px]"
                    >
                        <img
                            src={logo}
                            alt={`Partner ${index + 1}`}
                            className="h-16 md:h-24 w-auto object-contain cursor-pointer"
                        />
                    </div>
                ))}
            </Marquee>
        </section>
    );
};

export default PartnersSection;