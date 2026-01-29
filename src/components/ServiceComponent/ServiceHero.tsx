"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, ArrowRight, Sparkles } from "lucide-react";

const ServiceHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white text-slate-950 pt-20">
      {/* Immersive Light Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_10%,rgba(45,122,113,0.03)_0%,rgba(255,255,255,1)_60%)]" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Floating Particles/Elements */}
      <div className="absolute inset-0 z-0 opacity-40">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-brand"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm"
          >
            <Sparkles size={14} className="text-brand" />
            <span className="text-xs font-black tracking-[0.3em] uppercase text-slate-500">Nexflow Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-[0.85] uppercase text-slate-900"
          >
            Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-teal-400 to-blue-500">
              High Performance
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed tracking-tight"
          >
            We bridge the gap between human intuition and machine precision. Strategic digital solutions engineered for global dominance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/contact" className="group relative px-10 py-5 bg-slate-900 text-white font-black rounded-full uppercase tracking-widest text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-brand scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
            </Link>

            <Link href="#marketing-services" className="px-10 py-5 bg-slate-50 hover:bg-slate-100 text-slate-900 font-black rounded-full border border-slate-200 uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent opacity-50 pointer-events-none" />
      
      {/* 3D-ish Floating Element */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-[15%] hidden lg:block z-10"
      >
        <div className="w-40 h-40 bg-white shadow-2xl rounded-[2.5rem] border border-slate-100 flex items-center justify-center rotate-12">
          <Zap size={60} className="text-brand drop-shadow-[0_0_20px_rgba(45,122,113,0.3)]" />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-200 rounded-full flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 bg-brand rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceHero;
