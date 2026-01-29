"use client";

import { portfolioData } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import CaseStudies from "./CaseStudies";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import CaseStudiesPage from "../CaseStudies/page";

const Portfolio = () => {
  return (
    <div className='w-full bg-white text-slate-900'>
      {/* Immersive Hero Section */}
      <section className='relative min-h-[70vh] flex items-center justify-center px-6 overflow-hidden pt-32'>
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 0.03, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black leading-none select-none tracking-tighter"
          >
            PORTFOLIO
          </motion.div>
        </div>

        <div className='max-w-7xl mx-auto text-center relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-brand"></div>
              <span className='text-brand text-xs font-black tracking-[0.3em] uppercase'>
                SELECTED WORKS 2024
              </span>
              <div className="w-12 h-0.5 bg-brand"></div>
            </div>
            <h1 className='text-6xl md:text-9xl font-black mb-8 tracking-tighter text-slate-900 uppercase leading-[0.9]'>
              Crafting <span className='text-brand italic serif'>Digital</span><br/>Experiences
            </h1>
            <p className='text-slate-500 max-w-xl mx-auto text-lg font-medium leading-relaxed italic'>
              A curation of our finest digital products and strategic marketing campaigns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dynamic Project Grid */}
      <section className='pb-32 px-6 max-w-[1600px] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12'>
          {portfolioData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group h-[500px] md:h-[650px] overflow-hidden rounded-[2rem] bg-slate-50 border border-slate-100 
                ${index === 0 ? "lg:col-span-12" : index === 1 ? "lg:col-span-7" : "lg:col-span-5"}`}
            >
              {/* Image Container with Reveal Effect */}
              <div className='absolute inset-0 flex items-center justify-center p-12 md:p-24 z-10 group-hover:scale-95 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]'>
                <div className='relative w-full h-full'>
                   <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1600px) 100vw, 50vw"
                    className='object-contain group-hover:scale-110 transition-transform duration-1000 ease-out p-4'
                  />
                </div>
              </div>

              {/* Overlay with Project Info */}
              <div className='absolute inset-0 bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex flex-col justify-center items-center text-center p-12 translate-y-full group-hover:translate-y-0'>
                <motion.div className="max-w-md">
                   <span className='text-[10px] font-black tracking-[0.4em] uppercase text-brand mb-4 block'>
                      {project.category}
                   </span>
                   <h3 className='text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-6'>
                     {project.title}
                   </h3>
                   <div className="flex flex-wrap justify-center gap-2 mb-10">
                      {project.services.map((s, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">{s}</span>
                      ))}
                   </div>
                   <div className="grid grid-cols-3 gap-8 mb-12">
                      {project.results.map((r, i) => (
                        <div key={i} className="text-center">
                          <div className="text-2xl font-black text-slate-900">{r.value}</div>
                          <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{r.label}</div>
                        </div>
                      ))}
                   </div>
                    <Link
                      href={`/Portfolio/${project.slug}`}
                      className='inline-flex items-center group/btn px-8 py-4 bg-brand text-white text-[10px] font-black tracking-widest uppercase rounded-full transition-all hover:scale-105 active:scale-95'>
                      View Case Study
                      <ExternalLink className='ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform' />
                    </Link>
                </motion.div>
              </div>

              {/* Decorative Corner Tag */}
              <div className="absolute top-8 right-8 z-30 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">0{index + 1}</span>
                  <div className="w-12 h-px bg-slate-200"></div>
                </div>
              </div>

              {/* Visible Info Bottom (Before Hover) */}
              <div className="absolute bottom-8 left-8 right-8 z-30 flex justify-between items-end opacity-100 group-hover:opacity-0 transition-all duration-300 transform translate-y-0 group-hover:translate-y-10">
                 <div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">{project.title}</h3>
                    <p className="text-[10px] font-black text-brand uppercase tracking-widest mt-1">{project.category}</p>
                 </div>
                 <div className="bg-white/80 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center border border-slate-100">
                    <ArrowRight className="w-5 h-5 text-slate-900" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CaseStudiesPage />
    </div>
  );
};

export default Portfolio;
