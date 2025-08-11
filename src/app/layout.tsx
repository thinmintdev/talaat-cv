import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import type React from "react";
import { ErrorBoundary } from "@/components/error-boundary";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { RESUME_DATA } from "@/data/resume-data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(RESUME_DATA.personalWebsiteUrl),
  title: {
    default: `${RESUME_DATA.name} - ${RESUME_DATA.about}`,
    template: `%s | ${RESUME_DATA.name}`,
  },
  description: RESUME_DATA.about,
  keywords: [
    "resume",
    "cv",
    "portfolio",
    RESUME_DATA.name,
    "software engineer",
    "full stack developer",
    "react",
    "next.js",
    "typescript",
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
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable}`}>
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
      <body className="font-mono">
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
