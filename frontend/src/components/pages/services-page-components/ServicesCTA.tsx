"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Box } from "lucide-react";

export default function ServicesCTA() {
    return (
        <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
                >
                    Let's Build the Right Supply Solution
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 text-slate-600"
                >
                    Whether you are looking for reliable sourcing, import and export support, trading solutions, or supply capabilities, connect with Jarra Holdings to discuss your requirements.
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link 
                        href="/contact"
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center w-full sm:w-auto shadow-md"
                    >
                        <span>Contact Jarra Holdings</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                    <Link 
                        href="/products"
                        className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center w-full sm:w-auto shadow-sm"
                    >
                        <Box className="w-5 h-5 mr-2" />
                        <span>Explore Our Products</span>
                    </Link>
                </motion.div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
                <div className="absolute -top-[50%] -left-[10%] w-[70%] h-[200%] bg-slate-100 rotate-12 blur-3xl" />
            </div>
        </section>
    );
}
