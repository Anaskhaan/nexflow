import { Metadata } from "next";
import AboutClient from "@/components/About/AboutClient";

export const metadata: Metadata = {
  title: "About Us | Nexflow Technologies",
  description: "Learn about Nexflow's mission, values, and the expert team driving digital transformation for businesses worldwide.",
};

export default function About() {
  return <AboutClient />;
}
