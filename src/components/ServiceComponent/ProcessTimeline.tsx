"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface ProcessTimelineProps {
  process: string[];
  color: string;
}

const ProcessTimeline = ({ process, color }: ProcessTimelineProps) => {
  return (
    <div className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A systematic approach that delivers consistent, exceptional results every time.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100 relative z-10">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg"
                      style={{ backgroundColor: color }}
                    >
                      {index + 1}
                    </div>
                    {index < process.length - 1 && (
                      <ArrowRight 
                        size={24} 
                        className="text-slate-300 hidden lg:block"
                      />
                    )}
                  </div>

                  {/* Step Content */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                    {step}
                  </h3>

                  {/* Progress Indicator */}
                  <div className="flex items-center gap-2 mt-4">
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    </div>
                    <CheckCircle2 size={20} style={{ color }} />
                  </div>
                </div>

                {/* Connector Arrow - Mobile */}
                {index < process.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <ArrowRight 
                      size={24} 
                      className="text-slate-300 rotate-90"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div 
            className="inline-block rounded-2xl p-8 shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${color}15, ${color}08)`
            }}
          >
            <p className="text-lg font-bold text-slate-900 mb-4">
              Ready to get started with our proven process?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: color }}
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProcessTimeline;
