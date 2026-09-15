"use client";

import React from "react";
import { motion } from "framer-motion";
import { useGetServiceExperienceQuery } from "@/redux/api/serviceApi";
import { ServiceExperienceSkeleton } from "@/components/skeletons";



export default function ServiceExperience() {
    const { data: experience, isLoading } = useGetServiceExperienceQuery();

    if (isLoading) {
        return <ServiceExperienceSkeleton />;
    }

    if (!experience || !experience.steps || experience.steps.length === 0) {
        return null;
    }

    const heading = experience.heading;
    const subheading = experience.subheading;
    const steps = experience.steps;

    return (
        <section className="py-24 bg-white text-slate-900 overflow-hidden border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    {heading && <h2 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h2>}
                    {subheading && (
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            {subheading}
                        </p>
                    )}
                </motion.div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-slate-200">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-full bg-primary"
                        />
                    </div>
                    {/* Connecting Line (Mobile) */}
                    <div className="block md:hidden absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-200">
                         <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="w-full bg-primary"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative z-10 w-full">
                        {steps.map((step, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <motion.div 
                                    key={step.num}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 * idx }}
                                    className={`flex w-full md:w-auto md:flex-col items-center md:items-center relative ${isEven ? 'flex-row' : 'flex-row-reverse'} md:!flex-col`}
                                >
                                    {/* Content half */}
                                    <div className={`w-1/2 md:w-full flex flex-col justify-center ${isEven ? 'items-end text-right pr-12 md:pr-0' : 'items-start text-left pl-12 md:pl-0'} md:items-center md:text-center`}>
                                        <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed max-w-[180px] md:mx-auto">
                                            {step.desc}
                                        </p>
                                    </div>
                                    
                                    {/* Empty half on mobile */}
                                    <div className="w-1/2 md:hidden" />

                                    {/* Mobile node position override */}
                                    <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:order-first w-16 md:w-24 h-16 md:h-24 rounded-full bg-white border-4 border-slate-200 flex items-center justify-center z-10 transition-colors hover:border-primary shadow-sm md:mb-6">
                                        <span className="text-xl md:text-2xl font-bold text-primary">{step.num}</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
