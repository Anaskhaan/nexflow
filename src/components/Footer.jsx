import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  { id: 1, title: "Home", href: "#" },
  { id: 2, title: "About", href: "#about" },
  { id: 3, title: "Services", href: "#services" },
  { id: 4, title: "Contact", href: "#contact" },
];

const services = [
  "SEO Optimization",
  "Social Media Marketing",
  "Content Creation",
  "Paid Advertising",
];

const contactDetails = [
  { icon: <Mail size={20} />, text: "hello@nexflow.com" },
  { icon: <Phone size={20} />, text: "+123 456 7890" },
  { icon: <MapPin size={20} />, text: "123 Digital Ave, Tech City" },
];

const Footer = () => {
  const controls = useAnimation();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && !hasScrolled) {
          setHasScrolled(true);
          controls.start("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, hasScrolled]);

  return (
    <footer id="footer" className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Contact Button */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="flex flex-col items-start"
        >
          <h2 className="text-2xl font-bold text-[#3FA69B]">Nexflow</h2>
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={hasScrolled ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 1.6, duration: 0.4, ease: "easeOut" }}
            className="mt-6 bg-[#3FA69B] hover:bg-[#2D7A71] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.2 },
            },
          }}
        >
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="hover:text-[#3FA69B] transition duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Our Services */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.4 },
            },
          }}
        >
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li
                key={index}
                className="hover:text-[#3FA69B] transition duration-300"
              >
                {service}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Us */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.6 },
            },
          }}
        >
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            {contactDetails.map((contact, index) => (
              <li key={index} className="flex items-center gap-2">
                {contact.icon}
                <span className="hover:text-[#3FA69B] transition duration-300">
                  {contact.text}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-12">
        © {new Date().getFullYear()} Nexflow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
