"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { 
  Code, 
  Smartphone, 
  BarChart2, 
  Search, 
  Share2, 
  Zap, 
  PenTool, 
  Cpu, 
  Layout, 
  ArrowRight 
} from "lucide-react";

interface ServicePillProps {
  title: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}

const ServicePill = ({ title, icon, isActive, onClick }: ServicePillProps) => {
  const icons: { [key: string]: React.ReactNode } = {
    web: <Code className="w-4 h-4" />,
    app: <Smartphone className="w-4 h-4" />,
    marketing: <BarChart2 className="w-4 h-4" />,
    seo: <Search className="w-4 h-4" />,
    aso: <Smartphone className="w-4 h-4" />,
    smm: <Share2 className="w-4 h-4" />,
    ppc: <Zap className="w-4 h-4" />,
    branding: <PenTool className="w-4 h-4" />,
    ai: <Cpu className="w-4 h-4" />,
    uiux: <Layout className="w-4 h-4" />,
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 transition-all ${
        isActive
          ? "bg-brand text-white shadow-md"
          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
      }`}
    >
      {icons[icon]}
      <span>{title}</span>
    </button>
  );
};

interface ServiceDetailProps {
  service: {
    title: string;
    icon: React.ReactNode;
    description: string;
    features: string[];
  };
}

const ServiceDetail = ({ service }: ServiceDetailProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start">
        <div className="p-3 rounded-lg bg-brand/10 mr-4">
          {service.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
          <p className="text-slate-600 text-sm mb-4 leading-relaxed">{service.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {service.features.map((feature, i) => (
              <span
                key={i}
                className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
          <Link
            href="/Services"
            className="text-brand text-sm font-semibold flex items-center group"
          >
            Learn more about {service.title}
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Web Development",
      icon: <Code className="w-5 h-5 text-brand" />,
      description:
        "Building high-performance, scalable websites with modern frameworks.",
      features: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    },
    {
      title: "UI/UX Design",
      icon: <Layout className="w-5 h-5 text-brand" />,
      description:
        "Creating intuitive user experiences with pixel-perfect interfaces.",
      features: ["User Research", "Wireframing", "Prototyping", "Figma"],
    },
    {
      title: "App Development",
      icon: (
        <Smartphone className="w-5 h-5 text-brand" />
      ),
      description: "Cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      title: "Digital Marketing",
      icon: (
        <BarChart2 className="w-5 h-5 text-brand" />
      ),
      description: "Comprehensive strategies to grow your online presence.",
      features: ["Content Strategy", "Campaign Management", "Analytics"],
    },
  ];

  const allServices = [
    { title: "Web", icon: "web" },
    { title: "UI/UX", icon: "uiux" },
    { title: "App", icon: "app" },
    { title: "Marketing", icon: "marketing" },
    { title: "SEO", icon: "seo" },
    { title: "ASO", icon: "aso" },
    { title: "SMM", icon: "smm" },
    { title: "PPC", icon: "ppc" },
    { title: "Branding", icon: "branding" },
    { title: "AI/ML", icon: "ai" },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-brand tracking-widest uppercase">
            OUR EXPERTISE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-3">
            Full-Spectrum{" "}
            <span className="text-brand">
              Digital Services
            </span>
          </h2>
          <div className="w-16 h-1 bg-brand mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
            Comprehensive solutions from design to development and marketing.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {allServices.map((service, index) => (
            <ServicePill
              key={index}
              title={service.title}
              icon={service.icon}
              isActive={activeService === index && index < 4}
              onClick={() => setActiveService(index)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {services.slice(0, 2).map((service, index) => (
            <ServiceDetail key={index} service={service} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.slice(2, 4).map((service, index) => (
            <ServiceDetail key={index + 2} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/Services"
            className="inline-flex items-center px-8 py-3 bg-white border border-brand text-brand font-semibold rounded-lg hover:bg-brand hover:text-white shadow-sm transition-all duration-300"
          >
            View All Services
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
