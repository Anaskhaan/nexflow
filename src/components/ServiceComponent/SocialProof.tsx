"use client";

import { motion } from "framer-motion";
import { Star, Quote, TrendingUp, Award } from "lucide-react";

interface SocialProofProps {
  proof: {
    metric: string;
    description: string;
  }[];
  color: string;
}

const SocialProof = ({ proof, color }: SocialProofProps) => {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. See the real impact we've delivered for businesses like yours.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {proof.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div 
                className="absolute inset-0 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"
                style={{ backgroundColor: color }}
              />
              <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <TrendingUp size={28} style={{ color }} />
                </div>
                <div 
                  className="text-5xl font-black mb-3 bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent"
                >
                  {item.metric}
                </div>
                <p className="text-slate-600 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div 
            className="rounded-3xl p-12 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${color}08, ${color}15)`
            }}
          >
            {/* Quote Icon */}
            <div 
              className="absolute top-8 right-8 opacity-10"
            >
              <Quote size={120} style={{ color }} />
            </div>

            <div className="relative z-10 max-w-4xl">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    size={24} 
                    fill={color}
                    style={{ color }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 leading-relaxed">
                "Working with NexFlow transformed our digital presence. The results exceeded our expectations, and the team's expertise was evident at every step."
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-xl"
                  style={{ backgroundColor: color }}
                >
                  JD
                </div>
                <div>
                  <div className="font-black text-slate-900 text-lg">John Doe</div>
                  <div className="text-slate-600 font-medium">CEO, Tech Innovations Inc.</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Awards/Recognition */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Award size={24} style={{ color }} />
            <span className="text-slate-600 font-semibold">Trusted by Industry Leaders</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale">
            {/* Placeholder for client logos */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i}
                className="w-32 h-12 bg-slate-200 rounded-lg"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialProof;
