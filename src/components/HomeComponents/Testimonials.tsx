"use client";

import { testimonialData } from "@/lib/data";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-24 max-w-3xl mx-auto">
             <span className="text-xs font-black tracking-[0.3em] uppercase text-brand mb-6 block">Testimonials</span>
             <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-8">
                 Trust is Earned. <br />
                 <span className="text-slate-400">Not Given.</span>
             </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              key={testimonial.id}
              className="bg-slate-50 p-10 rounded-[2rem] relative group hover:bg-slate-900 transition-colors duration-500"
            >
              <Quote size={40} className="text-brand/20 group-hover:text-brand mb-8 transition-colors" />
              
              <p className="text-lg font-medium text-slate-600 mb-8 leading-relaxed group-hover:text-slate-300 transition-colors">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 group-hover:bg-slate-800 flex items-center justify-center text-lg font-bold text-slate-500 group-hover:text-white transition-colors">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-white transition-colors">{testimonial.name}</h4>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand">
                    {testimonial.role} @ {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
