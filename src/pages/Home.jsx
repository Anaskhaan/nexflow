import React from "react";
const FAQs = React.lazy(() => import("../components/FAQS"));
import { About } from "../components/HomeComponents/About";
import Hero from "../components/HomeComponents/Hero";
import { Services } from "../components/HomeComponents/Services";
const GetTouch = React.lazy(() =>
  import("../components/HomeComponents/GetTouch")
);
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <FAQs />
      <GetTouch />
    </div>
  );
}
