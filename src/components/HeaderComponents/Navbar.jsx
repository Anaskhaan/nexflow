import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const navLinks = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/about" },
  { id: 3, title: "Services", href: "/services" },
  { id: 4, title: "Portfolio", href: "/Portfolio" },
  { id: 5, title: "Packages", href: "/Packages" },
  { id: 6, title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Sidebar />
      {/* Navbar */}
      <motion.nav
        initial={{ width: "100%", left: 0 }}
        animate={{
          width: isScrolled ? "80%" : "100%",
          left: isScrolled ? "12%" : "0%",
          backgroundColor: isScrolled
            ? "rgba(0, 0, 0, 0.6)"
            : "rgba(0, 0, 0, 0.6)",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(10px)",
        }}
        className={`fixed top-0 py-4 px-4 hidden lg:flex justify-between items-center z-50 shadow-md ${
          isScrolled && " top-6"
        } transition-all duration-300 ease-in-out`}
      >
        {/* Logo */}
        <div
          className={`text-2xl font-bold ${
            isScrolled ? "text-[#3F4D59]" : "text-[#3FA69B]"
          }`}
        >
          Nexflow
        </div>
        {/* Nav Links */}
        <div className="hidden text-white md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href}>
              {link.title}
            </a>
          ))}
        </div>
        {/* Get Started Button */}

        <div className=" flex items-center justify-center space-x-3">
          <Link to="/contact">
            <button
              className={`hidden md:block font-semibold py-2 px-6  shadow-lg transition duration-300 bg-[#3FA69B] text-white hover:bg-[#2D7A71]`}
            >
              Get Started
            </button>
          </Link>
          <Link to="/Meeting">
            <button
              className={`hidden bg-white text-[#2D7A71] hover:bg-black hover:text-white md:block font-semibold py-2 px-6  shadow-lg transition duration-300`}
            >
              Arrange Meeting
            </button>
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <Menu size={28} color={isScrolled ? "#3F4D59" : "#fff"} />
        </button>
      </motion.nav>

      {/* Sidebar for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 right-0 w-64 h-full bg-[#3F4D59] text-white shadow-lg p-6 flex flex-col z-50"
          >
            {/* Close Button */}
            <button className="self-end mb-6" onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>

            {/* Sidebar Links */}
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-lg hover:text-[#3FA69B] transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              ))}
            </div>

            <Link to="/contact">
              <button className="mt-8 bg-[#3FA69B] hover:bg-[#2D7A71] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
                Get Started
              </button>
            </Link>
            <Link to="/Meeting">
              <button
                className={`hidden bg-white text-[#2D7A71] hover:bg-black hover:text-white md:block font-semibold py-2 px-6  shadow-lg transition duration-300`}
              >
                Arrange Meeting
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;