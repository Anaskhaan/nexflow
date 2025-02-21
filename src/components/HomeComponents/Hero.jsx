import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center px-6 md:px-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542744095-291d1f67b221')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative max-w-4xl flex flex-col items-center text-white text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-[#3FA69B] leading-tight drop-shadow-lg"
        >
          Transform Your Digital Presence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
          className="text-lg md:text-xl mt-4 max-w-2xl leading-relaxed"
        >
          We craft data-driven strategies that elevate your brand and drive real
          business results. Let’s build something extraordinary together.
        </motion.p>

        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
          className="mt-6 bg-[#3FA69B] hover:bg-[#2D7A71] text-white font-semibold py-4 px-8 rounded-full flex items-center gap-3 text-lg shadow-xl transition duration-300"
        >
          Let&apos;s Talk <ArrowRight size={24} />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
