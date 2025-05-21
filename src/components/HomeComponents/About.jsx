// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Link } from "react-router-dom";

// // Animated background element
// const AnimatedBackground = () => {
//   return (
//     <div className="absolute inset-0 -z-10 overflow-hidden">
//       {/* Main blob */}
//       <motion.div
//         className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-[#3FA69B] opacity-10 filter blur-[120px]"
//         animate={{
//           scale: [1, 1.2, 1.1, 1.3, 1],
//           x: [0, 50, -50, 30, 0],
//           y: [0, -30, 50, -20, 0],
//           borderRadius: [
//             "60% 40% 70% 30%",
//             "40% 60% 30% 70%",
//             "50% 50% 60% 40%",
//             "30% 70% 40% 60%",
//             "60% 40% 70% 30%",
//           ],
//         }}
//         transition={{
//           duration: 25,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//       />

//       {/* Secondary blob */}
//       <motion.div
//         className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gray-800 opacity-40 filter blur-[100px]"
//         animate={{
//           scale: [1.2, 1, 1.3, 0.9, 1.2],
//           x: [0, -40, 30, -20, 0],
//           y: [0, 50, -30, 40, 0],
//           borderRadius: [
//             "40% 60% 30% 70%",
//             "70% 30% 60% 40%",
//             "50% 50% 50% 50%",
//             "60% 40% 70% 30%",
//             "40% 60% 30% 70%",
//           ],
//         }}
//         transition={{
//           duration: 30,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//       />
//     </div>
//   );
// };

// // Floating element component
// const FloatingElement = ({
//   children,
//   delay = 0,
//   duration = 8,
//   className = "",
// }) => {
//   return (
//     <motion.div
//       className={className}
//       initial={{ y: 0 }}
//       animate={{ y: [0, -15, 0, 15, 0] }}
//       transition={{
//         duration,
//         delay,
//         repeat: Infinity,
//         repeatType: "loop",
//         ease: "easeInOut",
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// // Statistic card component
// const StatCard = ({ number, label, delay }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 30 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ delay, duration: 0.6 }}
//       className="bg-black bg-opacity-60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col items-center"
//     >
//       <motion.h3
//         className="text-4xl md:text-5xl font-bold text-white mb-2"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={inView ? { opacity: 1, scale: 1 } : {}}
//         transition={{ delay: delay + 0.2, duration: 0.5 }}
//       >
//         {number}
//         <span className="text-[#3FA69B]">+</span>
//       </motion.h3>
//       <p className="text-gray-400 text-center">{label}</p>
//     </motion.div>
//   );
// };

// export const About = () => {
//   const [sectionRef, sectionInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const [statsRef, statsInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <div>
//       <section
//         ref={sectionRef}
//         className="py-24 md:py-32 bg-black relative overflow-hidden"
//       >
//         <AnimatedBackground />

//         {/* Floating decorative elements */}
//         <FloatingElement
//           className="absolute top-[15%] left-[10%] w-12 h-12 rounded-full bg-[#3FA69B] opacity-20 blur-sm"
//           delay={1.5}
//         />
//         <FloatingElement
//           className="absolute bottom-[20%] right-[10%] w-24 h-24 rounded-md bg-[#3FA69B] opacity-10 blur-sm rotate-45"
//           delay={2.5}
//         />
//         <FloatingElement
//           className="absolute top-[60%] left-[8%] w-16 h-16 rounded-lg bg-white opacity-5 blur-sm rotate-12"
//           delay={3.5}
//           duration={10}
//         />

//         <div className="container mx-auto px-4">
//           {/* Main headline */}
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: -30 }}
//             animate={sectionInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.div
//               className="inline-block mb-4 px-4 py-1 rounded-lg bg-[#3FA69B] bg-opacity-10 border border-[#3FA69B] border-opacity-20"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ delay: 0.3, duration: 0.6 }}
//             >
//               <span className="text-[#3FA69B] text-sm font-medium">
//                 ABOUT NEXFLOW
//               </span>
//             </motion.div>
//             <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight max-w-4xl mx-auto">
//               Digital Excellence,
//               <span className="relative">
//                 <span className="relative z-10 text-[#3FA69B]"> Delivered</span>
//                 <motion.span
//                   className="absolute -bottom-2 left-0 right-0 h-3 bg-[#3FA69B] opacity-20 rounded-full z-0"
//                   initial={{ width: 0 }}
//                   animate={sectionInView ? { width: "100%" } : {}}
//                   transition={{ delay: 0.8, duration: 0.6 }}
//                 />
//               </span>
//             </h2>
//             <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
//               Transforming digital visions into measurable success through
//               strategic innovation and creative excellence.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             {/* Left side: Image grid with overlapping effect */}
//             <div className="relative h-[500px] md:h-[600px]">
//               <motion.div
//                 className="absolute top-0 left-0 w-[70%] h-[70%] rounded-xl overflow-hidden shadow-xl shadow-black/40"
//                 initial={{ opacity: 0, x: -30, y: -30 }}
//                 animate={sectionInView ? { opacity: 1, x: 0, y: 0 } : {}}
//                 transition={{ delay: 0.2, duration: 0.8 }}
//                 whileHover={{ scale: 1.03 }}
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80"
//                   alt="Creative workspace"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <span className="inline-block px-3 py-1 bg-[#3FA69B] text-white text-xs rounded-full mb-2">
//                     INNOVATIVE
//                   </span>
//                   <h4 className="text-white text-lg font-medium">
//                     Creative Process
//                   </h4>
//                 </div>
//               </motion.div>

//               <motion.div
//                 className="absolute top-[15%] right-0 w-[60%] h-[60%] rounded-xl overflow-hidden shadow-xl shadow-black/40"
//                 initial={{ opacity: 0, x: 30, y: 30 }}
//                 animate={sectionInView ? { opacity: 1, x: 0, y: 0 } : {}}
//                 transition={{ delay: 0.4, duration: 0.8 }}
//                 whileHover={{ scale: 1.03 }}
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80"
//                   alt="Digital marketing team"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <span className="inline-block px-3 py-1 bg-[#3FA69B] text-white text-xs rounded-full mb-2">
//                     COLLABORATIVE
//                   </span>
//                   <h4 className="text-white text-lg font-medium">
//                     Team Excellence
//                   </h4>
//                 </div>
//               </motion.div>

//               <motion.div
//                 className="absolute bottom-0 left-[10%] w-[65%] h-[50%] rounded-xl overflow-hidden shadow-xl shadow-black/40"
//                 initial={{ opacity: 0, x: -20, y: 40 }}
//                 animate={sectionInView ? { opacity: 1, x: 0, y: 0 } : {}}
//                 transition={{ delay: 0.6, duration: 0.8 }}
//                 whileHover={{ scale: 1.03 }}
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80"
//                   alt="Team brainstorming"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <span className="inline-block px-3 py-1 bg-[#3FA69B] text-white text-xs rounded-full mb-2">
//                     STRATEGIC
//                   </span>
//                   <h4 className="text-white text-lg font-medium">
//                     Results-Driven
//                   </h4>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Right side: Text content */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={sectionInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.4, duration: 0.8 }}
//               className="space-y-8"
//             >
//               <h3 className="text-3xl md:text-4xl text-white font-bold">
//                 Leading the Digital Revolution{" "}
//                 <span className="text-[#3FA69B]">Since 2015</span>
//               </h3>

//               <div className="space-y-6">
//                 <motion.p
//                   className="text-gray-300 text-lg"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={sectionInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 0.6, duration: 0.6 }}
//                 >
//                   Nexflow has been at the forefront of digital marketing
//                   innovation, helping forward-thinking brands navigate the
//                   ever-evolving digital landscape with strategic insight and
//                   creative excellence.
//                 </motion.p>

//                 <motion.p
//                   className="text-gray-400"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={sectionInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 0.8, duration: 0.6 }}
//                 >
//                   We believe in the power of data-driven creativity – combining
//                   analytical precision with bold, imaginative ideas to deliver
//                   campaigns that not only capture attention but drive measurable
//                   results for our clients.
//                 </motion.p>

//                 <motion.div
//                   className="pt-2 space-y-4"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={sectionInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 1, duration: 0.6 }}
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="w-6 h-6 rounded-full bg-[#3FA69B] flex items-center justify-center text-black">
//                       ✓
//                     </div>
//                     <span className="text-white">
//                       Strategic campaign development
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <div className="w-6 h-6 rounded-full bg-[#3FA69B] flex items-center justify-center text-black">
//                       ✓
//                     </div>
//                     <span className="text-white">
//                       Data-driven performance optimization
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <div className="w-6 h-6 rounded-full bg-[#3FA69B] flex items-center justify-center text-black">
//                       ✓
//                     </div>
//                     <span className="text-white">
//                       Award-winning creative execution
//                     </span>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   className="flex  gap-4 pt-6"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={sectionInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 1.2, duration: 0.6 }}
//                 >
//                   <motion.button
//                     className="lg:px-8 px-6 py-4 bg-[#3FA69B] hover:bg-[#2D8A80] lg:text-md text-xs  rounded-lg text-white font-medium transition-all flex items-center gap-2"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Link to="/about">
//                       <button>Our Process</button>
//                     </Link>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path d="M5 12h14"></path>
//                       <path d="m12 5 7 7-7 7"></path>
//                     </svg>
//                   </motion.button>

//                   <Link to="about">
//                     <motion.button
//                       className="lg:px-8 px-6 py-4 border lg:text-md text-sm border-[#3FA69B] text-[#3FA69B] hover:bg-[#3FA69B] hover:bg-opacity-10 rounded-lg  transition-all"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       Meet the Team
//                     </motion.button>
//                   </Link>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Stats section */}
//           <div
//             ref={statsRef}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24"
//           >
//             <StatCard number="120" label="Clients Worldwide" delay={0.2} />
//             <StatCard number="350" label="Projects Completed" delay={0.4} />
//             <StatCard number="15" label="Industry Awards" delay={0.6} />
//             <StatCard number="98" label="Client Satisfaction" delay={0.8} />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

// Particle background component
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#3FA69B] opacity-10"
          style={{
            width: Math.random() * 20 + 5,
            height: Math.random() * 20 + 5,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

// Glowing border component
const GlowingBorder = ({ children }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-[#3FA69B] rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300" />
      <div className="relative">{children}</div>
    </div>
  );
};

// Statistic card component
const StatCard = ({ number, label, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="bg-gradient-to-br from-black to-gray-900 border border-gray-800 rounded-2xl p-8 flex flex-col items-center hover:border-[#3FA69B] transition-colors duration-300"
    >
      <motion.h3
        className="text-5xl font-bold text-white mb-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: delay + 0.2, duration: 0.5 }}
      >
        {number}
        <span className="text-[#3FA69B]">+</span>
      </motion.h3>
      <p className="text-gray-400 text-center text-sm uppercase tracking-wider">
        {label}
      </p>
    </motion.div>
  );
};

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
    <div className="bg-black">
      <section
        ref={sectionRef}
        className="py-24 md:py-32 relative overflow-hidden"
      >
        <ParticleBackground />

        <div className="container mx-auto px-4">
          {/* Hero section */}
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            {/* Left side - Text content */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block mb-6 px-4 py-2 rounded-full bg-[#3FA69B] bg-opacity-10 border border-[#3FA69B] border-opacity-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="text-[#3FA69B] text-sm font-medium tracking-wider">
                  ABOUT NEXFLOW
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Digital Excellence,
                <br />
                <span className="text-[#3FA69B] relative">
                  <span className="relative z-10">Delivered</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-2 bg-[#3FA69B] opacity-20 rounded-full z-0"
                    initial={{ width: 0 }}
                    animate={sectionInView ? { width: "100%" } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>
              </motion.h1>

              <motion.p
                className="text-gray-400 text-lg mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Transforming digital visions into measurable success through
                strategic innovation and creative excellence.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <GlowingBorder>
                  <motion.button
                    className="px-8 py-4 bg-[#3FA69B] hover:bg-[#2D8A80] rounded-lg text-white font-medium transition-colors flex items-center gap-2"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link to="/about">Our Process</Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </motion.button>
                </GlowingBorder>

                <motion.button
                  className="px-8 py-4 border border-[#3FA69B] text-[#3FA69B] hover:bg-[#3FA69B] hover:bg-opacity-10 rounded-lg transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link to="/about">Meet the Team</Link>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right side - Image collage */}
            <motion.div
              className="lg:w-1/2 relative h-[500px]"
              initial={{ opacity: 0, x: 50 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.div
                className="absolute top-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden border-2 border-[#3FA69B] border-opacity-30 shadow-lg"
                initial={{ opacity: 0, y: -50 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80"
                  alt="Creative workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="inline-block px-3 py-1 bg-[#3FA69B] text-white text-xs rounded-full mb-2">
                    INNOVATIVE
                  </span>
                  <h4 className="text-white text-xl font-medium">
                    Creative Process
                  </h4>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-0 right-0 w-3/4 h-2/3 rounded-2xl overflow-hidden border-2 border-[#3FA69B] border-opacity-30 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80"
                  alt="Digital marketing team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="inline-block px-3 py-1 bg-[#3FA69B] text-white text-xs rounded-full mb-2">
                    COLLABORATIVE
                  </span>
                  <h4 className="text-white text-xl font-medium">
                    Team Excellence
                  </h4>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* About content section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Left side - Image */}
            <motion.div
              className="rounded-2xl overflow-hidden border-2 border-[#3FA69B] border-opacity-30"
              initial={{ opacity: 0, x: -50 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80"
                alt="Team brainstorming"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="inline-block px-3 py-1 bg-[#3FA69B] text-white text-xs rounded-full mb-2">
                  STRATEGIC
                </span>
                <h4 className="text-white text-xl font-medium">
                  Results-Driven
                </h4>
              </div>
            </motion.div>

            {/* Right side - Text */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h3 className="text-4xl text-white font-bold">
                Leading the Digital Revolution{" "}
                <span className="text-[#3FA69B]">Since 2015</span>
              </h3>

              <div className="space-y-6">
                <p className="text-gray-300 text-lg">
                  Nexflow has been at the forefront of digital marketing
                  innovation, helping forward-thinking brands navigate the
                  ever-evolving digital landscape with strategic insight and
                  creative excellence.
                </p>

                <p className="text-gray-400">
                  We believe in the power of data-driven creativity – combining
                  analytical precision with bold, imaginative ideas to deliver
                  campaigns that not only capture attention but drive measurable
                  results for our clients.
                </p>

                <div className="pt-2 space-y-4">
                  {[
                    "Strategic campaign development",
                    "Data-driven performance optimization",
                    "Award-winning creative execution",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-[#3FA69B] flex items-center justify-center text-black">
                        ✓
                      </div>
                      <span className="text-white">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats section */}
          <div
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <StatCard number="120" label="Clients Worldwide" delay={0.2} />
            <StatCard number="350" label="Projects Completed" delay={0.4} />
            <StatCard number="15" label="Industry Awards" delay={0.6} />
            <StatCard number="98" label="Client Satisfaction" delay={0.8} />
          </div>
        </div>
      </section>
    </div>
  );
};
