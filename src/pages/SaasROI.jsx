import { useRef } from "react";
import ROIcalculator from "../components/Resources/ROIcalculator";
import roi from "../assets/roical.webp";

export default function SaasROI() {
  const calculatorRef = useRef(null);

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section className="relative bg-[#1A2C34] text-white py-24 overflow-hidden">
        {/* Abstract floating shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#3DA69B] opacity-10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-300 opacity-10 rounded-full blur-3xl animate-pulse" />

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="grid md:grid-cols-3 items-center gap-10">
            {/* Floating ROI Card */}
            <div className="md:col-span-2 bg-white/5 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white/10 transform hover:scale-[1.01] transition duration-300">
              <h2 className="text-5xl font-extrabold mb-6 tracking-tight leading-tight">
                Nexflow ROI <br />
                <span className="text-[#3DA69B]">Intelligence Tool</span>
              </h2>
              <p className="text-md text-gray-300 mb-6 max-w-xl">
                Not your ordinary calculator. Nexflow's AI-powered ROI
                Intelligence analyzes real campaign data to reveal where your
                next revenue peak lies.
              </p>
              <button
                onClick={scrollToCalculator}
                className="bg-[#3DA69B] hover:bg-[#2e8b82] px-6 py-2 rounded-md text-white text-sm font-semibold shadow-md transition"
              >
                Forecast My ROI →
              </button>
            </div>

            {/* Vertical Staggered Image Card */}
            <div className="relative flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <img
                  src={roi}
                  alt="ROI visual"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <div className="bg-white/10 p-4 rounded-xl text-sm text-gray-300 backdrop-blur-sm border border-white/10 shadow-inner">
                💡 Pro Tip: ROI doesn’t lie. Use data, not guesses.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Component */}
      <div ref={calculatorRef}>
        <ROIcalculator />
      </div>
    </div>
  );
}
