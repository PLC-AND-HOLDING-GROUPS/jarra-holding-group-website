"use client";

import React from "react";
import Image from "next/image";

export default function EditorialIntro() {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    
                    {/* Editorial Text */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <div className="inline-flex items-center space-x-4 mb-4">
                            <div className="w-12 h-px bg-primary" />
                            <span className="text-sm font-bold tracking-widest text-primary uppercase">
                                Our Physical Presence
                            </span>
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl font-bold text-heading leading-tight">
                            The Foundation of Our <br className="hidden md:block" />
                            Global Operations
                        </h2>
                        
                        <div className="prose prose-lg text-muted-foreground leading-relaxed">
                            <p>
                                Our facilities form part of the physical foundation of Jarra Holding Group, providing the robust environments and infrastructure that support the company's wider organizational activities.
                            </p>
                            <p>
                                From strategic operational depots to large-scale industrial sites, each location is physically designed and equipped to ensure continuous capability across our ecosystem.
                            </p>
                        </div>
                    </div>

                    {/* Large Image */}
                    <div className="relative w-full aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
                        <Image 
                            src="/factory3.jpg" 
                            alt="Jarra Holding Group Physical Infrastructure" 
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
