"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorRef = useRef(null);

  const springConfig = { damping: 15, stiffness: 150 }; // Reduced damping and increased stiffness for smoother motion
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    x.set(mousePosition.x - 16);
    y.set(mousePosition.y - 16);
  }, [mousePosition, x, y]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setCursorVariant("click");
    const handleMouseUp = () => setCursorVariant("default");

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.classList.contains("interactive")
      ) {
        setCursorVariant("hover");
      }
    };

    const handleMouseLeave = () => setCursorVariant("default");

    if (window.innerWidth > 1024) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("mouseover", handleMouseEnter);
      document.addEventListener("mouseout", handleMouseLeave);
    }

    return () => {
      if (window.innerWidth > 1024) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("mouseover", handleMouseEnter);
        document.removeEventListener("mouseout", handleMouseLeave);
      }
    };
  }, []);

  const variants = {
    default: { backgroundColor: "white", scale: 1, opacity: 0.8 },
    hover: { backgroundColor: "#3FA69B", scale: 1.5, opacity: 0.9 },
    click: { backgroundColor: "#3FA69B", scale: 0.8, opacity: 1 },
  };

  return (
    <>
      {typeof window !== "undefined" && window.innerWidth > 1024 && (
        <motion.div
          ref={cursorRef}
          className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none mix-blend-difference"
          style={{ x, y, zIndex: 9999 }}
          animate={cursorVariant}
          variants={variants}
          transition={{ type: "spring", damping: 15, stiffness: 150 }} // Smoother movement
        />
      )}
    </>
  );
};

export default CustomCursor;
