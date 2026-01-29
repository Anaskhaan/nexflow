import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/Legal/CookieConsent";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: "https://nexflow.tech",
  title: {
    default: "Nexflow Technologies | Elite Digital Strategy & Innovation",
    template: "%s | Nexflow Technologies"
  },
  description: "Transform your digital footprint with Nexflow. We specialize in ROI-driven marketing, precision development, and elite growth strategies for SaaS and scaling businesses.",
  keywords: ["Digital Marketing", "SaaS Growth", "ROI Strategy", "Web Development", "Funnel Optimization", "Nexflow Technologies"],
  authors: [{ name: "Anas Khan" }],
  creator: "Anas Khan",
  publisher: "Nexflow Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexflow.tech",
    siteName: "Nexflow Technologies",
    title: "Nexflow Technologies | Elite Digital Strategy & Innovation",
    description: "Transform your digital footprint with Nexflow. Elite growth strategies for SaaS and scaling businesses.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexflow Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexflow Technologies | Elite Digital Strategy & Innovation",
    description: "Transform your digital footprint with Nexflow. Elite growth strategies for SaaS and scaling businesses.",
    images: ["/og-image.jpg"],
    creator: "@anas_khan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${roboto.variable} antialiased bg-black`}>
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
