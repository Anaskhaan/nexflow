import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {


  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(circle at 30% 30%, rgba(63, 166, 155, 0.15) 0%, transparent 70%)",
      }}/>

      <div className="absolute bottom-16 left-16 w-96 h-96 rounded-full border-2 border-[#3FA69B] opacity-5"></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-[#3FA69B] opacity-5 rotate-45"></div>

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 min-h-screen items-center py-16">
        <div className="lg:col-span-3 space-y-8">
          <div className="inline-block border-b-2 border-[#3FA69B] pb-2">
            <h2 className="font-bold text-xl tracking-widest text-white">
              <span className="text-white">NEX</span>
              <span className="text-[#3FA69B]">FLOW</span>
            </h2>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Elevate Your Digital <span className="text-[#3FA69B]">Presence</span>
          </h1>
          
          <p className="text-lg max-w-2xl text-gray-300 border-l-4 border-[#3FA69B] pl-4">
            We turn data into strategy, strategy into design, and design into growth.
            <span className="block mt-2 font-medium text-[#3FA69B]">Your success is our code.</span>
          </p>
          
          <div className="flex gap-4 pt-4">
            <Link href="/" className="inline-flex items-center gap-2 bg-[#3FA69B] text-black font-medium py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300">
              <span>Start Your Transformation</span>
              <ArrowRight size={20} />
            </Link>
            
            <Link href="/portfolio" className="inline-flex items-center gap-2 bg-transparent border border-[#3FA69B] text-[#3FA69B] font-medium py-3 px-6 rounded-lg hover:bg-[#3FA69B] hover:bg-opacity-10 transition-all duration-300">
              <span>View Our Work</span>
            </Link>
          </div>
        </div>
        
     
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3FA69B] to-transparent opacity-50"></div>
    </div>
  );
};

export default HeroSection;