import React, { Suspense, useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";

import AboutHero from "../components/AboutComponents/AboutHero";
import Discover from "../components/AboutComponents/Discover";
const AbouServices = React.lazy(() =>
  import("../components/AboutComponents/AbouServices")
);
// const AboutTeam = React.lazy(() =>
//   import("../components/AboutComponents/AboutTeam")
// );
import AboutCTA from "../components/AboutComponents/AboutCTA";
import NexflowLoader from "../components/Helper/NexflowLoader";

export default function About() {
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsLaptop(window.innerWidth >= 1024);

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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


  return (
    <div className="bg-black text-white pt-16 min-h-screen overflow-hidden">
      {isLaptop && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[var(--main-theme-color)] opacity-10"
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
      )}

      <AboutHero
        floatingAnimation={floatingAnimation}
        parallaxY1={parallaxY1}
        gradientControls={gradientControls}
      />

      <Discover parallaxY2={parallaxY2} />
      <Suspense fallback={<NexflowLoader />}>
        <AbouServices parallaxY3={parallaxY3} />
        {/* <AboutTeam teamRef={teamRef} teamInView={teamInView} /> */}
      </Suspense>
      <AboutCTA gradientControls={gradientControls} />
    </div>
  );
}
