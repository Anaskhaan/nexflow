import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/about" },
  { id: 3, title: "Services", href: "/services" },
  { id: 4, title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle sidebar and prevent body scroll
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ width: "100%", left: 0 }}
        animate={{
          width: isScrolled ? "50%" : "100%",
          left: isScrolled ? "25%" : "0%",
          backgroundColor: isScrolled ? "#ffffff" : "rgba(0, 0, 0, 0.6)",
          backdropFilter: isScrolled ? "none" : "blur(10px)",
        }}
        className={`fixed top-0 py-4 px-6 md:px-20 hidden lg:flex justify-between items-center z-50 shadow-md transition-all duration-300 ease-in-out ${
          isScrolled && "rounded-full top-6"
        }`}
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
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-lg transition duration-300 ${
                isScrolled
                  ? "text-[#3F4D59] hover:text-[#3FA69B]"
                  : "text-white hover:text-[#3FA69B]"
              }`}
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Get Started Button */}
        <button
          className={`hidden md:block font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 ${
            isScrolled
              ? "bg-[#3FA69B] text-white hover:bg-[#2D7A71]"
              : "bg-[#3FA69B] text-white hover:bg-[#2D7A71]"
          }`}
        >
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleSidebar}>
          <Menu size={28} color={isScrolled ? "#3F4D59" : "#fff"} />
        </button>
      </motion.nav>

      {/* Sidebar for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed top-0 right-0 w-64 h-full bg-[#3F4D59] text-white shadow-lg p-6 flex flex-col z-50"
              style={{ willChange: "transform" }}
            >
              {/* Close Button */}
              <button className="self-end mb-6" onClick={toggleSidebar}>
                <X size={28} />
              </button>

              {/* Sidebar Links */}
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className="text-lg hover:text-[#3FA69B] transition duration-300"
                    onClick={toggleSidebar}
                  >
                    {link.title}
                  </a>
                ))}
              </div>

              {/* Get Started Button in Sidebar */}
              <button className="mt-8 bg-[#3FA69B] hover:bg-[#2D7A71] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
                Get Started
              </button>
            </motion.div>

            {/* Clickable Overlay to Close Sidebar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={toggleSidebar}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
