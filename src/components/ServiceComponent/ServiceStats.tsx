"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

interface ServiceStatsProps {
  containerVariants: any;
  itemVariants: any;
}

const ServiceStats = ({ containerVariants, itemVariants }: ServiceStatsProps) => {
  return (
    <section className="py-20 relative px-6 md:px-12 lg:px-20 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="text-center group"
          >
            <div className="text-4xl md:text-6xl font-black text-slate-900 mb-2 group-hover:text-brand transition-colors tracking-tighter">
              {stat.value}
            </div>
            <div className="text-slate-500 text-sm md:text-base uppercase tracking-widest font-bold">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServiceStats;
