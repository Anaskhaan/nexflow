"use client";

import Link from "next/link";
import { ChevronLeft, ArrowRight, TrendingUp, Target } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CaseStudyDetail } from "@/lib/data";

interface CaseStudyDetailClientProps {
  study: any; // Type as 'any' based on existing data pattern, but ideally CaseStudyDetail
}

const CaseStudyDetailClient = ({ study }: CaseStudyDetailClientProps) => {
  return (
    <div className="w-full bg-white text-slate-900 pb-32">
      {/* Cinematic Split Hero */}
      <section className="relative h-[90vh] grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-slate-900">
        {/* Visual Half */}
        <div className="relative h-1/2 lg:h-full w-full overflow-hidden">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover opacity-80 scale-105 animate-slow-pan"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900" />
        </div>

        {/* Content Half */}
        <div className="h-1/2 lg:h-full w-full flex flex-col justify-center px-8 md:px-20 relative z-10 bg-slate-900 text-white">
           <Link
            href="/Portfolio"
            className="absolute top-10 lg:top-20 left-8 md:left-20 flex items-center text-brand/80 hover:text-brand mb-12 transition-all font-black uppercase tracking-widest text-[10px]"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            <span>All Projects</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-brand font-black text-xs tracking-widest uppercase mb-8">
              {study.category}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
              {study.title}
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-xl border-l-4 border-brand pl-6 line-clamp-3">
              {study.overview}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Sticky Sidebar (Metrics & Info) */}
          <aside className="lg:col-span-4 h-fit lg:sticky lg:top-32 space-y-12">
            
            {/* Key Metrics Cards */}
            {study.metrics && (
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                {study.metrics.map((metric: any, index: number) => (
                  <div key={index} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl group hover:border-brand/30 transition-colors">
                     <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter group-hover:text-brand transition-colors">
                       {metric.value}
                     </p>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">
                       {metric.label}
                     </p>
                  </div>
                ))}
              </div>
            )}
            
            {/* CTA Box */}
            <div className="bg-brand text-white p-10 rounded-3xl relative overflow-hidden hidden lg:block">
              <div className="relative z-10">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Ready to scale?</h3>
                <Link href="/contact" className="inline-flex items-center text-xs font-black uppercase tracking-widest border-b border-white pb-1 hover:opacity-80">
                  Book a Strategy Call
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Narrative Content */}
          <main className="lg:col-span-8 space-y-24">
            
            {/* Overview */}
            <div className="prose prose-lg max-w-none text-slate-600">
               <h2 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em] mb-8 flex items-center gap-4">
                 <span className="w-12 h-px bg-slate-900"></span> 01. The Context
               </h2>
               <p className="text-2xl font-medium leading-relaxed text-slate-900">
                 {study.overview}
               </p>
            </div>

            {/* Challenges Grid */}
            <div className="space-y-8">
              <h2 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em] flex items-center gap-4">
                 <span className="w-12 h-px bg-slate-900"></span> 02. The Challenge
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {study.challenges.map((challenge: string, index: number) => (
                  <div key={index} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 items-start">
                    <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                      <Target size={18} />
                    </div>
                    <p className="font-bold text-slate-700 mt-2">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Break / Secondary Image */}
            {study.image2 && (
              <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl">
                 <Image src={study.image2} alt="Project Detail" fill className="object-cover" />
              </div>
            )}

            {/* Achievements Grid */}
            <div className="space-y-8">
              <h2 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em] flex items-center gap-4">
                 <span className="w-12 h-px bg-slate-900"></span> 03. The Breakthrough
              </h2>
              <div className="grid gap-6">
                {study.achievements.map((achievement: any, index: number) => (
                  <div key={index} className="flex flex-col md:flex-row gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center flex-shrink-0">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-slate-900 uppercase mb-2">{achievement.title}</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-slate-900 text-white p-12 rounded-[2rem] relative overflow-hidden">
               <div className="relative z-10">
                 <h2 className="text-sm font-black text-brand uppercase tracking-[0.2em] mb-6">04. The Result</h2>
                 <p className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                   "{study.conclusion}"
                 </p>
               </div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            </div>

            {/* Navigation Footer */}
            <div className="flex justify-between items-center border-t border-slate-200 pt-16">
              <Link href="/CaseStudies" className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
                 Back to All Cases
              </Link>
              <Link href="/contact" className="flex items-center gap-2 text-brand font-black uppercase tracking-widest hover:translate-x-2 transition-transform">
                 Start Your Project <ArrowRight size={16} />
              </Link>
            </div>

          </main>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetailClient;
