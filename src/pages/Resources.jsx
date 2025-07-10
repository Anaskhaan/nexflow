import { motion } from "framer-motion";
import { ArrowRight, Calculator, BarChart2, Zap } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Link } from "react-router-dom";

export function Resources() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Card hover animations
    gsap.utils.toArray(".resource-card").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card.querySelector(".card-highlight"), {
          opacity: 1,
          duration: 0.3,
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card.querySelector(".card-highlight"), {
          opacity: 0,
          duration: 0.3,
        });
      });
    });
  }, { scope: containerRef });

  const resources = [
    {
      title: "SaaS ROI Calculator",
      description: "Measure your software investment returns with precision",
      icon: <Calculator className="text-[#3ea69b]" size={32} />,
      cta: "Calculate ROI",
      href: "/SaasRoi",
      accent: "from-[#3ea69b]/10 to-[#3ea69b]/5",
    },
    {
      title: "Funnel Audit",
      description: "Discover leaks in your conversion pipeline",
      icon: <BarChart2 className="text-[#3f4e58]" size={32} />,
      cta: "Analyze Funnel",
      href: "/FunnelAudit",
      accent: "from-[#3f4e58]/10 to-[#3f4e58]/5",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gray-950 text-[#e5e7eb] py-20 px-4"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#3ea69b]/5 blur-[80px] animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-[#3f4e58]/5 blur-[90px] animate-float-delay" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Growth <span className="text-[#3ea69b]">Resources</span>
          </h1>
          <p className="text-xl text-[#e5e7eb]/80 max-w-2xl mx-auto">
            Data-driven tools to optimize your SaaS performance
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="resource-card relative group h-full"
            >
              {/* Card highlight effect (shown on hover) */}
              <div
                className={`card-highlight absolute inset-0 bg-gradient-to-br ${resource.accent} rounded-xl opacity-0 transition-opacity duration-300`}
              />

              <div className="relative h-full bg-gray-900/50 border border-gray-800 rounded-xl p-8 backdrop-blur-sm overflow-hidden">
                {/* Floating accent elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#3ea69b]/5 blur-[60px]" />
                <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-[#3f4e58]/5 blur-[50px]" />

                {/* Card content */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6 p-3 bg-gray-800 rounded-lg w-fit">
                    {resource.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{resource.title}</h3>
                  <p className="text-[#e5e7eb]/80 mb-6 flex-grow">
                    {resource.description}
                  </p>

                  <motion.div whileTap={{ scale: 0.97 }}>
                    <Link
                      to={resource.href}
                      className="inline-flex items-center gap-2 text-[#3ea69b] font-medium group-hover:text-[#3ea69b]/90 transition-colors"
                    >
                      {resource.cta}
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-[#e5e7eb]/60 mb-4 flex items-center justify-center gap-2">
            <Zap className="text-[#3ea69b]" size={18} />
            More resources coming soon
          </p>
        </motion.div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 10s ease-in-out infinite 2s;
        }
      `}</style>
    </div>
  );
}