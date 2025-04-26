"use client"
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  // Mock FAQ data - you can replace with your own questions and answers later
  const faqData = [
    {
      question: "What digital marketing services does NexFlow provide?",
      answer: "NexFlow offers a comprehensive suite of digital marketing services including SEO optimization, content marketing, social media management, PPC advertising, web development, brand strategy, data analytics, and conversion rate optimization. We create customized solutions based on your specific business needs and goals."
    },
    {
      question: "How long does it take to see results from digital marketing efforts?",
      answer: "Results timeline varies based on your current digital presence, industry competition, and specific strategies implemented. While some tactics like PPC can show immediate results, services like SEO typically take 3-6 months to demonstrate significant impact. We provide regular progress reports and focus on both short-term wins and long-term sustainable growth."
    },
    {
      question: "How do you measure the success of digital marketing campaigns?",
      answer: "We establish clear KPIs aligned with your business objectives before campaign launch. These may include website traffic, conversion rates, engagement metrics, lead generation, sales, and ROI. We use advanced analytics tools to track performance and provide transparent reporting dashboards so you can see exactly how your campaigns are performing."
    },
    {
      question: "What makes NexFlow different from other digital marketing agencies?",
      answer: "NexFlow stands out through our data-driven approach, industry expertise, and commitment to measurable results. Unlike agencies that offer generic solutions, we develop custom strategies tailored to your unique business challenges. Our team combines creative excellence with technical proficiency, and we pride ourselves on transparent communication and collaborative partnerships."
    },
    {
      question: "Do you work with businesses in specific industries?",
      answer: "While we have experience across various sectors, we've developed particular expertise in e-commerce, SaaS, healthcare, financial services, and education. Our team takes time to understand the nuances of your industry, compliance requirements, and competitive landscape to deliver relevant and effective digital marketing solutions."
    },
   
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-3">
            <div className="font-bold text-sm tracking-wider text-[#3FA69B] uppercase">
              Common Questions
            </div>
            <div className="h-1 w-12 bg-[#3FA69B] mx-auto mt-2"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-[#3FA69B]">Questions</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Get answers to common questions about our services and approach to digital marketing.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#3FA69B]/50"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <span className="ml-6 flex-shrink-0 text-[#3FA69B]">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={`px-5 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center p-6 border border-gray-800 rounded-xl bg-gradient-to-b from-gray-900 to-black">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-300 mb-6">
            Our team is ready to answer any specific questions about how we can help your business grow.
          </p>
          <button className="bg-[#3FA69B] hover:bg-[#3FA69B]/90 text-black font-medium py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;