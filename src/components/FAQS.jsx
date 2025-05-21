import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function FAQs() {
  const faqsData = [
    {
      question: "Why is digital marketing important for my business?",
      answer:
        "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results and enables businesses to adapt strategies based on insights.",
    },
    {
      question:
        "How can digital marketing help improve my website's visibility?",
      answer:
        "Digital marketing strategies such as SEO and paid advertising can help your website rank higher on search engines and attract more visitors.",
    },
    {
      question:
        "How long does it take to see results from digital marketing efforts?",
      answer:
        "The timeline varies depending on the strategy, but SEO may take months while paid advertising yields faster results.",
    },
    {
      question:
        "How do you measure the success of digital marketing campaigns?",
      answer:
        "Success can be measured by tracking KPIs like website traffic, conversion rates, and ROI through analytics tools.",
    },
    {
      question: "What digital marketing services does Nexflow offer?",
      answer:
        "Nexflow offers a comprehensive suite of digital marketing services including SEO, paid advertising, social media marketing, content marketing, email campaigns, and analytics reporting to help businesses achieve their marketing goals.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  // Animated background elements
  const BackgroundElements = () => (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[#3FA69B] opacity-10 filter blur-lg"
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
        className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#3FA69B] opacity-5 filter blur-lg"
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
      <BackgroundElements />

      <div className="max-w-6xl mx-auto">
        {/* Header with accent */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-4 py-1 rounded-full bg-[#3FA69B] bg-opacity-10 border border-[#3FA69B] border-opacity-30"
          >
            <span className="text-[#3FA69B] text-sm font-medium flex items-center gap-2">
              <HelpCircle size={16} />
              FREQUENTLY ASKED QUESTIONS
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Got Questions About{" "}
            <span className="text-[#3FA69B]">Digital Marketing</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto"
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
                <span className="w-8 h-8 rounded-full bg-[#3FA69B] text-black flex items-center justify-center text-sm font-bold">
                  ?
                </span>
                Common Questions
              </h3>

              <div className="space-y-1">
                {faqsData.map((faq, index) => (
                  <motion.div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div
                      className={`p-4 rounded-lg transition-all duration-300 relative z-10 flex items-center gap-3 ${
                        activeIndex === index
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {activeIndex === index && (
                        <motion.div
                          layoutId="activeBackground"
                          className="absolute inset-0 bg-[#3FA69B] bg-opacity-10 border border-[#3FA69B] border-opacity-20 rounded-lg z-0"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      <div
                        className={`w-6 h-6 flex-shrink-0 rounded-full ${
                          activeIndex === index ? "bg-[#3FA69B]" : "bg-gray-800"
                        } flex items-center justify-center text-xs`}
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
                    className="w-full px-6 py-3 border border-[#3FA69B] text-[#3FA69B] hover:bg-[#3FA69B]/10 font-medium rounded-lg transition-all"
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
                    <div className="w-10 h-10 rounded-full bg-[#3FA69B] text-black flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1">
                      Q
                    </div>
                    <h3 className="lg:text-xl text-sm  font-semibold text-white">
                      {faqsData[activeIndex].question}
                    </h3>
                  </div>

                  <div className="flex items-start gap-4 lg:ml-14 ml-0">
                    <div className="border-l-2 border-[#3FA69B]/30 lg:pl-6 pl-3">
                      <p className="text-gray-300 leading-relaxed text-xs ">
                        {faqsData[activeIndex].answer}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-3">
                        <span className="px-3 py-1 bg-[#3FA69B]/10 text-[#3FA69B] text-sm rounded-full border border-[#3FA69B]/20">
                          #DigitalStrategy
                        </span>
                        <span className="px-3 py-1 bg-[#3FA69B]/10 text-[#3FA69B] text-sm rounded-full border border-[#3FA69B]/20">
                          #MarketingInsights
                        </span>
                        <span className="px-3 py-1 bg-[#3FA69B]/10 text-[#3FA69B] text-sm rounded-full border border-[#3FA69B]/20">
                          #Nexflow
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between mt-10 pt-6 border-t border-gray-800">
                <button
                  onClick={() =>
                    setActiveIndex(
                      (activeIndex - 1 + faqsData.length) % faqsData.length
                    )
                  }
                  className="text-gray-400 hover:text-white flex items-center gap-2 lg:text-sm text-xs"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Previous Question
                </button>

                <button
                  onClick={() =>
                    setActiveIndex((activeIndex + 1) % faqsData.length)
                  }
                  className="text-gray-400 hover:text-white flex items-center gap-2 lg:text-sm text-xs"
                >
                  Next Question
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-8 flex justify-center items-center gap-2">
              {faqsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeIndex === index
                      ? "bg-[#3FA69B] w-4"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
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
