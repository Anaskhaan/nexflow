"use client";

import { motion } from "framer-motion";
import { Zap, Target, Shield, Smartphone, Globe, BarChart } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, className, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true, margin: "-100px" }}
    className={`bg-slate-50 rounded-[2rem] p-8 flex flex-col justify-between hover:bg-slate-100 transition-colors group ${className}`}
  >
    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} className="text-slate-900" />
    </div>
    <div>
        <h3 className="text-xl font-black text-slate-900 mb-2">{title}</h3>
        <p className="text-sm font-medium text-slate-500 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="mb-20 max-w-2xl">
            <span className="text-xs font-black tracking-[0.3em] uppercase text-brand mb-4 block">Why Us</span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                The Unfair <br />
                <span className="text-slate-400">Advantage.</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 h-auto lg:h-[600px]">
            {/* Large Block 1 */}
            <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6 }}
                 viewport={{ once: true }}
                 className="bg-slate-900 rounded-[2rem] p-10 col-span-1 md:col-span-2 row-span-2 flex flex-col justify-between relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2 group-hover:opacity-30 transition-opacity" />
                
                <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md mb-8">
                        <Zap size={32} className="text-white" />
                    </div>
                    <h3 className="text-4xl font-black text-white mb-4 tracking-tight">Speed is the New Currency.</h3>
                    <p className="text-lg text-slate-400 max-w-md leading-relaxed">
                        We don't do slow. Our JAMstack architecture and optimized workflows ensure your digital presence is lightning fast, keeping users engaged and bouncing rates low.
                    </p>
                </div>
                
                {/* Decorative UI Element */}
                <div className="mt-8 flex gap-2 opacity-50">
                    <div className="h-2 w-12 bg-brand rounded-full" />
                    <div className="h-2 w-8 bg-slate-700 rounded-full" />
                    <div className="h-2 w-4 bg-slate-700 rounded-full" />
                </div>
            </motion.div>

            {/* Feature Blocks */}
            <FeatureCard 
                icon={Target}
                title="Sniper Precision"
                description="Data-driven targeting that hits your ideal customer profile every time."
                delay={0.1}
            />
            <FeatureCard 
                icon={Shield} 
                title="Enterprise Security"
                description="Bank-grade encryption and security protocols as standard."
                delay={0.2}
            />
            <FeatureCard 
                icon={Smartphone}
                title="Mobile First"
                description="Designed for the thumb-scroll generation. Flawless on any device."
                delay={0.3}
            />
            <FeatureCard 
                icon={Globe}
                title="Global Scale"
                description="Infrastructure built to scale from 100 to 10M users instantly."
                delay={0.4}
            />
        </div>
      </div>
    </section>
  );
}
