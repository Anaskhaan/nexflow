"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Send, ExternalLink } from "lucide-react";

const ServiceCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
           className="bg-slate-900 border border-slate-800 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
         >
          {/* Background Decorative Element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[var(--main-theme-color)] opacity-20 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-300 opacity-10 blur-3xl rounded-full" />

           <h2 className="text-3xl md:text-6xl font-black text-white mb-6 relative z-10 tracking-tighter">
             Ready to Take Your Brand to the <span className="text-brand">Next Level?</span>
           </h2>
           <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto relative z-10 font-medium">
             Join hundreds of successful companies that have transformed their digital footprint with Nexflow.
           </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
             <Link href="/contact">
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="px-12 py-5 bg-brand text-white font-black rounded-xl shadow-xl hover:bg-[#2D7A71] transition-all flex items-center justify-center gap-2 text-lg"
               >
                 Get Started Now <Send size={20} />
               </motion.button>
             </Link>
             <Link href="/Portfolio">
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="px-12 py-5 bg-transparent border-2 border-white/20 text-white font-black rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-lg"
               >
                 View Portfolio <ExternalLink size={20} />
               </motion.button>
             </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;
