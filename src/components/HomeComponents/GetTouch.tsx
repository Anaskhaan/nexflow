"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GetInTouch() {
  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Background Gradients */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
             <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-brand font-black tracking-[0.3em] uppercase mb-6 block"
             >
                Start Your Journey
             </motion.span>
             
             <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-12"
             >
                 READY TO <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-teal-400">SCALE?</span>
             </motion.h2>

             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
             >
                 <Link href="/contact">
                     <button className="group relative px-12 py-6 bg-white text-slate-900 rounded-full font-black uppercase tracking-widest text-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                         <span className="relative z-10 flex items-center gap-3">
                             Get Started Now <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                         </span>
                         <div className="absolute inset-0 bg-brand scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                         <span className="absolute inset-0 z-10 flex items-center justify-center gap-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                             Get Started Now <ArrowRight className="translate-x-1" />
                         </span>
                     </button>
                 </Link>
             </motion.div>
        </div>
    </section>
  );
}
