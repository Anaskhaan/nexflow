import { useParams } from "react-router-dom";
import { portfolioData } from "../Helper/Data";
import CustomCarousel from "./CustomCarousel";
import BrandGuidelines from "./BrandGuidlines";

const PortfolioDetails = () => {
  const { slug } = useParams();
  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    return <div className="text-center text-white">Project Not Found</div>;
  }

  return (
    <div className="w-full min-h-screen bg-black text-white px-4 md:px-12">
      {/* First Section */}
      <div className="h-[50vh] md:h-[60vh] flex flex-col justify-center items-center text-center font-semibold">
        <h2 className="text-4xl md:text-7xl">
          {project.projectName}{" "}
          <span className="text-[#3FA69B] -ml-1 md:-ml-2">.</span>
        </h2>
      </div>

      {/* Carousel Section */}
      <div className="mt-5">
        <CustomCarousel images={project.images} />
      </div>

      <div className="mt-20 flex flex-col md:flex-row w-full max-w-7xl mx-auto justify-between gap-20 text-white">
        {/* Left Side - Project Description */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold">The project</h2>
          <p className="text-base leading-relaxed text-gray-300">
            {project.projectDetails}
          </p>
        </div>

        {/* Right Side - Client, Services, Website */}
        <div className="w-full md:w-1/2 flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-8">
            {/* Client Section */}
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">Client</h3>
              {project.clientName.split("\n").map((name, index) => (
                <p key={index} className="text-gray-300">
                  {name}
                </p>
              ))}
            </div>

            {/* Services Section */}
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">Services</h3>
              {project.services.map((service, index) => (
                <p key={index} className="text-gray-300">
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Website Section */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Website</h3>
            <a
              href={project.websiteLink}
              className="text-gray-300 underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.websiteLink}
            </a>
          </div>
        </div>
      </div>

      {/* Additional Images Section for this project only */}
      {project.images2 && project.images2.length > 0 && (
        <div className="mt-12">
          {/* Large Image */}
          <div className="w-full max-w-6xl mx-auto bg-gray-500 h-[500px]">
            <img
              src={project.images2[0]}
              alt={project.projectName}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Small Images BELOW the Large Image */}
          <div className="flex flex-col md:flex-row gap-4 py-6 max-w-6xl mx-auto">
            {project.images2.slice(1, 3).map((img, index) => (
              <div
                key={index}
                className="bg-gray-500 w-full md:w-1/2 h-[600px]"
              >
                <img
                  src={img}
                  alt={`${project.projectName} - ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <BrandGuidelines project={project} />
    </div>
  );
};

export default PortfolioDetails;



// import { useParams } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";
// import { portfolioData } from "../Helper/Data";
// import CustomCarousel from "./CustomCarousel";
// import BrandGuidelines from "./BrandGuidlines";
// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// const PortfolioDetails = () => {
//   const { slug } = useParams();
//   const project = portfolioData.find((p) => p.slug === slug);
//   const containerRef = useRef(null);
//   const [activeSection, setActiveSection] = useState(0);
//   const [isHolographic, setIsHolographic] = useState(false);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   // Creative scroll-based animations
//   const titleScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
//   const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
//   const holographicIntensity = useTransform(scrollYProgress, [0, 1], [0, 0.3]);

//   useEffect(() => {
//     const unsubscribe = holographicIntensity.on("change", (value) => {
//       setIsHolographic(value > 0.15);
//     });
//     return () => unsubscribe();
//   }, []);

//   if (!project) {
//     return (
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="h-screen flex items-center justify-center bg-black text-white"
//       >
//         <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">
//           Project Not Found
//         </h2>
//       </motion.div>
//     );
//   }

//   // Dynamic color generation based on project
//   const generateColorVibes = (seed) => {
//     const hash = seed.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
//     const hue = hash % 360;
//     return {
//       primary: `hsl(${hue}, 80%, 60%)`,
//       secondary: `hsl(${(hue + 30) % 360}, 80%, 60%)`,
//       accent: `hsl(${(hue + 180) % 360}, 80%, 60%)`
//     };
//   };

//   const colors = generateColorVibes(project.slug);

//   return (
//     <div 
//       ref={containerRef}
//       className={`relative w-full min-h-screen bg-black text-white overflow-hidden ${isHolographic ? 'holographic-effect' : ''}`}
//       style={{
//         '--holographic-intensity': holographicIntensity,
//         '--primary-color': colors.primary,
//         '--secondary-color': colors.secondary,
//         '--accent-color': colors.accent
//       }}
//     >
//       {/* Floating 3D background elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         {[...Array(10)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full opacity-10"
//             style={{
//               background: `radial-gradient(circle, ${colors.primary}, transparent)`,
//               width: Math.random() * 300 + 100,
//               height: Math.random() * 300 + 100,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               x: useTransform(scrollYProgress, [0, 1], [0, (Math.random() - 0.5) * 200]),
//               y: useTransform(scrollYProgress, [0, 1], [0, (Math.random() - 0.5) * 200]),
//               scale: useTransform(scrollYProgress, [0, 1], [1, 1 + Math.random() * 0.5])
//             }}
//           />
//         ))}
//       </div>

//       {/* Interactive navigation orb */}
//       <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
//         <div className="relative w-16 h-16">
//           {[0, 1, 2, 3, 4].map((i) => (
//             <motion.button
//               key={i}
//               className={`absolute rounded-full w-4 h-4 focus:outline-none ${activeSection === i ? 'bg-white' : 'bg-gray-500'}`}
//               style={{
//                 x: Math.cos(i * (Math.PI * 2 / 5)) * 24,
//                 y: Math.sin(i * (Math.PI * 2 / 5)) * 24,
//                 scale: useTransform(scrollYProgress, 
//                   [i * 0.2, i * 0.2 + 0.1], 
//                   [1, 1.5])
//               }}
//               onClick={() => {
//                 const section = document.getElementById(`section-${i}`);
//                 section?.scrollIntoView({ behavior: 'smooth' });
//               }}
//               whileHover={{ scale: 1.5 }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="relative z-10">
//         {/* Hero section with parallax layers */}
//         <section id="section-0" className="relative h-screen flex items-center justify-center overflow-hidden">
//           <motion.div 
//             className="absolute inset-0"
//             style={{
//               background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
//               opacity: useTransform(scrollYProgress, [0, 0.5], [0.2, 0])
//             }}
//           />
          
//           <motion.div 
//             className="text-center px-4"
//             style={{
//               scale: titleScale,
//               opacity: titleOpacity
//             }}
//           >
//             <motion.h2 
//               className="text-6xl md:text-9xl font-bold mb-4"
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//             >
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
//                 {project.projectName.split('').map((letter, i) => (
//                   <motion.span 
//                     key={i}
//                     style={{ display: 'inline-block' }}
//                     animate={{ 
//                       y: [0, -10, 0],
//                       rotate: [0, 5, 0]
//                     }}
//                     transition={{ 
//                       delay: i * 0.05,
//                       repeat: Infinity,
//                       repeatDelay: 5,
//                       duration: 0.5
//                     }}
//                   >
//                     {letter === ' ' ? '\u00A0' : letter}
//                   </motion.span>
//                 ))}
//               </span>
//               <motion.span 
//                 className="ml-2"
//                 animate={{ 
//                   opacity: [0.6, 1, 0.6],
//                   scale: [0.9, 1.1, 0.9]
//                 }}
//                 transition={{ 
//                   duration: 2,
//                   repeat: Infinity
//                 }}
//                 style={{ color: colors.accent }}
//               >
//                 .
//               </motion.span>
//             </motion.h2>
            
//             <motion.p 
//               className="text-xl md:text-2xl max-w-2xl mx-auto"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//             >
//               {project.tagline || "Innovative digital experience"}
//             </motion.p>
            
//             <motion.div
//               className="mt-12"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8 }}
//             >
//               <div className="relative inline-block">
//                 <div className="absolute inset-0 rounded-full bg-white blur-md opacity-30 animate-pulse" />
//                 <button 
//                   className="relative px-8 py-3 rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
//                   onClick={() => {
//                     document.getElementById('section-1')?.scrollIntoView({ behavior: 'smooth' });
//                   }}
//                 >
//                   Explore Project
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
          
//           <motion.div 
//             className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M12 5v14M19 12l-7 7-7-7"/>
//             </svg>
//           </motion.div>
//         </section>

//         {/* Gallery section with immersive effect */}
//         <section id="section-1" className="relative py-20">
//           <div className="sticky top-0 h-screen flex items-center justify-center">
//             <motion.div 
//               className="w-full max-w-6xl mx-auto"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ margin: "-30% 0px -30% 0px" }}
//             >
//               <h3 className="text-3xl font-bold mb-12 text-center">
//                 <span className="inline-block px-4 py-2 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm">
//                   Visual Journey
//                 </span>
//               </h3>
//               <CustomCarousel 
//                 images={project.images} 
//                 colors={colors}
//               />
//             </motion.div>
//           </div>
          
//           {/* Floating info cards that appear during scroll */}
//           <div className="relative h-[200vh]">
//             <div className="sticky top-0 h-screen flex items-center">
//               <div className="container mx-auto px-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                   <motion.div 
//                     className="p-8 rounded-3xl border border-white/10 bg-black/50 backdrop-blur-lg"
//                     initial={{ x: -100, opacity: 0 }}
//                     whileInView={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.6 }}
//                     viewport={{ margin: "-100px" }}
//                   >
//                     <h3 className="text-2xl font-bold mb-4">The Project</h3>
//                     <p className="text-gray-300 leading-relaxed">
//                       {project.projectDetails}
//                     </p>
//                   </motion.div>
                  
//                   <motion.div 
//                     className="p-8 rounded-3xl border border-white/10 bg-black/50 backdrop-blur-lg"
//                     initial={{ x: 100, opacity: 0 }}
//                     whileInView={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     viewport={{ margin: "-100px" }}
//                   >
//                     <div className="grid grid-cols-2 gap-8">
//                       <div>
//                         <h4 className="text-xl font-semibold mb-3">Client</h4>
//                         {project.clientName.split("\n").map((name, index) => (
//                           <p key={index} className="text-gray-300">
//                             {name}
//                           </p>
//                         ))}
//                       </div>
//                       <div>
//                         <h4 className="text-xl font-semibold mb-3">Services</h4>
//                         {project.services.map((service, index) => (
//                           <p key={index} className="text-gray-300">
//                             {service}
//                           </p>
//                         ))}
//                       </div>
//                     </div>
                    
//                     <div className="mt-8">
//                       <h4 className="text-xl font-semibold mb-3">Website</h4>
//                       <a
//                         href={project.websiteLink}
//                         className="inline-block px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <span className="flex items-center">
//                           {project.websiteLink}
//                           <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
//                           </svg>
//                         </span>
//                       </a>
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Additional images with dynamic layout */}
//         {project.images2 && project.images2.length > 0 && (
//           <section id="section-2" className="py-20">
//             <motion.div 
//               className="container mx-auto px-4"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ margin: "-100px" }}
//             >
//               <h3 className="text-3xl font-bold mb-12 text-center">
//                 <span className="inline-block px-4 py-2 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm">
//                   Deep Dive
//                 </span>
//               </h3>
              
//               <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
//                 <motion.div 
//                   className="md:col-span-8 rounded-3xl overflow-hidden aspect-video"
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   whileInView={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 0.6 }}
//                   viewport={{ margin: "-100px" }}
//                 >
//                   <img
//                     src={project.images2[0]}
//                     alt={project.projectName}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                     loading="lazy"
//                   />
//                 </motion.div>
                
//                 <div className="md:col-span-4 grid grid-rows-2 gap-6">
//                   {project.images2.slice(1, 3).map((img, index) => (
//                     <motion.div
//                       key={index}
//                       className="rounded-3xl overflow-hidden"
//                       initial={{ y: 50, opacity: 0 }}
//                       whileInView={{ y: 0, opacity: 1 }}
//                       transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
//                       viewport={{ margin: "-100px" }}
//                     >
//                       <img
//                         src={img}
//                         alt={`${project.projectName} - ${index + 1}`}
//                         className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                         loading="lazy"
//                       />
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </section>
//         )}

//         {/* Brand guidelines with interactive elements */}
//         <section id="section-3" className="py-20">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ margin: "-100px" }}
//           >
//             <BrandGuidelines project={project} colors={colors} />
//           </motion.div>
//         </section>

//         {/* Final CTA with particle effect */}
//         <section id="section-4" className="relative h-screen flex items-center justify-center">
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             {[...Array(30)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute rounded-full"
//                 style={{
//                   background: colors.primary,
//                   width: Math.random() * 10 + 2,
//                   height: Math.random() * 10 + 2,
//                   top: `${Math.random() * 100}%`,
//                   left: `${Math.random() * 100}%`,
//                   opacity: 0.6
//                 }}
//                 animate={{
//                   y: [0, (Math.random() - 0.5) * 100],
//                   x: [0, (Math.random() - 0.5) * 100],
//                   opacity: [0.6, 0],
//                   scale: [1, 0]
//                 }}
//                 transition={{
//                   duration: Math.random() * 3 + 2,
//                   repeat: Infinity,
//                   repeatDelay: Math.random() * 5,
//                   ease: "linear"
//                 }}
//               />
//             ))}
//           </div>
          
//           <div className="relative z-10 text-center px-4">
//             <motion.h2 
//               className="text-4xl md:text-6xl font-bold mb-8"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ margin: "-100px" }}
//             >
//               Ready to create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">extraordinary</span>?
//             </motion.h2>
            
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//               viewport={{ margin: "-100px" }}
//             >
//               <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 text-white font-bold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
//                 Get In Touch
//               </button>
//             </motion.div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default PortfolioDetails;