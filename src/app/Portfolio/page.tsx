import { Metadata } from "next";
import PortfolioClient from "@/components/Portfolio/PortfolioClient";

export const metadata: Metadata = {
  title: "Our Portfolio | Nexflow Technologies",
  description: "Browse our finest digital products and strategic marketing campaigns. See how we help brands scale with innovative digital solutions.",
};

export default function Portfolio() {
  return <PortfolioClient />;
}
