"use client";

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { useGetServiceOverviewQuery } from "@/redux/api/serviceApi";

export default function ServicesOverview() {
    const { data: overview, isLoading } = useGetServiceOverviewQuery();

    if (isLoading) {
        return <div className="py-24 text-center">Loading overview...</div>;
    }

    const subheading = overview?.subheading || "WHAT WE DO";
    const heading = overview?.heading || "Integrated Business Services Built Around Your Needs";
    const description = overview?.description || "Jarra Holdings operates across multiple sectors, providing premium import and export trading services that address critical commodity-market gaps. We focus on satisfying customers and stakeholders, reaching end users—particularly farming communities—and delivering innovative, sustainable solutions across industries.";

    const fallbackCards = [
        { name: "Import", icon: "ArrowDownToLine" },
        { name: "Export", icon: "ArrowUpFromLine" },
        { name: "Trading", icon: "ArrowLeftRight" },
        { name: "Sourcing", icon: "SearchCheck" },
        { name: "Warehousing", icon: "Warehouse" },
        { name: "Supply Solutions", icon: "Network" }
    ];

    const cards = overview?.cards && overview.cards.length > 0 ? overview.cards : fallbackCards;

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left: Editorial Heading */}
                    <div className="lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-sm font-bold tracking-widest text-golden-dark uppercase mb-4 block"
                        >
                            {subheading}
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6"
                        >
                            {heading}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-600 mb-8 max-w-xl"
                        >
                            {description}
                        </motion.p>
                    </div>

                    {/* Right: Visual Capability Map */}
                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-2 gap-4">
                            {cards.map((item, idx) => {
                                const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.Circle;
                                return (
                                    <motion.div
                                        key={item.name + idx}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * idx }}
                                        className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col items-start gap-4 group hover:border-golden-classic hover:shadow-lg transition-all duration-300 hover:bg-white"
                                    >

                                        <div className="flex items-center justify-between w-full">
                                            <div className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center text-slate-500 group-hover:bg-golden-classic/10 group-hover:text-golden-classic transition-colors">
                                                <IconComponent className="w-5 h-5" />
                                            </div>
                                            <span className="font-semibold text-slate-800 group-hover:text-golden-dark transition-colors">
                                                {item.name}
                                            </span>
                                            <LucideIcons.ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
