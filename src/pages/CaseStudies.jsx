// import { ArrowRight } from "lucide-react";
// import { caseStudy } from "../components/Helper/caseStudy";
// import { Link } from "react-router-dom";

// const CaseStudies = () => {
//   return (
//     <div className="w-full bg-[#111827] py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="text-center mb-16">
//           <span className="text-sm font-bold tracking-widest text-[#9CA3AF] uppercase">
//             Our Success Stories
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">
//             Case Studies
//           </h2>
//           <div className="w-16 h-1 mx-auto bg-[#06B6D4]"></div>
//           <p className="mt-6 text-lg text-[#D1D5DB] max-w-2xl mx-auto">
//             Explore our real-world solutions and the measurable impact we've
//             delivered for our clients through innovative approaches.
//           </p>
//         </div>

//         {/* Case Study Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {caseStudy.map((study) => (
//             <div
//               key={study.id}
//               className="bg-[#1F2937] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-[#374151] hover:border-[#06B6D4]"
//             >
//               <div className="p-8">
//                 <div className="uppercase tracking-wide text-sm text-[#06B6D4] font-semibold mb-1">
//                   {study.category}
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-3">
//                   {study.title}
//                 </h3>
//                 <p className="text-[#D1D5DB] mb-6 line-clamp-3">
//                   {study.summary}
//                 </p>
//                 <div className="flex justify-between items-center">
//                   <Link
//                     to={`/CaseStudies/${study.id}`}
//                     className="flex items-center text-[#06B6D4] hover:text-white transition-colors"
//                   >
//                     <span className="font-medium">Read Case Study</span>
//                     <ArrowRight className="ml-2 w-4 h-4" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="text-center mt-16">
//           <Link
//             to="/contact"
//             className="inline-flex items-center px-6 py-3 bg-[#06B6D4] text-[#111827] rounded-md text-base font-medium hover:bg-white transition-colors shadow-sm hover:shadow-[#06B6D4]"
//           >
//             Want similar results for your business?
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseStudies;

import { ChevronRight } from "lucide-react";
import { caseStudy } from "../components/Helper/caseStudy";
import { Link } from "react-router-dom";
import { Icons } from "../assets/Icons";

const CaseStudies = () => {
  return (
    <div className="w-full bg-[#111827] py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-[#06B6D4] blur-3xl"></div>
        <div className="absolute bottom-10 -right-10 w-80 h-80 rounded-full bg-[#06B6D4] blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-[#9CA3AF] uppercase">
            Our Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">
            Case <span className="text-[#06B6D4]">Studies</span>
          </h2>
          <div className="w-16 h-1 mx-auto bg-[#06B6D4] transform skew-x-12"></div>
          <p className="mt-6 text-lg text-[#D1D5DB] max-w-2xl mx-auto">
            Explore our real-world solutions and the measurable impact we've
            delivered for our clients through innovative approaches.
          </p>
        </div>

        {/* Alternate Card Layout - Horizontal Timeline Style */}
        <div className="space-y-12">
          {caseStudy.map((study, index) => (
            <div
              key={study.id}
              className={`relative group ${index % 2 === 0 ? "pl-0 md:pl-16" : "pr-0 md:pr-16"}`}
            >
              {/* Timeline dot */}
              <div
                className={`hidden md:block absolute top-8 ${index % 2 === 0 ? "-left-2" : "-right-2"}`}
              >
                <div className="w-6 h-6 rounded-full bg-[#06B6D4] border-4 border-[#111827]"></div>
              </div>

              {/* Card content */}
              <div
                className={`bg-[#1F2937] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border-l-4 ${index % 2 === 0 ? "border-l-[#06B6D4]" : "border-r-[#06B6D4] border-r-4 border-l-0"} hover:shadow-[#06B6D4]/30 flex flex-col md:flex-row`}
              >
                {/* Image placeholder - would be replaced with actual study.image */}
                <div className="md:w-2/5 bg-gradient-to-br from-[#06B6D4] to-[#111827] p-8 flex items-center justify-center">
                  <div className="text-5xl font-bold text-white/20">
                    {index + 1}
                  </div>
                </div>

                <div className="p-8 md:w-3/5">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="uppercase tracking-wide text-sm text-[#06B6D4] font-semibold mb-1">
                        {study.category}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {study.title}
                      </h3>
                    </div>
                    <div className="text-xs font-mono text-[#9CA3AF] bg-[#111827] px-2 py-1 rounded">
                      Case #{study.id}
                    </div>
                  </div>

                  <p className="text-[#D1D5DB] mb-6 line-clamp-3">
                    {study.summary}
                  </p>

                  <div className="flex justify-between items-center">
                    <Link
                      to={`/CaseStudies/${study.id}`}
                      className="flex items-center group-hover:text-[#06B6D4] text-white transition-colors"
                    >
                      <span className="font-medium">Read Full Story</span>
                      <Icons.ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <div className="hidden md:flex space-x-2">
                      {study.tags?.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-[#111827] text-[#9CA3AF] px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Animated CTA Section */}
        <div className="text-center mt-20">
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#06B6D4] to-[#0E7490] text-white rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:shadow-[#06B6D4]/40 hover:scale-105"
          >
            Want similar results for your business?
            <Icons.ArrowRight className="ml-3 w-5 h-5 animate-pulse" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
