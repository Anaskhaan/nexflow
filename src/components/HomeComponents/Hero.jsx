import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, BarChart3, LineChart, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile on component mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
    <Helmet>
      <title>Nexflow | Innovative Digital Solutions</title>
      <meta name="description" content="Elevate Your Digital Presence with Nexflow. We turn data into strategy, strategy into design, and design into growth." />
      <link rel="canonical" href="https://nexflow.tech/" />
    </Helmet>
    <div className="relative w-full h-screen bg-black overflow-hidden pt-12">
      {/* Simplified static gradient background for mobile, animated for desktop */}
      {isMobile ? (
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at center, #3FA69B 0%, transparent 50%)",
          }}
        />
      ) : (
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            background:
              "radial-gradient(circle at center, #3FA69B 0%, transparent 50%), radial-gradient(circle at top left, #3FA69B 0%, transparent 40%)",
            backgroundSize: "200% 200%",
          }}
        />
      )}

      {/* Only show particles on desktop */}
      {!isMobile &&
        [...Array(10)].map((_, index) => (
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
              duration: 15 + Math.random() * 10,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
            }}
          />
        ))}

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-20">
        {/* Simplified grid background */}
        {!isMobile && (
          <div className="absolute inset-0 pointer-events-none">
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
          </div>
        )}

        <div className="max-w-5xl w-full mt-12 flex flex-col items-center text-center space-y-6">
          {/* Simplified logo animation */}
          <div className="mb-2">
            <div className="relative font-black text-xl tracking-widest flex items-center justify-center">
              <span className="inline-block h-1 bg-white absolute -top-2 w-full" />
              <span className="text-white">NEX</span>
              <span className="text-[#3FA69B]">FLOW</span>
              <span className="inline-block h-1 bg-white absolute -bottom-2 w-full" />
            </div>
          </div>

          {/* Simplified headline with no letter animation */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="text-white">Elevate Your Digital</span>
            <br />
            <span className="text-[#3FA69B]">Presence</span>
          </h1>

          {/* Simple tagline */}
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-white">
            We turn data into strategy, strategy into design, and design into
            growth. Your success is our code.
          </p>

          {/* Simplified icon row */}
          <div className="flex space-x-6 mt-4">
            {[
              <Zap key="zap" />,
              <BarChart3 key="bar" />,
              <LineChart key="line" />,
              <Code key="code" />,
            ].map((icon, i) => (
              <div
                key={i}
                className="bg-black bg-opacity-50 p-3 rounded-full border border-[#3FA69B] text-[#3FA69B]"
              >
                {React.cloneElement(icon, { size: 24 })}
              </div>
            ))}
          </div>

          {/* Simplified CTA Button with minimal hover effect */}
          <div className="mt-6">
            <Link to="/Services">
              <motion.button
                whileHover={isMobile ? {} : { scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden bg-[#3FA69B] text-white font-semibold py-4 px-8 rounded-lg flex items-center gap-3 text-lg shadow-lg"
              >
                <span className="relative z-10 text-sm lg:text-md">
                  Start Your Transformation
                </span>
                <div className="relative z-10">
                  <ArrowRight size={24} />
                </div>
                {!isMobile && (
                  <motion.div
                    className="absolute inset-0 bg-black opacity-0"
                    whileHover={{ opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
