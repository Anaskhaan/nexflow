import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/tmp/", "/.gemini/", "/_next/"],
    },
    sitemap: "https://nexflow.tech/sitemap.xml",
  };
}
