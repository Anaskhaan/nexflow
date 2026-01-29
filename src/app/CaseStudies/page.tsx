"use client";

import Link from "next/link";
import Image from "next/image";
import { caseStudyData } from "@/components/Helper/caseStudyData";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CaseStudiesPage = () => {
  return (
    <div className="w-full bg-white text-slate-900 pt-20">
      {/* Immersive Typographic Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl -z-10 animate-pulse" />
        
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-slate-900" />
              <span className="text-xs font-black tracking-[0.3em] uppercase">Our Impact</span>
            </div>
            
            <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase text-slate-900">
              Proven <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-teal-600">
                Results
              </span>
            </h1>
            
            <div className="max-w-xl ml-auto mt-12">
              <p className="text-xl font-medium leading-relaxed text-slate-600">
                We don't just promise growth; we engineer it. Explore how our data-driven strategies have transformed businesses across industries.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Staggered Masonry/Bento Grid */}
      <section className="px-4 md:px-8 pb-32">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {caseStudyData.map((study, index) => {
            // Determine card size layout based on index for a "bento" feel
            const isLarge = index % 3 === 0;
            const colSpan = isLarge ? "lg:col-span-8" : "lg:col-span-4";
            
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${colSpan} group relative rounded-[2rem] overflow-hidden bg-slate-100 min-h-[400px] lg:min-h-[500px]`}
              >
                <Link href={`/CaseStudies/${study.id}`} className="block w-full h-full">
                  {/* Background Image with Zoom Effect */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors duration-500" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-12">
                    <div className="flex justify-between items-start">
                      <span className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[10px] font-black tracking-widest uppercase text-white">
                        {study.category}
                      </span>
                      
                      <div className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center transform translate-x-4 -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>

                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className={`text-white font-black uppercase tracking-tight mb-4 ${isLarge ? 'text-4xl md:text-6xl' : 'text-3xl'}`}>
                        {study.title}
                      </h3>
                      
                      {/* Detailed Metrics Only Show on Large Cards or Hover */}
                      <div className="grid grid-cols-2 gap-8 mt-8 border-t border-white/20 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {study.metrics?.slice(0, 2).map((metric: any, i: number) => (
                          <div key={i}>
                            <p className="text-2xl md:text-3xl font-black text-brand">{metric.value}</p>
                            <p className="text-[10px] uppercase tracking-widest text-slate-300">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        View Case Study <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-slate-900 text-white rounded-t-[3rem] -mt-12 relative z-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-12 uppercase">
            Start Your <span className="text-brand">Growth</span> Story
          </h2>
          <Link
            href="/Contact"
            className="inline-flex items-center gap-3 px-12 py-6 bg-brand text-white rounded-full text-sm font-black uppercase tracking-widest hover:bg-brand/90 transition-all hover:scale-105"
          >
            Get a Free Audit
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
