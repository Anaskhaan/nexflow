// import React, { useState, useEffect } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   AnimatePresence,
// } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import {
//   Users,
//   Award,
//   Briefcase,
//   Globe,
//   ArrowRight,
//   CheckCircle2,
// } from "lucide-react";

// // Custom cursor component
// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     const updateMousePosition = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", updateMousePosition);
//     return () => window.removeEventListener("mousemove", updateMousePosition);
//   }, []);

//   return (
//     <motion.div
//       className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
//       style={{
//         backgroundColor: isHovering ? "#3FA69B" : "white",
//         x: position.x - 16,
//         y: position.y - 16,
//       }}
//       animate={{
//         scale: isHovering ? 1.5 : 1,
//       }}
//       transition={{ duration: 0.2 }}
//     />
//   );
// };

// // Animated counter component
// const Counter = ({
//   target,
//   title,
//   icon,
// }: {
//   target: number,
//   title: string,
//   icon: React.ReactNode,
// }) => {
//   const [count, setCount] = useState(0);
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   useEffect(() => {
//     if (inView) {
//       let start = 0;
//       const duration = 2000; // ms
//       const step = Math.ceil(target / (duration / 16)); // 60fps

//       const timer = setInterval(() => {
//         start += step;
//         if (start > target) {
//           setCount(target);
//           clearInterval(timer);
//         } else {
//           setCount(start);
//         }
//       }, 16);

//       return () => clearInterval(timer);
//     }
//   }, [inView, target]);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 20 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6 }}
//       className="flex flex-col items-center p-6 bg-gray-900 rounded-lg backdrop-blur-sm bg-opacity-60"
//     >
//       <div className="text-3xl text-[#3FA69B] mb-2">{icon}</div>
//       <h3 className="text-4xl font-bold text-white mb-1">{count}+</h3>
//       <p className="text-gray-400 text-center">{title}</p>
//     </motion.div>
//   );
// };

// // Morphing blob component
// const MorphingBlob = () => {
//   return (
//     <div className="absolute -z-10 opacity-20">
//       <motion.div
//         className="w-[600px] h-[600px] rounded-full bg-[#3FA69B] filter blur-[80px]"
//         animate={{
//           scale: [1, 1.2, 1.1, 1.3, 1],
//           borderRadius: [
//             "60% 40% 30% 70%",
//             "30% 60% 70% 40%",
//             "50% 50% 50% 50%",
//             "40% 60% 30% 70%",
//             "60% 40% 30% 70%",
//           ],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//       />
//     </div>
//   );
// };

// // Service card component
// const ServiceCard = ({
//   title,
//   description,
//   index,
// }: {
//   title: string,
//   description: string,
//   index: number,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-1"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="relative z-10 p-6 h-full bg-gray-900 rounded-lg">
//         <div className="flex items-center mb-4">
//           <div className="p-2 rounded-full bg-[#3FA69B] bg-opacity-20 mr-3">
//             <CheckCircle2 className="w-5 h-5 text-[#3FA69B]" />
//           </div>
//           <h3 className="text-xl font-bold text-white">{title}</h3>
//         </div>
//         <p className="text-gray-400 mb-4">{description}</p>
//         <motion.div
//           className="flex items-center text-[#3FA69B] font-medium"
//           animate={{ x: isHovered ? 5 : 0 }}
//         >
//           Learn more <ArrowRight className="ml-2 w-4 h-4" />
//         </motion.div>
//       </div>
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-r from-[#3FA69B] to-teal-500 opacity-30"
//         initial={{ x: "-100%" }}
//         animate={{ x: isHovered ? "0%" : "-100%" }}
//         transition={{ duration: 0.3 }}
//       />
//     </motion.div>
//   );
// };

// // Floating shape component
// const FloatingShape = ({
//   size,
//   color,
//   top,
//   left,
//   right,
//   bottom,
//   delay,
// }: {
//   size: number,
//   color: string,
//   top?: string,
//   left?: string,
//   right?: string,
//   bottom?: string,
//   delay: number,
// }) => {
//   return (
//     <motion.div
//       className={`absolute rounded-lg bg-gradient-to-br ${color} opacity-70`}
//       style={{
//         width: size,
//         height: size,
//         top,
//         left,
//         right,
//         bottom,
//         zIndex: -1,
//       }}
//       animate={{
//         y: [0, -15, 0, 15, 0],
//         rotate: [0, 10, 0, -10, 0],
//       }}
//       transition={{
//         duration: 10,
//         delay,
//         repeat: Infinity,
//         repeatType: "reverse",
//       }}
//     />
//   );
// };

// // Main About component
// const About = () => {
//   const { scrollY } = useScroll();
//   const y1 = useTransform(scrollY, [0, 500], [0, -100]);
//   const y2 = useTransform(scrollY, [0, 500], [0, -50]);
//   const opacity = useTransform(scrollY, [0, 300, 500], [1, 0.5, 0]);

//   const [heroRef, heroInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const [statsRef, statsInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const [textRef, textInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const services = [
//     {
//       title: "Digital Strategy",
//       description:
//         "We craft comprehensive digital strategies tailored to your business goals and target audience.",
//     },
//     {
//       title: "Content Marketing",
//       description:
//         "Engaging content that resonates with your audience and drives meaningful conversions.",
//     },
//     {
//       title: "Social Media",
//       description:
//         "Strategic social media management to build community and amplify your brand voice.",
//     },
//     {
//       title: "SEO Optimization",
//       description:
//         "Data-driven SEO strategies to improve visibility and drive organic traffic to your website.",
//     },
//     {
//       title: "PPC Advertising",
//       description:
//         "Targeted pay-per-click campaigns that maximize ROI and capture high-intent audiences.",
//     },
//     {
//       title: "Analytics & Insights",
//       description:
//         "Comprehensive data analysis to measure performance and inform strategic decisions.",
//     },
//   ];

//   return (
//     <div className="relative overflow-hidden bg-[#0A0A0A] text-white">
//       <CustomCursor />

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         <MorphingBlob />

//         <FloatingShape
//           size={80}
//           color="from-purple-500 to-blue-500"
//           top="15%"
//           left="10%"
//           delay={0}
//         />
//         <FloatingShape
//           size={120}
//           color="from-[#3FA69B] to-teal-300"
//           top="60%"
//           right="5%"
//           delay={2}
//         />
//         <FloatingShape
//           size={60}
//           color="from-amber-500 to-red-500"
//           bottom="20%"
//           left="15%"
//           delay={4}
//         />

//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div
//             ref={heroRef}
//             className="text-center max-w-4xl mx-auto"
//             initial={{ opacity: 0, y: 50 }}
//             animate={heroInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.h1
//               className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
//               style={{ y: y1 }}
//             >
//               We Create Digital Experiences
//             </motion.h1>

//             <motion.p
//               className="text-xl md:text-2xl text-gray-400 mb-10"
//               style={{ y: y2 }}
//             >
//               Transforming brands through strategic innovation and creative
//               excellence
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={heroInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ delay: 0.4, duration: 0.6 }}
//             >
//               <motion.button
//                 className="px-8 py-4 bg-[#3FA69B] hover:bg-[#2D8A80] rounded-full text-white font-medium text-lg transition-all"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Discover Our Work
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         </div>

//         <motion.div className="absolute inset-0 z-0" style={{ opacity }}>
//           <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10" />
//           <img
//             src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//             alt="Creative team working"
//             className="w-full h-full object-cover opacity-40"
//           />
//         </motion.div>

//         <motion.div
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
//             <motion.div
//               className="w-1 h-3 bg-white rounded-full mt-2"
//               animate={{ y: [0, 8, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//             />
//           </div>
//         </motion.div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 relative">
//         <div className="container mx-auto px-4">
//           <motion.div
//             ref={statsRef}
//             initial={{ opacity: 0 }}
//             animate={statsInView ? { opacity: 1 } : {}}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//           >
//             <Counter
//               target={250}
//               title="Projects Completed"
//               icon={<Briefcase />}
//             />
//             <Counter target={120} title="Happy Clients" icon={<Users />} />
//             <Counter target={15} title="Industry Awards" icon={<Award />} />
//             <Counter target={30} title="Countries Reached" icon={<Globe />} />
//           </motion.div>
//         </div>
//       </section>

//       {/* About Content Section */}
//       <section className="py-20 relative">
//         <MorphingBlob />

//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             {/* Left side: Text content */}
//             <motion.div
//               ref={textRef}
//               initial={{ opacity: 0, x: -50 }}
//               animate={textInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-6">
//                 <span className="text-[#3FA69B]">Innovative</span> Solutions for
//                 the Digital Age
//               </h2>

//               <div className="space-y-6">
//                 <motion.p
//                   className="text-gray-400"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={textInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 0.2, duration: 0.6 }}
//                 >
//                   Founded in 2015, our agency has been at the forefront of
//                   digital marketing innovation, helping brands navigate the
//                   ever-evolving digital landscape with strategic insight and
//                   creative excellence.
//                 </motion.p>

//                 <motion.p
//                   className="text-gray-400"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={textInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 0.4, duration: 0.6 }}
//                 >
//                   We believe in the power of data-driven creativity – combining
//                   analytical precision with bold, imaginative ideas to deliver
//                   campaigns that not only capture attention but drive measurable
//                   results.
//                 </motion.p>

//                 <motion.div
//                   className="flex items-center space-x-4 pt-4"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={textInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 0.6, duration: 0.6 }}
//                 >
//                   <motion.button
//                     className="px-6 py-3 bg-[#3FA69B] hover:bg-[#2D8A80] rounded-full text-white font-medium transition-all"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Our Process
//                   </motion.button>

//                   <motion.button
//                     className="px-6 py-3 border border-[#3FA69B] text-[#3FA69B] hover:bg-[#3FA69B] hover:bg-opacity-10 rounded-full font-medium transition-all"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Meet the Team
//                   </motion.button>
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* Right side: Image grid */}
//             <div className="grid grid-cols-2 gap-4 relative">
//               <FloatingShape
//                 size={40}
//                 color="from-[#3FA69B] to-teal-300"
//                 top="-10%"
//                 left="20%"
//                 delay={1}
//               />

//               <motion.div
//                 className="col-span-2 overflow-hidden rounded-lg"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={textInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.6 }}
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//                   alt="Team brainstorming"
//                   className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
//                 />
//               </motion.div>

//               <motion.div
//                 className="overflow-hidden rounded-lg"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={textInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.2, duration: 0.6 }}
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
//                   alt="Creative workspace"
//                   className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
//                 />
//               </motion.div>

//               <motion.div
//                 className="overflow-hidden rounded-lg"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={textInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//                   alt="Digital marketing team"
//                   className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
//                 />
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 relative">
//         <FloatingShape
//           size={100}
//           color="from-[#3FA69B] to-teal-300"
//           top="10%"
//           right="5%"
//           delay={3}
//         />
//         <FloatingShape
//           size={70}
//           color="from-purple-500 to-blue-500"
//           bottom="10%"
//           left="5%"
//           delay={1}
//         />

//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true, amount: 0.1 }}
//             className="text-center max-w-3xl mx-auto mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Our Services
//             </h2>
//             <p className="text-gray-400">
//               We offer a comprehensive suite of digital marketing services
//               designed to elevate your brand and drive meaningful results in
//               today's competitive landscape.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <ServiceCard
//                 key={index}
//                 title={service.title}
//                 description={service.description}
//                 index={index}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 relative">
//         <MorphingBlob />

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true, amount: 0.1 }}
//           className="container mx-auto px-4"
//         >
//           <div className="bg-gradient-to-br from-gray-900 to-black p-1 rounded-2xl overflow-hidden">
//             <div className="relative bg-gray-900 rounded-2xl p-12 overflow-hidden">
//               <div className="relative z-10 text-center max-w-3xl mx-auto">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-6">
//                   Ready to Transform Your Digital Presence?
//                 </h2>
//                 <p className="text-gray-400 mb-8">
//                   Let's collaborate to create impactful digital experiences that
//                   elevate your brand and drive meaningful results.
//                 </p>
//                 <motion.button
//                   className="px-8 py-4 bg-[#3FA69B] hover:bg-[#2D8A80] rounded-full text-white font-medium text-lg transition-all"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Get in Touch
//                 </motion.button>
//               </div>

//               <motion.div
//                 className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#3FA69B] opacity-20 blur-3xl"
//                 animate={{
//                   scale: [1, 1.2, 1],
//                 }}
//                 transition={{
//                   duration: 8,
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                 }}
//               />

//               <motion.div
//                 className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-purple-500 opacity-10 blur-3xl"
//                 animate={{
//                   scale: [1, 1.2, 1],
//                 }}
//                 transition={{
//                   duration: 8,
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                   delay: 4,
//                 }}
//               />
//             </div>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default About;

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Users,
  Award,
  Briefcase,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const MorphingBlob = () => {
  return (
    <div className="absolute -z-10 opacity-20">
      <motion.div
        className="w-[600px] h-[600px] rounded-full bg-[#3FA69B] filter blur-[80px]"
        animate={{
          scale: [1, 1.2, 1.1, 1.3, 1],
          borderRadius: [
            "60% 40% 30% 70%",
            "30% 60% 70% 40%",
            "50% 50% 50% 50%",
            "40% 60% 30% 70%",
            "60% 40% 30% 70%",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
};

const FloatingShape = ({ size, color, top, left, right, bottom, delay }) => {
  return (
    <motion.div
      className={`absolute rounded-lg bg-gradient-to-br ${color} opacity-70`}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        zIndex: -1,
      }}
      animate={{
        y: [0, -15, 0, 15, 0],
        rotate: [0, 10, 0, -10, 0],
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};

export const About = () => {
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <section className="py-20 bg-black relative">
        <MorphingBlob />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side: Text content */}
            <motion.div
              ref={textRef}
              initial={{ opacity: 0, x: -50 }}
              animate={textInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
                <span className="text-[#3FA69B]">Innovative</span> Solutions for
                the Digital Age
              </h2>

              <div className="space-y-6">
                <motion.p
                  className="text-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={textInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Founded in 2015, our agency has been at the forefront of
                  digital marketing innovation, helping brands navigate the
                  ever-evolving digital landscape with strategic insight and
                  creative excellence.
                </motion.p>

                <motion.p
                  className="text-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={textInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  We believe in the power of data-driven creativity – combining
                  analytical precision with bold, imaginative ideas to deliver
                  campaigns that not only capture attention but drive measurable
                  results.
                </motion.p>

                <motion.div
                  className="flex items-center space-x-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={textInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <motion.button
                    className="px-6 py-3 bg-[#3FA69B] hover:bg-[#2D8A80] rounded-full text-white font-medium transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Our Process
                  </motion.button>

                  <motion.button
                    className="px-6 py-3 border border-[#3FA69B] text-[#3FA69B] hover:bg-[#3FA69B] hover:bg-opacity-10 rounded-full font-medium transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Meet the Team
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right side: Image grid */}
            <div className="grid grid-cols-2 gap-4 relative">
              <FloatingShape
                size={40}
                color="from-[#3FA69B] to-teal-300"
                top="-10%"
                left="20%"
                delay={1}
              />

              <motion.div
                className="col-span-2 overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={textInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Team brainstorming"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>

              <motion.div
                className="overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={textInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                  alt="Creative workspace"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>

              <motion.div
                className="overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={textInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Digital marketing team"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
