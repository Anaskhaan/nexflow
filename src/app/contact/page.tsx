"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";
import { contactInfo } from "@/lib/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 overflow-hidden pt-32">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 0.03, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black leading-none select-none tracking-tighter"
          >
            CONTACT
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-brand"></div>
              <span className="text-brand text-xs font-black tracking-[0.3em] uppercase">
                GET IN TOUCH
              </span>
              <div className="w-12 h-0.5 bg-brand"></div>
            </div>
            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter text-slate-900 uppercase leading-[0.9]">
              Let's Build <span className="text-brand italic serif">Something</span>
              <br />
              Amazing
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              Ready to transform your digital presence? Get in touch with our team and let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-slate-900 uppercase">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-12 py-5 bg-brand text-white font-black text-sm uppercase tracking-widest rounded-xl hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-brand/20"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-3xl font-black mb-6 tracking-tighter text-slate-900 uppercase">
                Contact Info
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        {info.title}
                      </div>
                      <div className="text-slate-900 font-semibold">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand/10 to-slate-100 p-8 rounded-2xl border border-brand/20">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-brand" />
                <h4 className="text-xl font-black text-slate-900 uppercase">
                  Business Hours
                </h4>
              </div>
              <div className="space-y-2 text-slate-700">
                <p className="font-semibold">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="font-semibold">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="font-semibold">Sunday: Closed</p>
              </div>
            </div>

            <div className="bg-brand/5 p-8 rounded-2xl border border-brand/10">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-6 h-6 text-brand" />
                <h4 className="text-xl font-black text-slate-900 uppercase">
                  Quick Response
                </h4>
              </div>
              <p className="text-slate-700 font-medium leading-relaxed">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
