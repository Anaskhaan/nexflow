import React from "react";

const testimonialData = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechVision Inc.",
    quote: "Working with this agency transformed our digital presence completely. Our online leads increased by 150% within just three months of their campaign launch.",
    role: "Marketing Director"
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Elevate Brands",
    quote: "Their strategic approach to social media management helped us establish a strong community around our brand. Exceptionally professional service.",
    role: "CEO"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    company: "GrowthPath Solutions",
    quote: "The SEO optimization and content strategy they developed for us resulted in a 200% increase in organic traffic. Highly recommend their expertise.",
    role: "Digital Strategy Lead"
  }
];


export default function Testimonials() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">Client Testimonials</h2>
          <div className="w-20 h-1 bg-[#3FA69B] mx-auto mb-6"></div>
          <p className="text-white text-lg max-w-2xl mx-auto">
            See what our clients say about our digital marketing services and the results we've delivered for their businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial) => (
        
             <div className="bg-black border border-[#3FA69B] p-6 rounded-lg shadow-lg h-full flex flex-col">
      <div className="mb-4">
        <svg className="w-8 h-8 text-[#3FA69B]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-white text-lg mb-6 flex-grow">{testimonial.quote}</p>
      <div className="mt-auto">
        <h4 className="text-[#3FA69B] font-bold text-lg">{testimonial.name}</h4>
        <div className="flex flex-col">
          <span className="text-white">{testimonial.role}</span>
          <span className="text-gray-400 text-sm">{testimonial.company}</span>
        </div>
      </div>
    </div>
          ))}
        </div>
      </div>
    </section>
  );
}