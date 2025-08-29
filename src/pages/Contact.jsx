import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";
import { Icons } from "../assets/Icons";
import { contactInfo } from "../components/Helper/Data";

const Contact = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const inputRefs = useRef([]);
  const newsletterRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0); // For progress bar
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || loading)
      return;

    setLoading(true);
    setProgress(0);

    // Animate progress bar
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 5));
    }, 50);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          clearInterval(interval);
          setProgress(100);

          // Clear inputs
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);

          // Reset progress bar after a short delay
          setTimeout(() => setProgress(0), 800);
        },
        () => {
          clearInterval(interval);
          setLoading(false);
          setProgress(0);
        },
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Nexflow</title>
        <meta
          name="description"
          content="Get in touch with Nexflow for your next project"
        />
        <link rel="canonical" href="https://nexflow.tech/contact" />
      </Helmet>
      <div
        ref={containerRef}
        className="min-h-screen bg-black text-white overflow-hidden pt-28"
      >
        <div className="relative flex">
          <div className="flex-1 px-6 py-20 md:px-20">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative">
                  <h1
                    ref={titleRef}
                    className="text-5xl font-serif mb-6 relative"
                  >
                    Let's Connect
                  </h1>
                  <p className="text-gray-400 mb-8">
                    Have a project in mind? Let's create something extraordinary
                    together.
                  </p>

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
                          <div className="p-2 bg-[var(--main-theme-color)]/20 rounded-lg text-[var(--main-theme-color)] group-hover:bg-[var(--main-theme-color)] group-hover:text-white transition-all duration-300">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-400">
                              {item.title}
                            </h3>
                            <p className="text-white">{item.value}</p>
                          </div>
                          <Icons.ExternalLink
                            size={16}
                            className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div ref={formRef} className="relative pt-20">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {["name", "email", "message"].map((field, index) => (
                      <div
                        key={field}
                        ref={(el) => (inputRefs.current[index] = el)}
                        className="relative group"
                      >
                        {field === "message" ? (
                          <textarea
                            rows="4"
                            className="w-full p-4 bg-transparent border-b-2 border-gray-700 focus:border-[var(--main-theme-color)] outline-none transition-all duration-300"
                            placeholder="Message"
                            value={formData[field]}
                            onChange={(e) => handleChange(e, field)}
                          />
                        ) : (
                          <input
                            type={field === "email" ? "email" : "text"}
                            className="w-full p-4 bg-transparent border-b-2 border-gray-700 focus:border-[var(--main-theme-color)] outline-none transition-all duration-300"
                            placeholder={
                              field.charAt(0).toUpperCase() + field.slice(1)
                            }
                            value={formData[field]}
                            onChange={(e) => handleChange(e, field)}
                          />
                        )}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--main-theme-color)] transition-all duration-300 group-hover:w-full" />
                      </div>
                    ))}

                    <div className="relative">
                      <button
                        type="submit"
                        disabled={
                          loading ||
                          !formData.name ||
                          !formData.email ||
                          !formData.message
                        }
                        className={`magnetic-button relative px-8 py-3 bg-[var(--main-theme-color)] text-white font-medium rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-[var(--main-theme-color)]/20 ${
                          loading ? "opacity-60 cursor-not-allowed" : ""
                        }`}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {loading ? "Sending..." : "Send Message"}
                          <Icons.Send size={18} />
                        </span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                      </button>

                      {/* Progress bar */}
                      {loading && (
                        <div
                          className="absolute bottom-0 left-0 h-1 bg-[var(--main-theme-color)] rounded transition-all duration-200"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div ref={newsletterRef} className="bg-[#1A1A1A] py-16">
          <div className="max-w-6xl mx-auto px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-serif mb-4">Stay Updated</h3>
                <p className="text-gray-400">
                  Subscribe to our newsletter for the latest updates and
                  insights.
                </p>
              </div>
              <div className="md:col-span-2">
                <div className="relative group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-4 pr-12 bg-transparent border-2 border-gray-800 rounded-lg focus:border-[var(--main-theme-color)] outline-none transition-all duration-300"
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-[var(--main-theme-color)] hover:text-white transition-colors duration-300">
                    <Icons.ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
