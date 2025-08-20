import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const navLinks = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/About" },
  {
    id: 3,
    title: "Services",
    href: "/Services",
    submenu: [
      { id: "s1", title: "Web Development", href: "/services/web-development" },
      { id: "s2", title: "App Development", href: "/services/app-development" },
      { id: "s3", title: "UI/UX Design", href: "/services/ui-ux-designing" },
      { id: "s4", title: "Branding", href: "/services/branding" },
      { id: "s5", title: "SEO Optimization", href: "/services/seo-optimization" },
      { id: "s6", title: "ASO Optimization", href: "/services/app-store-optimization" },
      { id: "s7", title: "Social Media Marketing", href: "/services/social-media-marketing" },
      { id: "s8", title: "PPC Campaigns", href: "/services/ppc-campaigns" },
      { id: "s9", title: "AI Image Processing", href: "/services/ai-image-processing" },
    ],
  },
  { id: 4, title: "Portfolio", href: "/Portfolio" },
  {
    id: 5,
    title: "Resources",
    href: "/Resources",
    submenu: [
      { id: "c1", title: "Calculate ROI", href: "/SaasRoi" },
      { id: "c2", title: "Analyze Funnel", href: "/FunnelAudit" },
    ],
  },
  { id: 6, title: "Contact", href: "/Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
          width: isScrolled ? "90%" : "100%",
          left: isScrolled ? "5%" : "0%",
          borderRadius: isScrolled ? "12px" : "0px",
          backgroundColor: isScrolled ? "#f8f9fa" : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(10px)",
        }}
        className={`fixed top-0 px-4 py-2 hidden lg:flex justify-between items-center z-50 shadow-md ${
          isScrolled ? "top-6" : ""
        } transition-all duration-300 ease-in-out`}
      >
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img
            src={logo}
            alt="logo image"
            className="p-0 m-0 w-14 h-auto"
          />
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 relative">
          {navLinks.map((link) =>
            link.submenu ? (
              <div
                key={link.id}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(link.id)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={openDropdown === link.id}
                  className={`flex items-center gap-1 text-lg font-medium transition duration-300 ${
                    isScrolled
                      ? "text-gray-900 hover:text-teal-600 focus:text-teal-600"
                      : "text-white hover:text-teal-400 focus:text-teal-400"
                  } focus:outline-none`}
                >
                  {link.title}
                  <ChevronDown size={16} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {openDropdown === link.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-48"
                    >
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.id}
                          to={sub.href}
                          className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-teal-600 focus:bg-gray-100 focus:text-teal-600 transition duration-200"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.id}
                to={link.href}
                className={`text-lg font-medium transition duration-300 ${
                  isScrolled
                    ? "text-gray-900 hover:text-teal-600 focus:text-teal-600"
                    : "text-white hover:text-teal-400 focus:text-teal-400"
                } focus:outline-none`}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            )
          )}
        </div>

        {/* Get Started Button */}
        <div className="flex items-center justify-center space-x-3">
          <Link to="/Contact">
            <button className="hidden md:block font-semibold py-2 px-6 shadow-lg rounded-lg transition duration-300 bg-teal-600 text-white hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:outline-none">
              Get Started
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
            <button
              className="self-end mb-6 focus:outline-none focus:ring-2 focus:ring-teal-400"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>

            {/* Sidebar Links */}
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.submenu ? (
                  <div key={link.id}>
                    <button
                      className="flex justify-between items-center w-full text-lg font-medium hover:text-teal-400 transition duration-300 focus:text-teal-400 focus:outline-none"
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.id ? null : link.id)
                      }
                      aria-haspopup="true"
                      aria-expanded={openDropdown === link.id}
                    >
                      {link.title}
                      <ChevronDown
                        size={18}
                        className={`transform transition ${
                          openDropdown === link.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pl-4 mt-2 flex flex-col gap-2"
                        >
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.id}
                              to={sub.href}
                              className="text-sm hover:text-teal-400 focus:text-teal-400 transition duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.id}
                    to={link.href}
                    className="text-lg hover:text-teal-400 focus:text-teal-400 transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                )
              )}
            </div>

            <Link to="/Contact">
              <button className="mt-8 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 focus:ring-2 focus:ring-teal-400 focus:outline-none">
                Get Started
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
