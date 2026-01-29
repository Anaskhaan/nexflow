"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

interface ServiceStatsProps {
  containerVariants: any;
  itemVariants: any;
}

const ServiceStats = ({ containerVariants, itemVariants }: ServiceStatsProps) => {
  return (
    <section className="py-20 bg-white relative px-6 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:border-brand/20"
          >
            {/* Stat Number */}
            <div className="text-4xl md:text-6xl font-black text-slate-900 mb-2 group-hover:text-brand transition-colors tracking-tighter">
              {stat.value}
            </div>
            
            {/* Stat Label */}
            <div className="text-slate-500 text-xs md:text-sm uppercase tracking-[0.2em] font-black">
              {stat.label}
            </div>

            {/* Decorative Dot */}
            <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-brand/10 group-hover:bg-brand group-hover:animate-ping transition-colors" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServiceStats;
