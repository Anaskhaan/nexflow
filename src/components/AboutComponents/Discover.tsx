"use client";

import { motion } from "framer-motion";
import { Users, Globe2, Trophy, Rocket } from "lucide-react";
import Image from "next/image";

interface DiscoverProps {
  parallaxY2?: any;
}

const Discover = ({ parallaxY2 }: DiscoverProps) => {
  return (
    <section id="discover" className="py-32 bg-slate-50 relative overflow-hidden">
        { /* Abstract Background */ }
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-slate-200 rounded-full blur-[100px] opacity-50 -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6">
            <div className="mb-20">
                 <span className="text-xs font-black tracking-[0.3em] uppercase text-brand mb-4 block">Our Story</span>
                 <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
                     From Startup to <br />
                     <span className="text-slate-400">Powerhouse.</span>
                 </h2>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
                
                {/* Block 1: Main Image */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="md:col-span-4 md:row-span-2 rounded-[2rem] overflow-hidden relative group"
                >
                    <Image 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                        alt="Team Collaboration"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 p-10">
                        <span className="text-brand font-bold tracking-widest uppercase text-sm mb-2 block">Since 2015</span>
                        <h3 className="text-3xl font-bold text-white max-w-md">We started with a laptop and a vision. Today, we define the standard.</h3>
                    </div>
                </motion.div>

                {/* Block 2: Stat */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="md:col-span-2 bg-white rounded-[2rem] p-8 flex flex-col justify-between hover:shadow-xl transition-shadow border border-slate-100"
                >
                    <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                        <Users size={24} />
                    </div>
                    <div>
                        <span className="text-5xl font-black text-slate-900 tracking-tighter">200+</span>
                        <p className="text-slate-500 font-medium mt-2">Global Clients Served</p>
                    </div>
                </motion.div>

                {/* Block 3: Stat */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="md:col-span-1 bg-slate-900 rounded-[2rem] p-8 flex flex-col justify-between text-white group overflow-hidden relative"
                >
                     <div className="absolute inset-0 bg-brand opacity-0 group-hover:opacity-10 transition-opacity" />
                    <Globe2 size={32} className="text-brand mb-4" />
                    <div>
                        <span className="text-4xl font-black tracking-tighter block mb-1">15+</span>
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">Countries</p>
                    </div>
                </motion.div>

                {/* Block 4: Stat */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="md:col-span-1 bg-brand rounded-[2rem] p-8 flex flex-col justify-between text-white relative overflow-hidden"
                >
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/20 rounded-full blur-xl" />
                    <Trophy size={32} className="text-white mb-4 relative z-10" />
                    <div className="relative z-10">
                        <span className="text-4xl font-black tracking-tighter block mb-1">25+</span>
                        <p className="text-brand-100 text-sm font-bold uppercase tracking-wider">Awards</p>
                    </div>
                </motion.div>
                
            </div>
        </div>
    </section>
  );
};

export default Discover;
