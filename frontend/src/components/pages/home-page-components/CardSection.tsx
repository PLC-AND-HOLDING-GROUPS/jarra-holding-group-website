import React from "react";
import { Button } from "../../ui/button";
import { useGetCardsQuery } from "@/redux/api/cardApi";
import { getImageUrl } from "@/utils/fileUrl";
import Link from "next/link";

const CardSection = () => {
    const { data: cmsCards = [] } = useGetCardsQuery();

    const title = cmsCards[0]?.title || "One of the Best Performing Economies in Ethiopia";
    const description = cmsCards[0]?.description || "Ethiopia has seen astonishing growth in the last ten years. Growing at an average rate of 9.7% between 2009 and 2019, Ethiopia has consistently been one of Africa’s top performing economies.";
    const buttonName = cmsCards[0]?.button_name || "Learn More";
    const buttonUrl = cmsCards[0]?.button_url || "/about";
    const image = getImageUrl(cmsCards[0]?.attachment as any, "original") || "/home-5.jpg";

    return (
        <section className="w-full flex justify-center md:px-4 mb-20">
            <div
                className="relative w-full max-w-7xl md:rounded-3xl  overflow-hidden shadow-xl"
            >
                {/* Background Image */}
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50" />

                {/* Content */}
                <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 p-8 lg:p-14 text-white">

                    {/* Left Text */}
                    <div className="">
                        <h2 className="text-lg lg:text-3xl font-bold text-primary mb-4 leading-snug">
                            {title}
                        </h2>

                        <p className="text-sm max-w-2xl lg:text-base text-gray-200 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
                    </div>

                    {/* Right Buttons */}
                    <div className="flex gap-4">
                        <Link href={buttonUrl}>
                            <Button className="bg-primary hover:bg-primaryHover px-9 py-2">
                                {buttonName}
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CardSection;