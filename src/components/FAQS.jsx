import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ChevronRight, Sparkles, MessageCircle } from "lucide-react";

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
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [ setIsHovered] = useState(null);
  const [ setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  },);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-[#3FA69B]/20 via-white to-[#3FA69B]/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-[#3FA69B]/5 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-[#3FA69B]/20 relative"
      >
        <div className="flex items-start justify-between gap-12 flex-col lg:flex-row">
          <motion.div 
            className="lg:w-1/3 sticky top-8"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-gradient-to-br from-[#3FA69B] to-[#2D8B82] rounded-2xl text-white shadow-xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-4 right-4"
              >
                <Sparkles className="w-6 h-6 text-white/50" />
              </motion.div>
              
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                Digital Marketing FAQs
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                As a leading digital marketing agency, we are dedicated to providing
                educational resources and answering frequently asked questions to
                help our clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <motion.button 
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-6 py-3 text-sm w-52 bg-white text-[#3FA69B] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  More Questions
               
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 w-44 text-white border-2 border-white/50 rounded-full flex items-center gap-2"
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          <div className="lg:w-2/3 space-y-6 w-full">
            <AnimatePresence>
              {faqsData.map((faq, index) => (
                <motion.div
                  variants={itemVariants}
                  key={index}
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(null)}
                  className={`rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm border-2 
                    ${activeIndex === index ? 'border-[#3FA69B] shadow-[0_0_20px_rgba(63,166,155,0.2)]' : 'border-transparent'} 
                    shadow-lg hover:shadow-xl transition-all duration-500`}
                >
                  <motion.div
                    className="flex justify-between items-center p-6 cursor-pointer group"
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    whileHover={{ backgroundColor: "rgba(63,166,155,0.05)" }}
                  >
                    <h3 className="text-xl font-medium text-gray-800 flex-1 pr-4 group-hover:text-[#3FA69B] transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: activeIndex === index ? -180 : 180 }}
                      whileTap={{ scale: 0.9 }}
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.4, type: "spring" }}
                      className="p-2 rounded-full bg-[#3FA69B]/10 group-hover:bg-[#3FA69B]/20 transition-colors duration-300"
                    >
                      {activeIndex === index ? (
                        <Minus className="text-[#3FA69B]" />
                      ) : (
                        <Plus className="text-[#3FA69B]" />
                      )}
                    </motion.div>
                  </motion.div>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -20, opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="p-6 bg-gradient-to-r from-[#3FA69B]/5 to-transparent border-t border-[#3FA69B]/10"
                        >
                          <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}