"use client";

import Hero from "@/components/HomeComponents/Hero";
import ServiceShowcase from "@/components/HomeComponents/ServiceShowcase";
import { About } from "@/components/HomeComponents/About";
import WhyChooseUs from "@/components/HomeComponents/WhyChooseUs";
import Portfolio from "@/components/HomeComponents/Portfolio";
import Testimonials from "@/components/HomeComponents/Testimonials";
import FAQs from "@/components/FAQs";
import GetInTouch from "@/components/HomeComponents/GetTouch";

export default function HomeClient() {
  return (
    <main className="bg-white text-slate-900">
      <Hero />
      <ServiceShowcase />
      <About />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <GetInTouch />
    </main>
  );
}
