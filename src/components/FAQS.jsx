import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Icons } from "../assets/Icons";
import { faqsData } from "./Helper/Data";

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const BackgroundElements = () => (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[var(--main-theme-color)] opacity-10 filter blur-lg"
        animate={{
          scale: [1, 1.1, 1, 1.2, 1],
          y: [0, -10, 0, 10, 0],
          x: [0, 10, 0, -10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[var(--main-theme-color)] opacity-5 filter blur-lg"
        animate={{
          scale: [1.2, 1, 1.3, 0.9, 1.2],
          y: [0, 10, 0, -10, 0],
          x: [0, -10, 0, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );

  return (
    <div className="py-20 px-6 md:px-12 lg:px-16 bg-black relative overflow-hidden">
      <Helmet>
        <title>Nexflow | FAQs on Digital Marketing</title>
        <meta
          name="description"
          content="Get answers to the most common questions about digital marketing, SEO, paid advertising, and more with Nexflow."
        />
        <link rel="canonical" href="https://nexflow.tech/faqs" />
      </Helmet>

      <BackgroundElements />

      <div className="max-w-6xl mx-auto">
        {/* Main H1 for SEO */}
        <h1 className="sr-only">
          FAQs - Digital Marketing Questions by Nexflow
        </h1>

        {/* Header with accent */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-4 py-1 rounded-full bg-[var(--main-theme-color)] bg-opacity-10 border border-[var(--main-theme-color)] border-opacity-30"
          >
            <span className="text-[var(--main-theme-color)] text-sm font-medium flex items-center gap-2">
              <Icons.HelpCircle size={16} />
              FREQUENTLY ASKED QUESTIONS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Got Questions About
            <span className="text-[var(--main-theme-color)]">
              Digital Marketing
            </span>
            ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            We&apos;ve compiled answers to the most common questions about
            digital marketing strategies and how they can benefit your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left side: Questions navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 order-2 lg:order-1"
          >
            <div className="sticky top-8 lg:block hidden">
              <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[var(--main-theme-color)] text-black flex items-center justify-center text-sm font-bold">
                  ?
                </span>
                Common Questions
              </h3>

              <div className="space-y-1">
                {faqsData.map((faq, index) => (
                  <motion.div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="relative cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div
                      className={`p-4 rounded-lg transition-all duration-300 relative z-10 flex items-center gap-3 ${
                        activeIndex === index
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {activeIndex === index && (
                        <motion.div
                          layoutId="activeBackground"
                          className="absolute inset-0 bg-[var(--main-theme-color)] bg-opacity-10 border border-[var(--main-theme-color)] border-opacity-20 rounded-lg z-0"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      <div
                        className={`w-10 h-10 flex-shrink-0 rounded-full ${
                          activeIndex === index
                            ? "bg-[var(--main-theme-color)]"
                            : "bg-gray-700"
                        } flex items-center justify-center text-base font-bold`}
                      >
                        {index + 1}
                      </div>
                      <p className="text-sm md:text-base font-medium relative z-10">
                        {faq.question.length > 40
                          ? `${faq.question.substring(0, 40)}...`
                          : faq.question}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 space-y-4">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 border border-[var(--main-theme-color)] text-[var(--main-theme-color)] hover:bg-[var(--main-theme-color)]/10 font-medium rounded-lg transition-all"
                  >
                    Ask a Question
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right side: Active question & answer */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-3 order-1 lg:order-2"
            ref={containerRef}
          >
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[var(--main-theme-color)] text-black flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1">
                      Q
                    </div>
                    <h2 className="lg:text-xl text-sm font-semibold text-white">
                      {faqsData[activeIndex].question}
                    </h2>
                  </div>

                  <div className="flex items-start gap-4 lg:ml-14 ml-0">
                    <div className="border-l-2 border-[var(--main-theme-color)]/30 lg:pl-6 pl-3">
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {faqsData[activeIndex].answer}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-3">
                        <span className="px-3 py-1 bg-[var(--main-theme-color)]/10 text-[var(--main-theme-color)] text-sm rounded-full border border-[var(--main-theme-color)]/20">
                          #DigitalStrategy
                        </span>
                        <span className="px-3 py-1 bg-[var(--main-theme-color)]/10 text-[var(--main-theme-color)] text-sm rounded-full border border-[var(--main-theme-color)]/20">
                          #MarketingInsights
                        </span>
                        <span className="px-3 py-1 bg-[var(--main-theme-color)]/10 text-[var(--main-theme-color)] text-sm rounded-full border border-[var(--main-theme-color)]/20">
                          #Nexflow
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Previous / Next buttons */}
              <div className="flex justify-between mt-10 pt-6 border-t border-gray-800">
                <button
                  onClick={() =>
                    setActiveIndex(
                      (activeIndex - 1 + faqsData.length) % faqsData.length,
                    )
                  }
                  className="text-gray-300 hover:text-white flex items-center gap-2 text-sm py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-theme-color)]"
                >
                  &larr; Previous Question
                </button>

                <button
                  onClick={() =>
                    setActiveIndex((activeIndex + 1) % faqsData.length)
                  }
                  className="text-gray-300 hover:text-white flex items-center gap-2 text-sm py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-theme-color)]"
                >
                  Next Question &rarr;
                </button>
              </div>
            </div>

            {/* Navigation dots for mobile */}
            <div className="mt-8 flex justify-center items-center gap-2">
              {faqsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full transition-all  ${
                    activeIndex === index
                      ? "bg-[var(--main-theme-color)] "
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  style={{ width: "44px", height: "44px" }} // ✅ Touch-friendly size
                  aria-label={`Go to question ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
