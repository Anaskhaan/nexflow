"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

interface ProblemSolutionProps {
  painPoints: string[];
  agitation: string;
  solution: string;
  color: string;
}

const ProblemSolution = ({ painPoints, agitation, solution, color }: ProblemSolutionProps) => {
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
            The Challenge You're Facing
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We understand the struggles businesses face. Here's what might be holding you back.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <AlertCircle className="text-red-600" size={24} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">The Problem</h3>
              </div>

              <div className="space-y-4">
                {painPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-red-50 rounded-xl"
                  >
                    <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-700 font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-slate-700 font-medium leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>

              {/* Agitation */}
              <div className="mt-6 p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border-l-4 border-red-500">
                <p className="text-slate-800 font-semibold italic leading-relaxed">
                  "{agitation}"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className="rounded-3xl p-8 shadow-lg border-2 relative overflow-hidden"
              style={{ 
                background: `linear-gradient(135deg, ${color}10, ${color}05)`,
                borderColor: `${color}30`
              }}
            >
              {/* Decorative Element */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: color }}
              />

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: color }}
                >
                  <CheckCircle2 className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Our Solution</h3>
              </div>

              <div className="relative z-10">
                <p className="text-lg text-slate-700 leading-relaxed font-medium mb-6">
                  {solution}
                </p>

                {/* Benefits List */}
                <div className="space-y-3">
                  {[
                    "Proven methodology with measurable results",
                    "Tailored strategy for your unique needs",
                    "Transparent reporting and communication",
                    "Ongoing optimization and support"
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 size={20} style={{ color }} className="flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="mt-8 p-6 bg-white rounded-2xl shadow-md cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-black text-slate-900 mb-1">Ready to Transform?</div>
                      <div className="text-sm text-slate-600">Let's discuss your project</div>
                    </div>
                    <ArrowRight 
                      size={24} 
                      style={{ color }}
                      className="group-hover:translate-x-2 transition-transform"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolution;
