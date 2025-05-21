import { Link } from "react-router-dom";
import ParadisePipe from "../../assets/paradisepipe.png";
import SwiftTakeoffs from "../../assets/a.png";
import BellClinix from "../../assets/bellclinix.png";
// Project data array - replace with your actual portfolio projects
const portfolioData = [
  {
    id: 1,
    title: "Paradise Pipes",
    client: "Fashion Forward",
    description:
      "Complete digital transformation with SEO optimization, social media strategy, and conversion-focused website redesign.",
    category: "Digital Strategy",
    image: ParadisePipe,
  },
  {
    id: 2,
    title: "Content Marketing Campaign",
    client: "Eco Solutions",
    description:
      "Developed a comprehensive content strategy that increased organic traffic by 87% and improved lead generation by 65%.",
    category: "Content Marketing",
    image: SwiftTakeoffs, // Replace with your actual image
  },
  {
    id: 3,
    title: "Social Media Growth",
    client: "Urban Fitness",
    description:
      "Executed targeted social campaigns that increased follower engagement by 120% and drove a 45% increase in class bookings.",
    category: "Social Media",
    image: BellClinix, // Replace with your actual image
  },
  //   {
  //     id: 4,
  //     title: "PPC Campaign Optimization",
  //     client: "Tech Innovations",
  //     description: "Restructured ad campaigns resulting in 35% lower CPC and 78% increase in qualified leads within 60 days.",
  //     category: "Paid Advertising",
  //     image: "/api/placeholder/600/400"
  //   }
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#3FA69B] blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#3FA69B] blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[#3FA69B] font-medium mb-3">
            PORTFOLIO
          </span>
          <h2 className="text-5xl font-bold text-white mb-4">
            Transforming <span className="text-[#3FA69B]">Ideas</span> Into
            Digital Success
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#3FA69B] to-[#2D7E74] mx-auto mb-6"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Discover how we've helped businesses achieve remarkable results
            through innovative digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {portfolioData.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-[#3FA69B] transition-all duration-500 hover:shadow-lg hover:shadow-[#3FA69B]/20"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="inline-block bg-[#3FA69B] text-black px-4 py-1.5 text-xs font-semibold rounded-full mb-2 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    Client: {project.client}
                  </p>
                </div>
              </div>

              <div className="p-6 bg-gray-900/50">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#3FA69B] text-sm font-medium">
                    View Case Study →
                  </span>
                  <div className="flex space-x-2">
                    {project.tags?.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-800 text-gray-300 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/Portfolio">
            <button className="relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-medium text-[#3FA69B] transition-all duration-300 border-2 border-[#3FA69B] rounded-lg group hover:text-black">
              <span className="absolute inset-0 bg-[#3FA69B] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="relative flex items-center">
                View All Projects
                <svg
                  className="w-4 h-4 ml-2"
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
                  ></path>
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
