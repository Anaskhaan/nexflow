import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, BarChart3 } from "lucide-react";
import { caseStudyData } from "../components/Helper/caseStudyData";
import { Icons } from "../assets/Icons";

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = ["All", ...new Set(caseStudyData.map((study) => study.category))];
    return cats;
  }, []);

  const filteredStudies = useMemo(() => {
    if (activeCategory === "All") return caseStudyData;
    return caseStudyData.filter((study) => study.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="w-full bg-black min-h-screen text-white pt-32 pb-20 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--main-theme-color)] blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-900 blur-[120px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="mb-20 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--main-theme-color)]/10 border border-[var(--main-theme-color)]/20 text-[var(--main-theme-color)] text-xs font-bold uppercase tracking-widest mb-6 mx-auto md:mx-0">
            <BarChart3 size={14} />
            <span>Proven Results</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter">
            Our Success <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-theme-color)] to-teal-300">
              Stories
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mx-auto md:mx-0">
            We don't just deliver services; we drive measurable growth. Explore how our
            strategic interventions have transformed businesses across domains.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-16 border-b border-gray-800 pb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                  ? "bg-[var(--main-theme-color)] text-white shadow-[0_0_20px_rgba(63,166,155,0.4)] border-transparent"
                  : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-800"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="group relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden hover:border-[var(--main-theme-color)]/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] font-bold backdrop-blur-md text-[var(--main-theme-color)] uppercase tracking-wider">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--main-theme-color)] transition-colors line-clamp-2">
                  {study.title}
                </h3>

                <p className="text-gray-400 mb-8 line-clamp-3 leading-relaxed flex-grow">
                  {study.overview}
                </p>

                {/* Metrics Hub */}
                <div className="grid grid-cols-2 gap-4">
                  {study.metrics?.slice(0, 2).map((metric, idx) => (
                    <div key={idx} className="bg-gray-800/50 p-4 rounded-2xl border border-gray-700/50">
                      <div className="text-2xl font-black text-[var(--main-theme-color)]">{metric.value}</div>
                      <div className="text-[10px] uppercase text-gray-400 font-bold tracking-widest mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800 flex items-center justify-between">
                  <Link
                    to={`/CaseStudies/${study.id}`}
                    className="group/btn flex items-center space-x-2 text-white font-bold hover:text-[var(--main-theme-color)] transition-all"
                  >
                    <span className="text-sm">Explore Details</span>
                    <div className="p-2 rounded-full bg-gray-800 group-hover/btn:bg-[var(--main-theme-color)] transition-all">
                      <ChevronRight size={16} />
                    </div>
                  </Link>

                  <div className="text-[10px] font-mono text-gray-600">
                    NX_STUDY_REF_{study.id}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic CTA */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--main-theme-color)]/20 to-teal-400/20 blur-[100px] pointer-events-none"></div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[3rem] p-12 md:p-20 text-center relative z-10 overflow-hidden shadow-2xl">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--main-theme-color)]/10 rounded-full blur-[80px] -mr-32 -mt-32" />

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
              Ready to write your <br />
              <span className="text-[var(--main-theme-color)]">success story?</span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Join 200+ brands that have scaled their digital presence with Nexflow's
              proprietary data-driven frameworks.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center md:px-10 px-5 md:py-5 py-3 bg-[var(--main-theme-color)] text-white rounded-full md:text-lg text-sm font-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(63,166,155,0.6)] hover:scale-105 active:scale-95 group"
            >
              Start Your Transformation
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
