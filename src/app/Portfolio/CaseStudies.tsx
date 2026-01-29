"use client";

import Link from "next/link";
import { CaseStudy } from "@/lib/data";
import { ChevronRight, ArrowRight } from "lucide-react";
import { caseStudy } from "@/lib/data";

const CaseStudies = () => {
  return (
    <div className="w-full bg-slate-50 py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-brand blur-3xl"></div>
        <div className="absolute bottom-10 -right-10 w-80 h-80 rounded-full bg-brand blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-black tracking-widest text-slate-400 uppercase">
            Our Success Stories
          </span>
          <h2 className="text-4xl md:text-6xl font-black mt-2 mb-4 text-slate-900 tracking-tighter">
            Case <span className="text-brand">Studies</span>
          </h2>
          <div className="w-16 h-1.5 mx-auto bg-brand rounded-full"></div>
          <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Explore our real-world solutions and the measurable impact we&apos;ve
            delivered for our clients through innovative approaches.
          </p>
        </div>

        {/* Alternate Card Layout - Horizontal Timeline Style */}
        <div className="space-y-12">
          {caseStudy.map((study, index) => (
            <div
              key={study.id}
              className={`relative group ${index % 2 === 0 ? "pl-0 md:pl-16" : "pr-0 md:pr-16"}`}
            >
              {/* Timeline dot */}
              <div
                className={`hidden md:block absolute top-10 ${index % 2 === 0 ? "-left-2" : "-right-2"}`}
              >
                <div className="w-6 h-6 rounded-full bg-brand border-4 border-white shadow-sm"></div>
              </div>

              {/* Card content */}
              <div
                className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border-l-8 ${index % 2 === 0 ? "border-l-brand" : "border-r-brand border-r-8 border-l-0"} flex flex-col md:flex-row border border-slate-100`}
              >
                <div className="md:w-2/5 bg-slate-900 p-8 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-brand/10 opacity-50"></div>
                  <div className="text-6xl font-black text-white/10 relative z-10">
                    {index + 1}
                  </div>
                </div>

                <div className="p-8 md:w-3/5">
                  <div className="flex justify-between items-start">
                    <div>
                        <div className="uppercase tracking-widest text-xs text-brand font-black mb-1">
                          {study.category}
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">
                          {study.title}
                        </h3>
                      </div>
                      <div className="text-[10px] font-black uppercase text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                        Case Study #{study.id}
                      </div>
                  </div>

                   <p className="text-slate-600 mb-8 line-clamp-3 font-medium leading-relaxed italic">
                     &ldquo;{study.summary}&rdquo;
                   </p>

                  <div className="flex justify-between items-center">
                     <Link
                       href={`/CaseStudies/${study.id}`}
                       className="flex items-center text-brand font-bold group-hover:text-brand/80 transition-colors"
                     >
                       <span>Explore Results</span>
                       <ChevronRight className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
                     </Link>

                    <div className="hidden md:flex space-x-2">
                      {study.tags?.map((tag, i) => (
                         <span
                           key={i}
                           className="text-[10px] bg-slate-50 text-slate-500 px-3 py-1.5 rounded-full font-bold border border-slate-100 uppercase"
                         >
                           {tag}
                         </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Animated CTA Section */}
        <div className="text-center mt-20">
           <Link
             href="/Contact"
             className="inline-flex items-center px-10 py-5 bg-brand text-white rounded-xl text-lg font-black shadow-xl hover:shadow-brand/20 transition-all duration-300 hover:scale-105"
           >
             Want similar results for your business?
             <ArrowRight className="ml-3 w-6 h-6" />
           </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
