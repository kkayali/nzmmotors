"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

const CONSENT_KEY = "nzm-cookie-consent";
const CONSENT_EVENT = "nzm-consent-changed";

export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      setHasConsent(window.localStorage.getItem(CONSENT_KEY) === "accepted");
    };

    syncConsent();
    window.addEventListener(CONSENT_EVENT, syncConsent);
    return () => window.removeEventListener(CONSENT_EVENT, syncConsent);
  }, []);

  useEffect(() => {
    if (!hasConsent) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor || !window.gtag) return;

      const href = anchor.getAttribute("href") || "";
      let eventName: string | null = null;

      if (href.startsWith("tel:")) eventName = "phone_click";
      else if (href.includes("wa.me")) eventName = "whatsapp_click";
      else if (href.includes("maps") || href.includes("google.com/maps")) eventName = "directions_click";
      else if (href.includes("instagram.com")) eventName = "instagram_click";
      else if (href.includes("share.google")) eventName = "google_business_click";

      if (eventName) {
        window.gtag("event", eventName, {
          link_url: href,
          link_text: anchor.textContent?.trim() || undefined,
        });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [hasConsent]);

  const primaryId = gaId || adsId;
  if (!primaryId || !hasConsent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="nzm-google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          ${gaId ? `gtag('config', '${gaId}', { anonymize_ip: true });` : ""}
          ${adsId ? `gtag('config', '${adsId}');` : ""}
        `}
      </Script>
    </>
  );
}