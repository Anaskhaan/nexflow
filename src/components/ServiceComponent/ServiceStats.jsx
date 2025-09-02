import { motion } from "framer-motion";
import { Icons } from "../../assets/Icons";
const ServiceStats = ({ itemVariants, containerVariants }) => {
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
                  className="w-16 h-16 rounded-full bg-[var(--main-theme-color)] bg-opacity-20 flex items-center justify-center mx-auto mb-4"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(63, 166, 155, 0.3)",
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.h3
                  className="lg:text-4xl text-xl font-bold mb-2 text-[var(--main-theme-color)]"
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
