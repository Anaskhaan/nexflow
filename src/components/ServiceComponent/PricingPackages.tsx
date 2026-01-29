"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, Shield, Zap } from "lucide-react";

interface Package {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

interface PricingPackagesProps {
  packages?: Package[];
  pricing: string;
  color: string;
  guarantee?: string;
}

const PricingPackages = ({ packages, pricing, color, guarantee }: PricingPackagesProps) => {
  // Default packages if not provided
  const defaultPackages: Package[] = [
    {
      name: "Starter",
      price: pricing,
      features: [
        "Initial consultation",
        "Basic implementation",
        "30-day support",
        "Email support",
        "Monthly reporting"
      ]
    },
    {
      name: "Professional",
      price: "Custom",
      features: [
        "Everything in Starter",
        "Advanced features",
        "90-day support",
        "Priority support",
        "Weekly reporting",
        "Dedicated account manager"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Everything in Professional",
        "Custom solutions",
        "Unlimited support",
        "24/7 support",
        "Real-time reporting",
        "Strategic consulting",
        "SLA guarantee"
      ]
    }
  ];

  const displayPackages = packages || defaultPackages;

  return (
    <div id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Transparent Pricing, Maximum Value
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Choose the package that fits your needs. All plans include our commitment to excellence.
          </p>
          
          {/* Guarantee Badge */}
          {guarantee && (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 font-bold"
              style={{ borderColor: color, color }}
            >
              <Shield size={20} />
              <span>{guarantee}</span>
            </motion.div>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {displayPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-white font-bold text-sm shadow-lg z-10"
                  style={{ backgroundColor: color }}
                >
                  Most Popular
                </div>
              )}

              {/* Card */}
              <div 
                className={`relative rounded-3xl p-8 h-full flex flex-col ${
                  pkg.popular 
                    ? 'shadow-2xl border-2 scale-105' 
                    : 'shadow-lg border border-slate-100'
                }`}
                style={pkg.popular ? { borderColor: color } : {}}
              >
                {/* Glow Effect for Popular */}
                {pkg.popular && (
                  <div 
                    className="absolute inset-0 rounded-3xl blur-2xl opacity-20"
                    style={{ backgroundColor: color }}
                  />
                )}

                <div className="relative z-10">
                  {/* Package Name */}
                  <h3 className="text-2xl font-black text-slate-900 mb-2">
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-4xl font-black text-slate-900">
                      {pkg.price}
                    </div>
                    {pkg.price !== "Custom" && (
                      <div className="text-slate-600 font-medium">per month</div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-1">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check 
                          size={20} 
                          className="flex-shrink-0 mt-0.5"
                          style={{ color }}
                        />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 ${
                        pkg.popular
                          ? 'text-white shadow-lg'
                          : 'border-2 hover:bg-slate-50'
                      }`}
                      style={
                        pkg.popular
                          ? { backgroundColor: color }
                          : { borderColor: color, color }
                      }
                    >
                      Get Started
                      <ArrowRight size={18} />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div 
            className="inline-block rounded-2xl p-8"
            style={{
              background: `linear-gradient(135deg, ${color}10, ${color}05)`
            }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap size={24} style={{ color }} />
              <span className="text-xl font-black text-slate-900">
                Not sure which package is right for you?
              </span>
            </div>
            <p className="text-slate-600 font-medium mb-6">
              Schedule a free consultation and we'll help you choose the perfect plan for your needs.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-bold border-2 hover:bg-slate-50 transition-all"
                style={{ borderColor: color, color }}
              >
                Talk to an Expert
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPackages;
