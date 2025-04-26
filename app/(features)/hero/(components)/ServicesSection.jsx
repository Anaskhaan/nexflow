"use client"
import React from "react";
import { 
  BarChart3, 
  Code2, 
  LineChart, 
  SearchCheck, 
  Smartphone, 
  Rocket, 
  Megaphone, 
  Lightbulb
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Turn your data into actionable insights with comprehensive analytics that drive business decisions."
    },
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom websites built with modern technologies that are fast, secure, and scalable."
    },
    {
      icon: SearchCheck,
      title: "SEO Optimization",
      description: "Boost your visibility with search engine strategies that deliver organic traffic and results."
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Responsive designs and native apps that provide seamless experiences across all devices."
    },
    {
      icon: LineChart,
      title: "Growth Strategy",
      description: "Data-driven strategies to identify opportunities and accelerate your business growth."
    },
    {
      icon: Megaphone,
      title: "Content Marketing",
      description: "Compelling content that resonates with your audience and strengthens your brand voice."
    },
    {
      icon: Rocket,
      title: "Performance Marketing",
      description: "Targeted campaigns that maximize ROI through strategic ad placement and optimization."
    },
    {
      icon: Lightbulb,
      title: "Brand Strategy",
      description: "Comprehensive brand development that establishes your unique market position."
    }
  ];

  return (
    <section className="w-full bg-black py-20 px-4 md:px-8">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="inline-block mb-3">
          <div className="font-bold text-sm tracking-wider text-[#3FA69B] uppercase">
            What We Offer
          </div>
          <div className="h-1 w-12 bg-[#3FA69B] mx-auto mt-2"></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Our <span className="text-[#3FA69B]">Services</span>
        </h2>
        
        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          Comprehensive digital solutions tailored to your business needs. 
          We combine creativity with technical expertise to deliver results.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group bg-black border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-[#3FA69B] hover:shadow-lg hover:shadow-[#3FA69B]/10"
          >
            <div className="mb-4 p-4 bg-black/50 inline-block rounded-lg border border-gray-800 text-[#3FA69B] group-hover:scale-110 group-hover:bg-[#3FA69B]/10 transition-transform duration-300">
              <service.icon size={24} />
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#3FA69B] transition-colors duration-300">
              {service.title}
            </h3>
            
            <p className="text-gray-400 text-sm">
              {service.description}
            </p>
            
            <div className="mt-4 pt-4 border-t border-gray-800">
              <button className="text-sm text-[#3FA69B] font-medium flex items-center group-hover:underline transition-all duration-300">
                Learn more
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1 group-hover:ml-2 transition-all duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Call to Action */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <div className="inline-block bg-gradient-to-r from-black via-[#3FA69B]/20 to-black p-8 rounded-xl border border-gray-800">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to transform your digital presence?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you achieve your business goals with tailored digital solutions.
          </p>
          <button className="bg-[#3FA69B] hover:bg-[#3FA69B]/90 text-black font-medium py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;