"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Introduction() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                Build Your Career With <span className="text-primary">Purpose</span>
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    Jarra Holdings is a multi-sector organization where people can work across different areas of business and contribute to the organization's broader growth.
                                </p>
                                <p>
                                    We believe that our success is deeply connected to creating job opportunities, driving economic development, and building a knowledgeable, innovative workforce. By prioritizing the development of employee competency and fostering a culture of collaboration, we ensure long-term organizational growth and meaningful careers for our people.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content / Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl"
                        >
                            {/* Background Image */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url('/home-4.jpg')" }}
                            />
                            {/* Fallback color if image not found */}
                            <div className="absolute inset-0 bg-slate-200 -z-10" />
                            
                            {/* Decorative Overlay */}
                            <div className="absolute inset-0 bg-black/60" />
                        </motion.div>

                        {/* Overlapping Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20, y: 20 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="absolute -bottom-8 -left-8 md:bottom-8 md:-left-12 bg-white p-6 md:p-8 rounded-xl shadow-xl border border-slate-100 max-w-[240px]"
                        >
                            <div className="flex flex-col gap-2">
                                <span className="text-sm font-bold text-slate-400 tracking-wider uppercase">Focus</span>
                                <span className="text-2xl font-black text-slate-900 leading-none">MULTI-SECTOR</span>
                                <span className="text-2xl font-black text-primary leading-none">GROWTH</span>
                            </div>
                            <div className="mt-4 h-1 w-12 bg-golden-classic rounded-full" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
