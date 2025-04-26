"use client";

import React from "react";
import Link from "next/link";
import { X } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div className={`fixed top-0 right-0 h-full w-64 bg-black border-l border-gray-800 z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <div className="font-bold text-xl text-white">
            <span>NEX</span>
            <span className="text-[#3FA69B]">FLOW</span>
          </div>
          <button onClick={toggleSidebar} className="text-gray-300 hover:text-[#3FA69B]">
            <X size={24} />
          </button>
        </div>

        <nav className="py-6">
          <ul className="space-y-1">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  href={link.href}
                  className="flex items-center py-3 px-6 text-gray-300 hover:bg-gray-900 hover:text-[#3FA69B] transition-colors duration-200"
                  onClick={toggleSidebar}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#3FA69B] text-black font-medium py-2 px-4 rounded-lg w-full hover:bg-opacity-90 transition-all duration-200"
            onClick={toggleSidebar}
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
