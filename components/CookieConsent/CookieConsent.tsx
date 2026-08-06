"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import styles from "./CookieConsent.module.css";

const CONSENT_KEY = "nzm-cookie-consent";
const CONSENT_EVENT = "nzm-consent-changed";

export default function CookieConsent() {
  const analyticsEnabled = Boolean(
    process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
  );
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!analyticsEnabled) return;
    const timer = window.setTimeout(() => {
      setIsVisible(window.localStorage.getItem(CONSENT_KEY) === null);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [analyticsEnabled]);

  if (!analyticsEnabled || !isVisible) return null;

  const saveConsent = (value: "accepted" | "essential") => {
    window.localStorage.setItem(CONSENT_KEY, value);
    window.dispatchEvent(new Event(CONSENT_EVENT));
    setIsVisible(false);
  };

  return (
    <aside className={styles.banner} aria-label="Çerez tercihi">
      <button
        type="button"
        className={styles.close}
        onClick={() => saveConsent("essential")}
        aria-label="Yalnızca gerekli çerezlerle devam et"
      >
        <X size={18} />
      </button>
      <span className={styles.icon} aria-hidden="true"><Cookie size={21} /></span>
      <div className={styles.copy}>
        <strong>Çerez tercihiniz</strong>
        <p>
          Site performansını ölçmek için isteğe bağlı analiz çerezleri kullanabiliriz.
          Ayrıntılar için <Link href="/cerez-politikasi">Çerez Politikası</Link>.
        </p>
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={() => saveConsent("essential")}>Yalnızca Gerekli</button>
        <button type="button" onClick={() => saveConsent("accepted")}>Kabul Et</button>
      </div>
    </aside>
  );
}