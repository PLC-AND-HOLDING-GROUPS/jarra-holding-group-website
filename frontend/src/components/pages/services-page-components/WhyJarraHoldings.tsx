"use client";

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { useGetServiceWhyUsQuery } from "@/redux/api/serviceApi";

const defaultValues = [
    {
        title: "Customer",
        desc: "We give high priority to customer needs.",
        icon: "Users"
    },
    {
        title: "Quality",
        desc: "Consistent quality is central to our approach.",
        icon: "BadgeCheck"
    },
    {
        title: "Integrity",
        desc: "We build relationships on trust and integrity.",
        icon: "ShieldCheck"
    },
    {
        title: "Innovation",
        desc: "We remain open to new ideas and evolving solutions.",
        icon: "Lightbulb"
    },
    {
        title: "Collaboration",
        desc: "We engage with diverse business partners.",
        icon: "Handshake"
    },
    {
        title: "Competency",
        desc: "We rely on capability and experience across diverse sectors.",
        icon: "BriefcaseBusiness"
    }
];

export default function WhyJarraHoldings() {
    const { data: whyUs, isLoading } = useGetServiceWhyUsQuery();

    if (isLoading) {
        return <div className="py-24 text-center">Loading...</div>;
    }

    const heading = whyUs?.heading || "Why Partner With Jarra Holdings?";
    const subheading = whyUs?.subheading || "Our approach is defined by our core values. They guide every trading decision, supply solution, and partnership we build.";
    const values = (whyUs?.points && whyUs.points.length > 0) ? whyUs.points : defaultValues;

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{heading}</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        {subheading}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((value, idx) => {
                        const Icon = (LucideIcons as any)[value.icon as string] || LucideIcons.CheckCircle;
                        return (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * idx }}
                                className="bg-white border border-slate-200 p-8 rounded-2xl hover:border-golden-classic hover:shadow-lg transition-all duration-300 group flex items-start gap-4"
                            >
                                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-golden-classic/10 transition-colors">
                                    <Icon className="w-6 h-6 text-slate-700 group-hover:text-golden-dark transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
