"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

const ServiceProcess = () => {
  return (
    <section className="py-32 bg-slate-50 relative px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Decorative Text */}
      <div className="absolute top-10 left-10 text-[15vw] font-black text-slate-100/50 leading-none pointer-events-none select-none">
        PROCESS
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          className="mb-32 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-black tracking-[0.4em] uppercase text-brand mb-6 block">The Workflow</span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-950 mb-8 tracking-tighter uppercase leading-[0.9]">
            Engineered for <br />
            <span className="text-slate-400">Precision.</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-xl font-medium leading-relaxed italic">
            From architecture to optimization, we follow a rigorous, high-performance workflow designed for maximum impact.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Connection Line - Integrated */}
          <div className="absolute left-[2.5rem] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 z-0 hidden md:block" />

          <div className="space-y-12 md:space-y-24 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Step Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>
                   <div className={`group bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
                      <span className="text-xs font-black tracking-widest text-brand mb-4 block uppercase">Phase 0{index + 1}</span>
                      <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tighter uppercase">{step.title}</h3>
                      <p className="text-lg text-slate-500 leading-relaxed font-medium">
                        {step.description}
                      </p>
                   </div>
                </div>

                {/* Central Circle */}
                <div className="hidden md:flex flex-shrink-0 w-20 h-20 rounded-full bg-white border-8 border-slate-50 flex items-center justify-center text-2xl font-black text-slate-900 shadow-xl relative z-10 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                   {index + 1}
                </div>

                {/* Empty Half for Grid Balance */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
