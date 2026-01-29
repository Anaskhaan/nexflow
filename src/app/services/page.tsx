import { Metadata } from "next";
import ServicesClient from "@/components/Services/ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | Nexflow Technologies",
  description: "Explore our ROI-driven marketing, precision development, and elite growth strategies. From 360° Digital Marketing to AI & Automation.",
};

export default function Services() {
  return <ServicesClient />;
}
