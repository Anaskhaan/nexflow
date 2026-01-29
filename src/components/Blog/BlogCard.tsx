"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, User } from "lucide-react";
import { BlogPost } from "@/lib/data";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="relative h-full flex flex-col bg-slate-50 border border-slate-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-700 hover:border-brand/20">
          {/* Image Container */}
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-10 flex flex-col flex-grow justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full" />
                <span>{post.date}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-950 uppercase tracking-tighter mb-4 leading-tight group-hover:text-brand transition-colors duration-500">
                {post.title}
              </h3>
              <p className="text-slate-500 font-medium line-clamp-3 mb-8 italic">
                {post.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm bg-slate-200">
                   {post.author.image ? (
                     <Image src={post.author.image} alt={post.author.name} width={40} height={40} className="object-cover" />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center text-slate-400"><User size={20} /></div>
                   )}
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900 uppercase tracking-tighter leading-none mb-1">{post.author.name}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{post.author.role}</p>
                </div>
              </div>
              
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-brand group-hover:border-brand text-slate-950 group-hover:text-white transition-all duration-500">
                <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
