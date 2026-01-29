"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-slate-900 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.7 }}
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-slate-200 rounded-full blur-3xl"
      ></motion.div>

      <div className="relative bg-slate-50 border border-slate-200 p-12 rounded-3xl shadow-2xl text-center max-w-lg z-10">
        {/* Decorative corner elements */}
        <div className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-brand rounded-tl-xl"></div>
        <div className="absolute -top-3 -right-3 w-8 h-8 border-t-4 border-r-4 border-brand rounded-tr-xl"></div>
        <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-4 border-l-4 border-brand rounded-bl-xl"></div>
        <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-brand rounded-br-xl"></div>

        {/* Animated checkmark icon */}
        <div className="relative mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 bg-brand rounded-full flex items-center justify-center mx-auto shadow-xl"
          >
            <svg
              className="w-10 h-10 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </motion.div>
          {/* Pulsating ring effect */}
          <div className="absolute inset-0 rounded-full border-4 border-brand/20 animate-ping"></div>
        </div>

        <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">
          Thank <span className="text-brand">You!</span>
        </h1>

        <p className="text-slate-600 mb-8 leading-relaxed font-medium text-lg">
          Your audit PDF has been downloaded successfully. We&apos;ve also sent
          additional details and resources to your email.
        </p>

        <div className="mb-10 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">What&apos;s next?</p>
          <ul className="text-left text-slate-600 font-bold text-sm space-y-3">
            <li className="flex items-center">
              <span className="text-brand mr-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              Check your email for the complete resource package
            </li>
            <li className="flex items-center">
              <span className="text-brand mr-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              Expect a follow-up from our team within 24 hours
            </li>
            <li className="flex items-center">
              <span className="text-brand mr-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              Access exclusive content in your member portal
            </li>
          </ul>
        </div>

        <Link
          href="/"
          className="group relative px-10 py-5 bg-brand rounded-2xl text-white font-black overflow-hidden transition-all duration-300 shadow-xl hover:shadow-brand/20 hover:-translate-y-1 inline-block uppercase tracking-widest text-xs"
        >
          <span className="relative z-10 tracking-widest">Back to Home</span>
        </Link>
      </div>

      {/* Floating particles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brand/10"
            style={{
              width: Math.random() * 10 + 2 + "px",
              height: Math.random() * 10 + 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          ></motion.div>
        ))}
      </div>
    </div>
  );
}
