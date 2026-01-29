"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (typeof document !== "undefined") {
      document.body.classList.toggle("overflow-hidden", !isOpen);
    }
  };

  return (
    <>
      {/* Top Bar for Mobile */}
      <div className="lg:hidden fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white text-black z-50 shadow-md">
        <div>
          <Image src={logo} alt="logo" width={40} height={40} className="w-10 h-auto p-0 m-0" priority style={{ height: "auto" }} />
        </div>
        <button onClick={toggleSidebar} aria-label="Open Menu">
          <Menu size={28} className="text-black" />
        </button>
      </div>

      {/* Overlay when Sidebar is Open */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Sidebar Menu */}
            <motion.div
              initial={{ translateX: "100%" }}
              animate={{ translateX: 0 }}
              exit={{ translateX: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 w-64 h-full bg-white text-black p-6 flex flex-col z-50 shadow-md will-change-transform"
            >
              <button
                className="self-end mb-6"
                onClick={toggleSidebar}
                aria-label="Close Menu"
              >
                <X size={28} />
              </button>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="text-lg hover:text-[var(--main-theme-color)] transition duration-300"
                    onClick={toggleSidebar}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>

              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <button className="mt-8 w-full bg-[var(--main-theme-color)] hover:bg-[#2D7A71] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
                  Get Started
                </button>
              </Link>
            </motion.div>

            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-40"
              onClick={toggleSidebar}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
