import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { ServicesData } from "../Helper/Data";
import { Icons } from "../../assets/Icons";

const ServicesSection = ({ containerVariants, itemVariants }) => {
  // Map the ServicesData to include the correct icons
  const services = ServicesData.map((service) => {
    // Assign the correct icon component based on the service.icon string
    let icon;
    switch (service.icon) {
      case "Megaphone":
        icon = <Icons.Megaphone size={32} />;
        break;
      case "TrendingUp":
        icon = <Icons.TrendingUp size={32} />;
        break;
      case "Globe":
        icon = <Icons.Globe size={32} />;
        break;
      case "BarChart":
        icon = <Icons.BarChart2 size={32} />;
        break;
      case "Mail":
        icon = <Icons.Mail size={32} />;
        break;
      case "Smartphone":
        icon = <Icons.Smartphone size={32} />;
        break;
      default:
        icon = <Icons.Globe size={32} />;
    }

    return {
      ...service,
      icon,
    };
  });

  return (
    <div>
      <div className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[var(--main-theme-color)] bg-opacity-20 text-[var(--main-theme-color)] text-sm font-medium mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We{" "}
              <span className="text-[var(--main-theme-color)]">Offer</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--main-theme-color)] to-teal-700 mx-auto mb-8"></div>
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
                    className="w-16 h-16 bg-[var(--main-theme-color)] bg-opacity-20 flex items-center justify-center rounded-xl mb-6 text-[var(--main-theme-color)]"
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
                        <div className="w-2 h-2 rounded-full bg-[var(--main-theme-color)] mr-3"></div>
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-[var(--main-theme-color)] font-medium"
                  >
                    <Link to={`/services/${service.slug}`}>
                      <button className="flex items-center justify-center">
                        Learn more{" "}
                        <Icons.ChevronRight className="ml-1 w-4 h-4" />
                      </button>
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
    </div>
  );
};

export default ServicesSection;
