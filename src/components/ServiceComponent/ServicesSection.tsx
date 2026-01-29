"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Megaphone, Search, Smartphone, Zap, Palette, Code, Monitor, Layers, TrendingUp, ArrowUpRight, ShoppingCart } from "lucide-react";

interface ServicesSectionProps {
  containerVariants: any;
  itemVariants: any;
}

// Define service categories with their services
export const serviceCategories = [
  {
    name: "Marketing Services",
    id: "marketing-services",
    description: "Data-driven strategies to amplify your brand and drive exponential growth.",
    services: [
      { slug: "seo-optimization", title: "SEO Optimization", description: "Boost organic visibility and dominate search results.", icon: Search, size: "large" },
      { slug: "app-store-optimization", title: "ASO optimization", description: "Maximize app downloads and store presence.", icon: Smartphone, size: "small" },
      { slug: "social-media-marketing", title: "Social Media Marketing", description: "Viral content and data-driven reach.", icon: Megaphone, size: "small" },
      { slug: "ppc-campaigns", title: "PPC Campaigns", description: "High-intent traffic and conversion scaling.", icon: Zap, size: "small" },
      { slug: "ai-image-processing", title: "AI Image Processing", description: "Next-gen enhancements at scale.", icon: Layers, size: "small" },
      { slug: "affiliate-marketing", title: "Affiliate Marketing", description: "Elite level publisher network management.", icon: TrendingUp, size: "large" },
    ],
  },
  {
    name: "Branding & Identity",
    id: "branding",
    description: "Crafting legendary identities that resonate globally.",
    services: [
      { slug: "branding", title: "Branding", description: "Build a powerful brand identity that connects deeply.", icon: Palette, size: "full" },
    ],
  },
  {
    name: "Engineering Solutions",
    id: "development-services",
    description: "Robust, scalable digital architecture built for the modern age.",
    services: [
      { slug: "web-development", title: "Web Development", description: "High-performance apps that drive results.", icon: Code, size: "large" },
      { slug: "app-development", title: "App Development", description: "Native mobile power for iOS and Android.", icon: Monitor, size: "small" },
      { slug: "ui-ux-design", title: "UI/UX Design", description: "Intuitive, legendary user experiences.", icon: Monitor, size: "small" },
      { slug: "deployment-automations", title: "Deployment & Automations", description: "Enterprise-grade CI/CD and cloud solutions.", icon: Zap, size: "large" },
      { slug: "cms-ecommerce", title: "CMS & E-commerce", description: "Elite Shopify and WordPress experiences.", icon: ShoppingCart, size: "large" },
    ],
  },
];

const ServicesSection = ({ containerVariants, itemVariants }: ServicesSectionProps) => {
  return (
    <section className="py-32 bg-white relative px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Accent Blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <motion.div
          className="mb-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-black tracking-[0.4em] uppercase text-brand mb-6 block">Our Expertise</span>
          <h2 className="text-6xl md:text-8xl font-black text-slate-950 mb-8 tracking-tighter uppercase leading-[0.85]">
            Engineered <br />
            <span className="text-slate-400">For Dominance.</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Strategic digital solutions designed to obsolete your competition and scale your vision.
          </p>
        </motion.div>

        {/* Bento Grid layout */}
        <div className="space-y-40">
          {serviceCategories.map((category, catIdx) => (
            <div key={catIdx} id={category.id} className="scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-16 border-l-4 border-brand pl-8"
              >
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
                  {category.name}
                </h3>
                <p className="text-xl text-slate-500 font-medium max-w-xl italic">
                  {category.description}
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.services.map((service, sIndex) => {
                  const Icon = service.icon;
                  return (
                    <Link 
                      key={sIndex} 
                      href={`/services/${service.slug}`}
                      className={`group relative overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100 p-10 h-[400px] transition-all duration-700 hover:shadow-2xl 
                        ${service.size === 'large' ? 'lg:col-span-2' : service.size === 'full' ? 'lg:col-span-4' : 'col-span-1'}`}
                    >
                      {/* Background Reveal effect */}
                      <div className="absolute inset-0 bg-slate-950 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                      
                      <div className="relative z-10 h-full flex flex-col justify-between">
                        <div className="space-y-6">
                          <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-slate-950 shadow-sm border border-slate-100 group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                            <Icon size={32} />
                          </div>
                          <div>
                            <h4 className="text-3xl font-black text-slate-900 uppercase tracking-tighter group-hover:text-white transition-colors duration-500 mb-2">
                              {service.title}
                            </h4>
                            <p className="text-slate-500 text-lg font-medium group-hover:text-slate-400 transition-colors duration-500 max-w-[280px]">
                              {service.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pointer-events-none">
                           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 group-hover:text-brand/50 transition-colors">Learn More</span>
                           <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-brand/40 group-hover:bg-brand text-slate-950 group-hover:text-white transition-all duration-500">
                             <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-500" />
                           </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
