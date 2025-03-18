// import { useState } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   ExternalLink,
//   Code,
//   Palette,
//   Layout,
// } from "lucide-react";

// const Portfolio = () => {
//   const [activeProject, setActiveProject] = useState(0);

//   const projects = [
//     {
//       id: 1,
//       name: "Bell Clinix",
//       url: "https://bellclinix.com/",
//       image: "/api/placeholder/800/500",
//       description:
//         "A modern healthcare website with intuitive appointment scheduling and patient portal integration.",
//       colorScheme: ["#4A90E2", "#F5F7FA", "#E74C3C", "#FFFFFF"],
//       features: [
//         "Responsive patient-first design",
//         "Integrated appointment booking system",
//         "HIPAA-compliant patient portal",
//         "Service catalog with detailed descriptions",
//       ],
//       structure:
//         "Hierarchical information architecture focused on patient needs, with prominent CTAs for appointments.",
//       challenge:
//         "Creating a user-friendly interface that balances medical professionalism with accessibility for patients of all ages.",
//     },
//     {
//       id: 2,
//       name: "Swift Takeoffs",
//       url: "https://swifttakeoffs.com/",
//       image: "/api/placeholder/800/500",
//       description:
//         "Aviation services platform with real-time flight tracking and booking capabilities.",
//       colorScheme: ["#FF9900", "#333333", "#FFFFFF", "#E5E5E5"],
//       features: [
//         "Dynamic flight scheduling system",
//         "Interactive map integration",
//         "Customer account management",
//         "Responsive booking experience",
//       ],
//       structure:
//         "Service-oriented layout with prominent booking funnel and flight information dashboards.",
//       challenge:
//         "Developing a high-performance site that handles real-time data while maintaining fast load times.",
//     },
//     {
//       id: 3,
//       name: "Paradise Pipes",
//       url: "http://paradisepipes.com/",
//       image: "/api/placeholder/800/500",
//       description:
//         "E-commerce platform for premium smoking accessories with detailed product catalogs.",
//       colorScheme: ["#2C3E50", "#16A085", "#ECF0F1", "#E67E22"],
//       features: [
//         "Custom product filtering system",
//         "Secure payment processing",
//         "Customer reviews integration",
//         "Mobile-first shopping experience",
//       ],
//       structure:
//         "Product-centered design with category navigation and prominent product imagery.",
//       challenge:
//         "Creating an engaging shopping experience with streamlined checkout process to maximize conversions.",
//     },
//   ];

//   const nextProject = () => {
//     setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
//   };

//   const prevProject = () => {
//     setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
//   };

//   const ColorSwatch = ({ color }) => (
//     <div
//       className="w-6 h-6 rounded-full mr-2"
//       style={{ backgroundColor: color }}
//     />
//   );

//   return (
//     <div className="w-full min-h-screen bg-black text-white py-16">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="text-center mb-16">
//           <span className="text-sm font-bold tracking-widest text-gray-400 uppercase">
//             Our Work
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
//             Featured Projects
//           </h2>
//           <div
//             className="w-16 h-1 bg-teal-500 mx-auto"
//             style={{ backgroundColor: "#3fa69b" }}
//           ></div>
//           <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
//             We craft stunning digital experiences that deliver results. Each
//             project represents our commitment to excellence and innovation in
//             web development.
//           </p>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8 mb-16 items-center">
//           <div className="lg:w-3/5 relative overflow-hidden rounded-lg shadow-2xl">
//             <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>
//             <img
//               src={projects[activeProject].image}
//               alt={projects[activeProject].name}
//               className="w-full h-auto object-cover rounded-lg"
//             />
//             <div className="absolute bottom-0 left-0 p-6 z-20">
//               <h3 className="text-2xl font-bold">
//                 {projects[activeProject].name}
//               </h3>
//               <a
//                 href={projects[activeProject].url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center mt-2 text-teal-400 hover:text-teal-300 transition-colors"
//                 style={{ color: "#3fa69b" }}
//               >
//                 View Live Site <ExternalLink className="ml-1 w-4 h-4" />
//               </a>
//             </div>
//           </div>

//           <div className="lg:w-2/5">
//             <div className="bg-gray-900 p-6 rounded-lg">
//               <h3 className="text-2xl font-bold mb-4">
//                 {projects[activeProject].name}
//               </h3>
//               <p className="text-gray-300 mb-6">
//                 {projects[activeProject].description}
//               </p>

//               <div className="mb-6">
//                 <div className="flex items-center mb-2">
//                   <Palette
//                     className="mr-2 text-teal-500"
//                     style={{ color: "#3fa69b" }}
//                   />
//                   <h4 className="font-semibold text-lg">Color Scheme</h4>
//                 </div>
//                 <div className="flex items-center mt-3">
//                   {projects[activeProject].colorScheme.map((color, index) => (
//                     <ColorSwatch key={index} color={color} />
//                   ))}
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <div className="flex items-center mb-2">
//                   <Layout
//                     className="mr-2 text-teal-500"
//                     style={{ color: "#3fa69b" }}
//                   />
//                   <h4 className="font-semibold text-lg">Site Structure</h4>
//                 </div>
//                 <p className="text-gray-300">
//                   {projects[activeProject].structure}
//                 </p>
//               </div>

//               <div className="mb-6">
//                 <div className="flex items-center mb-2">
//                   <Code
//                     className="mr-2 text-teal-500"
//                     style={{ color: "#3fa69b" }}
//                   />
//                   <h4 className="font-semibold text-lg">Key Features</h4>
//                 </div>
//                 <ul className="grid grid-cols-2 gap-2 mt-2">
//                   {projects[activeProject].features.map((feature, index) => (
//                     <li
//                       key={index}
//                       className="flex items-start text-sm text-gray-300"
//                     >
//                       <span
//                         className="text-teal-500 mr-2"
//                         style={{ color: "#3fa69b" }}
//                       >
//                         •
//                       </span>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-center items-center">
//           <button
//             onClick={prevProject}
//             className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all mr-4"
//           >
//             <ChevronLeft />
//           </button>

//           <div className="flex space-x-2">
//             {projects.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveProject(index)}
//                 className={`w-3 h-3 rounded-full transition-all ${
//                   index === activeProject
//                     ? "bg-teal-500 scale-125"
//                     : "bg-gray-600 hover:bg-gray-500"
//                 }`}
//                 style={{
//                   backgroundColor:
//                     index === activeProject ? "#3fa69b" : undefined,
//                 }}
//               />
//             ))}
//           </div>

//           <button
//             onClick={nextProject}
//             className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all ml-4"
//           >
//             <ChevronRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bellClinix from "../assets/bellclinix.png";
import swiftTakeoffs from "../assets/swifttakeoffs.png";
import paradisePipes from "../assets/paradisepipe.png";

const Portfolio = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      name: "Bell Clinix",
      url: "https://bellclinix.com/",
      image: bellClinix,
      description:
        "A modern healthcare website with intuitive appointment scheduling and patient portal integration.",
      features: [
        "Responsive patient-first design",
        "Integrated appointment booking system",
        "HIPAA-compliant patient portal",
        "Service catalog with detailed descriptions",
      ],
    },
    {
      id: 2,
      name: "Swift Takeoffs",
      url: "https://swifttakeoffs.com/",
      image: swiftTakeoffs,
      description:
        "Aviation services platform with real-time flight tracking and booking capabilities.",
      features: [
        "Dynamic flight scheduling system",
        "Interactive map integration",
        "Customer account management",
        "Responsive booking experience",
      ],
    },
    {
      id: 3,
      name: "Paradise Pipes",
      url: "http://paradisepipes.com/",
      image: paradisePipes,
      description:
        "E-commerce platform for premium smoking accessories with detailed product catalogs.",
      features: [
        "Custom product filtering system",
        "Secure payment processing",
        "Customer reviews integration",
        "Mobile-first shopping experience",
      ],
    },
  ];

  const openProject = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-gray-400 uppercase">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 mx-auto bg-teal-500"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            We craft stunning digital experiences that deliver results. Each
            project represents our commitment to excellence and innovation.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-lg overflow-hidden shadow-2xl cursor-pointer h-[40rem]"
              onClick={() => openProject(project.url)}
              role="button"
              aria-label={`Open project ${project.name}`}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {project.name}
                </h3>
                <p className="text-gray-300 mt-2 line-clamp-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                  {project.description}
                </p>
                <div className="flex items-center mt-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                  <span className="text-sm font-medium text-teal-500">
                    View Details
                  </span>
                  <ExternalLink className="ml-1 w-4 h-4 text-teal-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
