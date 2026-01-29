import { Metadata } from "next";
import FunnelAuditClient from "@/components/Resources/FunnelAuditClient";

export const metadata: Metadata = {
  title: "Free SaaS Funnel Audit",
  description: "Discover leaks in your acquisition funnel. Get a professional 30-point audit and actionable scaling blueprint from Nexflow.",
};

export default function FunnelAudit() {
  return <FunnelAuditClient />;
}
