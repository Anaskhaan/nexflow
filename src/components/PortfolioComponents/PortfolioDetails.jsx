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
    <div className="w-full min-h-screen bg-black text-white ">
      {/* first section */}
      <div className=" h-[60vh] flex flex-col justify-center items-center  font-semibold ">
        <h2 className="text-7xl">
          {project.projectName}{" "}
          <span className="text-[#3FA69B]  -ml-2 ">.</span>
        </h2>
      </div>
      <div className=" px-24">
        <span className="  px-4 py-2 hover:bg-[#3fa69b] ease-in-out duration-300  cursor-pointer rounded-md text-xl border border-[#3fa69b]">
          {project.projecTYpe}
        </span>
      </div>

      {/* second section */}
      <div className="px-24 mt-5">
        <CustomCarousel images={project.images} />
      </div>
      {/* third section */}

      <div className=" px-24 mt-16   flex w-full max-w-8xl justify-between">
        <div className=" space-y-6 w-1/2 ">
          <h1>The Project</h1>

          <p className=" ">{project.projectDetails}</p>
        </div>

        <div className="flex flex-col space-y-4">
          <h1 className="text-xl">Client Name</h1>

          <span className="text-gray-300 ">{project.clientName}</span>

          <span className="text-xl">Website</span>
          <span className="text-gray-300">{project.websiteLink}</span>
        </div>
      </div>

      {/* forth  section */}

      <div className=" px-12 ">
        <div className=" bg-gray-500 h-96 max-w-6xl w-full" />
        <div className=" flex gap-2 py-2 ">
          <div className=" bg-gray-500 h-64 max-w-xl w-full" />
          <div className=" bg-gray-500 h-64 max-w-xl w-full" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
