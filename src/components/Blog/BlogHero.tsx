"use client";

import { motion } from "framer-motion";

export default function BlogHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-black tracking-[0.4em] uppercase text-brand mb-6 block">Insights & Intelligence</span>
          <h1 className="text-6xl md:text-8xl font-black text-slate-950 mb-8 tracking-tighter uppercase leading-[0.85]">
            The <span className="text-slate-400">Nexflow</span> <br />
            Journal.
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Deep dives into engineering velocity, marketing dominance, and the future of digital commerce.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
