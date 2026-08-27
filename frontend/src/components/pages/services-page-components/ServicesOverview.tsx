"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownToLine, ArrowUpFromLine, ArrowLeftRight, SearchCheck, Warehouse, Network } from "lucide-react";

export default function ServicesOverview() {
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
                            WHAT WE DO
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6"
                        >
                            Integrated Business Services Built Around Your Needs
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-600 mb-8 max-w-xl"
                        >
                            Jarra Holdings operates across multiple sectors, providing premium import and export trading services that address critical commodity-market gaps. We focus on satisfying customers and stakeholders, reaching end users—particularly farming communities—and delivering innovative, sustainable solutions across industries.
                        </motion.p>
                    </div>

                    {/* Right: Visual Capability Map */}
                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { name: "Import", icon: <ArrowDownToLine className="w-5 h-5" /> },
                                { name: "Export", icon: <ArrowUpFromLine className="w-5 h-5" /> },
                                { name: "Trading", icon: <ArrowLeftRight className="w-5 h-5" /> },
                                { name: "Sourcing", icon: <SearchCheck className="w-5 h-5" /> },
                                { name: "Warehousing", icon: <Warehouse className="w-5 h-5" /> },
                                { name: "Supply Solutions", icon: <Network className="w-5 h-5" /> }
                            ].map((item, idx) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * idx }}
                                    className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col items-start gap-4 group hover:border-golden-classic hover:shadow-lg transition-all duration-300 hover:bg-white"
                                >

                                    <div className="flex items-center justify-between w-full">
                                        <div className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center text-slate-500 group-hover:bg-golden-classic/10 group-hover:text-golden-classic transition-colors">
                                            {item.icon}
                                        </div>
                                        <span className="font-semibold text-slate-800 group-hover:text-golden-dark transition-colors">
                                            {item.name}
                                        </span>
                                        <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
