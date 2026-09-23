// Dosya: components/Analytics/Analytics.tsx

"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

const CONSENT_KEY = "nzm-cookie-consent";
const CONSENT_EVENT = "nzm-consent-changed";

const GOOGLE_ADS_CONTACT_CONVERSION =
  "AW-18432072846/hyvsCKXSvfAcEI65jNVE";

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
  useEffect(() => {
    const syncConsent = () => {
      const accepted =
        window.localStorage.getItem(CONSENT_KEY) === "accepted";

      updateGoogleConsent(accepted);
    };

    syncConsent();

    window.addEventListener(CONSENT_EVENT, syncConsent);

    return () => {
      window.removeEventListener(CONSENT_EVENT, syncConsent);
    };
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");

      if (!anchor || !window.gtag) return;

      const href = anchor.getAttribute("href") || "";
      const linkText = anchor.textContent?.trim() || undefined;

      let eventName: string | null = null;
      let isContactConversion = false;

      if (href.startsWith("tel:")) {
        eventName = "phone_click";
        isContactConversion = true;
      } else if (
        href.includes("wa.me") ||
        href.includes("whatsapp.com")
      ) {
        eventName = "whatsapp_click";
        isContactConversion = true;
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

      // Analytics tarafında tıklama türünü ayrı ayrı kaydeder.
      window.gtag("event", eventName, {
        link_url: href,
        link_text: linkText,
        page_location: window.location.href,
        page_title: document.title,
      });

      // Telefon veya WhatsApp tıklamasını Google Ads dönüşümü sayar.
      if (isContactConversion) {
        window.gtag("event", "conversion", {
          send_to: GOOGLE_ADS_CONTACT_CONVERSION,
          event_timeout: 2000,
          contact_method:
            eventName === "phone_click" ? "phone" : "whatsapp",
          page_location: window.location.href,
        });
      }
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}