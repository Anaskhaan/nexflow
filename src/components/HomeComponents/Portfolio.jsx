import { Link } from "react-router-dom";
import { mainportfolioData, portfolioData } from "../Helper/Data";

export default function Portfolio() {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Digital Growth
            <span className="text-[var(--main-theme-color)]">Case Studies</span>
          </h2>
          <div className="w-16 h-0.5 bg-[var(--main-theme-color)] mx-auto mb-4"></div>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            How we elevated, ranked, and optimized for industry leaders
          </p>
        </div>

        <div className="space-y-4">
          {portfolioData.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-900/50 rounded-lg border border-gray-800 hover:border-[var(--main-theme-color)]/50 transition-all overflow-hidden"
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
                    <span className="text-[var(--main-theme-color)]">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.services.map((service, i) => (
                      <span
                        key={i}
                        className="text-xs bg-[var(--main-theme-color)]/10 text-[var(--main-theme-color)] px-2 py-0.5 rounded"
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
                        <div className="text-[var(--main-theme-color)] font-bold">
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
                        <span className="text-[var(--main-theme-color)] mr-1.5 mt-0.5">
                          •
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="col-span-1 md:col-span-1 flex justify-start md:justify-end mt-2 md:mt-0">
                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="text-[var(--main-theme-color)] text-sm font-medium hover:underline flex items-center"
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
            className="inline-flex items-center px-6 py-2 border border-[var(--main-theme-color)] rounded-lg text-[var(--main-theme-color)] text-sm font-medium hover:bg-[var(--main-theme-color)]/10 transition-colors"
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
