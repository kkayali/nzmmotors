import {
  ArrowUpRight,
  Clock3,
  MapPin,
  MessageCircle,
  Navigation,
  PhoneCall,
  Star,
} from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/data/site";
import styles from "./MapSection.module.css";

export default function MapSection() {
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.address
  )}&z=16&output=embed`;

  return (
    <section id="konum" className={styles.section} aria-labelledby="map-title">
      <div className={styles.container}>
        <div className={styles.info}>
          <span className={styles.eyebrow}>Konum ve Çalışma Saatleri</span>
          <h2 id="map-title">Servise ulaşmak için yolunuzu uzatmayın.</h2>
          <p className={styles.description}>
            Akınsal Sanayi Sitesi içerisindeki servisimize Google Maps üzerinden
            doğrudan yol tarifi alabilir veya gelmeden önce bize ulaşabilirsiniz.
          </p>

          <div className={styles.infoCards}>
            <div className={styles.addressCard}>
              <span className={styles.addressIcon} aria-hidden="true">
                <MapPin size={21} strokeWidth={1.8} />
              </span>
              <div>
                <small>NZM Motors adresi</small>
                <strong>{siteConfig.shortAddress}</strong>
                <p>{siteConfig.address}</p>
              </div>
            </div>

            <div className={styles.hoursCard}>
              <Clock3 size={20} aria-hidden="true" />
              <div>
                <small>Çalışma saatleri</small>
                <strong>{siteConfig.workingHours}</strong>
                <p>Gelmeden önce telefon veya WhatsApp üzerinden bilgi alabilirsiniz.</p>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <a
              href={siteConfig.maps}
              target="_blank"
              rel="noreferrer"
              className={styles.primaryAction}
            >
              <Navigation size={17} />
              Yol Tarifi Al
              <ArrowUpRight size={16} />
            </a>
            <a href={`tel:${siteConfig.phone}`} className={styles.secondaryAction}>
              <PhoneCall size={17} />
              Ara
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryAction}
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>
            <a
              href={siteConfig.googleBusiness}
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryAction}
            >
              <Star size={17} />
              Google Profili
            </a>
          </div>
        </div>

        <div className={styles.mapWrap}>
          <iframe
            src={embedSrc}
            className={styles.mapFrame}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="NZM Motors Google Maps konumu"
          />
          <div className={styles.mapOverlay} aria-hidden="true" />
          <a
            href={siteConfig.maps}
            target="_blank"
            rel="noreferrer"
            className={styles.mapBadge}
          >
            Haritalarda aç
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}