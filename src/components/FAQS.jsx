import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

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

  return (
    <div className=" p-8 bg-black ">
      <div className=" flex items-center  justify-between">
        <div>
          <h2 className="text-2xl w-96 font-bold text-white  mb-6">
            Digital Marketing FAQs
          </h2>
          <p className="text-gray-500 w-96  mb-6">
            As a leading digital marketing agency, we are dedicated to providing
            educational resources and answering frequently asked questions to
            help our clients.
          </p>
          <div className="flex justify-center mt-8 space-x-4">
            <button className="px-4 py-2 bg-white text-black border border-white rounded-3xl">
              More Questions
            </button>
            <button className="px-4 py-2  text-white  underline bg-black">
              Contact Us
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="border-t border-black w-full md:w-1/2 lg:w-full"
            >
              <div
                className="flex justify-between items-center py-4 cursor-pointer"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <h3 className="text-lg text-white font-medium">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <Minus className="text-gray-600" />
                ) : (
                  <Plus className="text-gray-600" />
                )}
              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? "auto" : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                className="overflow-hidden text-sm text-white"
              >
                <p className="pb-4">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
