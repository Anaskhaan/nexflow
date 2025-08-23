import { motion } from "framer-motion";
import { process } from "../Helper/Data";
const ServiceProcess = () => {

  return (
    <div>
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
            <span className="inline-block py-1 px-3 rounded-full bg-[var(--main-theme-color)] bg-opacity-20 text-[var(--main-theme-color)] text-sm font-medium mb-4">
              OUR PROCESS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We <span className="text-[var(--main-theme-color)]">Work</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--main-theme-color)] to-teal-700 mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              Our proven framework ensures consistent results across all
              projects
            </p>
          </motion.div>

          <div className="relative">
            {/* Process steps */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--main-theme-color)] to-teal-900 transform -translate-x-1/2"></div>

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
                        <div className="w-12 h-12 rounded-full bg-[var(--main-theme-color)] bg-opacity-20 flex items-center justify-center text-[var(--main-theme-color)] mr-4">
                          <span className="text-xl font-bold">{step.id}</span>
                        </div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-gray-300">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Timeline node */}
                  <motion.div
                    className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-[var(--main-theme-color)] z-10 hidden md:block ${
                      index % 2 === 0
                        ? "left-1/2 -translate-x-1/2 -ml-6"
                        : "left-1/2 -translate-x-1/2 "
                    }`}
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
    </div>
  );
};

export default ServiceProcess;
