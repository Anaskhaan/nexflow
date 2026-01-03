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

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="grid md:grid-cols-3 items-center gap-10">
            {/* Floating ROI Card */}
            <div className="md:col-span-2 bg-[#1F2937]/50 backdrop-blur-md p-10 rounded-2xl border border-gray-700 shadow-xl">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight text-white">
                Forecast Your <br />
                <span className="text-[var(--main-theme-color)]">Revenue Growth</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
                See exactly how much revenue your business is missing out on. We focus on profitable growth and predictable sales systems, not just vanity metrics.
              </p>
              <button
                onClick={scrollToCalculator}
                className="bg-[#3DA69B] hover:bg-[#2e8b82] px-6 py-2 rounded-md text-white text-sm font-semibold shadow-md transition"
              >
                Calculate My Growth Potential →
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
                Fact: Numbers tell the story. Build a predictable sales machine.
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
