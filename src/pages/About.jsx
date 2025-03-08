import { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import {
  Rocket,
  BarChart3,
  Award,
  Clock,
  ChevronRight,
  Zap,
  Globe,
  Target,
  Layers,
} from "lucide-react";

export default function About() {
  // Animation for floating elements
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // Custom gradient cursor effect
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Parallax scrolling effect
  const { scrollY } = useScroll();
  const parallaxY1 = useTransform(scrollY, [0, 1000], [0, -300]);
  const parallaxY2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const parallaxY3 = useTransform(scrollY, [0, 2000], [0, -400]);

  // Background gradient animation
  const gradientControls = useAnimation();

  useEffect(() => {
    gradientControls.start({
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [gradientControls]);

  // Team section reference for animations
  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: false, threshold: 0.3 });

  return (
    <div className="bg-black text-white pt-12 min-h-screen overflow-hidden">
   

      {/* Floating design elements for background visual interest */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#3FA69B] opacity-10"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
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

      {/* Discover Section with 3D Card Effect */}
      <section id="discover" className="py-32 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0 opacity-30"
          style={{ y: parallaxY2 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(63,166,155,0.3) 0%, rgba(0,0,0,0) 70%)",
                left: `${i * 25}%`,
                top: `${(i % 3) * 30}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              className="md:w-1/2 perspective"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-gray-900 border border-gray-800 rounded-xl p-1 shadow-2xl perspective"
                whileHover={{ rotateY: 10, rotateX: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                    alt="Digital team working"
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-black to-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.7 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  />

                  <motion.div
                    className="absolute bottom-0 left-0 p-8 w-full"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-[#3FA69B] font-bold tracking-wider uppercase text-sm">
                      Established 2018
                    </span>
                    <h2 className="text-4xl font-bold mt-2">Our Journey</h2>
                    <div className="w-16 h-1 bg-[#3FA69B] mt-4" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.p
                className="text-2xl font-light leading-relaxed text-gray-300 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Born from a vision to{" "}
                <span className="text-[#3FA69B] font-semibold">
                  revolutionize
                </span>{" "}
                how brands connect digitally.
              </motion.p>

              <motion.p
                className="text-lg text-gray-400 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              >
                From startup to industry leader, we&apos;ve transformed over
                200+ brands with cutting-edge strategies that drive real growth.
              </motion.p>

              <motion.div
                className="grid grid-cols-2 gap-6"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 },
                  },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex gap-3 items-center"
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    show: { y: 0, opacity: 1 },
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-[#3FA69B]">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold">7+</span>
                    <p className="text-sm text-gray-400">Years</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex gap-3 items-center"
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    show: { y: 0, opacity: 1 },
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-[#3FA69B]">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold">200+</span>
                    <p className="text-sm text-gray-400">Clients</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex gap-3 items-center"
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    show: { y: 0, opacity: 1 },
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-[#3FA69B]">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold">97%</span>
                    <p className="text-sm text-gray-400">Satisfaction</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex gap-3 items-center"
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    show: { y: 0, opacity: 1 },
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-[#3FA69B]">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold">15+</span>
                    <p className="text-sm text-gray-400">Awards</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Animated Cards */}
      <section className="py-32 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"
          style={{ y: parallaxY3 }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="text-[#3FA69B] font-bold tracking-wider uppercase block mb-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Expertise
            </motion.span>

            <motion.h2
              className="text-5xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Digital Excellence
            </motion.h2>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-[#3FA69B] to-teal-300 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-10 w-10" />,
                title: "Strategic Marketing",
                desc: "Data-driven campaigns that convert",
              },
              {
                icon: <Layers className="h-10 w-10" />,
                title: "Brand Development",
                desc: "Unforgettable identities",
              },
              {
                icon: <BarChart3 className="h-10 w-10" />,
                title: "Performance Analytics",
                desc: "Insights that drive growth",
              },
              {
                icon: <Globe className="h-10 w-10" />,
                title: "Global Reach",
                desc: "Beyond borders marketing",
              },
              {
                icon: <Rocket className="h-10 w-10" />,
                title: "Growth Acceleration",
                desc: "Scaling with precision",
              },
              {
                icon: <Zap className="h-10 w-10" />,
                title: "Digital Innovation",
                desc: "Cutting-edge solutions",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#3FA69B] to-teal-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-gray-800 group-hover:border-[#3FA69B] transition-colors duration-300" />

                <div className="p-8 relative z-10">
                  <motion.div
                    className="text-[#3FA69B] group-hover:text-white transition-colors duration-300 mb-6"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#3FA69B] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    {item.desc}
                  </p>

                  <motion.div
                    className="w-10 h-0.5 bg-[#3FA69B] mt-6"
                    whileHover={{ width: 60 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Creative Animations */}
      <section ref={teamRef} className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 opacity-10">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 4 + 1,
                  height: Math.random() * 4 + 1,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 5 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Meet Our Team
            </motion.h2>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-[#3FA69B] to-teal-300 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 },
              },
              hidden: {},
            }}
          >
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Michael Chen",
                role: "Creative Director",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Priya Patel",
                role: "Strategy Lead",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "James Wilson",
                role: "Tech Director",
                image:
                  "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.17, 0.67, 0.83, 0.67],
                    },
                  },
                  hidden: {
                    opacity: 0,
                    y: 50,
                  },
                }}
              >
                <motion.div
                  className="relative h-96 rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 z-10" />

                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-[#3FA69B]">{member.role}</p>

                    <motion.div
                      className="w-0 h-0.5 bg-white mt-4 group-hover:w-full transition-all duration-300"
                      animate={{ width: teamInView ? "40%" : 0 }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    />
                  </div>

                  <motion.div
                    className="absolute inset-0 border-2 border-[#3FA69B] rounded-xl z-0 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action with Magnetic Button Effect */}
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
            <motion.button
              className="relative bg-[#3FA69B] text-white py-4 px-10 rounded-full text-xl font-bold group overflow-hidden z-10"
              whileTap={{ scale: 0.95 }}
              whileHover={{
                boxShadow: "0 0 30px #3FA69B",
              }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
