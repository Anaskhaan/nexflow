import { motion } from "framer-motion";
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
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ServicePill = ({ title, icon, isActive, onClick }) => {
  const icons = {
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
          ? "bg-[#3FA69B] text-black"
          : "bg-gray-800 text-gray-300 hover:bg-gray-700"
      }`}
    >
      {icons[icon]}
      <span>{title}</span>
    </button>
  );
};

const ServiceDetail = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-900 rounded-xl p-6 border border-gray-800"
    >
      <div className="flex items-start">
        <div className="p-3 rounded-lg bg-[#3FA69B] bg-opacity-20 mr-4">
          {service.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{service.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {service.features.map((feature, i) => (
              <span
                key={i}
                className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
          <Link
            to="/services"
            className="text-[#3FA69B] text-sm font-medium flex items-center group"
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
      icon: <Code className="w-5 h-5 text-[#3FA69B]" />,
      description:
        "Building high-performance, scalable websites with modern frameworks.",
      features: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    },
    {
      title: "UI/UX Design",
      icon: <Layout className="w-5 h-5 text-[#3FA69B]" />,
      description:
        "Creating intuitive user experiences with pixel-perfect interfaces.",
      features: ["User Research", "Wireframing", "Prototyping", "Figma"],
    },
    {
      title: "App Development",
      icon: <Smartphone className="w-5 h-5 text-[#3FA69B]" />,
      description: "Cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      title: "Digital Marketing",
      icon: <BarChart2 className="w-5 h-5 text-[#3FA69B]" />,
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
    <section className="py-16 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-[#3FA69B] tracking-wider">
            OUR EXPERTISE
          </span>
          <h2 className="text-3xl font-bold text-white mt-2 mb-3">
            Full-Spectrum{" "}
            <span className="text-[#3FA69B]">Digital Services</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#3FA69B] to-[#2D7E74] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
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
            to="/services"
            className="inline-flex items-center px-8 py-3 bg-transparent border border-[#3FA69B] text-[#3FA69B] rounded-lg hover:bg-[#3FA69B] hover:text-black transition-colors duration-300"
          >
            View All Services
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
