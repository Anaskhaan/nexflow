"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart, Smartphone, Globe, Bot, Cpu, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const milestones = [
  {
    id: "marketing",
    title: "360° Digital Marketing",
    subtitle: "The Growth Engine",
    description: "We don't just run ads; we build ecosystems. From high-intent SEO to viral social campaigns, we use data to dominate every channel.",
    color: "bg-orange-500",
    icon: BarChart,
    stats: [
        { value: "300%", label: "Avg. ROI Increase" },
        { value: "10M+", label: "Ad Impressions" }
    ]
  },
  {
    id: "development",
    title: "Web & Mobile Engineering",
    subtitle: "The Digital Foundation",
    description: "Your platform is your storefront. We build lightning-fast web apps and native mobile experiences that convert visitors into loyal users.",
    color: "bg-blue-500",
    icon: Smartphone,
    stats: [
        { value: "0.2s", label: "Load Time Speed" },
        { value: "99.9%", label: "Uptime Guarantee" }
    ]
  },
  {
    id: "ai",
    title: "AI & Automation",
    subtitle: "The Future of Scale",
    description: "Stop trading time for money. We implement intelligent agents and workflow automations that run your business while you sleep.",
    color: "bg-purple-500",
    icon: Bot,
    stats: [
        { value: "40hrs", label: "Saved Per Week" },
        { value: "24/7", label: "Automated Ops" }
    ]
  }
];

const ServiceShowcase = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/4 -right-64 w-[800px] h-[800px] bg-brand rounded-full blur-[120px]" />
          <div className="absolute bottom-0 -left-64 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 md:flex justify-between items-end">
             <div className="max-w-2xl">
                 <span className="text-xs font-black tracking-[0.3em] uppercase text-brand mb-4 block">Our Expertise</span>
                 <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
                     Engineered for <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-600">Dominance</span>
                 </h2>
             </div>
             <p className="max-w-md text-lg font-medium text-slate-500 mt-8 md:mt-0 leading-relaxed">
                 We've successfully bridged the gap between creative storytelling and technical precision across three core pillars.
             </p>
        </div>

        {/* Narrative Cards - Stacked */}
        <div className="space-y-32">
            {milestones.map((item, index) => (
                <div key={item.id} className={`flex flex-col gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                    
                    {/* Visual Half */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 aspect-[4/3] relative rounded-[3rem] overflow-hidden shadow-2xl group"
                    >
                         <div className={`absolute inset-0 opacity-10 ${item.color}`} />
                         {/* Abstract Visual Representation */}
                         <div className="absolute inset-0 bg-slate-100 flex items-center justify-center overflow-hidden">
                             <div className={`w-[150%] h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[60px] border-slate-200 opacity-20 animate-[spin_60s_linear_infinite]`} />
                             <div className={`w-[100%] h-[100%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[40px] border-slate-200 opacity-30 animate-[spin_40s_linear_infinite_reverse]`} />
                             
                             <div className="relative z-10 p-12 bg-white rounded-[2rem] shadow-xl text-center">
                                 <div className={`w-20 h-20 mx-auto ${item.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-500`}>
                                     <item.icon size={36} />
                                 </div>
                                 <div className="space-y-4">
                                     {item.stats.map((stat, i) => (
                                         <div key={i} className="border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                                             <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                                             <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</div>
                                         </div>
                                     ))}
                                 </div>
                             </div>
                         </div>
                    </motion.div>

                    {/* Content Half */}
                    <motion.div 
                        initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 space-y-8 pl-0 lg:pl-12"
                    >
                         <div className="flex items-center gap-4">
                             <span className="text-6xl font-black text-slate-200">0{index + 1}</span>
                             <div className={`h-px flex-1 ${item.color}`} />
                         </div>
                         
                         <div>
                             <span className={`text-sm font-black uppercase tracking-widest mb-2 block ${item.color.replace('bg-', 'text-')}`}>{item.subtitle}</span>
                             <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">{item.title}</h3>
                             <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                 {item.description}
                             </p>
                         </div>
                         
                         <Link href={`/services#${item.id === 'marketing' ? 'marketing-services' : item.id === 'development' ? 'development-services' : 'branding'}`} className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-900 hover:text-brand transition-colors group/link">
                             Explore Solutions <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                         </Link>
                    </motion.div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
