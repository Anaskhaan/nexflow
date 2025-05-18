import { useParams } from "react-router-dom";
import { portfolioData } from "../Helper/Data";
import CustomCarousel from "./CustomCarousel";

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

      {/* Project Type */}
      <div className="flex justify-center md:justify-start">
        <span className="px-4 py-2 hover:bg-[#3fa69b] transition duration-300 cursor-pointer rounded-md text-lg md:text-xl border border-[#3fa69b]">
          {project.projecTYpe}
        </span>
      </div>

      {/* Carousel Section */}
      <div className="mt-5">
        <CustomCarousel images={project.images} />
      </div>

      {/* Project Details Section */}
      <div className="mt-12 flex flex-col md:flex-row w-full max-w-8xl md:justify-between gap-8">
        <div className="space-y-6 w-full md:w-1/2">
          <h1 className="text-xl md:text-2xl">The Project</h1>
          <p className="text-sm md:text-base">{project.projectDetails}</p>
        </div>

        <div className="flex flex-col space-y-4">
          <h1 className="text-lg md:text-xl">Client Name</h1>
          <span className="text-gray-300">{project.clientName}</span>

          <span className="text-lg md:text-xl">Website</span>
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

      {/* Additional Images Section */}
      <div className="mt-12">
        <div className="bg-gray-500 h-64 md:h-96 w-full max-w-6xl mx-auto" />
        <div className="flex flex-col md:flex-row gap-4 py-4">
          <div className="bg-gray-500 h-48 md:h-64 w-full md:max-w-xl mx-auto" />
          <div className="bg-gray-500 h-48 md:h-64 w-full md:max-w-xl mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
