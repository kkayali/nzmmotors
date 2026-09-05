// Dosya: app/layout.tsx

import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import MobileActionBar from "@/components/MobileActionBar/MobileActionBar";
import StructuredData from "@/components/StructuredData/StructuredData";
import Analytics from "@/components/Analytics/Analytics";
import CookieConsent from "@/components/CookieConsent/CookieConsent";
import { siteConfig } from "@/data/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "NZM Motors | İstanbul Oto Servis ve Motor Onarımı",
    template: "%s | NZM Motors",
  },
  description:
    "NZM Motors; motor, mekanik, şanzıman, elektrik, kaporta, periyodik bakım ve arıza tespit hizmetleri sunan İstanbul özel oto servisidir.",
  applicationName: "NZM Motors",
  category: "automotive",
  keywords: [
    "İstanbul oto servis",
    "Akınsal Sanayi Sitesi oto servis",
    "motor onarımı",
    "arıza tespiti",
    "şanzıman onarımı",
    "periyodik bakım",
    "NZM Motors",
    "Nazım Ateş",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: siteConfig.name,
    title: "NZM Motors | İstanbul Oto Servis ve Motor Onarımı",
    description:
      "Doğru teşhis, açık bilgilendirme ve titiz uygulama odaklı özel oto servis.",
    images: [
      {
        url: "/images/hero/nzm-garage.png",
        width: 1200,
        height: 630,
        alt: "NZM Motors servis görünümü",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NZM Motors | İstanbul Oto Servis",
    description:
      "Motor, mekanik, arıza tespiti ve periyodik bakım hizmetleri.",
    images: ["/images/hero/nzm-garage.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070707",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${manrope.variable} ${barlowCondensed.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8230285568916898"
          crossOrigin="anonymous"
        />
      </head>

      <body>
        <StructuredData />
        <Analytics />

        <a className="skipLink" href="#main-content">
          İçeriğe geç
        </a>

        <Navbar />

        {children}

        <Footer />
        <WhatsAppButton />
        <MobileActionBar />
        <CookieConsent />
      </body>
    </html>
  );
}