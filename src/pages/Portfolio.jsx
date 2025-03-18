import { ExternalLink } from "lucide-react";
import bellClinix from "../assets/bellclinix.png";
import swiftTakeoffs from "../assets/swifttakeoffs.png";
import paradisePipes from "../assets/paradisepipe.png";

const Portfolio = () => {
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
