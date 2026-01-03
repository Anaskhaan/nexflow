import { useState } from "react";

const TechStack = ({ service }) => {
  const [activeTab, setActiveTab] = useState(service.techStack?.categories[0]);

  if (!service.techStack) return null;

  return (
    <div className="bg-black border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all">
      <h2
        className="text-3xl font-bold mb-6 text-center"
        style={{ color: service.color }}
      >
        Tech Stack That Powers Our Web Development Services
      </h2>
      <p className="text-gray-300 text-center mb-8 max-w-4xl mx-auto">
        At NexFlow our web developers use the latest technologies to help
        businesses stay ahead of the curve. Our robust tech stack ensures
        high-quality web development services, delivering innovative solutions
        tailored to meet diverse business needs.
      </p>

      <div className="flex flex-wrap justify-center mb-8 border-b border-gray-700">
        {service.techStack.categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-3 mr-4 mb-2 font-semibold transition-all ${
              activeTab === category
                ? "border-b-2 text-white"
                : "text-gray-400 hover:text-gray-300"
            }`}
            style={{
              borderBottomColor:
                activeTab === category ? service.color : "transparent",
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
            className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-all text-center group"
          >
            <div className="mb-3">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 mx-auto object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
            <h3 className="text-white font-medium text-sm mb-2">{tech.name}</h3>
            <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors">
              {tech.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-300 text-sm">
          Our expert developers are proficient in all these technologies and
          more, ensuring we choose the right stack for your specific project
          needs.
        </p>
      </div>
    </div>
  );
};

export default TechStack;
