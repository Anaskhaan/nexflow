"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqsData } from "@/lib/data";
import { Plus, Minus } from "lucide-react";

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
            {/* Left: Heading */}
            <div>
                 <span className="text-xs font-black tracking-[0.3em] uppercase text-brand mb-6 block">Common Questions</span>
                 <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
                     Clarity in <br />
                     <span className="text-slate-400">Chaos.</span>
                 </h2>
                 <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-sm">
                     Digital marketing is complex. We make it simple. Here is what you need to know before we start.
                 </p>
            </div>

            {/* Right: Accordion */}
            <div className="space-y-4">
                {faqsData.map((faq, i) => (
                    <div key={i} className="border-b border-slate-200 last:border-0 pb-4">
                        <button 
                            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                            className="w-full flex items-start justify-between py-4 text-left group"
                        >
                            <span className={`text-xl font-bold transition-colors duration-300 ${activeIndex === i ? 'text-brand' : 'text-slate-900 group-hover:text-brand'}`}>
                                {faq.question}
                            </span>
                            <span className={`ml-4 p-1 rounded-full border transition-all duration-300 ${activeIndex === i ? 'border-brand bg-brand text-white rotate-180' : 'border-slate-300 text-slate-400 group-hover:border-brand'}`}>
                                {activeIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                            </span>
                        </button>
                        <AnimatePresence>
                            {activeIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-slate-600 leading-relaxed pb-8 pt-2 pr-12">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
