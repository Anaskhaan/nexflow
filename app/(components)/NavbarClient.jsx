"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

const NavbarClient = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 
        ${scrolled ? "bg-black bg-opacity-90 shadow-md backdrop-blur-sm py-3" : "bg-black py-6"}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl sm:text-2xl text-white group">
            <span className="group-hover:text-gray-200 transition-colors duration-200">NEX</span>
            <span className="text-[#3FA69B] group-hover:text-opacity-80 transition-colors duration-200">FLOW</span>
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-[#3FA69B] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#3FA69B] after:transition-all hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-[#3FA69B] text-black font-medium py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={toggleSidebar}
            className="text-gray-300 hover:text-[#3FA69B] lg:hidden transition-colors duration-200"
          >
            <Menu size={24} />
          </button>
        </div>

        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3FA69B] to-transparent transition-opacity duration-300 ${
          scrolled ? "opacity-30" : "opacity-0"
        }`}></div>
      </header>

      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className={`${scrolled ? "pt-16" : "pt-24"} transition-all duration-300`}></div>
    </>
  );
};

export default NavbarClient;
