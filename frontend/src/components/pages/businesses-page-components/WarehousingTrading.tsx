"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Globe2,
  Sprout,
  ArrowRight,
  Warehouse,
  Boxes,
  ArrowDownToLine,
  TrendingUp,
  PackageCheck,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const NodeItem = ({ title, active = false, delay = 0 }: { title: string, active?: boolean, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`flex flex-col items-center justify-center relative p-4 w-full md:w-auto
      ${active ? 'bg-primary/20 border-primary shadow-[0_0_30px_rgba(var(--primary),0.3)]' : 'bg-white/5 border-white/10'}
      border rounded-xl backdrop-blur-sm z-10`}
  >
    <div className={`w-2 h-2 rounded-full mb-3 ${active ? 'bg-primary shadow-[0_0_10px_var(--primary)]' : 'bg-slate-400'}`}></div>
    <span className={`text-xs md:text-sm font-bold tracking-widest uppercase text-center ${active ? 'text-white' : 'text-slate-300'}`}>
      {title}
    </span>
  </motion.div>
);

const FlowArrow = ({ delay = 0 }: { delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, width: 0 }}
    whileInView={{ opacity: 1, width: "auto" }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="hidden md:flex flex-1 items-center justify-center relative px-2"
  >
    <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent relative">
      <motion.div 
        animate={{ x: ["0%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 -translate-y-1/2 w-4 h-1 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]"
      ></motion.div>
    </div>
    <ChevronRight className="w-4 h-4 text-primary/50 absolute right-0" />
  </motion.div>
);

const FlowArrowMobile = () => (
  <div className="md:hidden flex justify-center py-2">
    <ArrowDownToLine className="w-5 h-5 text-primary/40" />
  </div>
);

export default function WarehousingTrading() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#FAFAFA] text-slate-900 pt-24 pb-32 overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Connection to Import/Export */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-center gap-3 text-slate-500 mb-12 bg-white p-4 rounded-xl shadow-sm border border-slate-200 w-fit"
        >
          <div className="flex items-center gap-2">
            <Globe2 className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-slate-800">From international trade to local markets</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-slate-300"></div>
          <span className="text-xs font-medium text-slate-500 max-w-md">
            Warehousing and trading provide an operational link between the movement of goods and the markets they ultimately serve.
          </span>
        </motion.div>

        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-20 max-w-4xl"
        >
          <motion.span variants={itemVariants} className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
            WAREHOUSING & TRADING
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Infrastructure That Moves Business Forward
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-slate-700 font-medium leading-relaxed mb-4">
            Jarra Holdings' warehousing and trading activities provide an important operational foundation for its diversified business operations, supporting the movement and availability of goods across the markets it serves.
          </motion.p>
          <motion.p variants={itemVariants} className="text-base text-slate-500 leading-relaxed max-w-3xl">
            Through purpose-built facilities and trading activities, the company supports the flow of agricultural commodities, industrial inputs, construction materials, machinery, and other goods within its broader business network.
          </motion.p>
        </motion.div>

        {/* Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 items-start">
          
          {/* Left Column: Warehousing (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-10">
            
            {/* Hero Image with Stat Overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group"
            >
              <motion.div style={{ scale: imageScale }} className="absolute inset-0 w-full h-full">
                {/* Fallback to /factory.jpg or similar placeholder */}
                <Image 
                  src="/factory.jpg" 
                  alt="Modern warehouse facility" 
                  fill 
                  className="object-cover"
                />
              </motion.div>
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-transparent transition-opacity duration-500"></div>
              
              {/* Statistic Overlay */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-2xl overflow-hidden">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
                
                <h3 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight">
                  6,850 <span className="text-3xl text-primary">m²</span>
                </h3>
                <h4 className="text-lg md:text-xl font-bold text-white mb-2">Built Facilities / Warehouse Space</h4>
                <p className="text-sm md:text-base text-slate-300 font-medium max-w-md leading-relaxed">
                  Purpose-built facilities supporting Jarra Holdings' diversified business operations.
                </p>
              </div>
            </motion.div>

            {/* Warehousing Concepts */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Warehouse className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-slate-900">Supporting the Flow of Goods</h3>
              </div>
              <p className="text-slate-600 mb-8 font-medium">
                Our facilities provide an operational foundation for handling and supporting the movement of goods across Jarra Holdings' diverse business activities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-primary/30 transition-colors">
                  <Boxes className="w-5 h-5 text-slate-400 mb-3" />
                  <div className="text-sm font-bold text-slate-900 mb-2">STORAGE</div>
                  <p className="text-xs text-slate-500 leading-relaxed">Supporting the organized holding of goods and materials.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-primary/30 transition-colors">
                  <PackageCheck className="w-5 h-5 text-slate-400 mb-3" />
                  <div className="text-sm font-bold text-slate-900 mb-2">AVAILABILITY</div>
                  <p className="text-xs text-slate-500 leading-relaxed">Helping maintain access to goods as they move through business operations.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-primary/30 transition-colors">
                  <TrendingUp className="w-5 h-5 text-slate-400 mb-3" />
                  <div className="text-sm font-bold text-slate-900 mb-2">MOVEMENT</div>
                  <p className="text-xs text-slate-500 leading-relaxed">Supporting the transition of goods from sourcing toward market activity.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Trading Narrative (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-primary font-bold tracking-widest text-xs uppercase">TRADING</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                Connecting Goods With Market Demand
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Jarra Holdings' trading activities are driven by market needs, bringing together commodities, industrial goods, and other business inputs with customers and market opportunities.
              </p>
            </motion.div>

            {/* Editorial Blocks */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full pointer-events-none border-l border-b border-slate-100"></div>
              
              <div className="mb-8 relative z-10">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">MARKET CONNECTION</h4>
                <h5 className="text-xl font-bold text-slate-900 mb-3">Responding to Market Needs</h5>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Jarra Holdings seeks to bridge market gaps by connecting supply with demand across the commodity and industrial markets it serves.
                </p>
              </div>

              <div className="h-px w-full bg-slate-100 mb-8"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Sprout className="w-4 h-4 text-green-600" />
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">AGRICULTURE & END USERS</h4>
                </div>
                <h5 className="text-xl font-bold text-slate-900 mb-3">Serving Markets Close to the Ground</h5>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our business activities are designed to connect market opportunities with real customer needs, including the agricultural communities that form an important part of Ethiopia's economy.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Trading Visualization (Full width) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 bg-[#0F172A] rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl border border-slate-800"
        >
          {/* Subtle Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_70%)]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full mx-auto max-w-5xl">
             <NodeItem title="SUPPLY" delay={0.1} />
             <FlowArrowMobile />
             <FlowArrow delay={0.3} />
             
             <NodeItem title="JARRA HOLDINGS" delay={0.4} />
             <FlowArrowMobile />
             <FlowArrow delay={0.6} />
             
             <NodeItem title="TRADING" active delay={0.7} />
             <FlowArrowMobile />
             <FlowArrow delay={0.9} />
             
             <NodeItem title="MARKET DEMAND" delay={1.0} />
             <FlowArrowMobile />
             <FlowArrow delay={1.2} />
             
             <NodeItem title="CUSTOMERS" delay={1.3} />
          </div>
        </motion.div>

        {/* Business Flow */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="pt-16 border-t border-slate-200"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8">
            {[
              { num: "01", title: "SOURCE", desc: "Identify supply and market opportunities" },
              { num: "02", title: "RECEIVE", desc: "Bring goods into the operational network" },
              { num: "03", title: "STORE", desc: "Support goods through warehouse infrastructure" },
              { num: "04", title: "TRADE", desc: "Connect goods with market demand" },
              { num: "05", title: "VALUE", desc: "Create value for customers and stakeholders" }
            ].map((step, idx) => (
              <motion.div key={idx} variants={itemVariants} className="relative group">
                <div className="text-primary font-mono text-sm mb-3 font-semibold">{step.num}</div>
                <h4 className="text-sm font-bold tracking-wider mb-2 text-slate-900 group-hover:text-primary transition-colors">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed pr-4">{step.desc}</p>
                
                {/* Desktop connecting line */}
                {idx < 4 && (
                  <div className="hidden md:block absolute top-2 right-0 w-full h-px bg-slate-200 -z-10 translate-x-1/2">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-slate-300 rotate-45"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
