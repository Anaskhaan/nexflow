import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

// Animated background element
const AnimatedBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <motion.div
      className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-[var(--main-theme-color)] opacity-10 filter blur-[120px]"
      animate={{
        scale: [1, 1.2, 1.1, 1.3, 1],
        x: [0, 50, -50, 30, 0],
        y: [0, -30, 50, -20, 0],
        borderRadius: [
          "60% 40% 70% 30%",
          "40% 60% 30% 70%",
          "50% 50% 60% 40%",
          "30% 70% 40% 60%",
          "60% 40% 70% 30%",
        ],
      }}
      transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
    />
    <motion.div
      className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gray-800 opacity-40 filter blur-[100px]"
      animate={{
        scale: [1.2, 1, 1.3, 0.9, 1.2],
        x: [0, -40, 30, -20, 0],
        y: [0, 50, -30, 40, 0],
        borderRadius: [
          "40% 60% 30% 70%",
          "70% 30% 60% 40%",
          "50% 50% 50% 50%",
          "60% 40% 70% 30%",
          "40% 60% 30% 70%",
        ],
      }}
      transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
    />
  </div>
);

// Floating element
const FloatingElement = ({
  children,
  delay = 0,
  duration = 8,
  className = "",
}) => (
  <motion.div
    className={className}
    initial={{ y: 0 }}
    animate={{ y: [0, -15, 0, 15, 0] }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

// Statistic card
const StatCard = ({ number, label, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="bg-black bg-opacity-60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col items-center"
    >
      <motion.h3
        className="text-4xl md:text-5xl font-bold text-white mb-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: delay + 0.2, duration: 0.5 }}
      >
        {number}
        <span className="text-[var(--main-theme-color)]">+</span>
      </motion.h3>
      <p className="text-gray-400 text-center">{label}</p>
    </motion.div>
  );
};

// Main About Component
export const About = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      {/* About Section */}
      <section
        ref={sectionRef}
        className="py-24 md:py-32 bg-black relative overflow-hidden"
      >
        <AnimatedBackground />

        {/* Floating Elements */}
        <FloatingElement
          className="absolute top-[15%] left-[10%] w-12 h-12 rounded-full bg-[var(--main-theme-color)] opacity-20 blur-sm"
          delay={1.5}
        />
        <FloatingElement
          className="absolute bottom-[20%] right-[10%] w-24 h-24 rounded-md bg-[var(--main-theme-color)] opacity-10 blur-sm rotate-45"
          delay={2.5}
        />
        <FloatingElement
          className="absolute top-[60%] left-[8%] w-16 h-16 rounded-lg bg-white opacity-5 blur-sm rotate-12"
          delay={3.5}
          duration={10}
        />

        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4 px-4 py-1 rounded-lg bg-[var(--main-theme-color)] bg-opacity-10 border border-[var(--main-theme-color)] border-opacity-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="text-white text-sm font-medium">
                ABOUT NEXFLOW
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight max-w-4xl mx-auto">
              Digital Excellence,
              <span className="relative">
                <span className="relative z-10 text-[var(--main-theme-color)]">
                  
                  Delivered
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-[var(--main-theme-color)] opacity-20 rounded-full z-0"
                  initial={{ width: 0 }}
                  animate={sectionInView ? { width: "100%" } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Transforming digital visions into measurable success through
              strategic innovation and creative excellence.
            </p>
          </motion.div>

          {/* Image & Text Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Collage */}
            <div className="relative h-[500px] md:h-[600px]">
              {/* Image 1 */}
              <motion.div
                className="absolute top-0 left-0 w-[70%] h-[70%] rounded-xl overflow-hidden shadow-xl shadow-black/40"
                initial={{ opacity: 0, x: -30, y: -30 }}
                animate={sectionInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&w=600&h=420&fit=crop&q=80"
                  alt="Creative workspace"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-[var(--main-theme-color)] text-white text-xs rounded-full mb-2">
                    INNOVATIVE
                  </span>
                  <h4 className="text-white text-lg font-medium">
                    Creative Process
                  </h4>
                </div>
              </motion.div>

              {/* Image 2 */}
              <motion.div
                className="absolute top-[15%] right-0 w-[60%] h-[60%] rounded-xl overflow-hidden shadow-xl shadow-black/40"
                initial={{ opacity: 0, x: 30, y: 30 }}
                animate={sectionInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&w=600&h=400&fit=crop&q=80"
                  alt="Digital marketing team"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-[var(--main-theme-color)] text-white text-xs rounded-full mb-2">
                    COLLABORATIVE
                  </span>
                  <h4 className="text-white text-lg font-medium">
                    Team Excellence
                  </h4>
                </div>
              </motion.div>

              {/* Image 3 */}
              <motion.div
                className="absolute bottom-0 left-[10%] w-[65%] h-[50%] rounded-xl overflow-hidden shadow-xl shadow-black/40"
                initial={{ opacity: 0, x: -20, y: 40 }}
                animate={sectionInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&w=600&h=400&fit=crop&q=80"
                  alt="Team brainstorming"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-[var(--main-theme-color)] text-white text-xs rounded-full mb-2">
                    STRATEGIC
                  </span>
                  <h4 className="text-white text-lg font-medium">
                    Results-Driven
                  </h4>
                </div>
              </motion.div>
            </div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-8"
            >
              <h3 className="text-3xl md:text-4xl text-white font-bold">
                Leading the Digital Revolution
                <span className="text-[var(--main-theme-color)]">
                  Since 2015
                </span>
              </h3>
              <p className="text-gray-300 text-lg">
                Nexflow is a digital agency dedicated to empowering brands with
                innovation, strategy, and creative technology. We deliver
                impactful solutions tailored to business goals, whether it's
                web, mobile, or marketing.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-[var(--main-theme-color)] text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
              >
                Work with us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        ref={statsRef}
        className="py-20 bg-black border-t border-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCard number="100" label="Clients Served" delay={0.1} />
            <StatCard number="250" label="Projects Delivered" delay={0.2} />
            <StatCard number="10" label="Years of Experience" delay={0.3} />
            <StatCard number="15" label="Team Members" delay={0.4} />
          </div>
        </div>
      </section>
    </div>
  );
};
