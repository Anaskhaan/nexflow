import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

// Footer Data
const footerData = {
  company: {
    logo,
    name: "Nexflow",
    description:
      "Empowering businesses with cutting-edge digital solutions and innovative marketing strategies to drive growth and success in the digital age.",
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/nexflow-technologies/posts/?feedView=all",
        icon: <Linkedin size={18} />,
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61567677611133",
        icon: <Facebook size={18} />,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/nexflowtechnologies/",
        icon: <Instagram size={18} />,
      },
    ],
  },
  links: [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "About", href: "/about" },
    { id: 3, title: "Services", href: "/services" },
    { id: 4, title: "Contact", href: "/contact" },
    { id: 5, title: "Resources", href: "/resources" },
  ],
  services: [
    "SEO Optimization",
    "Social Media Marketing",
    "Content Creation",
    "Paid Advertising",
  ],
  contact: [
    { icon: <Mail size={18} className="text-[#3FA69B]" />, text: "info@nexflow.tech" },
    { icon: <Phone size={18} className="text-[#3FA69B]" />, text: "+1 (678) 825 6967" },
    {
      icon: <MapPin size={18} className="text-[#3FA69B]" />,
      text: { title: "USA", lines: ["8 The Green #6092", "Dover, DE, 19901"] },
    },
    {
      icon: <MapPin size={18} className="text-[#3FA69B]" />,
      text: { title: "Pakistan", lines: ["56-G, Gulberg III", "Lahore, Pakistan"] },
    },
  ],
  legalLinks: [
    { title: "Privacy Policy", url: "/PrivacyPolicy" },
    { title: "Terms of Service", url: "/Terms" },
    { title: "Cookies Policy", url: "/CookiesPolicy" },
  ],
};

// Reusable Footer Column
const FooterColumn = ({ title, children, delay = 0 }) => {
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
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: delay * 0.2 } },
      }}
      className="space-y-6"
    >
      {title && (
        <h3 className="text-lg font-semibold text-white uppercase tracking-wider">{title}</h3>
      )}
      {children}
    </motion.div>
  );
};

const FooterLinkItem = ({ children }) => (
  <motion.li
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="flex items-center text-gray-400 hover:text-[#3FA69B] transition-colors duration-300 group"
  >
    <ArrowRight
      size={14}
      className="mr-2 text-[#3FA69B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    />
    {children}
  </motion.li>
);

const ContactItem = ({ icon, text }) => (
  <li className="flex items-start gap-3">
    <div className="mt-0.5">{icon}</div>
    {typeof text === "string" ? (
      <span className="text-gray-400">{text}</span>
    ) : (
      <div className="text-gray-400">
        <p className="font-medium">{text.title}</p>
        {text.lines.map((line, i) => (
          <span key={i} className="block text-gray-300">
            {line}
          </span>
        ))}
      </div>
    )}
  </li>
);

const SocialIcon = ({ url, icon, name }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={name}
    whileHover={{ y: -3, scale: 1.1 }}
    className="text-gray-400 hover:text-[#3FA69B] transition-colors duration-300 p-2 rounded-full hover:bg-gray-800"
  >
    {icon}
  </motion.a>
);

const Footer = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  return (
    <footer
      id="footer"
      className="bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-8 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <FooterColumn title="About Us">
            <div className="flex items-center">
              <img src={footerData.company.logo} alt="Nexflow logo" className="w-12 h-auto" />
              <span className="ml-3 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3FA69B] to-teal-300">
                {footerData.company.name}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{footerData.company.description}</p>
            <div className="flex space-x-2">
              {footerData.company.socialLinks.map((social, index) => (
                <SocialIcon key={index} url={social.url} icon={social.icon} name={social.name} />
              ))}
            </div>
          </FooterColumn>

          {/* Quick Links */}
          <FooterColumn title="Quick Links" delay={1}>
            <ul className="space-y-3">
              {footerData.links.map((link) => (
                <FooterLinkItem key={link.id}>
                  <Link to={link.href}>{link.title}</Link>
                </FooterLinkItem>
              ))}
            </ul>
          </FooterColumn>

          {/* Services */}
          <FooterColumn title="Our Services" delay={2}>
            <ul className="space-y-3">
              {footerData.services.map((service, index) => (
                <FooterLinkItem key={index}>{service}</FooterLinkItem>
              ))}
            </ul>
          </FooterColumn>

          {/* Contact */}
          <FooterColumn title="Contact Us" delay={3}>
            <ul className="space-y-4">
              {footerData.contact.map((contact, index) => (
                <ContactItem key={index} icon={contact.icon} text={contact.text} />
              ))}
            </ul>

            {/* Semantic heading for screen readers */}
            <h3 className="sr-only">Contact Call to Action</h3>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={hasScrolled ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 1.6, duration: 0.4, ease: "easeOut" }}
              className="pt-2"
            >
              <Link
                to="/Contact"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-[#3FA69B] to-teal-400 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:opacity-90"
              >
                Get in Touch
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          </FooterColumn>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {footerData.company.name} Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {footerData.legalLinks.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                className="text-gray-500 hover:text-[#3FA69B] text-sm transition-colors duration-300"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
