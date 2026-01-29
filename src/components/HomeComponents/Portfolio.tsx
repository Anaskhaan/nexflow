"use client";

import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProjectCard = ({ project }: any) => {
    return (
        <motion.div 
            className="group relative min-w-[300px] md:min-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden bg-slate-900 border border-slate-800"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
        >
            <Image
                src={typeof project.image === 'string' ? project.image : project.image?.src || "/og-image.jpg"}
                alt={project.title || "Project Image"}
                fill
                className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs font-black uppercase tracking-widest text-brand mb-2 block">{project.category}</span>
                    <h3 className="text-3xl font-black text-white mb-4 leading-tight">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.services?.slice(0, 3).map((s: string, i: number) => (
                            <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-slate-300 border border-slate-700 px-3 py-1 rounded-full">{s}</span>
                        ))}
                    </div>
                </div>
                
                <div className="flex justify-between items-center border-t border-white/10 pt-6">
                    <div className="flex gap-4">
                         {project.results?.slice(0, 1).map((r: any, i: number) => (
                             <div key={i}>
                                 <span className="block text-xl font-black text-white">{r.value}</span>
                                 <span className="block text-[10px] uppercase text-slate-400 font-bold">{r.label}</span>
                             </div>
                         ))}
                    </div>
                    <Link href={`/Portfolio/${project.slug || ""}`} className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-brand hover:text-white transition-colors">
                        <ArrowUpRight size={20} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default function Portfolio() {
  const containerRef = useRef(null);

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden text-white">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
             <div className="absolute right-0 top-1/4 w-[800px] h-[800px] bg-brand/20 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
             <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                 <div className="max-w-xl">
                      <span className="text-xs font-black tracking-[0.3em] uppercase text-brand mb-4 block">Selected Works</span>
                      <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                          Digital <br />
                          Is Our Canvas.
                      </h2>
                 </div>
                 <Link href="/Portfolio">
                     <button className="flex items-center gap-2 text-sm font-black uppercase tracking-widest hover:text-brand transition-colors">
                         View All Projects <ChevronRight size={16} />
                     </button>
                 </Link>
             </div>
             
             {/* Horizontal Scroll Area */}
             <div className="flex gap-6 overflow-x-auto pb-12 snap-x hide-scrollbar" ref={containerRef}>
                 {portfolioData.slice(0, 5).map((project) => (
                     <div key={project.id} className="snap-center">
                         <ProjectCard project={project} />
                     </div>
                 ))}
             </div>
        </div>
    </section>
  );
}
