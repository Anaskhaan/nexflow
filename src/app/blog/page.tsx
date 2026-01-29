import { Metadata } from "next";
import BlogListingClient from "@/components/Blog/BlogListingClient";

export const metadata: Metadata = {
  title: "The Nexflow Journal | Insights on Scaling & Innovation",
  description: "Deep dives into engineering velocity, marketing dominance, and the future of digital commerce. Join 5,000+ engineers and founders getting our weekly intelligence.",
  openGraph: {
    title: "The Nexflow Journal | Elite Digital Intelligence",
    description: "Deep dives into engineering velocity and marketing dominance.",
    images: ["/og-image.jpg"],
  },
};

export default function BlogListingPage() {
  return <BlogListingClient />;
}
