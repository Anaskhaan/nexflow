import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/about" },
  { id: 3, title: "Services", href: "/services" },
  { id: 4, title: "Contact", href: "/contact" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden"; // Prevent background scrolling
  };

  return (
    <>
      {/* Top Bar for Mobile */}
      <div className="lg:hidden fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white text-black z-50 shadow-md">
        <div className="text-2xl font-bold">Nexflow</div>
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
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed top-0 right-0 w-64 h-full bg-white text-black shadow-lg p-6 flex flex-col z-50"
            >
              {/* Close Button */}
              <button
                className="self-end mb-6"
                onClick={toggleSidebar}
                aria-label="Close Menu"
              >
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

              {/* Get Started Button */}
              <button className="mt-8 bg-[#3FA69B] hover:bg-[#2D7A71] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
                Get Started
              </button>
            </motion.div>

            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={toggleSidebar} // Close sidebar when clicking outside
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
