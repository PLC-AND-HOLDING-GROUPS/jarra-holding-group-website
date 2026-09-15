"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { useGetServiceWhyUsQuery } from "@/redux/api/serviceApi";
import { Skeleton } from "@/components/ui/skeleton";

export default function ServicesCTA() {
    const { data: whyUs, isLoading } = useGetServiceWhyUsQuery();

    if (isLoading) {
        return (
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center flex flex-col items-center relative z-10">
                    <Skeleton className="h-12 w-3/4 mb-6" />
                    <Skeleton className="h-6 w-full max-w-2xl mb-10" />
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                        <Skeleton className="h-16 w-full sm:w-64 rounded-xl" />
                        <Skeleton className="h-16 w-full sm:w-64 rounded-xl" />
                    </div>
                </div>
            </section>
        );
    }

    if (!whyUs || !whyUs.cta_heading) return null;

    const ctaHeading = whyUs.cta_heading;
    const ctaSubheading = whyUs.cta_subheading;
    const ctaButtons = whyUs.cta_buttons || [];

    return (
        <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
                >
                    {ctaHeading}
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 text-slate-600"
                >
                    {ctaSubheading}
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    {ctaButtons.map((btn, index) => {
                        const IconComponent = (LucideIcons as any)[btn.icon] || LucideIcons.Circle;
                        
                        if (index === 0) {
                            return (
                                <Link 
                                    key={index}
                                    href={btn.route}
                                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center w-full sm:w-auto shadow-md"
                                >
                                    <span>{btn.title}</span>
                                    <IconComponent className="w-5 h-5 ml-2" />
                                </Link>
                            );
                        } else {
                            return (
                                <Link 
                                    key={index}
                                    href={btn.route}
                                    className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center w-full sm:w-auto shadow-sm"
                                >
                                    <IconComponent className="w-5 h-5 mr-2" />
                                    <span>{btn.title}</span>
                                </Link>
                            );
                        }
                    })}
                </motion.div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
                <div className="absolute -top-[50%] -left-[10%] w-[70%] h-[200%] bg-slate-100 rotate-12 blur-3xl" />
            </div>
        </section>
    );
}
