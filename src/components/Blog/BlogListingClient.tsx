"use client";

import { BlogData } from "@/lib/data";
import BlogHero from "@/components/Blog/BlogHero";
import BlogCard from "@/components/Blog/BlogCard";
import { motion } from "framer-motion";

export default function BlogListingClient() {
  return (
    <main className="bg-white min-h-screen">
      <BlogHero />
      
      <section className="pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter - Mockup for now */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            {["All", "Engineering", "Marketing", "E-commerce", "Strategy"].map((cat) => (
              <button 
                key={cat}
                className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  cat === "All" 
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-200" 
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BlogData.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* Newsletter / CTA */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="mt-32 p-12 md:p-20 rounded-[3rem] bg-slate-950 text-white relative overflow-hidden text-center"
          >
             <div className="absolute top-0 right-0 w-96 h-96 bg-brand/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
             <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
                  Subscribe for <br />
                  <span className="text-brand">Elite Intelligence.</span>
                </h2>
                <p className="text-slate-400 text-lg mb-10 font-medium italic">
                  Join 5,000+ engineers and founders getting our weekly deep dives on scaling and dominance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <input 
                    type="email" 
                    placeholder="ENTER YOUR EMAIL" 
                    className="bg-white/10 border border-white/20 px-8 py-4 rounded-full w-full sm:w-80 text-white placeholder:text-slate-500 font-bold focus:outline-none focus:border-brand transition-colors"
                  />
                  <button className="bg-white text-slate-950 px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-brand hover:text-white transition-all duration-300 w-full sm:w-auto">
                    JOIN LIST
                  </button>
                </div>
             </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
