import  { useEffect, useRef,  } from 'react';
import { Star, Send, ArrowRight, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { gsap } from 'gsap/gsap-core';

const Contact = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const starRef = useRef(null);
  const inputRefs = useRef([]);
  const newsletterRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Custom cursor animation
    const moveCursor = (e) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    };
    window.addEventListener('mousemove', moveCursor);

    // Initial animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1
    })
    .from(starRef.current, {
      scale: 0,
      rotation: -180,
      opacity: 0,
      duration: 0.8
    }, "-=0.5")
    .from(inputRefs.current, {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8
    }, "-=0.3")
    .from(".contact-info-item", {
      x: -50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6
    }, "-=0.5");

    // Parallax effect for decorative elements
    gsap.to(".floating-element", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Scroll animations
    gsap.to(".scroll-rotate", {
      rotation: 360,
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 1,
        start: "top top",
        end: "bottom bottom"
      }
    });

    // Newsletter animation
    gsap.from(newsletterRef.current, {
      scrollTrigger: {
        trigger: newsletterRef.current,
        start: "top center+=100",
        end: "top center-=100",
        scrub: 1
      },
      y: 100,
      opacity: 0
    });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  // Contact info items
  const contactInfo = [
    {
      icon: <Phone size={20} />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "hello@example.com",
      link: "mailto:hello@example.com"
    },
    {
      icon: <MapPin size={20} />,
      title: "Address",
      value: "123 Business Street, Suite 100, City, State 12345",
      link: "https://maps.google.com"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className="fixed w-4 h-4 bg-[#3FA69B] rounded-full mix-blend-difference pointer-events-none z-50 hidden md:block"
      />

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
                <h1 ref={titleRef} className="text-5xl font-serif mb-6 relative">
                  Let`&apos;`s Connect
                  <div ref={starRef} className="absolute -top-8 -left-8 scroll-rotate">
                    <Star className="w-12 h-12 text-[#3FA69B]" fill="currentColor" />
                  </div>
                </h1>
                <p className="text-gray-400 mb-8">
                  Have a project in mind? Let`&apos;`s create something extraordinary together.
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
                          <h3 className="text-sm font-medium text-gray-400">{item.title}</h3>
                          <p className="text-white">{item.value}</p>
                        </div>
                        <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div ref={formRef} className="relative">
                <form className="space-y-8">
                  {['Name', 'Email', 'Message'].map((label, index) => (
                    <div
                      key={label}
                      ref={el => inputRefs.current[index] = el}
                      className="relative group"
                    >
                      <input
                        type={label === 'Email' ? 'email' : 'text'}
                        className="w-full p-4 bg-transparent border-b-2 border-gray-700 focus:border-[#3FA69B] outline-none transition-all duration-300"
                        placeholder={label}
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3FA69B] transition-all duration-300 group-hover:w-full" />
                    </div>
                  ))}
                  <button className="magnetic-button relative px-8 py-3 bg-[#3FA69B] text-white font-medium rounded-full overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-[#3FA69B]/20">
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
                  className="w-full p-4 pr-12 bg-transparent border-2 border-gray-800 rounded-full focus:border-[#3FA69B] outline-none transition-all duration-300"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-[#3FA69B] hover:text-white transition-colors duration-300">
                  <ArrowRight size={20} />
                </button>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#3FA69B] transition-all duration-300 group-hover:w-[calc(100%-2rem)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;