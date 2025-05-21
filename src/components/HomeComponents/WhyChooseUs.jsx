// import { Award, BarChart, Users, Zap } from "lucide-react";

// const features = [
//   {
//     id: 1,
//     icon: <Award size={32} />,
//     title: "Award-Winning Strategies",
//     description:
//       "Our campaigns have been recognized for their creativity and effectiveness across multiple industry awards.",
//   },
//   {
//     id: 2,
//     icon: <BarChart size={32} />,
//     title: "Data-Driven Results",
//     description:
//       "We leverage analytics and insights to craft campaigns that deliver measurable ROI and business growth.",
//   },
//   {
//     id: 3,
//     icon: <Users size={32} />,
//     title: "Expert Team",
//     description:
//       "Our specialists bring years of experience from top agencies and brands across diverse marketing disciplines.",
//   },
//   {
//     id: 4,
//     icon: <Zap size={32} />,
//     title: "Rapid Implementation",
//     description:
//       "We move quickly from strategy to execution, helping you capture market opportunities faster than competitors.",
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section className="py-16 bg-black relative overflow-hidden">
//       {/* Background accent element */}
//       <div className="absolute top-0 right-0 w-1/3 h-full bg-[#3FA69B] opacity-5 rounded-l-full"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-2">Why Choose Us</h2>
//           <div className="w-20 h-1 bg-[#3FA69B] mx-auto mb-6"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {features.map((feature) => (
//             <div
//               key={feature.id}
//               className="flex bg-black border-l-4 border-[#3FA69B] p-6 rounded-lg hover:shadow-lg transition-shadow"
//             >
//               <div className="mr-6 text-[#3FA69B]">{feature.icon}</div>
//               <div>
//                 <h3 className="text-xl font-bold text-white mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-300">{feature.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 bg-gradient-to-r from-black via-black to-[#3FA69B]/20 p-8 rounded-xl">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="mb-6 md:mb-0 md:mr-8">
//               <h3 className="text-2xl font-bold text-white mb-2">
//                 Ready to Transform Your Digital Presence?
//               </h3>
//               <p className="text-gray-300">
//                 Join over 200+ brands that have achieved their digital marketing
//                 goals with us.
//               </p>
//             </div>
//             <button className="bg-[#3FA69B] hover:bg-[#3FA69B]/80 text-black font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap">
//               Get Started Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Award, BarChart, Users, Zap, Sparkles, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    id: 1,
    icon: <Award className="w-6 h-6" />,
    title: "Award-Winning Strategies",
    description:
      "Our campaigns have been recognized for their creativity and effectiveness across multiple industry awards.",
    color: "from-[#3FA69B] to-[#2D7E74]",
  },
  {
    id: 2,
    icon: <BarChart className="w-6 h-6" />,
    title: "Data-Driven Results",
    description:
      "We leverage analytics and insights to craft campaigns that deliver measurable ROI and business growth.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: 3,
    icon: <Users className="w-6 h-6" />,
    title: "Expert Team",
    description:
      "Our specialists bring years of experience from top agencies and brands across diverse marketing disciplines.",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 4,
    icon: <Zap className="w-6 h-6" />,
    title: "Rapid Implementation",
    description:
      "We move quickly from strategy to execution, helping you capture market opportunities faster than competitors.",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 5,
    icon: <Sparkles className="w-6 h-6" />,
    title: "Innovation Focus",
    description:
      "We pioneer cutting-edge techniques that keep you ahead of industry trends and competitors.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    id: 6,
    icon: <Target className="w-6 h-6" />,
    title: "Precision Targeting",
    description:
      "Laser-focused audience segmentation that maximizes your campaign efficiency.",
    color: "from-violet-500 to-purple-600",
  },
];

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-2xl p-0.5 bg-gradient-to-br ${feature.color}`}
    >
      <div className="relative z-10 h-full bg-gray-900 rounded-[15px] p-6 group">
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <div
            className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.color} blur-xl`}
          ></div>
        </div>
        <div className="relative z-20">
          <div
            className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${feature.color}`}
          >
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
          <p className="text-gray-300">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Floating gradient spheres */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-[#3FA69B] opacity-5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500 opacity-5 blur-3xl"></div>
      </div>

      {/* Diagonal background pattern */}
      <div className="absolute inset-0 opacity-5 [background:repeating-linear-gradient(45deg,_transparent,_transparent_20px,_#3FA69B_20px,_#3FA69B_40px)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#3FA69B] font-medium mb-4 tracking-wider">
            WHY NEXFLOW
          </span>
          <h2 className="text-5xl font-bold text-white mb-6">
            The <span className="text-[#3FA69B]">Competitive Edge</span> Your
            Business Needs
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#3FA69B] to-[#2D7E74] mx-auto mb-8"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            We don't just meet expectations—we redefine what's possible in
            digital performance.
          </p>
        </motion.div>

        {/* Hexagonal grid layout */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`${
                  index === 0 || index === 5
                    ? "md:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                <FeatureCard feature={feature} index={index} />
              </div>
            ))}
          </div>

          {/* Center floating element */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="w-48 h-48 rounded-full bg-gradient-to-br from-[#3FA69B] to-[#2D7E74] opacity-10 blur-xl"
            ></motion.div>
          </div>
        </div>

        {/* 3D floating CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#3FA69B] to-purple-500 rounded-2xl opacity-70 blur-lg"></div>
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-10">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Ready for{" "}
                  <span className="text-[#3FA69B]">Exponential Growth?</span>
                </h3>
                <p className="text-gray-300 max-w-lg">
                  Join 200+ forward-thinking brands achieving 3X ROI with our
                  proven frameworks.
                </p>
              </div>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden bg-[#3FA69B] hover:bg-[#3FA69B]/90 text-black font-bold py-4 px-10 rounded-lg transition-all"
                >
                  <span className="relative z-10">Get Started Now</span>
                  <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity"></div>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
