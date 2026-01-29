"use client";

import { motion } from "framer-motion";
import { BlogPost } from "@/lib/data";

interface PostContentProps {
  post: BlogPost;
}

export default function PostContent({ post }: PostContentProps) {
  return (
    <article className="max-w-4xl mx-auto px-6 pb-32">
       <div className="space-y-10">
         {post.content.map((paragraph, idx) => (
           <motion.p 
             key={idx}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: idx * 0.1 }}
             viewport={{ once: true }}
             className="text-xl md:text-2xl text-slate-700 font-medium leading-[1.6] italic first-letter:text-5xl first-letter:font-black first-letter:text-brand first-letter:mr-3 first-letter:float-left"
           >
             {paragraph}
           </motion.p>
         ))}
       </div>

       {/* Tags */}
       <div className="mt-20 flex flex-wrap gap-3">
         {post.tags.map((tag) => (
           <span 
             key={tag}
             className="px-6 py-2 bg-slate-100 text-slate-500 rounded-full text-xs font-black uppercase tracking-widest"
           >
             #{tag}
           </span>
         ))}
       </div>
    </article>
  );
}
