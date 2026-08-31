"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useGetServiceCapabilityQuery } from "@/redux/api/serviceApi";
import { useGetAttachmentsQuery } from "@/redux/api/attachementApi";
import { getImageUrl } from "@/utils/fileUrl";

const defaultSectors = [
    {
        id: "agriculture",
        name: "AGRICULTURE",
        desc: "Supplying essential agricultural inputs to support farming communities and boost productivity.",
        image: "/factory.jpg" // using existing placeholder
    },
    {
        id: "construction",
        name: "CONSTRUCTION",
        desc: "Providing reliable construction-related materials and heavy machinery for infrastructure development.",
        image: "/construction.jpg" // placeholder, maybe falls back if not exists, but we can just use color or one image for all if we don't have distinct ones. Let's use generic placeholders.
    },
    {
        id: "industrial",
        name: "INDUSTRIAL",
        desc: "Sourcing and supplying factory raw materials to keep manufacturing lines operational.",
        image: "/factory2.jpg"
    },
    {
        id: "automotive",
        name: "AUTOMOTIVE",
        desc: "Importing vehicles and genuine spare parts for commercial and personal transport needs.",
        image: "/trucks.jpg" // placeholder 
    },
    {
        id: "electrical",
        name: "ELECTRICAL",
        desc: "Delivering certified electrical equipment for commercial, industrial, and residential projects.",
        image: "/hero3.jpg"
    },
    {
        id: "commodity",
        name: "COMMODITY TRADE",
        desc: "Exporting premium Ethiopian Arabica coffee, oilseeds, and pulses to international markets.",
        image: "/coffee.jpg"
    }
];

export default function MultiSectorCapability() {
    const { data: capability, isLoading } = useGetServiceCapabilityQuery();
    const { data: attachmentsResponse } = useGetAttachmentsQuery();
    
    const sectors = (capability?.capabilities && capability.capabilities.length > 0) ? capability.capabilities : defaultSectors;
    const [activeSector, setActiveSector] = useState(sectors[0] || defaultSectors[0]);

    const getSectorBg = (sectorImage?: string) => {
        if (!sectorImage) return "url('/home-1.jpg')";
        
        // If it's an attachment ID
        const attachments = attachmentsResponse?.attachments || [];
        const found = attachments.find(a => a.attachment_id === sectorImage);
        if (found) {
            const url = getImageUrl(found, "large");
            if (url) return `url('${url}')`;
        }
        
        // If it's a legacy URL (like /factory.jpg)
        if (sectorImage.startsWith("/") || sectorImage.startsWith("http")) {
            return `url('${sectorImage}')`;
        }
        
        return "url('/home-1.jpg')";
    };

    useEffect(() => {
        if (sectors.length > 0) {
            setActiveSector(sectors[0]);
        }
    }, [capability]);

    if (isLoading) {
        return <div className="py-24 text-center">Loading capabilities...</div>;
    }

    const heading = capability?.heading || "One Partner. Multiple Sectors.";
    const subheading = capability?.subheading || "Jarra Holdings operates as a multi-sector company with activities spanning import, export, trading, and supply across key economic pillars.";

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        {heading}
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 max-w-2xl"
                    >
                        {subheading}
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Navigation List and Mobile Content */}
                    <div className="lg:w-1/3 flex flex-col gap-2 lg:gap-3">
                        {sectors.map((sector) => (
                            <div key={sector.id} className="flex flex-col">
                                <button
                                    onMouseEnter={() => setActiveSector(sector)}
                                    onClick={() => setActiveSector(sector)}
                                    className={`text-left px-6 py-4 rounded-xl flex items-center justify-between transition-all duration-300 ${
                                        activeSector.id === sector.id 
                                            ? "bg-slate-900 text-golden-classic font-bold shadow-lg" 
                                            : "bg-slate-50 text-slate-600 hover:bg-slate-100 font-semibold"
                                    }`}
                                >
                                    <span className="tracking-wide">{sector.name}</span>
                                    <ChevronRight className={`w-5 h-5 transition-transform ${activeSector.id === sector.id ? "rotate-90 lg:rotate-0 lg:translate-x-1" : ""}`} />
                                </button>

                                {/* Mobile Content Accordion */}
                                <AnimatePresence>
                                    {activeSector.id === sector.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="lg:hidden overflow-hidden mt-2"
                                        >
                                            <div className="rounded-xl p-6 relative overflow-hidden group shadow-sm">
                                                {/* Background Image with Overlay for Mobile */}
                                                <div 
                                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500" 
                                                    style={{ backgroundImage: getSectorBg(sector.image) }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50" />
                                                
                                                <div className="relative z-10">
                                                    <p className="text-base text-gray-200 leading-relaxed font-medium shadow-sm">
                                                        {sector.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Content Display */}
                    <div className="hidden lg:block lg:w-2/3">
                        <div className="rounded-2xl p-8 md:p-12 h-full flex flex-col justify-center relative overflow-hidden group shadow-xl">
                            {/* Background Image with Overlay */}
                            <AnimatePresence mode="wait">
                                <motion.div 
                                    key={activeSector.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
                                    style={{ backgroundImage: getSectorBg(activeSector.image) }}
                                />
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50" />
                            
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeSector.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative z-10"
                                >
                                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6 drop-shadow-sm">{activeSector.name}</h3>
                                    <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-sm">
                                        {activeSector.desc}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                            
                            {/* Decorative background element */}
                            <div className="absolute right-0 bottom-0 opacity-[0.03] transform translate-x-1/4 translate-y-1/4 pointer-events-none text-white">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={activeSector.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-[200px] font-black leading-none"
                                    >
                                        {activeSector.name[0]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
