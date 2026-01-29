import { Metadata } from "next";
import SaasROIClient from "@/components/Resources/SaasROIClient";

export const metadata: Metadata = {
  title: "SaaS ROI Calculator",
  description: "Calculate your SaaS ROI with our advanced intelligence tool. Measure CAC, LTV, and growth potential with precision.",
};

export default function SaasROI() {
  return <SaasROIClient />;
}
