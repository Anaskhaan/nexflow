import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PackagesComponent = () => {
  const [duration, setDuration] = useState("3 months");

  const packages = [
    {
      title: "Website Development",
      description:
        "Custom website design and development with responsive layouts and SEO optimization.",
      features: [
        "5-page website",
        "Mobile responsive",
        "SEO setup",
        "Contact form",
        "Social media integration",
      ],
      originalPrices: {
        "3 months": 2998,
        "6 months": 5598,
        "1 year": 9998,
      },
      saleDiscount: 30, // percentage
      recommended: false,
    },
    {
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategy to boost your online presence and drive conversions.",
      features: [
        "Social media management",
        "Email campaigns",
        "Content creation",
        "PPC advertising",
        "Monthly reports",
      ],
      originalPrices: {
        "3 months": 2598,
        "6 months": 4798,
        "1 year": 8998,
      },
      saleDiscount: 30, // percentage
      recommended: true,
    },
    {
      title: "Branding & UI/UX",
      description:
        "Create a memorable brand identity with professional design and user experience optimization.",
      features: [
        "Logo design",
        "Brand guidelines",
        "UI/UX design",
        "Prototype development",
        "User testing",
      ],
      originalPrices: {
        "3 months": 3398,
        "6 months": 6398,
        "1 year": 11998,
      },
      saleDiscount: 30, // percentage
      recommended: false,
    },
  ];

  // Calculate sale price (original price cut in half, then 30% off)
  const calculateSalePrice = (originalPrice, discount) => {
    const halfPrice = originalPrice / 2;
    const salePrice = halfPrice * (1 - discount / 100);
    return Math.round(salePrice);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -5,
      boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-3">
            Strategic Marketing Solutions
          </h2>
          <div className="w-24 h-1 bg-[#3fa69b] mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professional services designed to elevate your brand and drive
            measurable business growth
          </p>

          <div className="mt-12 inline-block bg-gray-900 p-1 rounded-lg shadow-md">
            <div className="flex">
              <button
                onClick={() => setDuration("3 months")}
                className={`px-8 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  duration === "3 months"
                    ? "bg-[#3fa69b] text-white"
                    : "text-gray-400"
                }`}
              >
                3 Months
              </button>
              <button
                onClick={() => setDuration("6 months")}
                className={`px-8 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  duration === "6 months"
                    ? "bg-[#3fa69b] text-white"
                    : "text-gray-400"
                }`}
              >
                6 Months
              </button>
              <button
                onClick={() => setDuration("1 year")}
                className={`px-8 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  duration === "1 year"
                    ? "bg-[#3fa69b] text-white"
                    : "text-gray-400"
                }`}
              >
                1 Year
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => {
            const originalPrice = pkg.originalPrices[duration];
            const salePrice = calculateSalePrice(
              originalPrice,
              pkg.saleDiscount
            );

            return (
              <motion.div
                key={pkg.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                className={`relative bg-gray-900 rounded-lg overflow-hidden border ${
                  pkg.recommended ? "border-[#3fa69b]" : "border-gray-800"
                } shadow-lg`}
              >
                {pkg.recommended && (
                  <div className="w-full bg-[#3fa69b] text-center py-2 text-xs font-medium uppercase tracking-wide text-black">
                    Recommended
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 h-12">
                    {pkg.description}
                  </p>

                  <div className="mb-8 pb-6 border-b border-gray-800">
                    <div className="flex items-end mb-1">
                      <span className="text-3xl font-bold text-white">
                        ${salePrice}
                      </span>
                      <span className="text-gray-500 ml-2 mb-1">
                        /{duration}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 text-sm line-through mr-2">
                        ${originalPrice}
                      </span>
                      <span className="text-xs py-1 px-2 bg-gray-800 text-[#3fa69b] rounded-sm">
                        30% OFF
                      </span>
                    </div>
                  </div>

                  <ul className="mb-8 space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <svg
                          className="w-5 h-5 text-[#3fa69b] mr-3 mt-px flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 rounded-md ${
                        pkg.recommended
                          ? "bg-[#3fa69b] text-black"
                          : "bg-gray-800 text-white"
                      } font-medium transition-all duration-300`}
                    >
                      Select Plan
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            All packages include our professional consultation and 30-day
            satisfaction guarantee
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PackagesComponent;
