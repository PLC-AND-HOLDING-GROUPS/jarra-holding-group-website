"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Wheat,
  HardHat,
  Construction,
  Truck,
  Factory,
  Zap,
  ArrowRight,
  Globe2,
  MapPin,
  Anchor,
  Ship,
  Plane
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const importCategories = [
  {
    id: 'agriculture',
    name: 'AGRICULTURE',
    description: 'Agro-chemicals, fertilizers & bio-medicines.',
    icon: Wheat,
  },
  {
    id: 'construction',
    name: 'CONSTRUCTION',
    description: 'Reinforcement bars, asphalt & aluminum.',
    icon: HardHat,
  },
  {
    id: 'machinery',
    name: 'MACHINERY',
    description: 'Excavators, wheel loaders & heavy equipment.',
    icon: Construction,
  },
  {
    id: 'vehicles',
    name: 'VEHICLES',
    description: 'Trucks, pickups, motors & spare parts.',
    icon: Truck,
  },
  {
    id: 'industrial',
    name: 'INDUSTRIAL',
    description: 'Raw materials for plastic and steel factories.',
    icon: Factory,
  },
  {
    id: 'electrical',
    name: 'ELECTRICAL',
    description: 'Electrical materials, generators & solar.',
    icon: Zap,
  }
];

const flowSteps = [
  {
    num: "01",
    title: "SOURCE",
    desc: "Identify and connect with supply opportunities."
  },
  {
    num: "02",
    title: "TRADE",
    desc: "Facilitate import and export activities."
  },
  {
    num: "03",
    title: "MOVE",
    desc: "Coordinate the movement of goods toward their markets."
  },
  {
    num: "04",
    title: "DELIVER",
    desc: "Connect goods with customers and market demand."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ImportExport() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredImport, setHoveredImport] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yCenter = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white text-slate-900 pt-20 pb-24">
      {/* Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.02),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mb-16"
        >
          <motion.span variants={itemVariants} className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
            IMPORT & EXPORT
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-heading leading-tight mb-6">
            Connecting Ethiopia to Global Markets
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-body font-medium leading-relaxed">
            Jarra Holdings facilitates the movement of agricultural commodities, industrial inputs, construction materials, machinery, vehicles, electrical equipment, and other goods between markets. Our import and export activities are built around market demand, reliable sourcing, and the delivery of value to customers and stakeholders.
          </motion.p>
        </motion.div>

        {/* Central Trade Visualization (Desktop: 3 columns, Mobile: Stacked) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mb-24 relative">
          
          {/* Desktop Connecting Lines (Background of columns) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
             {/* Left to Center Line */}
             <svg className="absolute left-[25%] top-1/2 w-[25%] h-24 -translate-y-1/2 overflow-visible">
               <motion.path 
                 d="M0,48 C50,48 50,0 100,0" 
                 fill="none" 
                 stroke="url(#exportGradient)" 
                 strokeWidth="2"
                 strokeDasharray="4 4"
                 initial={{ pathLength: 0, opacity: 0 }}
                 whileInView={{ pathLength: 1, opacity: 0.5 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, ease: "easeInOut" }}
               />
               <motion.circle 
                 cx="100" cy="0" r="4" fill="#0F172A" 
                 initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.5 }}
               />
             </svg>
             
             {/* Center to Right Line */}
             <svg className="absolute left-[50%] top-1/2 w-[25%] h-24 -translate-y-1/2 overflow-visible">
               <motion.path 
                 d="M0,0 C50,0 50,48 100,48" 
                 fill="none" 
                 stroke="url(#importGradient)" 
                 strokeWidth="2"
                 strokeDasharray="4 4"
                 initial={{ pathLength: 0, opacity: 0 }}
                 whileInView={{ pathLength: 1, opacity: 0.5 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
               />
               <motion.circle 
                 cx="0" cy="0" r="4" fill="#0F172A" 
                 initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
               />
             </svg>

             {/* SVG Gradients */}
             <svg className="w-0 h-0 absolute">
               <defs>
                 <linearGradient id="exportGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#0F172A" stopOpacity="0" />
                   <stop offset="100%" stopColor="#0F172A" stopOpacity="1" />
                 </linearGradient>
                 <linearGradient id="importGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#0F172A" stopOpacity="1" />
                   <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
                 </linearGradient>
               </defs>
             </svg>
          </div>

          {/* LEFT: EXPORT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/3 z-10 flex flex-col"
          >
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none"></div>
              
              <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase mb-6 px-3 py-1 bg-primary/10 rounded-full">
                <Plane className="w-4 h-4" />
                EXPORT
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                Taking Ethiopian Commodities to Global Markets
              </h3>
              
              <p className="text-slate-600 text-sm mb-8 leading-relaxed">
                Jarra Holdings exports Ethiopian agricultural commodities, connecting locally sourced products with international markets.
              </p>

              {/* Commodity Visual Strip */}
              <div className="space-y-6">
                <div className="group">
                  <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                    Ethiopian Arabica Coffee
                  </h4>
                  <div className="h-px w-full bg-slate-200 mb-3 group-hover:bg-primary/30 transition-colors"></div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Guji <span className="mx-1.5 text-slate-300">•</span> 
                    Yirgacheffe <span className="mx-1.5 text-slate-300">•</span> 
                    Sidama <span className="mx-1.5 text-slate-300">•</span> 
                    Arsi <span className="mx-1.5 text-slate-300">•</span> 
                    Limmu <span className="mx-1.5 text-slate-300">•</span>
                    Jimma <span className="mx-1.5 text-slate-300">•</span>
                    Nekemte
                  </p>
                </div>

                <div className="group">
                  <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                    Oilseeds & Pulses
                  </h4>
                  <div className="h-px w-full bg-slate-200 mb-3 group-hover:bg-primary/30 transition-colors"></div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Soybean <span className="mx-1.5 text-slate-300">•</span> 
                    Sesame <span className="mx-1.5 text-slate-300">•</span> 
                    Haricot Bean <span className="mx-1.5 text-slate-300">•</span> 
                    Niger Seed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CENTER: JARRA HOLDINGS */}
          <motion.div 
            style={{ y: yCenter }}
            className="w-full lg:w-1/3 flex justify-center items-center z-20 py-8 lg:py-0"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative w-56 h-56 flex flex-col items-center justify-center rounded-full bg-[#0F172A] shadow-[0_20px_50px_rgba(15,23,42,0.3)] border-[6px] border-white z-10"
            >
              {/* Spinning decorative ring */}
              <div className="absolute inset-[-12px] rounded-full border border-slate-200 border-dashed animate-[spin_20s_linear_infinite]"></div>
              
              <Globe2 className="w-8 h-8 text-white/50 mb-3" />
              <h3 className="text-white font-bold text-2xl text-center leading-none tracking-wider mb-2">
                JARRA<br />HOLDINGS
              </h3>
              <p className="text-primary text-[10px] uppercase font-bold tracking-widest text-center w-3/4">
                GLOBAL TRADE
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: IMPORT */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/3 z-10 flex flex-col"
          >
             <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl relative overflow-hidden h-full text-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full pointer-events-none"></div>
              
              <div className="inline-flex items-center gap-2 text-white font-bold tracking-widest text-xs uppercase mb-6 px-3 py-1 bg-white/10 rounded-full">
                <Ship className="w-4 h-4" />
                IMPORT
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                Sourcing Essential Goods for Growing Markets
              </h3>
              
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Jarra Holdings imports agricultural, construction, industrial, automotive, and electrical goods to respond to market needs across Ethiopia.
              </p>

              {/* Industry Matrix */}
              <div className="grid grid-cols-2 gap-3">
                {importCategories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <motion.div 
                      key={cat.id}
                      onMouseEnter={() => setHoveredImport(cat.id)}
                      onMouseLeave={() => setHoveredImport(null)}
                      className="group relative bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/50 transition-all duration-300 rounded-xl p-3 cursor-default overflow-hidden"
                    >
                      <div className="relative z-10">
                        <Icon className={`w-5 h-5 mb-2 transition-colors duration-300 ${hoveredImport === cat.id ? 'text-primary' : 'text-slate-300'}`} />
                        <h4 className="text-[11px] font-bold tracking-wider uppercase mb-1 text-white">{cat.name}</h4>
                        <p className="text-[10px] text-slate-400 leading-tight line-clamp-2">{cat.description}</p>
                      </div>
                      
                      {/* Subtle hover highlight */}
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${hoveredImport === cat.id ? 'w-full' : 'w-0'}`}></div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4-Step Flow & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-center">
          
          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4"
          >
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 flex-1">
              <div className="text-3xl font-bold text-slate-900 mb-1">$5M+</div>
              <div className="text-sm font-semibold text-slate-600 mb-1">Export Performance</div>
              <div className="text-xs text-slate-500">Including 500 MT of Coffee Volume</div>
            </div>
            
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 flex-1">
              <div className="text-3xl font-bold text-primary mb-1">$20M+</div>
              <div className="text-sm font-semibold text-slate-800">Annual Import Value</div>
            </div>
          </motion.div>

          {/* Flow */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 bg-slate-900 rounded-2xl p-8 relative overflow-hidden text-white"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              {flowSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Arrow connecting steps (desktop) */}
                  {idx < flowSteps.length - 1 && (
                    <div className="hidden md:block absolute top-4 right-0 w-full h-px bg-slate-700 -z-10 translate-x-1/2">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-slate-500 rotate-45"></div>
                    </div>
                  )}
                  
                  <div className="text-primary font-mono text-sm mb-3">{step.num}</div>
                  <h4 className="text-sm font-bold tracking-wider mb-2">{step.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed pr-4">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto border-t border-slate-200 pt-16"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Explore Our Trading Capabilities</h3>
          <p className="text-slate-600 mb-8">
            Discover the infrastructure and trading activities that support the movement of goods across our business operations.
          </p>
          <Link href="#warehousing-trading" className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-8 py-4 rounded-full font-semibold hover:bg-primary transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-300">
            Explore Warehousing & Trading
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
