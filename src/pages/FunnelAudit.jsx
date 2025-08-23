import { useState } from "react";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import Funnel from "/resources/Audit-Funnel.pdf";
import { Icons } from "../assets/Icons";

function FunnelAudit() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // new state for loading
  const [progress, setProgress] = useState(0); // new state for progress bar

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || loading) return; // prevent empty or multiple submissions

    setLoading(true);
    setProgress(0);

    // Fake progress for visual effect
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return 90;
        return prev + 10;
      });
    }, 300);

    const templateParams = { email };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          clearInterval(interval);
          setProgress(100);

          // Save email and timestamp
          localStorage.setItem("auditEmail", email);
          localStorage.setItem("auditStartTime", Date.now());

          // Trigger PDF download
          const link = document.createElement("a");
          link.href = Funnel;
          link.download = "Audit-Funnel.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          // Redirect to thank-you page
          window.location.href = "Thankyou";
        },
        (err) => {
          clearInterval(interval);
          setLoading(false);
          setProgress(0);
          console.error("FAILED...", err);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div>
      <Helmet>
        <title>NexFlow - Lead Magnet</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Special offer for our visitors" />
      </Helmet>

      <div className="relative min-h-screen bg-gray-950 text-[#e5e7eb] overflow-hidden flex items-center justify-center px-4 py-20">
       

        <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-[#3ea69b]/30 shadow-2xl shadow-[#3ea69b]/10">
          {/* Left Side */}
          <div className="w-full lg:w-3/5 p-8 md:p-12 bg-gradient-to-br from-gray-900/95 to-gray-800/95 relative overflow-hidden">

            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="p-3 rounded-lg bg-gradient-to-br from-[#3f4e58] to-[#3ea69b] group">
                <Icons.BarChart2
                  className="text-[#e5e7eb] group-hover:scale-110 transition-transform"
                  size={24}
                />
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

            <div className="mb-8 relative z-10">
              <h2 className="text-xl font-semibold text-[#e5e7eb] mb-6 pb-2 border-b border-[#3ea69b]/30 flex items-center">
                <Icons.Zap className="text-[#3ea69b] mr-2" size={18} />
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
                    <Icons.CheckCircle
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

          </div>

          {/* Right Side */}
          <div className="w-full lg:w-2/5 p-8 md:p-12 bg-gradient-to-b from-[#2a3640] to-[#1f2937] border-t lg:border-t-0 lg:border-l border-[#3ea69b]/30 relative">
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-[#e5e7eb] mb-6">
                Start Your <span className="text-[#3ea69b]">Free</span> Audit
              </h3>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-4 rounded-lg bg-gray-800/70 text-[#e5e7eb] border border-[#3ea69b]/50 focus:outline-none focus:ring-2 focus:ring-[#3ea69b]/50 placeholder-[#e5e7eb]/50 backdrop-blur-sm"
                  />
                </div>

                {/* Loading bar */}
                {loading && (
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden mb-2">
                    <div
                      className="bg-[#3ea69b] h-2 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || !email}
                  className={`w-full bg-gradient-to-r from-[#3ea69b] to-[#3f4e58] hover:from-[#3ea69b]/90 hover:to-[#3f4e58]/90 text-[#e5e7eb] py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-[#3ea69b]/40 group ${
                    loading ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  <span>{loading ? "Sending..." : "Get Free Audit"}</span>
                  <Icons.ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={18}
                  />
                </button>
              </form>

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

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes grid-pulse {
            0%, 100% { opacity: 0.1; }
            50% { opacity: 0.15; }
          }
          .animate-float { animation: float 8s ease-in-out infinite; }
          .animate-float-delay { animation: float 10s ease-in-out infinite 2s; }
          .animate-grid-pulse { animation: grid-pulse 12s ease-in-out infinite; }
        `}</style>
      </div>
    </div>
  );
}

export default FunnelAudit;
