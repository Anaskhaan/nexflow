import React from "react";
import { domains } from "../Helper/Data";

const DomainDiversity = () => {
  return (
    <div className="py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Domain{" "}
            <span className="text-[var(--main-theme-color)]">Diversity</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We serve clients across various industries, bringing specialized
            expertise and tailored solutions to each domain.
          </p>
        </div>

        {/* Domain Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {domains.map((domain, index) => {
            const IconComponent = domain.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group cursor-pointer"
              >
                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${domain.color}15` }}
                  >
                    <IconComponent
                      size={32}
                      style={{ color: domain.color }}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-700 text-sm">
                    {domain.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Don't see your industry? We adapt our expertise to serve businesses
            across all sectors.
          </p>
          <button className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-3 rounded-full font-semibold hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-lg hover:shadow-xl">
            Discuss Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default DomainDiversity;
