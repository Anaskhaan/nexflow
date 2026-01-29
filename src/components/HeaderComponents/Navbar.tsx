"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronRight, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    }
  };

  const linkVariants = {
    closed: { y: 20, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.1 * i, duration: 0.4 }
    })
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 transition-all duration-500 ${
          isScrolled || isOpen ? "py-4 bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
            
          {/* Brand Logo - Minimal & Modern */}
          <Link href="/" className="relative z-50 group">
            <div className="flex items-center gap-1 font-black text-2xl tracking-tighter">
              <span className="text-slate-900">NEX</span>
              <span className={`transition-colors duration-300 ${isScrolled || isOpen ? "text-brand" : "text-brand"}`}>FLOW</span>
              <div className="w-2 h-2 rounded-full bg-brand animate-pulse ml-1" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 bg-white/50 backdrop-blur-sm px-8 py-3 rounded-full border border-white/20 shadow-sm">
            {navLinks.map((link) => (
              !link.submenu ? (
                <Link 
                    key={link.id} 
                    href={link.href}
                    className="relative text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-brand transition-colors group"
                >
                  {link.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full" />
                </Link>
              ) : (
                <div key={link.id} className="relative group cursor-pointer">
                    <span className="text-sm font-bold uppercase tracking-widest text-slate-600 group-hover:text-brand transition-colors flex items-center gap-1">
                        {link.title} 
                    </span>
                    {/* Minimal Dropdown */}
                    <div className="absolute top-full -left-4 pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                        <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 min-w-[200px] flex flex-col gap-2">
                             {link.submenu.map((sub) => (
                                <Link 
                                    key={sub.id} 
                                    href={sub.href}
                                    className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-brand hover:bg-slate-50 p-3 rounded-lg transition-all flex items-center justify-between group/sub"
                                >
                                    {sub.title}
                                    <ArrowUpRight size={14} className="opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                                </Link>
                             ))}
                        </div>
                    </div>
                </div>
              )
            ))}
          </div>

          {/* CTA & Menu Toggle */}
          <div className="flex items-center gap-4">
             <Link href="/contact" className="hidden lg:flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-brand transition-colors duration-300">
                Start Project <ChevronRight size={14} />
             </Link>
             
             <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
             >
                {isOpen ? <X size={20} className="text-slate-900" /> : <Menu size={20} className="text-slate-900" />}
             </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-white z-40 flex flex-col pt-32 px-6"
          >
             <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                    <motion.div key={link.id} custom={i} variants={linkVariants}>
                         {link.submenu ? (
                            <div className="space-y-4">
                                <span className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">{link.title}</span>
                                {link.submenu.map(sub => (
                                    <Link key={sub.id} href={sub.href} onClick={() => setIsOpen(false)} className="block text-3xl font-black text-slate-900 tracking-tighter hover:text-brand transition-colors">
                                        {sub.title}
                                    </Link>
                                ))}
                            </div>
                         ) : (
                             <Link href={link.href} onClick={() => setIsOpen(false)} className="block text-4xl font-black text-slate-900 tracking-tighter hover:text-brand transition-colors">
                                {link.title}
                             </Link>
                         )}
                    </motion.div>
                ))}
                
                <motion.div 
                    variants={linkVariants} 
                    custom={navLinks.length}
                    className="mt-8 pt-8 border-t border-slate-100"
                >
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-between w-full bg-slate-900 text-white p-6 rounded-2xl text-xl font-black uppercase tracking-widest">
                        Let's Talk
                        <ArrowUpRight size={24} />
                    </Link>
                </motion.div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
