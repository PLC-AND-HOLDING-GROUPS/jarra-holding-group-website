"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PurposeAndImpact() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

    return (
        <section
            ref={containerRef}
            className="w-full py-24 bg-white relative overflow-hidden"
        >
            {/* Section Header */}
            <div className="max-w-full mx-auto px-4 md:px-8 mb-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
                >
                    Creating Value.{" "}
                    <span className="text-primary">
                        Driving Sustainable Growth.
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
                >
                    Jarra Holdings is a multi-sector company committed to
                    sustainable investment, economic empowerment, market
                    development, and creating lasting value for shareholders,
                    customers, and communities.
                </motion.p>
            </div>

            {/* Purpose Visualization */}
            <div className="relative max-w-[95%] mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#030e21] border border-cyan-900/30">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="absolute top-0 right-1/4 w-1/3 h-1/3 bg-blue-400/10 blur-[80px] rounded-full pointer-events-none" />

                {/* Word Cloud */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center font-sans uppercase w-full py-16 md:py-24 px-2 md:px-4 select-none relative z-10"
                >
                    {/* Top Section */}
                    <motion.div
                        style={{ y: y1 }}
                        className="flex items-end justify-center w-full gap-2 md:gap-4 mb-2 md:mb-3"
                    >
                        {/* Top Left */}
                        <div className="flex flex-col items-end gap-0 md:gap-1">
                            <div className="flex items-baseline gap-2 md:gap-3">
                                <span className="text-cyan-600 font-medium text-base md:text-2xl lg:text-3xl">
                                    Sustainable
                                </span>

                                <span className="text-cyan-400 font-bold text-xl md:text-4xl lg:text-5xl">
                                    Investment
                                </span>
                            </div>

                            <div className="flex items-baseline gap-2 md:gap-3">
                                <span className="text-cyan-600 font-medium text-xs md:text-lg lg:text-xl">
                                    Quality
                                </span>

                                <span className="text-cyan-500 font-black text-3xl md:text-6xl lg:text-7xl tracking-tight leading-none">
                                    Integrity
                                </span>
                            </div>
                        </div>

                        {/* Top Right */}
                        <div className="flex items-end gap-1 md:gap-2 ml-2 md:ml-4 lg:ml-6">
                            <div className="flex gap-1 h-full pb-1">
                                <span
                                    className="text-cyan-700 font-bold text-lg md:text-2xl lg:text-3xl tracking-widest"
                                    style={{ writingMode: "vertical-rl" }}
                                >
                                    VALUE
                                </span>

                                <span
                                    className="text-cyan-500 font-black text-2xl md:text-5xl lg:text-6xl tracking-widest"
                                    style={{ writingMode: "vertical-rl" }}
                                >
                                    GROWTH
                                </span>
                            </div>

                            <div className="flex flex-col justify-end gap-0 md:gap-1 pb-1">
                                <span className="text-cyan-400 font-bold text-lg md:text-3xl lg:text-4xl">
                                    Innovation
                                </span>

                                <span className="text-white font-bold text-xl md:text-4xl lg:text-5xl tracking-wide leading-none">
                                    Collaboration
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Center Main Word */}
                    <div className="z-20 relative my-2 md:my-4">
                        <motion.h1
                            initial={{
                                filter: "blur(10px)",
                                opacity: 0,
                                scale: 1.1,
                            }}
                            whileInView={{
                                filter: "blur(0px)",
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                duration: 1.2,
                                delay: 0.2,
                            }}
                            className="text-white font-black text-[13vw] sm:text-[11vw] md:text-[8rem] lg:text-[11rem] xl:text-[13rem] leading-[0.8] tracking-tighter drop-shadow-2xl"
                        >
                            IMPACT
                        </motion.h1>
                    </div>

                    {/* Bottom Section */}
                    <motion.div
                        style={{ y: y2 }}
                        className="flex items-start justify-center w-full gap-2 md:gap-4 mt-2 md:mt-3"
                    >
                        {/* Bottom Left */}
                        <div className="flex flex-col gap-0 md:gap-1 items-end">
                            <div className="flex items-baseline gap-2 md:gap-3">
                                <span className="text-cyan-400 font-bold text-xl md:text-3xl lg:text-4xl">
                                    Empowerment
                                </span>

                                <span className="text-white/80 font-medium text-xs md:text-base lg:text-xl">
                                    Community
                                </span>
                            </div>

                            <div className="flex items-start gap-2 md:gap-3">
                                <span className="text-cyan-500 font-black text-3xl md:text-5xl lg:text-[5rem] tracking-tight leading-none">
                                    Development
                                </span>
                            </div>
                        </div>

                        {/* Vertical Word */}
                        <div className="flex items-start h-full pt-1">
                            <span
                                className="text-cyan-700 font-bold text-xl md:text-3xl lg:text-4xl tracking-widest"
                                style={{ writingMode: "vertical-rl" }}
                            >
                                PROGRESS
                            </span>
                        </div>

                        {/* Bottom Right */}
                        <div className="flex items-start gap-2 md:gap-4 ml-2 md:ml-4">
                            <div className="flex flex-col gap-0 md:gap-1">
                                <div className="flex items-baseline gap-2 md:gap-3">
                                    <span className="text-white font-bold text-2xl md:text-4xl lg:text-5xl">
                                        Customer
                                    </span>

                                    <span className="text-white/70 font-medium text-xs md:text-base lg:text-lg">
                                        Value
                                    </span>
                                </div>

                                <div className="flex items-baseline gap-2 md:gap-3">
                                    <span className="text-cyan-400 font-bold text-lg md:text-2xl lg:text-3xl">
                                        Competency
                                    </span>

                                    <span className="text-white font-medium text-base md:text-xl lg:text-2xl">
                                        Excellence
                                    </span>
                                </div>
                            </div>

                            {/* Vertical Words */}
                            <div className="flex gap-1 h-full pt-1">
                                <span
                                    className="text-cyan-500 font-bold text-lg md:text-2xl lg:text-3xl tracking-widest"
                                    style={{ writingMode: "vertical-rl" }}
                                >
                                    INNOVATION
                                </span>

                                <span
                                    className="text-cyan-600 font-medium text-base md:text-xl lg:text-2xl tracking-widest"
                                    style={{ writingMode: "vertical-rl" }}
                                >
                                    FUTURE
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Vision Statement */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-4xl mx-auto mt-12 px-4 text-center"
            >
                <p className="text-sm font-semibold tracking-[0.25em] text-primary uppercase mb-3">
                    Our Vision
                </p>

                <p className="text-xl md:text-2xl font-semibold text-slate-900">
                    To be a leading community-based conglomerate in Africa by
                    2030.
                </p>
            </motion.div>
        </section>
    );
}