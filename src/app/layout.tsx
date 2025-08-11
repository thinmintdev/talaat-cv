import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Space_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import type React from "react";
import { ErrorBoundary } from "@/components/error-boundary";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { RESUME_DATA } from "@/data/resume-data";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(RESUME_DATA.personalWebsiteUrl),
  title: {
    default: `${RESUME_DATA.name} - ${RESUME_DATA.about}`,
    template: `%s | ${RESUME_DATA.name}`,
  },
  description: RESUME_DATA.about,
  keywords: [
    // Core professional terms
    "resume",
    "cv", 
    "portfolio",
    RESUME_DATA.name,
    "software engineer",
    "full stack developer",
    
    // Technology stack
    "react developer",
    "next.js developer", 
    "typescript developer",
    "node.js developer",
    "wordpress developer",
    "javascript developer",
    
    // Location-based keywords
    "washington dc developer",
    "dc area software engineer", 
    "washington developer",
    "dmv area developer",
    "remote developer",
    
    // Service-based long-tail keywords
    "custom wordpress development",
    "react web development",
    "full stack web development",
    "wordpress plugin development",
    "headless cms development", 
    "e-commerce development",
    "web application development",
    "api development",
    "database design",
    "responsive web design",
    
    // Industry expertise
    "saas development",
    "startup developer",
    "freelance developer",
    "consultant developer",
    "technical lead",
    
    // Specific skills
    "postgresql developer",
    "mongodb developer", 
    "tailwind css",
    "graphql developer",
    "performance optimization",
    "seo optimization",
    "web accessibility",
  ],
  authors: [{ name: RESUME_DATA.name }],
  creator: RESUME_DATA.name,
  publisher: RESUME_DATA.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: RESUME_DATA.personalWebsiteUrl,
    siteName: `${RESUME_DATA.name}'s CV`,
    title: `${RESUME_DATA.name} - ${RESUME_DATA.about}`,
    description: RESUME_DATA.about,
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
  twitter: {
    card: "summary_large_image",
    title: `${RESUME_DATA.name} - ${RESUME_DATA.about}`,
    description: RESUME_DATA.about,
    creator: RESUME_DATA.contact.social.find(s => s.name === "X")?.url || RESUME_DATA.name,
  },
  alternates: {
    canonical: RESUME_DATA.personalWebsiteUrl,
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1862e6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceMono.variable}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-L8E62W649E"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-L8E62W649E');
        `}
      </Script>
      <body className="font-space-mono">
        <ErrorBoundary>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </ErrorBoundary>
      </body>
      <Analytics />
    </html>
  );
}
