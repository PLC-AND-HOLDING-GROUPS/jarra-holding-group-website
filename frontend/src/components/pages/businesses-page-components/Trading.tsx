"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Network, TrendingUp, BarChart3, Users, Globe2, ArrowRight } from 'lucide-react';

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

// Relationship Network Data
const relationshipNodes = [
  { id: 'supplier', label: 'SUPPLIER', desc: 'Reliable sourcing and commercial relationships', x: 50, y: 10 },
  { id: 'jarra', label: 'JARRA HOLDINGS', desc: 'Connecting supply with demand', x: 50, y: 45, main: true },
  { id: 'customer', label: 'CUSTOMERS', desc: 'Responding to real market needs', x: 20, y: 80 },
  { id: 'market', label: 'MARKETS', desc: 'Understanding opportunities and demand', x: 80, y: 80 },
  { id: 'value', label: 'VALUE', desc: 'Long-term commercial impact', x: 50, y: 110, highlight: true }
];

export default function Trading() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const [activeRelNode, setActiveRelNode] = useState<string | null>(null);

  // Market gap animation values
  const gapWidth = useTransform(useScroll({ target: sectionRef, offset: ["start end", "center center"] }).scrollYProgress, [0, 1], ["40%", "5%"]);

  return (
    <section ref={sectionRef} className="relative w-full bg-white text-slate-900 pt-24 pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,23,42,0.03),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="max-w-4xl mb-24"
        >
          <motion.span variants={itemVariants} className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
            TRADING
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
            Connecting Supply With Market Opportunity
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-slate-700 font-medium leading-relaxed mb-4">
            Jarra Holdings' trading activities are built around understanding market needs, identifying opportunities, connecting supply with demand, and creating value for customers and stakeholders.
          </motion.p>
          <motion.p variants={itemVariants} className="text-base text-slate-500 leading-relaxed max-w-3xl">
            Through its broader business network, Jarra Holdings participates in commercial activities that connect commodities, industrial goods, suppliers, customers, and end markets.
          </motion.p>
        </motion.div>

        {/* Hero Visual + Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center mb-32">
          
          {/* Left Principles */}
          <div className="lg:col-span-3 flex flex-col gap-12 lg:pr-8 order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="text-primary font-mono text-sm font-bold mb-2">01</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">Understand</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Recognize market needs and identify opportunities.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-primary font-mono text-sm font-bold mb-2">03</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">Respond</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Act on demand through appropriate sourcing and commercial activity.</p>
            </motion.div>
          </div>

          {/* Center Network */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 relative h-[500px] flex items-center justify-center bg-slate-50/50 rounded-full border border-slate-100 shadow-[inset_0_0_100px_rgba(0,0,0,0.02)] order-1 lg:order-2"
          >
             <div className="absolute inset-0 animate-[spin_40s_linear_infinite] border-[0.5px] border-slate-200 border-dashed rounded-full pointer-events-none"></div>
             
             {/* Central Node */}
             <div className="relative z-20 w-40 h-40 bg-slate-900 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                <h3 className="text-white font-bold text-center leading-none text-lg">JARRA<br/><span className="text-primary text-xs uppercase tracking-widest">Holdings</span></h3>
             </div>

             {/* Orbital Nodes */}
             <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md border border-slate-100 font-bold text-xs tracking-widest text-slate-700">SUPPLIERS</div>
                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md border border-slate-100 font-bold text-xs tracking-widest text-slate-700">CUSTOMERS</div>
                <div className="absolute left-[5%] top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-md border border-slate-100 font-bold text-xs tracking-widest text-slate-700">MARKETS</div>
                <div className="absolute right-[5%] top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-md border border-slate-100 font-bold text-xs tracking-widest text-slate-700">OPPORTUNITIES</div>

                {/* SVG Connections */}
                <svg className="absolute inset-0 w-full h-full -z-10 text-slate-200">
                  <motion.line x1="50%" y1="15%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
                  <motion.line x1="50%" y1="85%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
                  <motion.line x1="15%" y1="50%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
                  <motion.line x1="85%" y1="50%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
                </svg>
             </div>
          </motion.div>

          {/* Right Principles */}
          <div className="lg:col-span-3 flex flex-col gap-12 lg:pl-8 order-3 lg:order-3 text-left lg:text-right">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-primary font-mono text-sm font-bold mb-2">02</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">Connect</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Bring suppliers, customers, and market opportunities together.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="text-primary font-mono text-sm font-bold mb-2">04</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">Create Value</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Build lasting value for customers, stakeholders, and the wider business ecosystem.</p>
            </motion.div>
          </div>
        </div>

        {/* Philosophy & Market Gap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
           {/* Approach */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
             className="bg-slate-900 text-white p-10 md:p-12 rounded-3xl relative overflow-hidden"
           >
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
             <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">OUR TRADING APPROACH</h4>
             <h3 className="text-3xl font-bold mb-6 leading-tight">Understanding the Market Before Moving the Market</h3>
             <p className="text-slate-300 leading-relaxed">
               Trading begins with understanding. Jarra Holdings seeks to identify gaps, respond to market demand, connect reliable supply with opportunities, and build commercial relationships that create sustainable value.
             </p>
           </motion.div>

           {/* Market Gap Visual */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
             className="bg-slate-50 border border-slate-200 p-10 md:p-12 rounded-3xl flex flex-col justify-center relative overflow-hidden"
           >
              <div className="flex justify-between font-bold text-xs uppercase tracking-widest text-slate-400 mb-8">
                <span>Supply</span>
                <span>Demand</span>
              </div>
              
              {/* Dynamic Gap */}
              <div className="relative h-16 w-full flex items-center justify-between mb-8">
                 <motion.div className="h-full bg-slate-200 rounded-r-xl" style={{ width: gapWidth }}></motion.div>
                 <div className="absolute left-1/2 -translate-x-1/2 font-bold text-slate-800 tracking-widest uppercase">MARKET GAP</div>
                 <motion.div className="h-full bg-slate-200 rounded-l-xl" style={{ width: gapWidth }}></motion.div>
              </div>

              <div className="flex flex-col items-center justify-center">
                 <div className="w-px h-8 bg-slate-300 mb-4"></div>
                 <div className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest mb-4 z-10">JARRA HOLDINGS</div>
                 <div className="w-px h-8 bg-slate-300 mb-4"></div>
                 <div className="font-bold text-slate-900 tracking-widest">SUPPLY + DEMAND</div>
              </div>
           </motion.div>
        </div>

        {/* Customer Connection & Relationship Network */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-32 items-center">
          
          <motion.div 
             initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
             className="lg:col-span-5"
          >
             <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">Closer to the Markets We Serve</h3>
             <p className="text-slate-600 text-lg leading-relaxed">
               Our trading activities are ultimately driven by the needs of customers and end users. By connecting market opportunities with supply, Jarra Holdings works to ensure that its commercial activities create meaningful value beyond the transaction itself.
             </p>

             <div className="mt-8 bg-slate-50 p-6 rounded-xl border border-slate-100">
               {activeRelNode ? (
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={activeRelNode}>
                   <h4 className="font-bold text-primary mb-2 uppercase text-sm tracking-widest">{relationshipNodes.find(n => n.id === activeRelNode)?.label}</h4>
                   <p className="text-slate-700">{relationshipNodes.find(n => n.id === activeRelNode)?.desc}</p>
                 </motion.div>
               ) : (
                 <div className="text-slate-400 italic text-sm">Hover over the network nodes to explore relationships.</div>
               )}
             </div>
          </motion.div>

          <div className="lg:col-span-7 relative h-[450px] bg-white border border-slate-100 rounded-3xl shadow-xl overflow-hidden">
             {/* Lines */}
             <svg className="absolute inset-0 w-full h-full text-slate-200 z-0">
                <line x1="50%" y1="10%" x2="50%" y2="45%" stroke="currentColor" strokeWidth="2" />
                <line x1="50%" y1="45%" x2="20%" y2="80%" stroke="currentColor" strokeWidth="2" />
                <line x1="50%" y1="45%" x2="80%" y2="80%" stroke="currentColor" strokeWidth="2" />
                <line x1="20%" y1="80%" x2="50%" y2="110%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="80%" y1="80%" x2="50%" y2="110%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
             </svg>
             
             {/* Nodes */}
             {relationshipNodes.map((node) => (
               <motion.div
                 key={node.id}
                 onMouseEnter={() => setActiveRelNode(node.id)}
                 onMouseLeave={() => setActiveRelNode(null)}
                 className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer transition-all duration-300 ${
                   node.main ? 'bg-slate-900 text-white px-6 py-4 rounded-xl shadow-lg' :
                   node.highlight ? 'bg-primary text-white px-6 py-3 rounded-full shadow-lg font-bold' :
                   'bg-white text-slate-800 px-6 py-3 rounded-full shadow-md border border-slate-200 font-bold text-sm'
                 } ${activeRelNode === node.id ? 'scale-110 shadow-xl' : 'scale-100'}`}
                 style={{ left: `${node.x}%`, top: `${node.y}%` }}
               >
                 {node.label}
               </motion.div>
             ))}
          </div>
        </div>

        {/* Big Statement & Ecosystem */}
        <div className="py-20 mb-20 text-center relative">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }}>
            <h2 className="text-6xl md:text-8xl font-black uppercase text-slate-900 tracking-tighter">MORE</h2>
            <p className="text-3xl md:text-5xl font-light italic text-slate-400 my-2">than a</p>
            <h2 className="text-6xl md:text-8xl font-black uppercase text-slate-900 tracking-tighter">transaction.</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="mt-8 text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Trading is not only about moving goods from one place to another. It is about understanding people, markets, opportunities, and timing—and creating relationships that support sustainable business growth.
          </motion.p>

          {/* Floating Ecosystem */}
          <div className="relative h-80 w-full max-w-4xl mx-auto mt-20 flex justify-center items-center pointer-events-none">
             <div className="text-4xl font-black text-primary z-10 tracking-widest bg-white/80 px-4 py-2 backdrop-blur-sm rounded-lg">TRADE</div>
             
             {['SUPPLY', 'DEMAND', 'RELATIONSHIPS', 'OPPORTUNITY', 'MARKET', 'VALUE'].map((word, i) => {
               const angle = (i * 60) * (Math.PI / 180);
               const radiusX = typeof window !== 'undefined' && window.innerWidth < 768 ? 120 : 250;
               const radiusY = typeof window !== 'undefined' && window.innerWidth < 768 ? 80 : 120;
               const x = Math.cos(angle) * radiusX;
               const y = Math.sin(angle) * radiusY;
               
               return (
                 <motion.div 
                   key={word}
                   animate={{ 
                     x: [x, x + 10, x - 10, x], 
                     y: [y, y - 10, y + 10, y] 
                   }}
                   transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                   className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-slate-300 tracking-widest text-sm md:text-base uppercase"
                 >
                   {word}
                 </motion.div>
               )
             })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32 max-w-3xl mx-auto">
           <motion.div 
             initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
             className="bg-primary/5 border border-primary/10 rounded-2xl p-8 text-center"
           >
             <div className="text-4xl font-bold text-primary mb-2">$5M+</div>
             <div className="text-sm font-bold text-slate-800 uppercase tracking-widest">Export Performance</div>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
             className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center"
           >
             <div className="text-4xl font-bold text-slate-900 mb-2">$20M+</div>
             <div className="text-sm font-bold text-slate-600 uppercase tracking-widest">Annual Imported Goods</div>
           </motion.div>
        </div>

        {/* Trading Cycle Loop */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="border-t border-slate-200 pt-20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative">
            
            {/* Desktop Loop Line */}
            <div className="hidden md:block absolute top-1/2 left-8 right-8 h-32 -translate-y-1/2 border-t-2 border-b-2 border-r-2 border-slate-200 rounded-r-full -z-10"></div>
            <div className="hidden md:block absolute top-1/2 left-8 right-8 h-32 -translate-y-1/2 border-t-2 border-b-2 border-l-2 border-slate-200 rounded-l-full -z-10"></div>

            {[
              { label: 'MARKET', desc: 'Understand demand' },
              { label: 'OPPORTUNITY', desc: 'Identify the gap' },
              { label: 'CONNECTION', desc: 'Connect supply' },
              { label: 'TRANSACTION', desc: 'Facilitate trade' },
              { label: 'VALUE', desc: 'Create lasting impact' }
            ].map((step, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-white px-6 py-4 rounded-xl border border-slate-200 shadow-sm text-center min-w-[160px] z-10">
                 <div className="text-primary font-bold text-xs tracking-widest uppercase mb-1">{step.label}</div>
                 <div className="text-slate-600 text-sm">{step.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
