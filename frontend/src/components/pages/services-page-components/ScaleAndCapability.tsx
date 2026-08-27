"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const startTime = performance.now();
            
            const animate = (currentTime: number) => {
                const elapsedTime = (currentTime - startTime) / 1000;
                const progress = Math.min(elapsedTime / duration, 1);
                
                // easeOutQuart
                const easeProgress = 1 - Math.pow(1 - progress, 4);
                
                setCount(Math.floor(easeProgress * end));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        }
    }, [isInView, end, duration]);

    // Format number with commas
    const formattedCount = count.toLocaleString('en-US');

    return (
        <span ref={ref}>
            {formattedCount}{suffix}
        </span>
    );
}

const stats = [
    { value: 1.86, isFloat: true, suffix: "B+", label: "Total Assets — ETB" },
    { value: 384, isFloat: false, suffix: "M+", label: "Total Capital — ETB" },
    { value: 20, isFloat: false, suffix: "M+", label: "Annual Imported Items — USD" },
    { value: 5, isFloat: false, suffix: "M+", label: "Export Performance — USD" },
    { value: 6850, isFloat: false, suffix: " m²", label: "Warehouse / Purpose Facilities" },
];

export default function ScaleAndCapability() {
    return (
        <section className="py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div 
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx }}
                            className="flex flex-col items-center text-center"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold text-golden-classic mb-4 font-mono">
                                {stat.isFloat ? (
                                    <CounterFloat end={stat.value} suffix={stat.suffix} />
                                ) : (
                                    <Counter end={stat.value} suffix={stat.suffix} />
                                )}
                            </h3>
                            <p className="text-slate-400 text-sm font-semibold tracking-wider uppercase">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Special counter for floats
function CounterFloat({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            const startTime = performance.now();
            
            const animate = (currentTime: number) => {
                const elapsedTime = (currentTime - startTime) / 1000;
                const progress = Math.min(elapsedTime / duration, 1);
                const easeProgress = 1 - Math.pow(1 - progress, 4);
                
                setCount(easeProgress * end);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        }
    }, [isInView, end, duration]);

    return (
        <span ref={ref}>
            {count.toFixed(2)}{suffix}
        </span>
    );
}
