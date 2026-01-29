"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Stat Hook
const useStatInView = (ref: React.RefObject<Element>) => {
    return useInView(ref, { once: true, margin: "-100px" });
}

export const About = () => {
    const sectionRef = useRef(null);
    const isInView = useStatInView(sectionRef);

    const stats = [
        { label: "Client Success Rate", value: "98%" },
        { label: "Revenue Generated", value: "$50M+" },
        { label: "Active Years", value: "10+" }
    ];

    return (
        <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
             
             <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                 <div className="grid lg:grid-cols-2 gap-20 items-center">
                     
                     {/* Left: Narrative */}
                     <div className="space-y-10">
                         <div className="space-y-4">
                             <motion.span 
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6 }}
                                className="text-xs font-black tracking-[0.3em] uppercase text-brand"
                             >
                                 Our DNA
                             </motion.span>
                             <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9]"
                             >
                                 We Don't Just Build. <br />
                                 <span className="text-slate-400">We Evolve.</span>
                             </motion.h2>
                         </div>
                         
                         <motion.p 
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-xl font-medium text-slate-600 leading-relaxed max-w-xl"
                         >
                             Nexflow was born from a simple belief: digital potential is limitless, but strategy is the bottleneck. We combine elite engineering with high-octane marketing to smash those bottlenecks.
                         </motion.p>
                         
                         <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col gap-4"
                         >
                             {["Data-Driven Decision Making", "Full-Stack Engineering Excellence", "ROI-First Marketing Architecture"].map((item, i) => (
                                 <div key={i} className="flex items-center gap-3">
                                     <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                                         <CheckCircle2 size={14} />
                                     </div>
                                     <span className="font-bold text-slate-900 text-sm md:text-base">{item}</span>
                                 </div>
                             ))}
                         </motion.div>
                         
                         <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 }}
                         >
                            <Link href="/about">
                                <button className="group flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-900 hover:text-brand transition-colors">
                                    More About Us 
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                         </motion.div>
                     </div>

                     {/* Right: Stats & Visuals */}
                     <div className="relative">
                         {/* Image Grid */}
                         <div className="grid grid-cols-2 gap-4">
                             <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="space-y-4 translate-y-12"
                             >
                                 <div className="bg-slate-900 rounded-[2rem] p-8 aspect-[4/5] flex flex-col justify-between text-white relative overflow-hidden group">
                                     <div className="absolute inset-0 bg-brand opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                                     <span className="text-6xl font-black tracking-tighter">{stats[0].value}</span>
                                     <span className="text-sm font-bold uppercase tracking-widest text-slate-400">{stats[0].label}</span>
                                 </div>
                                 <div className="bg-slate-100 rounded-[2rem] aspect-square" />
                             </motion.div>
                             
                             <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="space-y-4"
                             >
                                 <div className="bg-slate-100 rounded-[2rem] aspect-square" />
                                 <div className="bg-brand rounded-[2rem] p-8 aspect-[4/5] flex flex-col justify-between text-white shadow-2xl relative overflow-hidden">
                                     <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                     <span className="text-6xl font-black tracking-tighter">{stats[1].value}</span>
                                     <span className="text-sm font-bold uppercase tracking-widest text-brand-100">{stats[1].label}</span>
                                 </div>
                             </motion.div>
                         </div>
                     </div>
                 </div>
             </div>
        </section>
    );
};
