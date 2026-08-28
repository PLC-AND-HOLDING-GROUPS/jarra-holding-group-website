"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Lightbulb, ShieldCheck, Target } from "lucide-react";

const features = [
    {
        icon: <Users className="w-6 h-6" />,
        title: "Collaborative Culture",
        description: "We foster an environment where teamwork and shared goals drive our success across all sectors.",
    },
    {
        icon: <Lightbulb className="w-6 h-6" />,
        title: "Innovative Thinking",
        description: "Embracing new ideas and creative solutions to overcome challenges and improve our operations.",
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Integrity & Trust",
        description: "Operating with the highest ethical standards, building trust with our partners and communities.",
    },
    {
        icon: <Target className="w-6 h-6" />,
        title: "Competency & Excellence",
        description: "Committing to continuous learning and achieving excellence in everything we do.",
    },
];

export default function PeopleAndCulture() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Side: Images & Visuals */}
                    <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px]">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="absolute top-0 left-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl z-10"
                        >
                            <Image
                                src="/home-4.jpg"
                                alt="Our People"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute bottom-0 right-0 w-3/5 h-2/3 rounded-3xl overflow-hidden shadow-xl border-8 border-slate-50 z-20"
                        >
                            <Image
                                src="/home-2.jpg"
                                alt="Company Culture"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                    </div>

                    {/* Right Side: Text & Features */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">Our Culture</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                People Power Our <span className="text-primary">Progress</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                                The strength of a growing multi-sector organization depends on capable, collaborative, and innovative people. Knowledge, competency, and integrity form the foundation of our culture.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    className="flex flex-col gap-3 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
