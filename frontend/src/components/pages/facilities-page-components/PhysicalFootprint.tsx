"use client";

import React from "react";
import Image from "next/image";
import { mockFacilities } from "@/datas/mockFacilities";

export default function PhysicalFootprint() {
    // Extract unique locations from facilities
    const locations = Array.from(new Set(mockFacilities.map(f => f.location)));

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="mb-16 md:mb-24 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-heading mb-6">
                        Our Geographic <br className="hidden md:block" /> Footprint
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-xl">
                        Jarra Holding Group’s physical assets are strategically positioned across key regional zones to support our complex operations and ensure resilient infrastructure.
                    </p>
                </div>

                <div className="relative w-full rounded-3xl bg-slate-900 p-8 md:p-16 overflow-hidden flex flex-col md:flex-row gap-12 items-center">
                    {/* Background Map Image Overlay */}
                    <Image
                        src="/map.jpg"
                        alt="Geographic Footprint"
                        fill
                        className="object-cover opacity-30 mix-blend-overlay"
                    />

                    {/* Locations List */}
                    <div className="relative z-10 w-full md:w-1/2">
                        <div className="space-y-6">
                            {locations.map((loc, idx) => (
                                <div key={idx} className="flex items-center space-x-4 border-b border-white/20 pb-4">
                                    <div className="w-2 h-2 rounded-full bg-[#00B4D8]" />
                                    <h3 className="text-xl md:text-2xl font-semibold text-white tracking-wide">
                                        {loc}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats or text */}
                    <div className="relative z-10 w-full md:w-1/2">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-white">
                            <h4 className="text-xl font-bold mb-4 text-[#00B4D8]">Strategic Positioning</h4>
                            <p className="leading-relaxed opacity-90">
                                Our facilities are positioned near major transit corridors and agricultural hubs. This physical positioning allows for streamlined logistics and rapid operational response.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
