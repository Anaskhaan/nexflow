"use client";

import { motion } from "framer-motion";

interface AboutHeroProps {
  gradientControls?: any;
  parallaxY1?: any;
  floatingAnimation?: any;
}

const AboutHero = ({ gradientControls, parallaxY1, floatingAnimation }: AboutHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0">
             <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-3 mb-8"
                >
                    <div className="w-12 h-[2px] bg-brand" />
                    <span className="text-xs font-black tracking-[0.3em] uppercase text-brand">Who We Are</span>
                </motion.div>

                <motion.h1
                    className="text-7xl md:text-[10rem] font-black leading-[0.85] tracking-tighter text-slate-900 mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    ARCHITECTS <br />
                    OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-teal-400">GROWTH.</span>
                </motion.h1>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.p
                        className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        We are not just a digital agency. We are the engine room behind the brands you envy.
                    </motion.p>
                    
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <p className="text-slate-500 leading-relaxed">
                            Since 2015, we've obsessed over one thing: <strong className="text-slate-900">how to build digital ecosystems that scale.</strong> From the first line of code to the final conversion, we engineer specific outcomes for bold companies.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
            className="absolute bottom-10 left-6 text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
        >
            <div className="w-1 h-12 bg-slate-200 mt-2 relative overflow-hidden">
                <motion.div 
                    className="absolute top-0 left-0 w-full h-1/2 bg-brand"
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
            </div>
            Scroll
        </motion.div>
    </section>
  );
};

export default AboutHero;
