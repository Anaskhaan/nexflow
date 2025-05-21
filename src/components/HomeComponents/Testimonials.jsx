// const testimonialData = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     company: "TechVision Inc.",
//     quote:
//       "Working with this agency transformed our digital presence completely. Our online leads increased by 150% within just three months of their campaign launch.",
//     role: "Marketing Director",
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     company: "Elevate Brands",
//     quote:
//       "Their strategic approach to social media management helped us establish a strong community around our brand. Exceptionally professional service.",
//     role: "CEO",
//   },
//   {
//     id: 3,
//     name: "Elena Rodriguez",
//     company: "GrowthPath Solutions",
//     quote:
//       "The SEO optimization and content strategy they developed for us resulted in a 200% increase in organic traffic. Highly recommend their expertise.",
//     role: "Digital Strategy Lead",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section className="py-16 bg-black">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-white mb-2">
//             Client Testimonials
//           </h2>
//           <div className="w-20 h-1 bg-[#3FA69B] mx-auto mb-6"></div>
//           <p className="text-white text-lg max-w-2xl mx-auto">
//             See what our clients say about our digital marketing services and
//             the results we've delivered for their businesses.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonialData.map((testimonial) => (
//             <div className="bg-black border border-[#3FA69B] p-6 rounded-lg shadow-lg h-full flex flex-col">
//               <div className="mb-4">
//                 <svg
//                   className="w-8 h-8 text-[#3FA69B]"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
//                 </svg>
//               </div>
//               <p className="text-white text-lg mb-6 flex-grow">
//                 {testimonial.quote}
//               </p>
//               <div className="mt-auto">
//                 <h4 className="text-[#3FA69B] font-bold text-lg">
//                   {testimonial.name}
//                 </h4>
//                 <div className="flex flex-col">
//                   <span className="text-white">{testimonial.role}</span>
//                   <span className="text-gray-400 text-sm">
//                     {testimonial.company}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

const testimonialData = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechVision Inc.",
    quote:
      "Working with this agency transformed our digital presence completely. Our online leads increased by 150% within just three months of their campaign launch.",
    role: "Marketing Director",
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Elevate Brands",
    quote:
      "Their strategic approach to social media management helped us establish a strong community around our brand. Exceptionally professional service.",
    role: "CEO",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    company: "GrowthPath Solutions",
    quote:
      "The SEO optimization and content strategy they developed for us resulted in a 200% increase in organic traffic. Highly recommend their expertise.",
    role: "Digital Strategy Lead",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#3FA69B] blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#3FA69B] blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[#3FA69B] font-semibold mb-3">
            TRUSTED BY INDUSTRY LEADERS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-[#3FA69B] mx-auto mb-6"></div>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-gradient-to-br from-black to-gray-900 p-6 rounded-xl border border-gray-800 hover:border-[#3FA69B]/50 transition-all duration-300 shadow-lg overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-[#3FA69B] opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl"></div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start mb-6">
                  <div className="bg-[#3FA69B]/10 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-[#3FA69B]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-white/90 text-lg flex-grow">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-800">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-[#3FA69B]/10 flex items-center justify-center text-xl font-bold text-[#3FA69B]">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">
                        {testimonial.name}
                      </h4>
                      <div className="flex flex-col">
                        <span className="text-[#3FA69B] text-sm font-medium">
                          {testimonial.role}
                        </span>
                        <span className="text-gray-400 text-xs">
                          {testimonial.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
