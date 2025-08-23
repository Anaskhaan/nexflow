import { motion } from "framer-motion";

const NexflowLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              ease: "easeOut",
            },
          }}
          className="mb-8"
        >
          <motion.svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            className="text-white"
          >
            <motion.circle
              cx="40"
              cy="40"
              r="30"
              stroke="#3fa69b"
              strokeWidth="8"
              fill="transparent"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                transition: {
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.5,
                },
              }}
            />
            <motion.path
              d="M30 40 L40 50 L55 30"
              stroke="white"
              strokeWidth="6"
              fill="transparent"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: 1,
                transition: {
                  delay: 1,
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 1,
                },
              }}
            />
          </motion.svg>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 0.5,
            },
          }}
        >
          <motion.h1
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.8,
                duration: 0.8,
              },
            }}
          >
            Nex<span className="text-[var(--main-theme-color)]">flow</span>
          </motion.h1>

          <motion.div
            className="h-1 bg-[var(--main-theme-color)] mt-2"
            initial={{ width: 0 }}
            animate={{
              width: "100%",
              transition: {
                delay: 1.2,
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.5,
              },
            }}
          />

          <motion.p
            className="text-white text-sm mt-2 opacity-80"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              transition: {
                delay: 1.5,
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0.5,
                times: [0, 0.5, 1],
              },
            }}
          >
            Loading your experience...
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default NexflowLoader;
