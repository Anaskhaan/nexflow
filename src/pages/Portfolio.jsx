// import { ExternalLink } from "lucide-react";
// import { portfolioData } from "../components/Helper/Data";
// import { Link } from "react-router-dom";

// const Portfolio = () => {
//   return (
//     <div className="w-full  bg-black text-white py-24">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="text-center mb-16">
//           <span className="text-sm font-bold tracking-widest text-gray-400 uppercase">
//             Our Work
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
//             Featured Projects
//           </h2>
//           <div className="w-16 h-1 mx-auto bg-teal-500"></div>
//           <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
//             We craft stunning digital experiences that deliver results. Each
//             project represents our commitment to excellence and innovation.
//           </p>
//         </div>

//         {/* Project Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {portfolioData.map((project) => (
//             <div
//               key={project.id}
//               className="group relative rounded-lg overflow-hidden shadow-2xl cursor-pointer h-[40rem]"
//               role="button"
//               aria-label={`Open project ${project.name}`}
//             >
//               {/* Project Image */}
//               <img
//                 src={project.image}
//                 alt={project.name}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />

//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-end p-6">
//                 <h3 className="text-2xl font-bold transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
//                   {project.name}
//                 </h3>
//                 <p className="text-gray-300 mt-2 line-clamp-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
//                   {project.description}
//                 </p>
//                 <Link
//                   to={`/Portfolio/${project.id}`}
//                   className="flex items-center mt-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150"
//                 >
//                   <span className="text-sm font-medium text-teal-500">
//                     View Details
//                   </span>
//                   <ExternalLink className="ml-1 w-4 h-4 text-teal-500" />
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

import { ArrowRight, ExternalLink } from "lucide-react";
import { portfolioData } from "../components/Helper/Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="w-full bg-black text-white">
      {/* **Hero Section - Minimal & Bold** */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-500 text-sm font-medium tracking-wider">
              OUR WORK
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              <span className="text-teal-500">Innovative</span> Digital
              Solutions
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              We craft high-impact digital experiences that drive results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* **Smart Project Cards - Interactive & Modern** */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative rounded-xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-teal-500/30 transition-all duration-300 h-[400px]"
            >
              {/* **Card Background (Logo or Image)** */}
              <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* **Overlay - Hidden Details** */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-6">
                <motion.div
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="transform translate-y-5 group-hover:translate-y-0 transition-transform duration-300"
                >
                  <h3 className="text-2xl font-bold text-white">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 mt-2 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs font-medium text-teal-500">
                      {project.category}
                    </span>
                    <Link
                      to={`/Portfolio/${project.id}`}
                      className="flex items-center text-sm text-white hover:text-teal-500 transition-colors"
                    >
                      View Project <ExternalLink className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* **Corner Highlight Effect** */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* **CTA - Clean & Impactful** */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-teal-500 hover:bg-teal-600 rounded-lg text-white font-medium transition-all shadow-lg hover:shadow-teal-500/20"
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
