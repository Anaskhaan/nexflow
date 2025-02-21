import { motion } from "framer-motion";
import { Search, BarChart, Megaphone, Globe } from "lucide-react";

const services = [
  {
    id: 1,
    title: "SEO Optimization",
    description:
      "Boost your website's ranking and visibility with our expert SEO strategies.",
    icon: <Search size={40} className="text-[#3FA69B]" />,
  },
  {
    id: 2,
    title: "Social Media Marketing",
    description:
      "Engage with your audience and grow your brand with our data-driven social strategies.",
    icon: <Megaphone size={40} className="text-[#3FA69B]" />,
  },
  {
    id: 3,
    title: "Data-Driven Advertising",
    description:
      "Maximize your ROI with precision-targeted ads on Google, Facebook, and beyond.",
    icon: <BarChart size={40} className="text-[#3FA69B]" />,
  },
  {
    id: 4,
    title: "Global Branding",
    description:
      "Establish your brand identity and make an impact in international markets.",
    icon: <Globe size={40} className="text-[#3FA69B]" />,
  },
];

const Services = () => {
  return (
    <div id="services" className="w-full bg-[#F8F9FA] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-[#3FA69B] mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-[#3F4D59]">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
