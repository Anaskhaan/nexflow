"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { footerData, navLinks } from "@/lib/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-900 pt-32 pb-12 px-6 md:px-12 lg:px-20 relative overflow-hidden border-t border-slate-200">
      {/* Background Atmosphere - Subtle and Soft */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Section: High Impact CTA */}
        <div className="mb-24 p-12 md:p-16 rounded-[3rem] bg-white border border-slate-200 shadow-xl shadow-slate-100 flex flex-col md:flex-row items-center justify-between gap-12 group">
          <div className="relative z-10 space-y-4 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-slate-950">
              Ready to <br />
              <span className="text-brand">Evolve?</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium max-w-md">
              Your digital transformation begins with a single conversation. Let's engineer your dominance.
            </p>
          </div>
          <Link href="/contact" className="relative z-10">
            <button className="bg-slate-950 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-brand transition-all duration-300 shadow-2xl flex items-center gap-3 group/btn">
              GET IN TOUCH
              <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 text-left">
          
          {/* Column 1: Brand Lore */}
          <div className="space-y-8">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-1 font-black text-2xl tracking-tighter uppercase text-slate-950">
                <span>Nexflow</span>
                <span className="text-brand">Tech</span>
                <div className="w-2 h-2 rounded-full bg-brand animate-pulse ml-1" />
              </div>
            </Link>
            <p className="text-slate-600 font-medium leading-relaxed italic">
              Empowering elite brands with high-performance digital ecosystems. From ROI-driven marketing to precision engineering.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Instagram, url: "https://instagram.com" },
                { icon: Facebook, url: "https://facebook.com" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand hover:border-brand hover:bg-brand/5 transition-all shadow-sm"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Solutions</h4>
            <ul className="space-y-4">
              {[
                { name: "Web Development", slug: "web-development" },
                { name: "Mobile App Dev", slug: "app-development" },
                { name: "UI/UX Design", slug: "ui-ux-design" },
                { name: "SEO Optimization", slug: "seo-optimization" },
                { name: "Paid Media", slug: "ppc-campaigns" },
                { name: "AI Automations", slug: "deployment-automations" }
              ].map((service, i) => (
                <li key={i}>
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="text-slate-600 hover:text-brand transition-colors text-sm font-bold flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-slate-200 rounded-full group-hover:bg-brand transition-colors" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Ecosystem */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Ecosystem</h4>
            <ul className="space-y-4">
              {[
                { title: "ROI Calculator", href: "/saas-roi" },
                { title: "Funnel Audit", href: "/funnel-audit" },
                { title: "Our Portfolio", href: "/Portfolio" },
                { title: "The Journal", href: "/blog" },
                { title: "Success Stories", href: "/CaseStudies" }
              ].map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href} 
                    className="text-slate-600 hover:text-slate-950 transition-colors text-sm font-bold flex items-center justify-between group"
                  >
                    {link.title}
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Presence */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Presence</h4>
            <div className="space-y-6 text-left">
              <div className="group">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">HQ - Delaware</span>
                <p className="text-sm font-bold text-slate-900 group-hover:text-brand transition-colors">8 The Green #6092, Dover, 19901</p>
              </div>
              <div className="group">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Eng - Lahore</span>
                <p className="text-sm font-bold text-slate-900 group-hover:text-brand transition-colors">56-G, Gulberg III, Lahore PK</p>
              </div>
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <a href="mailto:info@nexflow.tech" className="flex items-center gap-3 text-slate-600 hover:text-brand text-sm font-bold transition-colors">
                  <Mail size={16} /> info@nexflow.tech
                </a>
                <a href="tel:+16788256967" className="flex items-center gap-3 text-slate-600 hover:text-brand text-sm font-bold transition-colors">
                  <Phone size={16} /> +1 (678) 825 6967
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8 text-left">
          <div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
            © {currentYear} NEXFLOW TECHNOLOGIES. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8">
            {footerData.legalLinks.map((link, i) => (
              <Link 
                key={i} 
                href={link.url}
                className="text-slate-400 hover:text-slate-950 text-[10px] font-black uppercase tracking-widest transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
