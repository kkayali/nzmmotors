// Dosya: components/Analytics/Analytics.tsx

"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

const CONSENT_KEY = "nzm-cookie-consent";
const CONSENT_EVENT = "nzm-consent-changed";

function updateGoogleConsent(hasConsent: boolean) {
  const consentValue = hasConsent ? "granted" : "denied";

  window.gtag?.("consent", "update", {
    ad_storage: consentValue,
    ad_user_data: consentValue,
    ad_personalization: consentValue,
    analytics_storage: consentValue,
  });
}

export default function Analytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      const accepted =
        window.localStorage.getItem(CONSENT_KEY) === "accepted";

      setHasConsent(accepted);
      updateGoogleConsent(accepted);
    };

    syncConsent();

    window.addEventListener(CONSENT_EVENT, syncConsent);

    return () => {
      window.removeEventListener(CONSENT_EVENT, syncConsent);
    };
  }, []);

  useEffect(() => {
    if (!hasConsent) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");

      if (!anchor || !window.gtag) return;

      const href = anchor.getAttribute("href") || "";
      let eventName: string | null = null;

      if (href.startsWith("tel:")) {
        eventName = "phone_click";
      } else if (
        href.includes("wa.me") ||
        href.includes("whatsapp.com")
      ) {
        eventName = "whatsapp_click";
      } else if (
        href.includes("maps") ||
        href.includes("google.com/maps")
      ) {
        eventName = "directions_click";
      } else if (href.includes("instagram.com")) {
        eventName = "instagram_click";
      } else if (
        href.includes("share.google") ||
        href.includes("g.page")
      ) {
        eventName = "google_business_click";
      }

      if (!eventName) return;

      window.gtag("event", eventName, {
        link_url: href,
        link_text: anchor.textContent?.trim() || undefined,
        page_location: window.location.href,
        page_title: document.title,
      });
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [hasConsent]);

  return null;
}