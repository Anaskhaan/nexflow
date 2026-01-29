"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Smartphone, Bot, Megaphone } from "lucide-react";

const Hero = () => {
    return (
        <div className="relative w-full min-h-screen bg-white text-slate-900 flex flex-col justify-center overflow-hidden pt-32 pb-20">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-brand/5 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[50vh] h-[50vh] bg-teal-500/5 rounded-full blur-[100px]" />

            <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Typography & Narrative */}
                    <div className="space-y-12">
                         <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                         >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-px w-12 bg-slate-900" />
                                <span className="text-xs font-black tracking-[0.3em] uppercase">The 360° Digital Ecosystem</span>
                            </div>
                            
                            <h1 className="text-6xl md:text-8xl xl:text-9xl font-black tracking-tighter uppercase leading-[0.9]">
                                Future <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-teal-600">
                                    Proof
                                </span> <br />
                                Your Growth
                            </h1>
                         </motion.div>
                         
                         <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="max-w-xl"
                         >
                            <p className="text-xl md:text-2xl font-medium leading-relaxed text-slate-600 mb-8">
                                We engineer unified digital experiences. From <span className="text-slate-900 font-bold">AI Automation</span> to <span className="text-slate-900 font-bold">Mobile Apps</span>, we connect every touchpoint of your business.
                            </p>
                            
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact">
                                    <button className="bg-slate-900 text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-brand transition-colors duration-300 flex items-center gap-2">
                                        Start Transformation <ArrowRight size={18} />
                                    </button>
                                </Link>
                                <Link href="/services">
                                    <button className="px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest border border-slate-200 hover:border-slate-900 transition-colors duration-300">
                                        Explore Ecosystem
                                    </button>
                                </Link>
                            </div>
                         </motion.div>
                    </div>

                    {/* Right: Visual Ecosystem */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative hidden lg:block h-[600px]"
                    >
                        {/* Central Hub */}
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200 z-10">
                            <div className="text-center">
                                <span className="block text-4xl font-black text-slate-900 tracking-tighter">NEX</span>
                                <span className="block text-sm font-bold uppercase tracking-widest text-brand">Core Engine</span>
                            </div>
                         </div>
                         
                         {/* Satellites */}
                         {[
                            { icon: Megaphone, label: "360 Marketing", pos: "top-0 left-1/2 -translate-x-1/2" },
                            { icon: Globe, label: "Web Platforms", pos: "bottom-1/4 right-0" },
                            { icon: Smartphone, label: "Mobile Apps", pos: "bottom-1/4 left-0" },
                            { icon: Bot, label: "AI Automation", pos: "top-1/4 right-10" }
                         ].map((item, i) => (
                             <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + (i * 0.1) }}
                                className={`absolute ${item.pos} bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center gap-3 w-48`}
                             >
                                <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center">
                                    <item.icon size={24} />
                                </div>
                                <span className="text-xs font-black uppercase tracking-wider">{item.label}</span>
                             </motion.div>
                         ))}
                         
                         {/* Connecting Lines (Decorative) */}
                         <svg className="absolute inset-0 w-full h-full -z-10 text-slate-200" style={{ overflow: "visible" }}>
                            <path d="M 300 300 L 300 100" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                            <path d="M 300 300 L 500 450" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                            <path d="M 300 300 L 100 450" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                         </svg>
                    </motion.div>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-px h-12 bg-slate-300" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Scroll</span>
            </motion.div>
        </div>
    );
};

export default Hero;
