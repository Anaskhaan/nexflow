import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const AboutCTA = ({ gradientControls }) => {
  return (
    <div>
      <section className="py-32 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[#111111]"
          animate={gradientControls}
          style={{
            background:
              "radial-gradient(circle at center, #0a2a27 0%, #000000 70%)",
            backgroundSize: "150% 150%",
          }}
        />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to <span className="text-[#3FA69B]">Transform</span> Your
            Digital Presence?
          </motion.h2>

          <motion.p
            className="text-xl max-w-2xl mx-auto mb-12 text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join the brands that are redefining their industry.
          </motion.p>

          <motion.div className="relative inline-block" whileHover="hover">
            <motion.div
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#3FA69B] to-teal-300 opacity-70 blur-lg"
              variants={{
                hover: {
                  scale: 1.2,
                  rotate: 5,
                  opacity: 0.8,
                },
              }}
            />
            <Link to="contact">
              <motion.button
                className="relative bg-[#3FA69B] text-white py-4 px-10 rounded-lg text-xl font-bold group overflow-hidden z-10"
                whileTap={{ scale: 0.95 }}
                whileHover={{
                  boxShadow: "0 0 30px #3FA69B",
                }}
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutCTA;
