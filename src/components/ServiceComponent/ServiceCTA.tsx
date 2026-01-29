"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Send, ExternalLink, Sparkles, ArrowRight } from "lucide-react";

const ServiceCTA = () => {
  return (
    <section className="py-40 bg-white relative overflow-hidden px-6 md:px-12 lg:px-20">
      {/* Immersive Background Effects */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand/[0.03] blur-[150px] rounded-full" />
         <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-teal-500/[0.03] blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
           viewport={{ once: true }}
           className="text-center"
         >
           <motion.div 
             animate={{ rotate: [0, 360] }}
             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             className="w-20 h-20 mx-auto mb-10 flex items-center justify-center rounded-full bg-slate-50 border border-slate-100 shadow-sm"
           >
             <Sparkles size={32} className="text-brand" />
           </motion.div>

           <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none uppercase">
             Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-teal-400">Transform?</span>
           </h2>
           
           <p className="text-xl md:text-2xl text-slate-500 mb-16 max-w-3xl mx-auto font-medium leading-relaxed tracking-tight">
             Join the elite tier of companies leveraging Nexflow to obsolete their competition. Your digital evolution starts with a single high-performance decision.
           </p>

           <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/contact" className="group relative w-full sm:w-auto px-12 py-6 bg-slate-900 text-white font-black rounded-full uppercase tracking-widest text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
                <span className="relative z-10 flex items-center gap-3">
                  Initiate Launch <Send size={20} />
                </span>
                <div className="absolute inset-0 bg-brand scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
              </Link>

              <Link href="/Portfolio" className="group flex items-center gap-3 px-12 py-6 bg-transparent border-2 border-slate-200 text-slate-900 font-black rounded-full hover:bg-slate-50 transition-all text-lg tracking-widest uppercase hover:scale-105 active:scale-95">
                View Intel <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
           </div>
        </motion.div>
      </div>

      {/* Decorative Branding Text */}
      <div className="absolute bottom-10 right-10 text-sm font-black text-slate-900/[0.03] tracking-[1em] uppercase select-none pointer-events-none">
        FUTURE PROOF YOUR GROWTH
      </div>
    </section>
  );
};

export default ServiceCTA;
