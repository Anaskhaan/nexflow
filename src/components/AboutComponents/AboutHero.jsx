import { motion } from "framer-motion";
import { Icons } from "../../assets/Icons";

const AboutHero = () => {
    return (
        <div>
            <section className="relative md:h-screen h-[80vh] pt-12 flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background:
                            "linear-gradient(130deg, #000000, #111111, #0a2a27, #000000)",
                        backgroundSize: "400% 400%",
                    }}
                />

                <div className="absolute opacity-20 w-full h-full">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[var(--main-theme-color)] blur-3xl opacity-20" />
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[var(--main-theme-color)] blur-3xl opacity-30" />
                </div>

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

                    <div className="relative">
                        <h1 className="text-7xl md:text-9xl font-bold mb-0 tracking-tight">
                            <span>Nex</span>
                            <span className="text-[var(--main-theme-color)]">flow</span>
                        </h1>

                        <div className="w-full h-1 bg-gradient-to-r from-transparent via-[var(--main-theme-color)] to-transparent mx-auto my-8" />

                        <div className="overflow-hidden">
                            <p className="text-3xl font-light">
                                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[var(--main-theme-color)]">
                                    Where vision meets digital reality
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="mt-16">
                        <a href="#discover" className="inline-block group">
                            <div className="flex flex-col items-center">
                                <span className="text-[var(--main-theme-color)] group-hover:text-white transition-colors duration-300 text-lg mb-3">
                                    Discover Our Story
                                </span>
                                <div className="w-12 h-12 rounded-full border-2 border-[var(--main-theme-color)] flex items-center justify-center">
                                    <Icons.ChevronRight className="h-6 w-6 text-[var(--main-theme-color)]" />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutHero;
