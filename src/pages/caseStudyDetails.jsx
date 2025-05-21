import { ChevronLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { caseStudyData } from "../components/Helper/caseStudyData";
import { useParams } from "react-router-dom";

const CaseStudyDetails = () => {
  const { id } = useParams();
  const study = caseStudyData.find((item) => item.id === parseInt(id));

  if (!study) {
    return <div>Case study not found</div>;
  }

  return (
    <div className="w-full bg-[#111827] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/CaseStudies"
          className="flex items-center text-[#06B6D4] hover:text-white mb-8 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="ml-1 font-medium">Back to Case Studies</span>
        </Link>

        {/* Header Section */}
        <div className="mb-12">
          <span className="text-sm font-bold tracking-widest text-[#06B6D4] uppercase">
            {study.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">
            {study.title}
          </h1>
          <div className="w-16 h-1 bg-[#06B6D4]"></div>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden border border-[#374151]">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="prose prose-invert max-w-none">
          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-[#D1D5DB] mb-6">{study.overview}</p>
          </section>

          {/* Challenges */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Challenges</h2>
            <ul className="list-disc pl-5 text-[#D1D5DB] space-y-2">
              {study.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </section>

          {/* Achievements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {study.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-[#1F2937] p-6 rounded-lg border border-[#374151]"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-[#D1D5DB]">{achievement.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
            <p className="text-[#D1D5DB]">{study.conclusion}</p>
          </section>

          {/* Metrics (optional) */}
          {study.metrics && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                Key Metrics
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {study.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-[#1F2937] p-4 rounded-lg border border-[#374151] text-center"
                  >
                    <p className="text-3xl font-bold text-[#06B6D4] mb-1">
                      {metric.value}
                    </p>
                    <p className="text-sm text-[#D1D5DB]">{metric.label}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center border-t border-[#374151] pt-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to achieve similar results?
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-[#06B6D4] text-[#111827] rounded-md text-base font-medium hover:bg-white transition-colors"
          >
            Get in touch with our team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetails;
