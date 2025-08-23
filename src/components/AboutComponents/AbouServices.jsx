import { motion } from "framer-motion";
import { Icons } from "../../assets/Icons";
const AbouServices = ({ parallaxY3 }) => {
  return (
    <div>
      <section className="py-32 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"
          style={{ y: parallaxY3 }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="text-[var(--main-theme-color)] font-bold tracking-wider uppercase block mb-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Expertise
            </motion.span>

            <motion.h2
              className="text-5xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Digital Excellence
            </motion.h2>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-[var(--main-theme-color)] to-teal-300 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Icons.Target className="h-10 w-10" />,
                title: "Strategic Marketing",
                desc: "Data-driven campaigns that convert",
              },
              {
                icon: <Icons.Layers className="h-10 w-10" />,
                title: "Brand Development",
                desc: "Unforgettable identities",
              },
              {
                icon: <Icons.BarChart3 className="h-10 w-10" />,
                title: "Performance Analytics",
                desc: "Insights that drive growth",
              },
              {
                icon: <Icons.Globe className="h-10 w-10" />,
                title: "Global Reach",
                desc: "Beyond borders marketing",
              },
              {
                icon: <Icons.Rocket className="h-10 w-10" />,
                title: "Growth Acceleration",
                desc: "Scaling with precision",
              },
              {
                icon: <Icons.Zap className="h-10 w-10" />,
                title: "Digital Innovation",
                desc: "Cutting-edge solutions",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--main-theme-color)] to-teal-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-gray-800 group-hover:border-[var(--main-theme-color)] transition-colors duration-300" />

                <div className="p-8 relative z-10">
                  <motion.div
                    className="text-[var(--main-theme-color)] group-hover:text-white transition-colors duration-300 mb-6"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--main-theme-color)] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    {item.desc}
                  </p>

                  <motion.div
                    className="w-10 h-0.5 bg-[var(--main-theme-color)] mt-6"
                    whileHover={{ width: 60 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AbouServices;
