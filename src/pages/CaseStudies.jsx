import { ArrowRight } from "lucide-react";
import { caseStudyData } from "../components/Helper/caseStudyData";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  return (
    <div className="w-full bg-[#111827] py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-[#9CA3AF] uppercase">
            Our Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">
            Case Studies
          </h2>
          <div className="w-16 h-1 mx-auto bg-[#06B6D4]"></div>
          <p className="mt-6 text-lg text-[#D1D5DB] max-w-2xl mx-auto">
            Explore our real-world solutions and the measurable impact we've
            delivered for our clients through innovative approaches.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudyData.map((study) => (
            <div
              key={study.id}
              className="bg-[#1F2937] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-[#374151] hover:border-[#06B6D4]"
            >
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-[#06B6D4] font-semibold mb-1">
                  {study.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {study.title}
                </h3>
                <p className="text-[#D1D5DB] mb-6 line-clamp-3">
                  {study.summary}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-[#9CA3AF]">
                    {study.date}
                  </span>
                  <Link
                    to={`/CaseStudies/${study.id}`}
                    className="flex items-center text-[#06B6D4] hover:text-white transition-colors"
                  >
                    <span className="font-medium">Read Case Study</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-[#06B6D4] text-[#111827] rounded-md text-base font-medium hover:bg-white transition-colors shadow-sm hover:shadow-[#06B6D4]"
          >
            Want similar results for your business?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
