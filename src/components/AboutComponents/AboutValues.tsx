"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Zap, Shield, HeartHandshake } from "lucide-react";
import { useRef } from "react";

const values = [
  {
    icon: Target,
    title: "Radical Transparency",
    desc: "We don't hide behind jargon. You see what we see. Every metric, every dollar, every win.",
    color: "bg-blue-500",
  },
  {
    icon: Zap,
    title: "Obsessive Speed",
    desc: "The market doesn't wait. Neither do we. We ship fast, learn faster, and iterate constantly.",
    color: "bg-amber-500",
  },
  {
    icon: Shield,
    title: "Data First",
    desc: "Opinions are nice. Data is better. Every decision we make is backed by hard evidence.",
    color: "bg-emerald-500",
  },
  {
    icon: HeartHandshake,
    title: "Client Obsessed",
    desc: "Your growth is our growth. We essentially become your digital co-founders.",
    color: "bg-rose-500",
  },
];

interface AboutValuesProps {
  parallaxY3?: any;
}

const AboutValues = ({ parallaxY3 }: AboutValuesProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-slate-900">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
             
             {/* Sticky Heading */}
             <div className="absolute top-10 left-6 md:left-20 z-10 w-full max-w-sm pointer-events-none mix-blend-difference text-white">
                 <span className="text-xs font-black tracking-[0.3em] uppercase text-brand mb-4 block">Our DNA</span>
                 <h2 className="text-5xl font-black tracking-tighter leading-none">
                     What Drives <br />
                     <span className="text-slate-500">Us.</span>
                 </h2>
             </div>

             <motion.div style={{ x }} className="flex gap-10 pl-[20vw]">
                {values.map((value, i) => (
                    <div 
                        key={i} 
                        className="group relative h-[60vh] w-[80vw] md:w-[40vw] flex-shrink-0 rounded-[3rem] bg-slate-800 border border-slate-700 overflow-hidden"
                    >
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 ${value.color}`} />
                        
                        <div className="absolute inset-0 p-12 flex flex-col justify-between">
                            <div className={`w-20 h-20 rounded-full ${value.color} bg-opacity-20 flex items-center justify-center text-white mb-8`}>
                                <value.icon size={40} />
                            </div>
                            
                            <div>
                                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">{value.title}</h3>
                                <p className="text-xl text-slate-400 leading-relaxed max-w-md">{value.desc}</p>
                            </div>
                        </div>

                        {/* Decoration */}
                        <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full ${value.color} blur-[120px] opacity-20`} />
                    </div>
                ))}
             </motion.div>
        </div>
    </section>
  );
};

export default AboutValues;
