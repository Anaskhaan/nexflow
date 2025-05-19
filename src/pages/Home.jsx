import React, { Suspense } from "react";
const FAQs = React.lazy(() => import("../components/FAQS"));
import { About } from "../components/HomeComponents/About";
import Hero from "../components/HomeComponents/Hero";
import { Services } from "../components/HomeComponents/Services";
import NexflowLoader from "../components/Helper/NexflowLoader";
import Portfolio from "../components/HomeComponents/Portfolio";
import Testimonials from "../components/HomeComponents/Testimonials";
import WhyChooseUs from "../components/HomeComponents/WhyChooseUs";
const GetTouch = React.lazy(() =>
  import("../components/HomeComponents/GetTouch")
);
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Portfolio />
      <Testimonials />
      <Suspense fallback={<NexflowLoader />}>
        <FAQs />
        <GetTouch />
      </Suspense>
    </div>
  );
}
