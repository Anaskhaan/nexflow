import { useParams } from "react-router-dom";
import { portfolioData } from "../Helper/Data";
import CustomCarousel from "./CustomCarousel";
import BrandGuidelines from "./BrandGuidlines";

const PortfolioDetails = () => {
  const { id } = useParams();
  const project = portfolioData.find((item) => item.id.toString() === id);

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
