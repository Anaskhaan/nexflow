import { testimonialData } from "../Helper/Data";

export default function Testimonials() {
  return (
    <section className="py-16 bg-black relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMCAwdjIwTTAgMTBoMjAiIHN0cm9rZT0iIzNGQTY5QiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-[var(--main-theme-color)] text-sm font-medium tracking-wider mb-2">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Trusted by Industry Leaders
          </h2>
          <div className="w-16 h-0.5 bg-[var(--main-theme-color)] mx-auto mb-4"></div>
          <p className="text-white/70 text-base max-w-xl mx-auto">
            Don't just take our word for it. Here's what our clients say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-gray-900/80 p-5 rounded-lg border border-gray-800 hover:border-[var(--main-theme-color)]/30 transition-all duration-200 group"
            >
              {/* Quote icon */}
              <svg
                className="w-5 h-5 text-[var(--main-theme-color)] mb-3 opacity-70 group-hover:opacity-100 transition-opacity"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-white/80 text-sm mb-4 line-clamp-4 hover:line-clamp-none transition-all cursor-default">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center mt-4 pt-4 border-t border-gray-800/50">
                <div className="w-10 h-10 rounded-full bg-[var(--main-theme-color)]/10 flex items-center justify-center text-sm font-bold text-[var(--main-theme-color)] mr-3 flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-medium text-sm truncate">
                    {testimonial.name}
                  </h3>
                  <div className="flex flex-wrap items-baseline">
                    <span className="text-[var(--main-theme-color)] text-xs font-medium mr-2">
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
