"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ServicesData } from "@/lib/data";
import { Megaphone, Search, Smartphone, Zap, Palette, Code, Monitor, Layers, TrendingUp } from "lucide-react";

interface ServicesSectionProps {
  containerVariants: any;
  itemVariants: any;
}

// Define service categories with their services
const serviceCategories = [
  {
    name: "Marketing Services",
    description: "Data-driven strategies to amplify your brand and drive growth",
    services: [
      {
        slug: "seo-optimization",
        title: "SEO Optimization",
        description: "Boost your organic visibility and rank higher on search engines with strategic SEO",
        icon: Search,
      },
      {
        slug: "app-store-optimization",
        title: "ASO Optimization",
        description: "Maximize app downloads with optimized store presence and visibility",
        icon: Smartphone,
      },
      {
        slug: "social-media-marketing",
        title: "Social Media Marketing",
        description: "Grow your brand with engaging content and data-driven social strategies",
        icon: Megaphone,
      },
      {
        slug: "ppc-campaigns",
        title: "PPC Campaigns",
        description: "Drive targeted traffic and conversions with optimized paid advertising",
        icon: Zap,
      },
      {
        slug: "ai-image-processing",
        title: "AI Image Processing",
        description: "Transform visuals with cutting-edge AI-powered image enhancement",
        icon: Layers,
      },
      {
        slug: "affiliate-marketing",
        title: "Affiliate Marketing",
        description: "Scale your revenue with high-performance partner networks and publisher management",
        icon: TrendingUp,
      },
    ],
  },
  {
    name: "Branding",
    description: "Craft a memorable identity that resonates with your audience",
    services: [
      {
        slug: "branding",
        title: "Branding",
        description: "Build a powerful brand identity that stands out and connects with your audience",
        icon: Palette,
      },
    ],
  },
  {
    name: "Development Services",
    description: "Build robust, scalable digital solutions tailored to your needs",
    services: [
      {
        slug: "web-development",
        title: "Web Development",
        description: "Create stunning, high-performance websites that drive results",
        icon: Code,
      },
      {
        slug: "app-development",
        title: "App Development",
        description: "Build powerful mobile applications for iOS and Android platforms",
        icon: Monitor,
      },
      {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        description: "Design intuitive, beautiful user experiences that users love",
        icon: Monitor,
      },
    ],
  },
];

const ServicesSection = ({ containerVariants, itemVariants }: ServicesSectionProps) => {
  return (
    <section className="py-20 bg-white relative px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">
            Our <span className="text-brand">Core Services</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            We provide strategic digital solutions designed to elevate your brand and drive sustainable growth in a competitive landscape.
          </p>
        </motion.div>

        {/* Service Categories */}
        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} id={category.name.toLowerCase().replace(/\s+/g, '-')} className="mb-20 last:mb-0 scroll-mt-32">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="h-1 w-12 bg-brand rounded-full"></div>
                <h3 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
                  {category.name}
                </h3>
              </div>
              <p className="text-slate-500 text-lg ml-16 font-medium italic">
                {category.description}
              </p>
            </motion.div>

            {/* Service Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {category.services.map((service, index) => (
                <Link key={index} href={`/services/${service.slug}`}>
                  <motion.div
                    variants={itemVariants}
                    whileHover="hover"
                    className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-brand/30 transition-all cursor-pointer h-full flex flex-col shadow-sm hover:shadow-xl group"
                  >
                    <div className="w-16 h-16 bg-brand/10 rounded-xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-all shadow-sm">
                      <service.icon size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-slate-600 mb-8 flex-grow leading-relaxed font-medium">
                      {service.description}
                    </p>
                    <div className="flex items-center text-brand font-bold text-sm uppercase tracking-widest">
                      Learn More
                      <motion.span
                        initial={{ x: 0 }}
                        animate={{ x: 5 }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                        className="ml-2"
                      >
                        →
                      </motion.span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>

            {/* Category Separator */}
            {categoryIndex < serviceCategories.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-20 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
              ></motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
