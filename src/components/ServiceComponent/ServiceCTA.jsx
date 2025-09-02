import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icons } from "../../assets/Icons";
const ServiceCTA = () => {
  return (
    <div>
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
              className="absolute rounded-full bg-[var(--main-theme-color)] opacity-10 filter blur-3xl"
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
            <div className="w-20 h-20 bg-[var(--main-theme-color)] bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
              <Icons.Target
                size={36}
                className="text-[var(--white)]"
              />
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ready to
            <span className="text-[var(--main-theme-color)]">Transform</span>
            <br className="hidden md:block" /> Your Digital Presence?
          </motion.h2>

          <motion.p
            className="lg:text-xl text-gray-300 text-sm   mb-10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Schedule a consultation with our experts and discover how NextFlow
            can elevate your brand.
          </motion.p>

          <motion.div
            className="flex justify-center items-center gap-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/Meeting">
              <motion.button
                className="bg-[var(--main-theme-color)] text-white lg:px-10 px-3 lg:py-5 py-2 rounded-lg lg:text-lg text-sm"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 25px rgba(63, 166, 155, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Free Strategy Call
              </motion.button>
            </Link>
            <Link to="/Portfolio">
              <motion.button
                className="text-white border-2 border-white hover:border-[var(--main-theme-color)] hover:text-[var(--main-theme-color)] lg:px-10 px-3 lg:py-5 py-2 rounded-lg lg:text-lg text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Portfolio
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCTA;
