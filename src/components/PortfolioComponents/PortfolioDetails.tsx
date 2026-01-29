"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { mainportfolioData } from "@/lib/data";
import { ProjectBrandGuidelines } from "./BrandGuidelines";

interface PortfolioDetailsProps {
  slug: string;
}

const PortfolioDetails = ({ slug }: PortfolioDetailsProps) => {
  const project = mainportfolioData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="text-center text-slate-900 min-h-screen flex items-center justify-center font-bold">
        Project Not Found
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white text-slate-900 pb-32">
      {/* Cinematic Split Hero */}
      <section className="relative h-screen grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Project Info Panel */}
        <div className="lg:col-span-12 h-screen flex flex-col justify-center items-center px-10 md:px-24 z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <span className="text-brand text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">
              {project.projecTYpe}
            </span>
            <h1 className="text-6xl md:text-[10vw] font-black leading-[0.85] tracking-tighter text-slate-900 uppercase">
              {project.projectName.split(" ").map((word, i) => (
                <span key={i} className="block last:text-brand">{word}</span>
              ))}
            </h1>
          </motion.div>
        </div>

        {/* Hero Image / Background */}
        <div className="absolute inset-0 z-0">
           <Image
            src={project.image}
            alt={project.projectName}
            fill
            className="object-contain opacity-[0.03] scale-150 rotate-12"
            priority
          />
        </div>
      </section>

      {/* Main Project Content with Sticky Sidebar */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Sticky Sidebar Info */}
          <aside className="lg:col-span-4 h-fit lg:sticky lg:top-32 space-y-16">
            <div>
              <h2 className="text-xs font-black text-brand tracking-[0.3em] uppercase mb-8 flex items-center gap-4">
                <div className="w-8 h-px bg-brand"></div>
                Project Brief
              </h2>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight uppercase leading-snug">
                Helping {project.clientName} define their digital future.
              </h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-12">
              <div className="space-y-4">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Client</span>
                <p className="text-sm font-black text-slate-900 uppercase">{project.clientName}</p>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Agency Services</span>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((s, i) => (
                    <span key={i} className="text-xs font-black text-brand uppercase">{s}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Live Platform</span>
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm font-black text-slate-900 uppercase hover:text-brand transition-colors"
                >
                  Visit Website
                  <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </aside>

          {/* Scrolling Main Content */}
          <main className="lg:col-span-8 space-y-32">
            {/* The Challenge / About Project */}
            <div className="space-y-12">
              <div className="aspect-[16/10] relative rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 p-8 md:p-16">
                <Image
                  src={project.images[0]}
                  alt="Project Preview"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-1000 p-4"
                />
              </div>
              <p className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[1.1]">
                {project.projectDetails}
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {project.features.map((feature, i) => (
                  <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-brand/30 transition-all">
                    <span className="text-brand font-black text-xs mb-4 block">0{i+1}</span>
                    <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">{feature}</h4>
                    <p className="text-slate-500 font-medium">Delivering exceptional value through tailored technical solutions and premium user experiences.</p>
                  </div>
               ))}
            </div>

            {/* Immersive Gallery Section */}
            {project.images2 && project.images2.length > 0 && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.images2.map((img, i) => (
                    <div 
                      key={i} 
                      className={`relative overflow-hidden rounded-[2rem] bg-slate-50 border border-slate-100 
                        ${i === 0 ? "md:col-span-2 aspect-[16/6]" : "aspect-[3/4]"}`}
                    >
                      <Image
                        src={img}
                        alt={`${project.projectName} Showcase ${i}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <ProjectBrandGuidelines project={project as any} />
          </main>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetails;
