import { motion } from "framer-motion";
import { Award, Clock, TrendingUp, Users } from "lucide-react";
const ServiceStats = ({ itemVariants, containerVariants }) => {
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

  return (
    <div>
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
                  className="lg:text-4xl text-xl font-bold mb-2 text-[#3FA69B]"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.1 * stat.id }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-300 lg:text-md text-sm ">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceStats;
