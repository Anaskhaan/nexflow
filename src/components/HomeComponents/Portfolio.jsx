// import { Link } from "react-router-dom";
// import BellClinix from "../../assets/bellclinix-logo.svg";
// import SwiftTakeoffs from "../../assets/swift-logo.webp";
// import ParadisePipe from "../../assets/paradise-logo.svg";

// const portfolioData = [
//   {
//     id: 1,
//     title: "BellClinix",
//     website: "bellclinix.com",
//     category: "Healthcare",
//     image: BellClinix,
//     services: ["Web Dev", "SEO", "PPC"],
//     results: [
//       { label: "Traffic", value: "3.2x" },
//       { label: "Leads", value: "210%" },
//       { label: "ROI", value: "5.1x" },
//     ],
//     highlights: [
//       "Elevated with HIPAA-compliant responsive design",
//       "Ranked #1 for 15+ medical keywords",
//       "Optimized lead gen with 28% PPC conversion",
//     ],
//   },
//   {
//     id: 2,
//     title: "SwiftTakeoffs",
//     website: "swifttakeoffs.com",
//     category: "Estimating Agency",
//     image: SwiftTakeoffs,
//     services: ["Web Dev", "SEO", "PPC"],
//     results: [
//       { label: "Revenue", value: "320%" },
//       { label: "Traffic", value: "4.8x" },
//       { label: "ROAS", value: "6.3x" },
//     ],
//     highlights: [
//       "Elevated e-commerce platform with 42% lower abandonment",
//       "Ranked top 3 for aviation equipment keywords",
//       "Optimized $50k/month PPC with 650% return",
//     ],
//   },
//   {
//     id: 3,
//     title: "Paradise Pipes",
//     website: "paradisepipes.com",
//     category: "Luxury Retail",
//     image: ParadisePipe,
//     services: ["Web Dev", "SEO", "PPC"],
//     results: [
//       { label: "Leads", value: "180%" },
//       { label: "Traffic", value: "2.7x" },
//       { label: "ROI", value: "4.5x" },
//     ],
//     highlights: [
//       "Elevated with award-winning luxury web design",
//       "Ranked for 120+ plumbing keywords nationally",
//       "Optimized PPC with 22% CTR luxury audience",
//     ],
//   },
// ];

// export default function Portfolio() {
//   return (
//     <section className="py-12 bg-black">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-white mb-2">
//             Digital Growth <span className="text-[#3FA69B]">Case Studies</span>
//           </h2>
//           <div className="w-16 h-0.5 bg-[#3FA69B] mx-auto mb-4"></div>
//           <p className="text-gray-300 text-sm max-w-2xl mx-auto">
//             How we elevated, ranked, and optimized for industry leaders
//           </p>
//         </div>

//         <div className="space-y-4">
//           {portfolioData.map((project) => (
//             <div
//               key={project.id}
//               className="group bg-gray-900/50 rounded-lg border border-gray-800 hover:border-[#3FA69B]/50 transition-all overflow-hidden"
//             >
//               <div className="grid grid-cols-12 gap-4 p-4 items-center">
//                 {/* Client Logo */}
//                 <div className="col-span-2 md:col-span-1">
//                   <div className="w-16 h-16 rounded-lg bg-gray-800 flex items-center justify-center overflow-hidden border border-gray-700">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-full object-contain p-1"
//                     />
//                   </div>
//                 </div>

//                 {/* Client Info */}
//                 <div className="col-span-4 md:col-span-3">
//                   <h3 className="font-bold text-white">{project.title}</h3>
//                   <div className="flex items-center text-xs text-gray-400 mt-1">
//                     <span>{project.website}</span>
//                     <span className="mx-2">•</span>
//                     <span className="text-[#3FA69B]">{project.category}</span>
//                   </div>
//                   <div className="flex flex-wrap gap-1.5 mt-2">
//                     {project.services.map((service, i) => (
//                       <span
//                         key={i}
//                         className="text-xs bg-[#3FA69B]/10 text-[#3FA69B] px-2 py-0.5 rounded"
//                       >
//                         {service}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Results */}
//                 <div className="col-span-6 md:col-span-4">
//                   <div className="grid grid-cols-3 gap-2 text-center">
//                     {project.results.map((result, i) => (
//                       <div
//                         key={i}
//                         className="bg-gray-800/50 rounded p-2 group-hover:bg-gray-800 transition-colors"
//                       >
//                         <div className="text-[#3FA69B] font-bold">
//                           {result.value}
//                         </div>
//                         <div className="text-xs text-gray-400">
//                           {result.label}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Highlights */}
//                 <div className="col-span-12 md:col-span-3 mt-4 md:mt-0">
//                   <ul className="space-y-1.5">
//                     {project.highlights.slice(0, 2).map((highlight, i) => (
//                       <li
//                         key={i}
//                         className="flex items-start text-xs text-gray-300"
//                       >
//                         <span className="text-[#3FA69B] mr-1.5 mt-0.5">•</span>
//                         <span>{highlight}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* CTA */}
//                 <div className="col-span-12 md:col-span-1 flex justify-end">
//                   <Link
//                     to={`/portfolio/${project.id}`}
//                     className="text-[#3FA69B] text-sm font-medium hover:underline flex items-center justify-end"
//                   >
//                     Details
//                     <svg
//                       className="w-4 h-4 ml-1"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-10">
//           <Link
//             to="/portfolio"
//             className="inline-flex items-center px-6 py-2 border border-[#3FA69B] rounded-lg text-[#3FA69B] text-sm font-medium hover:bg-[#3FA69B]/10 transition-colors"
//           >
//             View Full Portfolio
//             <svg
//               className="w-4 h-4 ml-1"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M14 5l7 7m0 0l-7 7m7-7H3"
//               />
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";
import BellClinix from "../../assets/bellclinix-logo.svg";
import SwiftTakeoffs from "../../assets/swift-logo.webp";
import ParadisePipe from "../../assets/paradise-logo.svg";

const portfolioData = [
  {
    id: 1,
    title: "BellClinix",
    website: "bellclinix.com",
    category: "Healthcare",
    image: BellClinix,
    services: ["Web Dev", "SEO", "PPC"],
    results: [
      { label: "Traffic", value: "3.2x" },
      { label: "Leads", value: "210%" },
      { label: "ROI", value: "5.1x" },
    ],
    highlights: [
      "Elevated with HIPAA-compliant responsive design",
      "Ranked #1 for 15+ medical keywords",
      "Optimized lead gen with 28% PPC conversion",
    ],
  },
  {
    id: 2,
    title: "SwiftTakeoffs",
    website: "swifttakeoffs.com",
    category: "Estimating Agency",
    image: SwiftTakeoffs,
    services: ["Web Dev", "SEO", "PPC"],
    results: [
      { label: "Revenue", value: "320%" },
      { label: "Traffic", value: "4.8x" },
      { label: "ROAS", value: "6.3x" },
    ],
    highlights: [
      "Elevated e-commerce platform with 42% lower abandonment",
      "Ranked top 3 for aviation equipment keywords",
      "Optimized $50k/month PPC with 650% return",
    ],
  },
  {
    id: 3,
    title: "Paradise Pipes",
    website: "paradisepipes.com",
    category: "Luxury Retail",
    image: ParadisePipe,
    services: ["Web Dev", "SEO", "PPC"],
    results: [
      { label: "Leads", value: "180%" },
      { label: "Traffic", value: "2.7x" },
      { label: "ROI", value: "4.5x" },
    ],
    highlights: [
      "Elevated with award-winning luxury web design",
      "Ranked for 120+ plumbing keywords nationally",
      "Optimized PPC with 22% CTR luxury audience",
    ],
  },
];

export default function Portfolio() {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Digital Growth <span className="text-[#3FA69B]">Case Studies</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#3FA69B] mx-auto mb-4"></div>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            How we elevated, ranked, and optimized for industry leaders
          </p>
        </div>

        <div className="space-y-4">
          {portfolioData.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-900/50 rounded-lg border border-gray-800 hover:border-[#3FA69B]/50 transition-all overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-start md:items-center">
                {/* Client Logo */}
                <div className="col-span-1">
                  <div className="w-16 h-16 rounded-lg bg-gray-800 flex items-center justify-center overflow-hidden border border-gray-700">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                </div>

                {/* Client Info */}
                <div className="col-span-1 md:col-span-3">
                  <h3 className="font-bold text-white">{project.title}</h3>
                  <div className="flex flex-wrap items-center text-xs text-gray-400 mt-1">
                    <span>{project.website}</span>
                    <span className="mx-2 hidden md:inline">•</span>
                    <span className="text-[#3FA69B]">{project.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.services.map((service, i) => (
                      <span
                        key={i}
                        className="text-xs bg-[#3FA69B]/10 text-[#3FA69B] px-2 py-0.5 rounded"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="col-span-1 md:col-span-4">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {project.results.map((result, i) => (
                      <div
                        key={i}
                        className="bg-gray-800/50 rounded p-2 group-hover:bg-gray-800 transition-colors"
                      >
                        <div className="text-[#3FA69B] font-bold">
                          {result.value}
                        </div>
                        <div className="text-xs text-gray-400">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="col-span-1 md:col-span-3 order-last md:order-none">
                  <ul className="space-y-1.5">
                    {project.highlights.slice(0, 2).map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start text-xs text-gray-300"
                      >
                        <span className="text-[#3FA69B] mr-1.5 mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="col-span-1 md:col-span-1 flex justify-start md:justify-end mt-2 md:mt-0">
                  <Link
                    to={`/portfolio/${project.id}`}
                    className="text-[#3FA69B] text-sm font-medium hover:underline flex items-center"
                  >
                    Details
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/portfolio"
            className="inline-flex items-center px-6 py-2 border border-[#3FA69B] rounded-lg text-[#3FA69B] text-sm font-medium hover:bg-[#3FA69B]/10 transition-colors"
          >
            View Full Portfolio
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
