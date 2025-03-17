import React, { useEffect } from "react";
import ServiceStats from "../components/ServiceComponent/ServiceStats";
import ServicesSection from "../components/ServiceComponent/ServicesSection";
import ServiceProcess from "../components/ServiceComponent/ServiceProcess";
const ServiceHero = React.lazy(() =>
  import("../components/ServiceComponent/ServiceHero")
);
import ServiceCTA from "../components/ServiceComponent/ServiceCTA";
import { useAnimation } from "framer-motion";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 300;

      if (scrollY > triggerPoint) {
        controls.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="min-h-screen py-12 bg-black text-white">
      <ServiceHero />
      <ServiceStats
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />
      <ServicesSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />
      <ServiceProcess />
      <ServiceCTA />
    </div>
  );
};

export default Services;
