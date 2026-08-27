"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowUpFromLine, ArrowLeftRight, Warehouse, SearchCheck, Network } from "lucide-react";
import Link from "next/link";

const services = [
    {
        id: "01",
        title: "Import Services",
        description: "Professional import and supply solutions across multiple categories, including agricultural inputs, construction materials, machinery, vehicles, electrical equipment, and other approved trading categories.",
        icon: ArrowDownToLine,
    },
    {
        id: "02",
        title: "Export Services",
        description: "Export solutions connecting Ethiopian products with international markets, specializing in Ethiopian Arabica coffee, oilseeds, and pulses.",
        icon: ArrowUpFromLine,
    },
    {
        id: "03",
        title: "Trading & Supply",
        description: "Reliable trading and supply solutions designed to address market needs and connect customers with appropriate products and resources.",
        icon: ArrowLeftRight,
    },
    {
        id: "04",
        title: "Warehousing & Storage",
        description: "Professional warehousing capability supporting the company's supply and trading operations with our holistic-purpose facilities of approximately 6,850 m².",
        icon: Warehouse,
    },
    {
        id: "05",
        title: "Sourcing & Procurement",
        description: "Business-oriented sourcing and procurement support for customers and partners seeking appropriate products and supply solutions across our operating sectors.",
        icon: SearchCheck,
    },
    {
        id: "06",
        title: "Market & Supply Solutions",
        description: "Solutions designed around market demand, customer needs, and supply gaps across multiple sectors, driving our role as a comprehensive multi-sector business.",
        icon: Network,
    },
];

export default function CoreServicesGrid() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            className="group relative bg-white border border-slate-200 p-8 rounded-2xl hover:border-golden-classic transition-all duration-300 hover:shadow-xl overflow-hidden flex flex-col"
                        >
                            {/* Decorative Background Number */}
                            <span className="absolute -top-6 -right-6 text-[120px] font-bold text-slate-100 opacity-20 group-hover:text-golden-classic/5 transition-colors pointer-events-none select-none z-0">
                                {service.id}
                            </span>
                            
                            <div className="relative z-10 flex-grow">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-golden-classic/10 transition-colors">
                                        <service.icon className="w-6 h-6 text-slate-700 group-hover:text-golden-dark transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-golden-dark">{service.title}</h3>
                                </div>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                            

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
