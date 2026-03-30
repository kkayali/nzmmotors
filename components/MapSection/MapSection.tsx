import { MapPin, PhoneCall, Navigation } from "lucide-react";
import styles from "./MapSection.module.css";
import { siteConfig } from "@/data/site";

export default function MapSection() {
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.address
  )}&z=16&output=embed`;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.info}>
          <span className={styles.badge}>Konum</span>
          <h2>Bizi Kolayca Bulun</h2>
          <p>
            Servisimize gelmek için harita bağlantısını kullanabilir, telefon ya da
            WhatsApp üzerinden de hızlı şekilde bize ulaşabilirsiniz.
          </p>

          <div className={styles.addressCard}>
            <div className={styles.addressTop}>
              <span className={styles.iconBox}>
                <MapPin size={17} />
              </span>
              <div>
                <strong>Adres</strong>
                <span>{siteConfig.address}</span>
              </div>
            </div>

            <div className={styles.actions}>
              <a href={siteConfig.maps} target="_blank" rel="noreferrer">
                <Navigation size={17} />
                <span>Haritayı Aç</span>
              </a>

              <a href={`tel:${siteConfig.phone}`}>
                <PhoneCall size={17} />
                <span>Ara</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.mapWrap}>
          <iframe
            src={embedSrc}
            className={styles.mapFrame}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="NZM Motors Google Maps Konumu"
          />
          <div className={styles.mapOverlay} />
        </div>
      </div>
    </section>
  );
}