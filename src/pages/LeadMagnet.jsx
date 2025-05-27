import { useState } from "react";
import { CheckCircle, ArrowRight, BarChart2, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

function LeadMagnet() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("auditEmail", email);
    localStorage.setItem("auditStartTime", Date.now());
    window.location.href = "checklist.html";
  };

  return (
    <div>
      <Helmet>
        <title>NexFlow - Lead Magnet</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Special offer for our visitors" />
        {/* Other meta tags as needed */}
      </Helmet>
      <div className="relative min-h-screen bg-gray-950 text-[#e5e7eb] overflow-hidden flex items-center justify-center px-4 py-20">
        {/* Enhanced background with new accent color */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-[#1a222e]">
          {/* Floating elements with new color */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-[#3ea69b]/10 blur-[60px] animate-float" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-[#3f4e58]/15 blur-[80px] animate-float-delay" />

          {/* Grid pattern with new accent */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#3ea69b11_1px,transparent_1px),linear-gradient(to_bottom,#3f4e5811_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-pulse" />
        </div>

        {/* Main container with new color accents */}
        <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-[#3ea69b]/30 shadow-2xl shadow-[#3ea69b]/10">
          {/* Left panel with color integration */}
          <div className="w-full lg:w-3/5 p-8 md:p-12 bg-gradient-to-br from-gray-900/95 to-gray-800/95 relative overflow-hidden">
            {/* New accent corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3ea69b]/10 rounded-bl-full blur-[60px]" />

            {/* Header with new color highlights */}
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="p-3 rounded-lg bg-gradient-to-br from-[#3f4e58] to-[#3ea69b] group">
                <BarChart2
                  className="text-[#e5e7eb] group-hover:scale-110 transition-transform"
                  size={24}
                />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#3ea69b] rounded-full animate-pulse" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#e5e7eb]">
                Free{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3ea69b] to-[#3f4e58]">
                  SaaS Funnel
                </span>{" "}
                Audit
              </h1>
            </div>

            <p className="text-lg text-[#e5e7eb]/80 mb-8 max-w-2xl relative z-10">
              Discover the gaps in your customer acquisition funnel and get
              personalized recommendations to boost conversions.
            </p>

            {/* Benefits with new checkmark colors */}
            <div className="mb-8 relative z-10">
              <h2 className="text-xl font-semibold text-[#e5e7eb] mb-6 pb-2 border-b border-[#3ea69b]/30 flex items-center">
                <Zap className="text-[#3ea69b] mr-2" size={18} />
                What You'll Get:
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "30-point comprehensive funnel analysis",
                  "Stage-by-stage performance scoring",
                  "Personalized PDF report with actionable insights",
                  "Immediate identification of weak points",
                ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <CheckCircle
                      className="text-[#3ea69b] mt-0.5 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"
                      size={20}
                    />
                    <span className="text-[#e5e7eb] group-hover:text-[#3ea69b] transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* New accent bottom element */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#3ea69b] to-transparent opacity-40" />
          </div>

          {/* Right panel with enhanced colors */}
          <div className="w-full lg:w-2/5 p-8 md:p-12 bg-gradient-to-b from-[#2a3640] to-[#1f2937] border-t lg:border-t-0 lg:border-l border-[#3ea69b]/30 relative">
            <div className="absolute inset-0 bg-[#3ea69b]/5 rounded-tr-2xl" />
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-[#e5e7eb] mb-6">
                Start Your <span className="text-[#3ea69b]">Free</span> Audit
              </h3>

              <div className="space-y-6 flex-grow">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-4 rounded-lg bg-gray-800/70 text-[#e5e7eb] border border-[#3ea69b]/50 focus:outline-none focus:ring-2 focus:ring-[#3ea69b]/50 placeholder-[#e5e7eb]/50 backdrop-blur-sm"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3ea69b] to-transparent" />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#3ea69b] to-[#3f4e58] hover:from-[#3ea69b]/90 hover:to-[#3f4e58]/90 text-[#e5e7eb] py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-[#3ea69b]/40 group"
                >
                  <span>Get Free Audit</span>
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={18}
                  />
                </button>
              </div>

              <p className="text-sm text-[#e5e7eb]/60 mt-6 text-center flex items-center justify-center">
                <svg
                  className="w-4 h-4 mr-2 text-[#3ea69b]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                We'll never spam you. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          @keyframes grid-pulse {
            0%,
            100% {
              opacity: 0.1;
            }
            50% {
              opacity: 0.15;
            }
          }
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          .animate-float-delay {
            animation: float 10s ease-in-out infinite 2s;
          }
          .animate-grid-pulse {
            animation: grid-pulse 12s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  );
}

export default LeadMagnet;
