"use client";

import React from "react";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import { useGetPurposeQuery } from "@/redux/api/purposeApi";
import { getImageUrl } from "@/utils/fileUrl";

export default function PurposeSection() {
    const { data: purpose } = useGetPurposeQuery();


    const renderIcon = (name: string, props: any) => {
        const Icon = (LucideIcons as any)[name];
        if (!Icon) return <LucideIcons.Star {...props} />;
        return <Icon {...props} />;
    };

    const imageUrl = getImageUrl(purpose?.attachment, "original") || "/home-4.jpg";

    return (
        <section className="w-full bg-slate-50 py-24 md:py-32 relative overflow-hidden">
            {/* Top Section: Purpose Text & Image */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Content: Text */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-10">
                        <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">
                            {purpose?.subtitle || "Our Purpose"}
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: purpose?.title || "Creating Value <br /> Across Industries, <br /> <span class=\"text-primary\">Empowering Communities</span>" }} />
                        <div className="text-lg text-slate-600 leading-relaxed font-medium">
                            <p>
                                {purpose?.description || "Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of sustainable businesses and investments. Through import and export trading, strategic investments, and carefully selected business sectors, we work to address market needs, support economic development, create employment opportunities, and generate lasting value for our shareholders and stakeholders."}
                            </p>
                        </div>
                    </div>

                    {/* Right Content: Image & Overlap */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5] shadow-2xl">
                            <img
                                src={imageUrl}
                                alt={purpose?.title || "Purpose"}
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 absolute inset-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                        </div>

                        {/* Overlapping Statement */}
                        <div className="absolute -bottom-10 -left-6 md:-left-12 lg:-left-16 bg-white p-6 md:p-8 rounded-xl shadow-xl border border-slate-100 max-w-[280px] md:max-w-[320px] z-20">
                            <div className="h-1 w-12 bg-primary rounded-full mb-4" />
                            <p className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                                "{purpose?.quote || "Delivering innovative and sustainable solutions across industries."}"
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Middle Section: Four Pillars */}
            {purpose?.pillars && purpose.pillars.length > 0 && (
                <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {purpose.pillars.map((pillar, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all group">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                    {renderIcon(pillar.icon || "Star", { className: "w-7 h-7" })}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
