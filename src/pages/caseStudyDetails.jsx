import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { caseStudyData } from "../components/Helper/caseStudyData";
import {
  ChevronLeft,
  ArrowRight,
  TrendingUp,
  Target,
  CheckCircle2,
  BarChart3,
  Award,
} from "lucide-react";

const CaseStudyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const study = caseStudyData.find((item) => item.id === parseInt(id));

  useEffect(() => {
    if (!study) {
      navigate("/Portfolio");
    }
    window.scrollTo(0, 0);
  }, [study, navigate]);

  if (!study) return null;

  return (
    <div className="w-full bg-black min-h-screen text-white pt-32 pb-20 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[var(--main-theme-color)] blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-900 blur-[120px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Navigation & Breadcrumbs */}
        <div className="mb-12">
          <Link
            to="/Portfolio"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-[var(--main-theme-color)] transition-all group"
          >
            <div className="p-2 rounded-full border border-gray-800 bg-gray-900/50 group-hover:border-[var(--main-theme-color)]/50 transition-colors">
              <ChevronLeft size={16} />
            </div>
            <span className="text-sm font-medium tracking-wide">
              Back to Case Studies
            </span>
          </Link>
        </div>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 items-end">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--main-theme-color)]/10 border border-[var(--main-theme-color)]/20 text-[var(--main-theme-color)] text-xs font-bold uppercase tracking-widest mb-6">
              <Award size={14} />
              <span>{study.category}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              {study.title}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              {study.overview}
            </p>
          </div>

          {/* Key Stats Row */}
          <div className="grid grid-cols-2 gap-4">
            {study.metrics?.slice(0, 4).map((metric, idx) => (
              <div
                key={idx}
                className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-[var(--main-theme-color)]/30 transition-all duration-500 group"
              >
                <div className="flex items-start justify-between mb-2">
                  <BarChart3 className="text-[var(--main-theme-color)] opacity-50 w-5 h-5 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[var(--main-theme-color)] font-mono text-xs opacity-50">
                    0{idx + 1}
                  </span>
                </div>
                <div className="text-3xl font-black text-white mb-1 group-hover:scale-105 transition-transform origin-left">
                  {metric.value}
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden border border-gray-800 shadow-2xl mb-20 relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-20">
            {/* Challenges Section */}
            <section>
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                  <Target size={24} />
                </div>
                <h2 className="text-3xl font-bold">The Challenge</h2>
              </div>
              <div className="prose prose-invert prose-lg max-w-none text-gray-400">
                <ul className="space-y-4 list-none pl-0">
                  {study.challenges.map((challenge, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-4 bg-gray-900/20 p-4 rounded-xl border border-gray-800/50"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5"></span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Achievements/Solution Section */}
            <section>
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 rounded-full bg-[var(--main-theme-color)]/10 text-[var(--main-theme-color)] border border-[var(--main-theme-color)]/20">
                  <TrendingUp size={24} />
                </div>
                <h2 className="text-3xl font-bold">The Solution & Results</h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {study.achievements.map((item, idx) => (
                  <div
                    key={idx}
                    className="group bg-gray-900/30 p-8 rounded-2xl border border-gray-800 hover:border-[var(--main-theme-color)]/40 transition-all"
                  >
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--main-theme-color)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl border border-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--main-theme-color)]/10 rounded-full blur-[50px] pointer-events-none"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Final Outcomes</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {study.conclusion}
              </p>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* Secondary Image */}
              {study.image2 && (
                <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-lg">
                  <img
                    src={study.image2}
                    alt="Results Preview"
                    className="w-full h-auto object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              )}

              {/* Action Box */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4">
                  Ready to scale?
                </h3>
                <p className="text-gray-400 text-sm mb-8">
                  Let's apply these same winning strategies to your business growth.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-[var(--main-theme-color)] text-white rounded-xl font-bold hover:shadow-[0_0_20px_rgba(63,166,155,0.4)] transition-all hover:-translate-y-1"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              {/* Quick Summary Checks */}
              <div className="bg-black/50 border border-gray-800/50 rounded-2xl p-6">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Services Deployed</h4>
                <ul className="space-y-3">
                  {['Strategic Planning', 'Data Analytics', 'Growth Optimization', 'Custom Development'].map((svc, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-[var(--main-theme-color)] mr-3" />
                      {svc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetails;
