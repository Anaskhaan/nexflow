"use client";
import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full bg-black text-white py-24 px-4 md:px-8 relative">
      {/* Background subtle pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="w-full h-full" style={{ 
          backgroundImage: "radial-gradient(#3FA69B 2px, transparent 2px)", 
          backgroundSize: "30px 30px" 
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text content - Enhanced */}
        <div className="space-y-8">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-bold">
              About <span className="text-[#3FA69B]">Nexflow</span>
            </h2>
            <div className="h-1 w-16 bg-[#3FA69B] mt-3"></div>
          </div>
          
          <p className="text-gray-200 text-lg leading-relaxed">
            Nexflow is a results-driven digital marketing agency committed to helping businesses thrive in the online space. We specialize in combining data, design, and cutting-edge web technologies to build digital experiences that drive growth.
          </p>
          
          <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-[#3FA69B]">
            <p className="text-gray-300 text-base italic">
              "From web development and branding to content strategy and performance marketing, we bring clarity to your digital journey. Your goals are our blueprint."
            </p>
          </div>
          
          <div className="flex space-x-4 pt-2">
            <div className="h-12 w-1 bg-[#3FA69B]"></div>
            <div>
              <p className="font-semibold text-[#3FA69B]">EST. 2020</p>
              <p className="text-gray-400">Transforming digital presence</p>
            </div>
          </div>
        </div>

        {/* Visual element - Enhanced */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-[#3FA69B] opacity-50"></div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-[#3FA69B] opacity-50"></div>
          
          <div className="w-full h-96 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-lg flex flex-col items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[#3FA69B] opacity-5"></div>
            <div className="z-10 text-center">
              <p className="text-[#3FA69B] text-3xl md:text-4xl font-bold mb-4">We Build Brands.</p>
              <p className="text-gray-400 text-lg">Strategy. Design. Development.</p>
            </div>
            
            {/* Abstract geometric elements */}
            <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-[#3FA69B] opacity-10 -mr-16 -mb-16"></div>
            <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-[#3FA69B] opacity-10 -ml-12 -mt-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;