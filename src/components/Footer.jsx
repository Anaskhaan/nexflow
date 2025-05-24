import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
const footerLinks = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/about" },
  { id: 3, title: "Services", href: "/services" },
  { id: 4, title: "Contact", href: "/contact" },
  { id: 5, title: "Resources", href: "/resources" },
];

const services = [
  "SEO Optimization",
  "Social Media Marketing",
  "Content Creation",
  "Paid Advertising",
];

const contactDetails = [
  {
    icon: <Mail size={20} />,
    text: () => <span>info@nexflow.tech</span>,
  },
  {
    icon: <Phone size={20} />,
    text: () => <span>+1 (929) 566 4866</span>,
  },
  {
    icon: <MapPin size={20} />,
    text: () => (
      <div>
        <p className="font-semibold">USA Office</p>
        <span>8 The Green #6092</span>
        <br />
        <span>Dover, DE, 19901</span>
      </div>
    ),
  },
  {
    icon: <MapPin size={20} />,
    text: () => (
      <div>
        <p className="font-semibold"> Lahore Office</p>
        <span>56-G, Gulberg III</span>
        <br />
        <span>Lahore, Pakistan</span>
      </div>
    ),
  },
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
    <footer
      id="footer"
      className="bg-black text-white py-16 px-6 md:px-20 pb-0"
    >
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
          <img src={logo} alt="logo image" className="w-20 h-auto" />
          <Link to="/Contact">
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={hasScrolled ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 1.6, duration: 0.4, ease: "easeOut" }}
              className="mt-6 bg-[#3FA69B] hover:bg-[#2D7A71] text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300"
            >
              Contact Us
            </motion.button>
          </Link>
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
                <Link
                  to={link.href}
                  className="hover:text-[#3FA69B] transition duration-300"
                >
                  {link.title}
                </Link>
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
                  {contact.text()}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-8 md:mt-12 py-4 border-t border-gray-700">
        © {new Date().getFullYear()} Nexflow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
