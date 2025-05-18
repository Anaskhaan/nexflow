import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
const AboutHero = ({ gradientControls, parallaxY1, floatingAnimation }) => {
  return (
    <div>
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 z-0"
          animate={gradientControls}
          style={{
            background:
              "linear-gradient(130deg, #000000, #111111, #0a2a27, #000000)",
            backgroundSize: "400% 400%",
          }}
        />

        <motion.div
          className="absolute opacity-20 w-full h-full"
          style={{ y: parallaxY1 }}
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#3FA69B] blur-3xl opacity-20" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#3FA69B] blur-3xl opacity-30" />
        </motion.div>

        <div className="container mx-auto px-4 z-10 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <svg
              width="120"
              height="120"
              viewBox="0 0 100 100"
              className="mx-auto"
            >
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#3FA69B"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M30,40 L50,60 L70,40"
                fill="none"
                stroke="#3FA69B"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
              <motion.path
                d="M30,60 L70,60"
                fill="none"
                stroke="#3FA69B"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              />
            </svg>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <motion.h1
              className="text-7xl md:text-9xl font-bold mb-0 tracking-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 5px #3FA69B",
                    "0 0 20px #3FA69B",
                    "0 0 5px #3FA69B",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Nex
              </motion.span>
              <motion.span
                className="text-[#3FA69B]"
                animate={floatingAnimation}
              >
                flow
              </motion.span>
            </motion.h1>

            <motion.div
              className="w-full h-1 bg-gradient-to-r from-transparent via-[#3FA69B] to-transparent mx-auto my-8"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 1.5, delay: 2.5 }}
            />

            <div className="overflow-hidden">
              <motion.p
                className="text-3xl font-light"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.8 }}
              >
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#3FA69B]">
                  Where vision meets digital reality
                </span>
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.2 }}
            className="mt-16"
          >
            <motion.a
              href="#discover"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block group"
            >
              <div className="flex flex-col items-center">
                <span className="text-[#3FA69B] group-hover:text-white transition-colors duration-300 text-lg mb-3">
                  Discover Our Story
                </span>
                <motion.div
                  className="w-12 h-12 rounded-full border-2 border-[#3FA69B] flex items-center justify-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRight className="h-6 w-6 text-[#3FA69B]" />
                </motion.div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutHero;
