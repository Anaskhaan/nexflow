"use client";

import React, { Suspense } from "react";
import ServiceHero from "@/components/ServiceComponent/ServiceHero";
import ServiceStats from "@/components/ServiceComponent/ServiceStats";
import ServicesSection from "@/components/ServiceComponent/ServicesSection";
import ServiceProcess from "@/components/ServiceComponent/ServiceProcess";
import ServiceCTA from "@/components/ServiceComponent/ServiceCTA";
import NexflowLoader from "@/components/Helper/NexflowLoader";

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

  return (
    <div className="min-h-screen py-12 bg-white text-slate-900">
      <Suspense fallback={<NexflowLoader />}>
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
      </Suspense>
    </div>
  );
};

export default Services;
