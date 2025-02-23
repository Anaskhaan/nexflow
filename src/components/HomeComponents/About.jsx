import { motion, useAnimation } from "framer-motion";
import { Briefcase, Palette, Layers, Globe } from "lucide-react";
import { useEffect, useState } from "react";

const textVariant = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { delay: i * 0.05, duration: 0.05 },
  }),
};

const About = () => {
  return (
    <div className="relative w-full bg-[#0A0A0A] text-white py-20 px-4 sm:px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
        {/* Left Section */}
        <motion.div initial="hidden" animate="visible" className="text-left">
          <motion.p
            variants={textVariant}
            custom={0}
            className="text-xs sm:text-sm uppercase tracking-widest text-[#3FA69B] font-medium"
          >
            About Agency
          </motion.p>
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            {"Crafting unique digital experiences that elevate your brand"
              .split("")
              .map((char, i) => (
                <motion.span key={i} variants={textVariant} custom={i}>
                  {char}
                </motion.span>
              ))}
          </motion.h2>
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, duration: 0.4, ease: "easeOut" }}
            className="mt-6 bg-[#3FA69B] hover:bg-[#2D7A71] text-white font-semibold py-2 sm:py-3 px-5 sm:px-6 rounded-full shadow-lg transition duration-300"
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Right Section with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex flex-col md:flex-row space-y-6 md:space-y-0"
        >
          <div className="absolute left-3 top-2 bottom-0 w-[2px] bg-gray-200 hidden md:block">
            <div className="w-4 h-4 bg-[#3FA69B] rounded-full absolute top-0 left-[-6px]"></div>
            <div className="w-4 h-4 bg-[#3FA69B] rounded-full absolute top-[6.7rem] left-[-6px]"></div>
            <div className="w-4 h-4 bg-[#3FA69B] rounded-full absolute top-[13.5rem] left-[-6px]"></div>
            <div className="w-4 h-4 bg-[#3FA69B] rounded-full absolute top-[20.5rem] left-[-6px]"></div>
          </div>

          {/* Background floating elements */}
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#3FA69B] opacity-10 rounded-full blur-3xl floating-element" />
          <div className="absolute bottom-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-[#3FA69B] opacity-10 rounded-full blur-3xl floating-element" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="pl-4 sm:pl-8 space-y-6 sm:space-y-10"
          >
            {[
              {
                icon: (
                  <Briefcase className="text-[#3FA69B] w-6 sm:w-8 h-6 sm:h-8" />
                ),
                title: "Your Success, Our Mission",
                desc: "We measure success by the success of our clients, delivering impactful digital solutions.",
              },
              {
                icon: (
                  <Palette className="text-[#3FA69B] w-6 sm:w-8 h-6 sm:h-8" />
                ),
                title: "Creators Of Digital Excellence",
                desc: "We specialize in crafting digital solutions that not only represent but also elevate your brand.",
              },
              {
                icon: (
                  <Layers className="text-[#3FA69B] w-6 sm:w-8 h-6 sm:h-8" />
                ),
                title: "Innovating the Digital Landscape",
                desc: "Our approach is rooted in creativity and innovation, ensuring brands stay ahead in the digital world.",
              },
              {
                icon: (
                  <Globe className="text-[#3FA69B] w-6 sm:w-8 h-6 sm:h-8" />
                ),
                title: "Helping Brands Thrive Online",
                desc: "Our purpose is to inspire brands to succeed in the digital age through cutting-edge digital strategies.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
                className="flex items-start gap-3 sm:gap-4"
              >
                {item.icon}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm mt-1">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
