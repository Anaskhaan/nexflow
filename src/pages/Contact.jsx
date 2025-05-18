import { useRef } from "react";
import {
  Send,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";

const Contact = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const inputRefs = useRef([]);
  const newsletterRef = useRef(null);

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "info@nexflow.tech",
      link: "mailto:info@nexflow.tech",
    },
    {
      icon: <MapPin size={20} />,
      title: "Address",
      value: "8 The Green #6092 Dover, DE, 19901",
      link: "https://maps.google.com",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white overflow-hidden pt-28"
    >
      {/* Custom Cursor */}
      <div className="fixed w-4 h-4 bg-[#3FA69B] rounded-full mix-blend-difference pointer-events-none z-50 hidden md:block" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3FA69B] opacity-10 rounded-full blur-3xl floating-element" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3FA69B] opacity-10 rounded-full blur-3xl floating-element" />

      {/* Contact Section with Sidebar */}
      <div className="relative flex">
        {/* Main Content */}
        <div className="flex-1 px-6 py-20 md:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="relative">
                <h1
                  ref={titleRef}
                  className="text-5xl font-serif mb-6 relative"
                >
                  Let&apos;s Connect
                </h1>
                <p className="text-gray-400 mb-8">
                  Have a project in mind? Let&apos;s create something
                  extraordinary together.
                </p>

                {/* Contact Info Cards */}
                <div className="space-y-4 mt-12">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-info-item group block p-4 bg-gray-900/50 rounded-lg backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-[#3FA69B]/20 rounded-lg text-[#3FA69B] group-hover:bg-[#3FA69B] group-hover:text-white transition-all duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-400">
                            {item.title}
                          </h3>
                          <p className="text-white">{item.value}</p>
                        </div>
                        <ExternalLink
                          size={16}
                          className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div ref={formRef} className="relative pt-20">
                <form className="space-y-8">
                  {["Name", "Email", "Message"].map((label, index) => (
                    <div
                      key={label}
                      ref={(el) => (inputRefs.current[index] = el)}
                      className="relative group"
                    >
                      <input
                        type={label === "Email" ? "email" : "text"}
                        className="w-full p-4 bg-transparent border-b-2 border-gray-700 focus:border-[#3FA69B] outline-none transition-all duration-300"
                        placeholder={label}
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3FA69B] transition-all duration-300 group-hover:w-full" />
                    </div>
                  ))}
                  <button className="magnetic-button relative px-8 py-3 bg-[#3FA69B] text-white font-medium rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-[#3FA69B]/20">
                    <span className="relative z-10 flex items-center gap-2">
                      Send Message
                      <Send size={18} />
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Newsletter Section */}
      <div ref={newsletterRef} className="bg-[#1A1A1A] py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif mb-4">Stay Updated</h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-4 pr-12 bg-transparent border-2 border-gray-800 rounded-lg focus:border-[#3FA69B] outline-none transition-all duration-300"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-[#3FA69B] hover:text-white transition-colors duration-300">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
