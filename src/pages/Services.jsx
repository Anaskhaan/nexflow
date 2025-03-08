import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Smartphone,
  Megaphone,
  Globe,
  TrendingUp,
  BarChart2,
  Mail,
  ChevronRight,
  ArrowRight,
  Award,
  Users,
  Clock,
  Target,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Social Media Marketing",
      description:
        "Elevate your brand presence across all platforms with strategic content and engagement.",
      icon: <Megaphone size={32} />,
      benefits: [
        "Increased brand awareness",
        "Higher engagement rates",
        "Targeted audience reach",
      ],
      color: "#3FA69B",
    },
    {
      id: 2,
      title: "SEO Optimization",
      description:
        "Boost your visibility and climb search rankings with data-driven SEO strategies.",
      icon: <TrendingUp size={32} />,
      benefits: [
        "Improved search rankings",
        "Higher organic traffic",
        "Better conversion rates",
      ],
      color: "#36958B",
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "Create stunning, responsive websites that convert visitors into customers.",
      icon: <Globe size={32} />,
      benefits: [
        "Mobile-optimized design",
        "Fast loading speeds",
        "Intuitive user experience",
      ],
      color: "#2D847B",
    },
    {
      id: 4,
      title: "Branding",
      description:
        "Gain actionable insights with comprehensive performance tracking and analysis.",
      icon: <BarChart2 size={32} />,
      benefits: [
        "Real-time performance data",
        "Custom KPI tracking",
        "Competitive analysis",
      ],
      color: "#24736B",
    },
    {
      id: 5,
      title: "Digital Marketing",
      description:
        "Nurture leads and drive conversions with targeted email campaigns.",
      icon: <Mail size={32} />,
      benefits: [
        "Personalized messaging",
        "Automated workflows",
        "High ROI campaigns",
      ],
      color: "#1B625B",
    },
    {
      id: 6,
      title: "UI/UX",
      description:
        "Reach customers on-the-go with mobile-first marketing strategies.",
      icon: <Smartphone size={32} />,
      benefits: ["App promotion", "SMS marketing", "Location-based targeting"],
      color: "#12514B",
    },
  ];

  const stats = [
    {
      id: 1,
      value: "93%",
      label: "Client Retention",
      icon: <Users size={24} />,
    },
    {
      id: 2,
      value: "287%",
      label: "Average ROI",
      icon: <TrendingUp size={24} />,
    },
    { id: 3, value: "24/7", label: "Support", icon: <Clock size={24} /> },
    {
      id: 4,
      value: "500+",
      label: "Projects Completed",
      icon: <Award size={24} />,
    },
  ];

  const process = [
    {
      id: 1,
      title: "Discovery",
      description: "We analyze your business goals and market position",
    },
    {
      id: 2,
      title: "Strategy",
      description: "We create a tailored plan to achieve your objectives",
    },
    {
      id: 3,
      title: "Execution",
      description: "We implement campaigns across your chosen channels",
    },
    {
      id: 4,
      title: "Optimization",
      description: "We continuously refine for maximum performance",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  // ScrollTrigger animations
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 300;

      if (scrollY > triggerPoint) {
        controls.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="min-h-screen py-12 bg-black text-white">
      {/* Hero Section */}
      <motion.div
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90"></div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#3FA69B] rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
                scale: [0, Math.random() * 3 + 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 inline-block"
            >
              <div className="w-24 h-24 bg-[#3FA69B] bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                <Zap size={42} className="text-[#3FA69B]" />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Elevate Your{" "}
              <motion.span
                className="text-[#3FA69B] inline-block"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Digital
              </motion.span>{" "}
              Presence
            </h1>

            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Innovative marketing solutions that transform your brand and
              deliver measurable results
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.button
                className="bg-[#3FA69B] text-white px-8 py-4 rounded-full text-lg font-medium flex items-center group w-full sm:w-auto"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 30px rgba(63, 166, 155, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
                <motion.span
                  className="ml-2"
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>

              <motion.button
                className="border-2 border-white hover:border-[#3FA69B] text-white px-8 py-4 rounded-full text-lg font-medium w-full sm:w-auto"
                whileHover={{
                  scale: 1.05,
                  borderColor: "#3FA69B",
                  color: "#3FA69B",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute bottom-20  left-20 w-64 h-64 rounded-full bg-[#3FA69B] opacity-10 filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute top-40 right-20 w-96 h-96 rounded-full bg-[#3FA69B] opacity-5 filter blur-3xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            x: [0, -70, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <div className="w-10 h-16  border-2 border-white rounded-full flex justify-center">
            <motion.div
              className="w-2 h-2 bg-white rounded-full mt-2"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.3,
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <div className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="text-center"
                variants={itemVariants}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-[#3FA69B] bg-opacity-20 flex items-center justify-center mx-auto mb-4"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(63, 166, 155, 0.3)",
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.h3
                  className="text-4xl font-bold mb-2 text-[#3FA69B]"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.1 * stat.id }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#3FA69B] bg-opacity-20 text-[#3FA69B] text-sm font-medium mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We <span className="text-[#3FA69B]">Offer</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3FA69B] to-teal-700 mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              Comprehensive digital marketing solutions tailored to your unique
              business needs and goals
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="bg-gray-900 rounded-xl overflow-hidden group relative"
                variants={itemVariants}
                whileHover="hover"
              >
                <div className="p-8 relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-[#3FA69B] bg-opacity-20 flex items-center justify-center rounded-xl mb-6 text-[#3FA69B]"
                    whileHover={{ rotate: 360, backgroundColor: service.color }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-[#3FA69B] mr-3"></div>
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-[#3FA69B] font-medium"
                  >
                    <Link to={`/services/${service.id}`}>
                      Learn more <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>

                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0"></div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: [
                      `linear-gradient(90deg, ${service.color}00 0%, ${service.color} 50%, ${service.color}00 100%)`,
                    ],
                  }}
                >
                  <div className="absolute inset-0 p-0.5">
                    <div className="h-full w-full bg-gray-900 rounded-xl"></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24 px-4 bg-gray-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute left-0 top-0 h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3FA69B" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points="0,0 100,0 100,100 0,100" fill="url(#grad)" />
          </svg>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#3FA69B] bg-opacity-20 text-[#3FA69B] text-sm font-medium mb-4">
              OUR PROCESS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We <span className="text-[#3FA69B]">Work</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3FA69B] to-teal-700 mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              Our proven framework ensures consistent results across all
              projects
            </p>
          </motion.div>

          <div className="relative">
            {/* Process steps */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3FA69B] to-teal-900 transform -translate-x-1/2"></div>

            <div className="space-y-16 md:space-y-0 relative">
              {process.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } relative`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div
                    className={`w-full md:w-1/2 flex ${
                      index % 2 === 0
                        ? "md:justify-end md:pr-16"
                        : "md:justify-start md:pl-16"
                    }`}
                  >
                    <motion.div
                      className="bg-gray-800 p-8 rounded-xl w-full max-w-lg"
                      whileHover={{
                        y: -5,
                        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#3FA69B] bg-opacity-20 flex items-center justify-center text-[#3FA69B] mr-4">
                          <span className="text-xl font-bold">{step.id}</span>
                        </div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-gray-300">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Timeline node */}
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#3FA69B] z-10 hidden md:block"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  />

                  <div className="w-full md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="py-24 px-4 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Background animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#3FA69B] opacity-10 filter blur-3xl"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, Math.random() + 0.5, 1],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-[#3FA69B] bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
              <Target size={36} className="text-[#3FA69B]" />
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ready to <span className="text-[#3FA69B]">Transform</span>
            <br className="hidden md:block" /> Your Digital Presence?
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Schedule a consultation with our experts and discover how NextFlow
            can elevate your brand.
          </motion.p>

          <motion.div
            className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              className="bg-[#3FA69B] text-white px-10 py-5 rounded-full text-lg font-medium"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(63, 166, 155, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Your Free Strategy Call
            </motion.button>

            <motion.button
              className="text-white border-2 border-white hover:border-[#3FA69B] hover:text-[#3FA69B] px-10 py-5 rounded-full text-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Portfolio
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      {/* <footer className="py-12 px-4 bg-black">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl font-bold">
                Next<span className="text-[#3FA69B]">Flow</span>
              </span>
            </motion.div>

            <motion.div
              className="flex space-x-6 mt-6 md:mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="#"
                className="text-gray-400 hover:text-[#3FA69B] transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#3FA69B] transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#3FA69B] transition-colors"
              >
                Contact
              </a>
            </motion.div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} NextFlow. All rights reserved.
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Services;
