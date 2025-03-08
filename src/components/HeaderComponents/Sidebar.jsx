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

  return (
    <>
      {/* Mobile Sidebar Header */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-[#3F4D59] p-4 flex justify-between items-center z-50">
        <div className="text-2xl font-bold text-[#3FA69B]">Nexflow</div>
        <button onClick={() => setIsOpen(true)}>
          <Menu size={28} color="#fff" />
        </button>
      </div>

      {/* Sidebar Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 right-0 w-64 h-full bg-[#3F4D59] text-white shadow-lg p-6 flex flex-col z-50"
          >
            <button className="self-end mb-6" onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>
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
            <button className="mt-8 bg-[#3FA69B] hover:bg-[#2D7A71] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
