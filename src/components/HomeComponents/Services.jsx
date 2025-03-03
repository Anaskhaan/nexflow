// import { User, Rocket, Code, Zap, BarChart, Globe } from "lucide-react";

// const serviceData = [
//   {
//     id: 1,
//     title: "Consultation",
//     description: "Expert consultation for your business needs",
//     longDescription: "Our team provides in-depth analysis and tailored strategies to optimize your business processes and drive growth.",
//     icon: <User size={24} className="text-white" />,
//     tags: ["TESTING", "ANALYZE"],
//   },
//   {
//     id: 2,
//     title: "Develop",
//     description: "Cutting-edge development solutions for your projects",
//     longDescription: "We leverage the latest technologies to build robust, scalable, and efficient solutions tailored to your specific needs.",
//     icon: <Rocket size={24} className="text-white" />,
//     tags: ["CODING", "DEPLOY"],
//   },
//   {
//     id: 3,
//     title: "Code Review",
//     description: "Thorough code reviews to ensure quality and best practices",
//     longDescription: "Our experts meticulously review your code to identify potential issues, improve performance, and ensure adherence to industry standards.",
//     icon: <Code size={24} className="text-white" />,
//     tags: ["QUALITY", "OPTIMIZE"],
//   },
//   {
//     id: 4,
//     title: "Performance",
//     description: "Optimize your applications for peak performance",
//     longDescription: "We fine-tune your applications to achieve maximum speed, efficiency, and reliability across all platforms and devices.",
//     icon: <Zap size={24} className="text-white" />,
//     tags: ["SPEED", "EFFICIENCY"],
//   },
//   {
//     id: 5,
//     title: "Analytics",
//     description: "Data-driven insights to inform your business decisions",
//     longDescription: "Our advanced analytics tools provide deep insights into your data, helping you make informed decisions and stay ahead of the competition.",
//     icon: <BarChart size={24} className="text-white" />,
//     tags: ["DATA", "INSIGHTS"],
//   },
//   {
//     id: 6,
//     title: "Global Reach",
//     description: "Expand your business with our global network solutions",
//     longDescription: "Leverage our extensive global network to expand your reach, enter new markets, and connect with customers worldwide.",
//     icon: <Globe size={24} className="text-white" />,
//     tags: ["NETWORK", "EXPAND"],
//   },
// ];

// const AnimatedServices = () => (
//   <div className="w-full bg-gray-50 py-20 px-6 md:px-20">
//     <div className="max-w-7xl mx-auto">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {serviceData.map((service) => (
//           <div key={service.id} className="service-card group">
//             <div className="card-content">
//               <div className="front">
//                 <div className="icon-wrapper">
//                   {service.icon}
//                   <div className="icon-bg" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
//                 <p className="text-gray-600 text-sm mb-4">{service.description}</p>
//                 <div className="flex gap-2 flex-wrap">
//                   {service.tags.map((tag, index) => (
//                     <span key={index} className="tag">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className="back">
//                 <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
//                 <p className="text-white/90 text-sm mb-6">{service.longDescription}</p>
//                 <button className="learn-more-btn">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     <style>{`
//       .service-card {
//         perspective: 1000px;
//         height: 320px;
//       }

//       .card-content {
//         position: relative;
//         width: 100%;
//         height: 100%;
//         transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
//         transform-style: preserve-3d;
//       }

//       .service-card:hover .card-content {
//         transform: rotateY(180deg);
//       }

//       .front, .back {
//         position: absolute;
//         width: 100%;
//         height: 100%;
//         backface-visibility: hidden;
//         border-radius: 1rem;
//         padding: 2rem;
//       }

//       .front {
//         background: white;
//         box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//         transform: rotateY(0deg);
//         transition: all 0.3s ease;
//       }

//       .back {
//         background: #3FA69B;
//         transform: rotateY(180deg);
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//       }

//       .icon-wrapper {
//         position: relative;
//         width: 48px;
//         height: 48px;
//         background: #3FA69B;
//         border-radius: 12px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         margin-bottom: 1.5rem;
//         overflow: hidden;
//         transition: transform 0.3s ease;
//       }

//       .icon-bg {
//         position: absolute;
//         width: 100%;
//         height: 100%;
//         background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 100%);
//         transform: translateX(-100%);
//         transition: transform 0.6s ease;
//       }

//       .service-card:hover .icon-wrapper {
//         transform: scale(1.1);
//       }

//       .service-card:hover .icon-bg {
//         transform: translateX(0);
//       }

//       .tag {
//         display: inline-block;
//         padding: 0.25rem 0.75rem;
//         background: rgba(63, 166, 155, 0.1);
//         color: #3FA69B;
//         border-radius: 9999px;
//         font-size: 0.75rem;
//         font-weight: 500;
//         transition: all 0.3s ease;
//       }

//       .service-card:hover .tag {
//         background: rgba(63, 166, 155, 0.15);
//       }

//       .learn-more-btn {
//         background: white;
//         color: #3FA69B;
//         padding: 0.5rem 1.5rem;
//         border-radius: 9999px;
//         font-weight: 500;
//         transition: all 0.3s ease;
//         transform: translateY(0);
//         box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//       }

//       .learn-more-btn:hover {
//         transform: translateY(-2px);
//         box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
//       }

//       @keyframes float {
//         0% { transform: translateY(0px); }
//         50% { transform: translateY(-10px); }
//         100% { transform: translateY(0px); }
//       }

//       .service-card {
//         animation: float 6s ease-in-out infinite;
//         animation-delay: calc(var(--delay) * 1s);
//       }

//       .service-card:nth-child(1) { --delay: 0; }
//       .service-card:nth-child(2) { --delay: 1; }
//       .service-card:nth-child(3) { --delay: 2; }
//       .service-card:nth-child(4) { --delay: 3; }
//       .service-card:nth-child(5) { --delay: 4; }
//       .service-card:nth-child(6) { --delay: 5; }
//     `}</style>
//   </div>
// );

// export default AnimatedServices;
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useState, useEffect } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
const ServiceCard = ({ title, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 p-6 h-full bg-gray-900 rounded-lg">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-full bg-[#3FA69B] bg-opacity-20 mr-3">
            <CheckCircle2 className="w-5 h-5 text-[#3FA69B]" />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-400 mb-4">{description}</p>
        <motion.div
          className="flex items-center text-[#3FA69B] font-medium"
          animate={{ x: isHovered ? 5 : 0 }}
        >
          <button className="flex items-center">
            Learn more <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </motion.div>
      </div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#3FA69B] to-teal-500 opacity-30"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "0%" : "-100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const FloatingShape = ({ size, color, top, left, right, bottom, delay }) => {
  return (
    <motion.div
      className={`absolute rounded-lg bg-gradient-to-br ${color} opacity-70`}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        zIndex: -1,
      }}
      animate={{
        y: [0, -15, 0, 15, 0],
        rotate: [0, 10, 0, -10, 0],
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};
export const Services = () => {
  const services = [
    {
      title: "Digital Strategy",
      description:
        "We craft comprehensive digital strategies tailored to your business goals and target audience.",
    },
    {
      title: "Content Marketing",
      description:
        "Engaging content that resonates with your audience and drives meaningful conversions.",
    },
    {
      title: "Social Media",
      description:
        "Strategic social media management to build community and amplify your brand voice.",
    },
    {
      title: "SEO Optimization",
      description:
        "Data-driven SEO strategies to improve visibility and drive organic traffic to your website.",
    },
    {
      title: "PPC Advertising",
      description:
        "Targeted pay-per-click campaigns that maximize ROI and capture high-intent audiences.",
    },
    {
      title: "Analytics & Insights",
      description:
        "Comprehensive data analysis to measure performance and inform strategic decisions.",
    },
  ];
  return (
    <div>
      <section className="py-20 bg-black relative">
        <FloatingShape
          size={100}
          color="from-[#3FA69B] to-teal-300"
          top="10%"
          right="5%"
          delay={3}
        />
        <FloatingShape
          size={70}
          color="from-purple-500 to-blue-500"
          bottom="10%"
          left="5%"
          delay={1}
        />

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl text-white md:text-4xl font-bold mb-6">
              Our Services
            </h2>
            <p className="text-gray-400">
              We offer a comprehensive suite of digital marketing services
              designed to elevate your brand and drive meaningful results in
              today&apos;s competitive landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
