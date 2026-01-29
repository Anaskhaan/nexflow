"use client";

import { useRef } from "react";
import ROIcalculator from "@/components/Resources/ROIcalculator";
import Image from "next/image";
import roiImage from "@/assets/roical.webp";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function SaasROIClient() {
  const calculatorRef = useRef<HTMLDivElement>(null);

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section className="relative bg-white text-slate-900 py-40 overflow-hidden">
        {/* Abstract floating shapes */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-50" />

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="grid lg:grid-cols-2 items-center gap-20">
            {/* Context Area */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="text-brand font-black tracking-[0.3em] uppercase text-xs">Proprietary Tool</span>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-slate-900 uppercase">
                  ROI <span className="text-brand italic serif">Intelligence</span>
                </h1>
              </div>
              
              <p className="text-xl text-slate-500 max-w-xl font-medium leading-relaxed">
                Beyond simple math. Nexflow's ROI Intelligence analyzes unit economics to reveal your next scaling opportunity with surgical precision.
              </p>

              <div className="flex items-center gap-6">
                <button
                  onClick={scrollToCalculator}
                  className="bg-slate-900 hover:bg-brand px-10 py-5 rounded-2xl text-white text-sm font-black uppercase tracking-widest shadow-2xl hover:shadow-brand/20 transition-all duration-300"
                >
                  Start Forecasting
                </button>
                <div className="hidden md:block h-px w-20 bg-slate-200" />
              </div>
            </motion.div>

            {/* Visual Area */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 relative group">
                <Image
                  src={roiImage}
                  alt="ROI Intelligence Dashboard"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              
              {/* Floating Pro Tip */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 max-w-[240px] hidden md:block"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0">
                    <TrendingUp size={16} />
                  </div>
                  <p className="text-xs font-bold text-slate-600 leading-relaxed">
                    "Data beats intuition every time. Map your path to $1M ARR."
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Component */}
      <div ref={calculatorRef}>
        <ROIcalculator />
      </div>
    </div>
  );
}
