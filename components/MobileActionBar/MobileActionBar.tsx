import { MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/data/site";
import styles from "./MobileActionBar.module.css";

export default function MobileActionBar() {
  return (
    <nav className={styles.bar} aria-label="Hızlı iletişim">
      <a href={`tel:${siteConfig.phone}`} aria-label="NZM Motors'u ara">
        <PhoneCall size={19} />
        <span>Ara</span>
      </a>

      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noreferrer"
        className={styles.primary}
        aria-label="WhatsApp'tan randevu al"
      >
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>

      <a
        href={siteConfig.maps}
        target="_blank"
        rel="noreferrer"
        aria-label="Google Maps'te yol tarifi al"
      >
        <MapPin size={19} />
        <span>Yol Tarifi</span>
      </a>
    </nav>
  );
}