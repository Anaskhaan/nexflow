// const testimonialData = [
//   {
//     id: 1,
//     name: "Zain Ul Abedin",
//     company: "Swift Takeoffs Inc.",
//     quote:
//       "NexFlow Technologies has been instrumental in elevating our digital presence. Their work on our website, SEO, SMM, and paid media was strategic, efficient, and results-driven. We saw a clear boost in traffic, engagement, and qualified leads. Highly professional team — reliable, responsive, and truly aligned with our business goals.",
//     role: "Founder & CEO",
//   },
//   {
//     id: 2,
//     name: "Dr Khan",
//     company: "BellClinix",
//     quote:
//       "Working with NexFlow Technologies has been a game-changer for The Bell Clinix. Their expertise in website development, SEO, social media, and paid advertising helped us build a strong digital presence and connect with more patients. They’re strategic, reliable, and deeply understand the dynamics of healthcare marketing.",
//     role: "Founder",
//   },
//   {
//     id: 3,
//     name: "Elena Rodriguez",
//     company: "Paradise Pipes",
//     quote:
//       "NexFlow Technologies transformed our vision into a sleek, modern website with exceptional UI/UX. Their development team delivered a fast, functional, and visually impressive platform that truly reflects our brand. Professional, efficient, and design-focused — highly recommended.",
//     role: "Marketing Director",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section className="py-20 bg-black relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-5">
//         <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#3FA69B] blur-3xl"></div>
//         <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#3FA69B] blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center mb-16">
//           <span className="inline-block text-[#3FA69B] font-semibold mb-3">
//             TRUSTED BY INDUSTRY LEADERS
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             What Our Clients Say
//           </h2>
//           <div className="w-24 h-1 bg-[#3FA69B] mx-auto mb-6"></div>
//           <p className="text-white/80 text-lg max-w-2xl mx-auto">
//             Don't just take our word for it. Here's what our clients have to say
//             about our services.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {testimonialData.map((testimonial) => (
//             <div
//               key={testimonial.id}
//               className="group relative bg-gradient-to-br from-black to-gray-900 p-6 rounded-xl border border-gray-800 hover:border-[#3FA69B]/50 transition-all duration-300 shadow-lg overflow-hidden"
//             >
//               {/* Glow effect on hover */}
//               <div className="absolute inset-0 bg-[#3FA69B] opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl"></div>

//               <div className="relative z-10 h-full flex flex-col">
//                 <div className="flex items-start mb-6">
//                   <div className="bg-[#3FA69B]/10 p-3 rounded-lg mr-4">
//                     <svg
//                       className="w-6 h-6 text-[#3FA69B]"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
//                     </svg>
//                   </div>
//                   <p className="text-white/90 text-lg flex-grow">
//                     "{testimonial.quote}"
//                   </p>
//                 </div>

//                 <div className="mt-auto pt-4 border-t border-gray-800">
//                   <div className="flex items-center">
//                     <div className="mr-4">
//                       <div className="w-12 h-12 rounded-full bg-[#3FA69B]/10 flex items-center justify-center text-xl font-bold text-[#3FA69B]">
//                         {testimonial.name.charAt(0)}
//                       </div>
//                     </div>
//                     <div>
//                       <h4 className="text-white font-semibold">
//                         {testimonial.name}
//                       </h4>
//                       <div className="flex flex-col">
//                         <span className="text-[#3FA69B] text-sm font-medium">
//                           {testimonial.role}
//                         </span>
//                         <span className="text-gray-400 text-xs">
//                           {testimonial.company}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
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
    name: "Zain Ul Abedin",
    company: "Swift Takeoffs Inc.",
    quote:
      "NexFlow Technologies has been instrumental in elevating our digital presence. Their work on our website, SEO, SMM, and paid media was strategic, efficient, and results-driven. We saw a clear boost in traffic, engagement, and qualified leads. Highly professional team — reliable, responsive, and truly aligned with our business goals.",
    role: "Founder & CEO",
  },
  {
    id: 2,
    name: "Dr Khan",
    company: "BellClinix",
    quote:
      "Working with NexFlow Technologies has been a game-changer for The Bell Clinix. Their expertise in website development, SEO, social media, and paid advertising helped us build a strong digital presence and connect with more patients. They're strategic, reliable, and deeply understand the dynamics of healthcare marketing.",
    role: "Founder",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    company: "Paradise Pipes",
    quote:
      "NexFlow Technologies transformed our vision into a sleek, modern website with exceptional UI/UX. Their development team delivered a fast, functional, and visually impressive platform that truly reflects our brand. Professional, efficient, and design-focused — highly recommended.",
    role: "Marketing Director",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-black relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMCAwdjIwTTAgMTBoMjAiIHN0cm9rZT0iIzNGQTY5QiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-[#3FA69B] text-sm font-medium tracking-wider mb-2">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Trusted by Industry Leaders
          </h2>
          <div className="w-16 h-0.5 bg-[#3FA69B] mx-auto mb-4"></div>
          <p className="text-white/70 text-base max-w-xl mx-auto">
            Don't just take our word for it. Here's what our clients say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-gray-900/80 p-5 rounded-lg border border-gray-800 hover:border-[#3FA69B]/30 transition-all duration-200 group"
            >
              {/* Quote icon integrated into card top */}
              <svg
                className="w-5 h-5 text-[#3FA69B] mb-3 opacity-70 group-hover:opacity-100 transition-opacity"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-white/80 text-sm mb-4 line-clamp-4 hover:line-clamp-none transition-all cursor-default">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center mt-4 pt-4 border-t border-gray-800/50">
                <div className="w-10 h-10 rounded-full bg-[#3FA69B]/10 flex items-center justify-center text-sm font-bold text-[#3FA69B] mr-3 flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h4 className="text-white font-medium text-sm truncate">
                    {testimonial.name}
                  </h4>
                  <div className="flex flex-wrap items-baseline">
                    <span className="text-[#3FA69B] text-xs font-medium mr-2">
                      {testimonial.role}
                    </span>
                    <span className="text-gray-400 text-xs truncate">
                      {testimonial.company}
                    </span>
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
