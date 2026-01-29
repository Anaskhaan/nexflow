"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface AboutCTAProps {
  gradientControls?: any;
}

const AboutCTA = ({ gradientControls }: AboutCTAProps) => {
  return (
    <section className="py-32 bg-white relative overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
             <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-6xl md:text-9xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-12"
             >
                 BUILDING <br />
                 THE <span className="text-slate-200">UNIMAGINABLE?</span>
             </motion.h2>

             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
             >
                 <Link href="/contact">
                     <button className="group relative px-12 py-6 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-lg overflow-hidden hover:bg-brand transition-colors duration-500">
                         <span className="relative z-10 flex items-center gap-3">
                             Let's Talk <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
                         </span>
                     </button>
                 </Link>
             </motion.div>
        </div>
    </section>
  );
};

export default AboutCTA;
