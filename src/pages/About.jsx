import React, { Suspense } from "react";

import AboutHero from "../components/AboutComponents/AboutHero";
import Discover from "../components/AboutComponents/Discover";
const AbouServices = React.lazy(
  () => import("../components/AboutComponents/AbouServices"),
);
import AboutCTA from "../components/AboutComponents/AboutCTA";
import NexflowLoader from "../components/Helper/NexflowLoader";

export default function About() {
  return (
    <div className="bg-black text-white md:pt-16 min-h-screen overflow-hidden">
      <AboutHero />
      <Discover />
      <Suspense fallback={<NexflowLoader />}>
        <AbouServices />
      </Suspense>
      <AboutCTA />
    </div>
  );
}
