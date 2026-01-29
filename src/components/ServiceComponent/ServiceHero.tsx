"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

const ServiceHero = () => {
  return (
    <div>
      <motion.div
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white opacity-95"></div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[var(--main-theme-color)] rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
                scale: [0, Math.random() * 3 + 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 inline-block"
            >
              <div className="w-24 h-24 bg-brand/10 rounded-full flex items-center justify-center mx-auto border border-brand/20 shadow-sm">
                <Zap
                  size={42}
                  className="text-brand"
                />
              </div>
            </motion.div>

             <h1 className="lg:text-7xl text-4xl font-black mb-6 text-slate-900 tracking-tighter">
               Elevate Your{" "}
               <motion.span
                 className="text-brand inline-block"
                 animate={{
                   y: [0, -10, 0],
                 }}
                 transition={{
                   duration: 3,
                   repeat: Infinity,
                   repeatType: "reverse",
                 }}
               >
                 Digital
               </motion.span>{" "}
               Presence
             </h1>

             <motion.p
               className="lg:text-xl text-lg max-w-2xl mx-auto mb-12 text-slate-600 font-medium leading-relaxed"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5, duration: 0.8 }}
             >
               Innovative marketing solutions that transform your brand and
               deliver measurable results
             </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
               <Link href="/contact" className="bg-brand text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-slate-900 transition-colors flex items-center justify-center gap-2 shadow-xl hover:shadow-brand/20 transition-all">
                 <motion.button
                   whileHover={{
                     scale: 1.05,
                   }}
                   whileTap={{ scale: 0.95 }}
                 >
                   Get In Touch
                   <motion.span
                     className="ml-2"
                     animate={{
                       x: [0, 5, 0],
                     }}
                     transition={{
                       duration: 1.5,
                       repeat: Infinity,
                     }}
                   >
                     <ArrowRight className="w-5 h-5" />
                   </motion.span>
                 </motion.button>
               </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-20  left-20 w-64 h-64 rounded-full bg-[var(--main-theme-color)] opacity-10 filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute top-40 right-20 w-96 h-96 rounded-full bg-[var(--main-theme-color)] opacity-5 filter blur-3xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            x: [0, -70, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 lg:left-1/2 left-40 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
           <div className="w-10 h-16 border-2 border-slate-300 rounded-full flex justify-center">
             <motion.div
               className="w-2 h-2 bg-slate-300 rounded-full mt-2"
               animate={{
                 y: [0, 10, 0],
               }}
               transition={{
                 duration: 1.5,
                 repeat: Infinity,
                 delay: 0.3,
               }}
             />
           </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServiceHero;
