import { MetadataRoute } from "next";
import { ServicesData, mainportfolioData, BlogData } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexflow.tech";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/Portfolio",
    "/saas-roi",
    "/funnel-audit",
    "/CaseStudies",
    "/PrivacyPolicy",
    "/Terms",
    "/CookiesPolicy",
    "/ThankYou",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic service routes
  const serviceRoutes = ServicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Dynamic portfolio routes
  const portfolioRoutes = mainportfolioData.map((project) => ({
    url: `${baseUrl}/Portfolio/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic blog routes
  const blogRoutes = BlogData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...portfolioRoutes, ...blogRoutes];
}
