import { Award, BarChart, Users, Zap, Sparkles, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Award,
    title: "Award-Winning",
    description: "Recognized for creative campaigns that drive results.",
    color: "from-[#3FA69B] to-[#2D7E74]",
  },
  {
    icon: BarChart,
    title: "Data-Driven",
    description: "Campaigns crafted with real insights for real ROI.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Top-tier talent with deep industry experience.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Zap,
    title: "Rapid Launch",
    description: "Fast execution to capitalize on market timing.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Constantly evolving to keep you ahead.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Target,
    title: "Precise Targeting",
    description: "Laser-focused segmentation for max efficiency.",
    color: "from-violet-500 to-purple-600",
  },
];

const FeatureCard = ({ icon: Icon, title, description, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`bg-gray-900 rounded-xl p-5 transition-shadow hover:shadow-[0_0_0_2px_#3FA69B]`}
  >
    <div
      className={`w-12 h-12 flex items-center justify-center rounded-md mb-4 bg-gradient-to-br ${color}`}
    >
      <Icon className="text-white w-5 h-5" />
    </div>
    {/* Fixed heading: h3 instead of h4 */}
    <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
  </motion.div>
);

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Soft background gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[#3FA69B] blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-[#3FA69B] tracking-wider font-medium mb-2">
            WHY NEXFLOW
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Smart <span className="text-[#3FA69B]">Growth Engines</span> for Bold Brands
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base">
            We redefine digital performance with proven systems that scale.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <FeatureCard key={idx} {...f} index={idx} />
          ))}
        </div>

        {/* CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#3FA69B] to-purple-500 rounded-2xl blur-lg opacity-40"></div>
          <div className="relative bg-gray-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 md:mr-6">
              {/* CTA Heading: h3 */}
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Ready to <span className="text-[#3FA69B]">Accelerate?</span>
              </h3>
              <p className="text-gray-400 mt-1">
                Let’s triple your marketing ROI—starting now.
              </p>
            </div>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#3FA69B] hover:bg-[#3FA69B]/90 text-black font-semibold px-6 py-3 rounded-md"
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
