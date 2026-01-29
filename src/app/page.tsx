import { Metadata } from "next";
import HomeClient from "@/components/Home/HomeClient";

export const metadata: Metadata = {
  title: "Nexflow Technologies | Elite Digital Strategy & Innovation",
  description: "Transform your digital footprint with Nexflow. We specialize in ROI-driven marketing, precision development, and elite growth strategies for SaaS and scaling businesses.",
};

export default function Home() {
  return <HomeClient />;
}
