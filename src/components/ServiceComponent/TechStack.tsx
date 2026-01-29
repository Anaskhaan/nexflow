"use client";

import { useState } from "react";
import { ServiceDetail } from "@/lib/data";

interface TechStackProps {
  service: ServiceDetail;
}

const TechStack = ({ service }: TechStackProps) => {
  const [activeTab, setActiveTab] = useState(service.techStack?.categories[0] || "Frontend");

  if (!service.techStack) return null;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
       <h2
         className="text-3xl font-black mb-6 text-center text-slate-900 tracking-tight"
       >
         Tech Stack That Powers Our {service.title}
       </h2>
       <p className="text-slate-600 text-center mb-10 max-w-4xl mx-auto font-medium leading-relaxed">
         At NexFlow our web developers use the latest technologies to help
         businesses stay ahead of the curve. Our robust tech stack ensures
         high-quality web development services, delivering innovative solutions
         tailored to meet diverse business needs.
       </p>

       <div className="flex flex-wrap justify-center mb-8 border-b border-slate-100">
        {service.techStack.categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
             className={`px-6 py-3 mr-4 mb-2 font-bold transition-all ${
               activeTab === category
                 ? "border-b-4 text-brand"
                 : "text-slate-400 hover:text-slate-600"
             }`}
             style={{
               borderBottomColor:
                 activeTab === category ? "var(--main-theme-color)" : "transparent",
             }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {service.techStack.technologies[activeTab]?.map((tech, index) => (
           <div
             key={index}
             className="bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-lg transition-all text-center group"
           >
            <div className="mb-3 flex items-center justify-center w-12 h-12 mx-auto text-3xl">
               {tech.icon}
             </div>
             <h3 className="text-slate-900 font-bold text-sm mb-2">{tech.name}</h3>
             <p className="text-slate-500 text-xs font-medium group-hover:text-slate-700 transition-colors leading-relaxed">
               {tech.description}
             </p>
          </div>
        ))}
      </div>

       <div className="mt-10 text-center border-t border-slate-100 pt-8">
         <p className="text-slate-500 text-sm font-medium italic">
           Our expert developers are proficient in all these technologies and
           more, ensuring we choose the right stack for your specific project
           needs.
         </p>
       </div>
    </div>
  );
};

export default TechStack;
