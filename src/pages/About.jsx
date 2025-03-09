import { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";

import AboutHero from "../components/AboutComponents/AboutHero";
import Discover from "../components/AboutComponents/Discover";
import AbouServices from "../components/AboutComponents/AbouServices";
import AboutTeam from "../components/AboutComponents/AboutTeam";
import AboutCTA from "../components/AboutComponents/AboutCTA";

export default function About() {
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollY } = useScroll();
  const parallaxY1 = useTransform(scrollY, [0, 1000], [0, -300]);
  const parallaxY2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const parallaxY3 = useTransform(scrollY, [0, 2000], [0, -400]);

  const gradientControls = useAnimation();

  useEffect(() => {
    gradientControls.start({
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [gradientControls]);

  // Team section reference for animations
  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: false, threshold: 0.3 });

  return (
    <div className="bg-black text-white pt-12 min-h-screen overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#3FA69B] opacity-10"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <AboutHero
        floatingAnimation={floatingAnimation}
        parallaxY1={parallaxY1}
        gradientControls={gradientControls}
      />

      <Discover parallaxY2={parallaxY2} />

      <AbouServices parallaxY3={parallaxY3} />
      <AboutTeam teamRef={teamRef} teamInView={teamInView} />
      <AboutCTA gradientControls={gradientControls} />
    </div>
  );
}
