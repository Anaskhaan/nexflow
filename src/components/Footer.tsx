"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { footerData } from "@/lib/data";

interface FooterColumnProps {
  title?: string;
  children: React.ReactNode;
  delay?: number;
}

const FooterColumn = ({ title, children, delay = 0 }: FooterColumnProps) => {
  const controls = useAnimation();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top < (typeof window !== "undefined" ? window.innerHeight : 800) - 100 && !hasScrolled) {
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
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: delay * 0.2 },
        },
      }}
      className="space-y-6"
    >
      {title && (
        <h3 className="text-lg font-semibold text-slate-900 uppercase tracking-wider">
          {title}
        </h3>
      )}
      {children}
    </motion.div>
  );
};

const FooterLinkItem = ({ children }: { children: React.ReactNode }) => (
  <motion.li
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="flex items-center text-slate-600 hover:text-brand transition-colors duration-300 group"
  >
    <ArrowRight
      size={14}
      className="mr-2 text-[var(--main-theme-color)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    />
    {children}
  </motion.li>
);

interface ContactItemProps {
  icon: React.ReactNode;
  text: string | { title: string; lines: string[] };
}

const ContactItem = ({ icon, text }: ContactItemProps) => (
  <li className="flex items-start gap-3">
    {typeof text === "string" ? (
      <span className="text-slate-600">{text}</span>
    ) : (
      <div className="text-slate-600">
        <p className="font-medium">{text.title}</p>
        {text.lines.map((line, i) => (
          <span key={i} className="block text-slate-500">
            {line}
          </span>
        ))}
      </div>
    )}
  </li>
);

interface SocialIconProps {
  url: string;
  icon: React.ReactNode;
  name: string;
}

const SocialIcon = ({ url, icon, name }: SocialIconProps) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={name}
    whileHover={{ y: -3, scale: 1.1 }}
    className="text-slate-500 hover:text-brand transition-colors duration-300 p-2 rounded-full hover:bg-slate-100"
  >
    {icon}
  </motion.a>
);

const Footer = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setHasScrolled(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      id="footer"
      className="bg-slate-50 border-t border-slate-200 text-slate-900 pt-20 pb-8 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <FooterColumn title="About Us">
            <div className="flex items-center">
              <span className="ml-3 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--main-theme-color)] to-teal-300">
                {footerData.company.name}
              </span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              {footerData.company.description}
            </p>
            <div className="flex space-x-2">
              {footerData.company.socialLinks.map((social, index) => (
                <SocialIcon
                  key={index}
                  url={social.url}
                  icon={social.icon}
                  name={social.name}
                />
              ))}
            </div>
          </FooterColumn>

          {/* Quick Links */}
          <FooterColumn title="Quick Links" delay={1}>
            <ul className="space-y-3">
              {footerData.links.map((link) => (
                <FooterLinkItem key={link.id}>
                  <Link href={link.href}>{link.title}</Link>
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
                <ContactItem
                  key={index}
                  icon={contact.icon}
                  text={contact.text}
                />
              ))}
            </ul>

            <h3 className="sr-only">Contact Call to Action</h3>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={hasScrolled ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 1.6, duration: 0.4, ease: "easeOut" }}
              className="pt-2"
            >
              <Link
                href="/Contact"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-[var(--main-theme-color)] to-teal-400 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:opacity-90"
              >
                Get in Touch
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          </FooterColumn>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {footerData.company.name}{" "}
            Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {footerData.legalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="text-slate-400 hover:text-brand text-sm transition-colors duration-300"
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
