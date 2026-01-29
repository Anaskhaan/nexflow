"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, TrendingUp } from "lucide-react";

interface ServiceDetailHeroProps {
  title: string;
  hook: string;
  description: string;
  color: string;
  icon: any;
}

const ServiceDetailHero = ({ title, hook, description, color, icon: Icon }: ServiceDetailHeroProps) => {
  return (
    <div 
      className="relative overflow-hidden py-24 px-4"
      style={{
        background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)`,
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${color} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-lg"
              style={{ backgroundColor: color }}
            >
              <Icon size={32} className="text-white" />
            </motion.div>

            {/* Hook - Main Headline */}
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                {hook}
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                  style={{ backgroundColor: color }}
                >
                  Get Started Now
                  <ArrowRight className="ml-2" size={20} />
                </motion.button>
              </Link>
              <Link href="#pricing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full font-bold border-2 hover:bg-slate-50 transition-all"
                  style={{ borderColor: color, color: color }}
                >
                  View Pricing
                </motion.button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users size={24} style={{ color }} />
                </div>
                <div className="text-2xl font-black text-slate-900">500+</div>
                <div className="text-sm text-slate-600 font-medium">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp size={24} style={{ color }} />
                </div>
                <div className="text-2xl font-black text-slate-900">98%</div>
                <div className="text-sm text-slate-600 font-medium">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle2 size={24} style={{ color }} />
                </div>
                <div className="text-2xl font-black text-slate-900">5+ Years</div>
                <div className="text-sm text-slate-600 font-medium">Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div 
              className="relative rounded-3xl p-12 backdrop-blur-sm border"
              style={{
                background: `linear-gradient(135deg, ${color}10, ${color}20)`,
                borderColor: `${color}30`
              }}
            >
              {/* Floating Cards Animation */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white rounded-2xl p-6 shadow-xl mb-4"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                  <div className="h-2 bg-slate-200 rounded flex-1" />
                </div>
                <div className="h-2 bg-slate-100 rounded mb-2" />
                <div className="h-2 bg-slate-100 rounded w-2/3" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                  <div className="h-2 bg-slate-200 rounded flex-1" />
                </div>
                <div className="h-2 bg-slate-100 rounded mb-2" />
                <div className="h-2 bg-slate-100 rounded w-3/4" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailHero;
