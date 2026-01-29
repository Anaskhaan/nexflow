"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQ[];
  color: string;
}

const ServiceFAQ = ({ faqs, color }: ServiceFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
            style={{ backgroundColor: `${color}20` }}
          >
            <HelpCircle size={32} style={{ color }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600">
            Got questions? We've got answers. Can't find what you're looking for? Contact us directly.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all text-left border-2 border-transparent hover:border-slate-100"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-slate-900 flex-1">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown 
                      size={24} 
                      style={{ color: openIndex === index ? color : '#64748b' }}
                    />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 text-slate-600 leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div 
            className="rounded-2xl p-8"
            style={{
              background: `linear-gradient(135deg, ${color}15, ${color}08)`
            }}
          >
            <h3 className="text-2xl font-black text-slate-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-slate-600 font-medium mb-6">
              Our team is here to help. Get in touch and we'll answer all your questions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: color }}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceFAQ;
