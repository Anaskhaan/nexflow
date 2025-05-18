import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  const buttonRef = useRef(null);
  const sphereRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (buttonRef.current) {
        const button = buttonRef.current;
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(-50%, -50%) translate(${x / 5}px, ${
          y / 5
        }px)`;
        button.querySelector(".arrow-icon").style.transform = `translate(${
          x / 20
        }px, ${y / 20}px)`;
      }

      if (sphereRef.current) {
        const sphere = sphereRef.current;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight;

        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;

        const translateX = deltaX / 50;
        const translateY = deltaY / 50;

        sphere.style.transform = `translate(${translateX}px, ${translateY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Add gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-black/80 z-0" />

      {/* Grid background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.05,
        }}
      />

      {/* Top text */}
      <div className="absolute top-8 w-full text-center z-10">
        <h2 className="top-text text-white text-2xl font-medium tracking-wide">
          LET&lsquo;S COLLABORATE
        </h2>
      </div>

      {/* Main text */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full z-10">
        <h1 className="hero-text text-white text-[12vw] leading-none font-bold mb-0 tracking-tight">
          LET&lsquo;S WORK
        </h1>
        <div className="relative">
          <h1 className="hero-text text-white text-[12vw] leading-none font-bold tracking-tight">
            TOGETHER
          </h1>

          <button
            ref={buttonRef}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
                     bg-[#3FA69B] text-white rounded-full w-32 h-32
                     flex flex-col items-center justify-center
                     transition-transform duration-300 shadow-lg hover:shadow-xl"
          >
            <Link to="/contact">
              <button className="text-sm font-medium mb-1">Get In Touch</button>
            </Link>
            <span className="arrow-icon text-xl transform transition-transform duration-300">
              ↗
            </span>
          </button>
        </div>
      </div>
      <div
        ref={sphereRef}
        className="absolute -left-64 -bottom-64 opacity-20 z-0"
      >
        <svg
          width="1000"
          height="1000"
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="500" cy="500" r="500" fill="#3FA69B" />
        </svg>
      </div>
    </div>
  );
};

export default GetInTouch;
