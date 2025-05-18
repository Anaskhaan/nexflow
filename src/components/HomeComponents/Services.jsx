import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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
          <Link to="/services">
            <button className="flex items-center">
              Learn more <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </Link>
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
      title: "Digital Marketing",
      description:
        "We craft comprehensive digital strategies tailored to your business goals and target audience.",
    },

    {
      title: "Social Media Marketing",
      description:
        "Strategic social media management to build community and amplify your brand voice.",
    },
    {
      title: "SEO Optimization",
      description:
        "Data-driven SEO strategies to improve visibility and drive organic traffic to your website.",
    },
    {
      title: "Website Development",
      description:
        "Boost your online presence with a stunnning website , it builds trust",
    },
    {
      title: "Branding",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas natus nihil qui quia beatae unde culpa iste alias sequi repellendus?",
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
