"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

const ServiceProcess = () => {
  return (
    <section className="py-24 bg-slate-50 relative px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">
            Our <span className="text-brand">Process</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            From the initial handshake to the final deliverable, we follow a transparent and efficient workflow to ensure your success.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden lg:block z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center text-3xl font-black text-slate-900 mb-6 group-hover:border-brand group-hover:text-brand transition-all shadow-xl relative z-10">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
