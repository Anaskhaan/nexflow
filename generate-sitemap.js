import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream, existsSync, mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import format from "xml-formatter";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Determine if building for production
const isBuild = process.env.NODE_ENV === "production" || process.argv.includes("--prod");
const outputDir = isBuild ? path.join(__dirname, "dist") : path.join(__dirname, "public");
if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });

const outputPath = path.join(outputDir, "sitemap.xml");

const hostname = "https://nexflow.tech";

// Static pages
const staticPages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/About", changefreq: "monthly", priority: 0.7 },
  { url: "/Contact", changefreq: "monthly", priority: 0.7 },
  { url: "/Portfolio", changefreq: "weekly", priority: 0.8 },
  { url: "/CaseStudies", changefreq: "weekly", priority: 0.8 },
  { url: "/Services", changefreq: "weekly", priority: 0.9 },
  { url: "/Meeting", changefreq: "monthly", priority: 0.6 },
  { url: "/SaasRoi", changefreq: "monthly", priority: 0.6 },
  { url: "/FunnelAudit", changefreq: "monthly", priority: 0.6 },
  { url: "/Resources", changefreq: "monthly", priority: 0.6 },
  { url: "/PrivacyPolicy", changefreq: "monthly", priority: 0.5 },
  { url: "/Terms", changefreq: "monthly", priority: 0.5 },
  { url: "/CookiesPolicy", changefreq: "monthly", priority: 0.5 },
  { url: "/ThankYou", changefreq: "monthly", priority: 0.5 },
];

// Dynamic services array
// If you have this array exported from your Services component, you can import it.
// For now, define it here for simplicity.
const services = [
  { slug: "social-media-marketing" },
  { slug: "seo-optimization" },
  { slug: "web-development" },
  { slug: "branding" },
  { slug: "ui-ux-designing" },
  { slug: "app-development" },
  { slug: "ppc-campaigns" },
  { slug: "app-store-optimization" },
  { slug: "ai-image-processing" },
];

// Map dynamic service slugs to URLs
const dynamicPages = services.map((service) => ({
  url: `/Services/${service.slug}`,
  changefreq: "weekly",
  priority: 0.8,
}));

// Combine all pages
const allPages = [...staticPages, ...dynamicPages];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });

  // Write URLs to the sitemap stream
  allPages.forEach((link) => sitemap.write(link));
  sitemap.end();

  // Convert stream to XML string
  const xmlData = await streamToPromise(sitemap);

  // Format XML
  const formattedXML = format(xmlData.toString(), { indentation: "  " });

  // Write formatted XML to file
  const writeStream = createWriteStream(outputPath);
  writeStream.write(formattedXML);
  writeStream.end();

  writeStream.on("finish", () => {
    console.log(`✅ Sitemap generated and formatted at ${outputPath}`);
  });
}

generateSitemap();
