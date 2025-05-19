import React from "react";
import { Award, BarChart, Users, Zap } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Award size={32} />,
    title: "Award-Winning Strategies",
    description: "Our campaigns have been recognized for their creativity and effectiveness across multiple industry awards."
  },
  {
    id: 2,
    icon: <BarChart size={32} />,
    title: "Data-Driven Results",
    description: "We leverage analytics and insights to craft campaigns that deliver measurable ROI and business growth."
  },
  {
    id: 3,
    icon: <Users size={32} />,
    title: "Expert Team",
    description: "Our specialists bring years of experience from top agencies and brands across diverse marketing disciplines."
  },
  {
    id: 4,
    icon: <Zap size={32} />,
    title: "Rapid Implementation",
    description: "We move quickly from strategy to execution, helping you capture market opportunities faster than competitors."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Background accent element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#3FA69B] opacity-5 rounded-l-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-2">Why Choose Us</h2>
          <div className="w-20 h-1 bg-[#3FA69B] mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="flex bg-black border-l-4 border-[#3FA69B] p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="mr-6 text-[#3FA69B]">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-black via-black to-[#3FA69B]/20 p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Transform Your Digital Presence?</h3>
              <p className="text-gray-300">Join over 200+ brands that have achieved their digital marketing goals with us.</p>
            </div>
            <button className="bg-[#3FA69B] hover:bg-[#3FA69B]/80 text-black font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}