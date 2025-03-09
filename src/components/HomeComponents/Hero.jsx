import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, BarChart3, LineChart, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.8 + i * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-40"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{
          backgroundPosition: [
            "0% 0%",
            "100% 100%",
            "0% 100%",
            "100% 0%",
            "0% 0%",
          ],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          background:
            "radial-gradient(circle at center, #3FA69B 0%, transparent 50%), radial-gradient(circle at top left, #3FA69B 0%, transparent 40%), radial-gradient(circle at bottom right, #3FA69B 0%, transparent 40%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Floating digital particles */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white"
          initial={{
            opacity: Math.random() * 0.3 + 0.1,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.1,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            width: Math.random() * 5 + 2 + "px",
            height: Math.random() * 5 + 2 + "px",
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <svg className="w-full h-full opacity-10">
            <rect width="100%" height="100%" fill="url(#grid)" />
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#3FA69B"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
          </svg>
        </motion.div>

        <motion.div className="max-w-5xl w-full mt-12 flex flex-col items-center text-center space-y-8">
          {/* Logo animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
            }}
            className="mb-2"
          >
            <div className="relative font-black text-xl tracking-widest flex items-center justify-center">
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="inline-block h-1 bg-white absolute -top-2"
              />
              <motion.span className="text-white">NEX</motion.span>
              <motion.span
                initial={{ color: "white" }}
                animate={{ color: "#3FA69B" }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-white"
              >
                FLOW
              </motion.span>
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="inline-block h-1 bg-white absolute -bottom-2"
              />
            </div>
          </motion.div>

          {/* Headline with letter animation */}
          <div className="overflow-hidden">
            <motion.h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              {"Elevate Your Digital".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.03 * index,
                    duration: 0.5,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className="inline-block text-white"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
              <br />
              {"Presence".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5 + 0.03 * index,
                    duration: 0.5,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className="inline-block text-[#3FA69B]"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Tagline with staggered reveal */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-lg md:text-xl max-w-2xl leading-relaxed text-white"
          >
            We turn data into strategy, strategy into design, and design into
            growth.
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="inline-block pl-2"
            >
              Your success is our code.
            </motion.span>
          </motion.p>

          {/* Icon Row */}
          <motion.div className="flex space-x-8 mt-6">
            {[
              <Zap key="zap" />,
              <BarChart3 key="bar" />,
              <LineChart key="line" />,
              <Code key="code" />,
            ].map((icon, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                className="bg-black bg-opacity-50 p-3 rounded-full border border-[#3FA69B] text-[#3FA69B]"
              >
                {React.cloneElement(icon, { size: 24 })}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button with hover effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-8"
          >
            <Link to="/Services">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(63, 166, 155, 0.8)",
                }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden bg-[#3FA69B] text-white font-semibold py-4 px-8 rounded-full flex items-center gap-3 text-lg shadow-lg"
              >
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: -5 }}
                  className="relative z-10 text-sm lg:text-md"
                >
                  Start Your Transformation
                </motion.span>
                <motion.div
                  whileHover={{ x: -3, scale: 1.1 }}
                  className="relative z-10"
                >
                  <ArrowRight size={24} />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-black opacity-0"
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
