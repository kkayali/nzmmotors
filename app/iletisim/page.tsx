import {
  PhoneCall,
  MessageCircle,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import styles from "./page.module.css";
import { siteConfig } from "@/data/site";
import MapSection from "@/components/MapSection/MapSection";

export default function Iletisim() {
  return (
    <main className={styles.contactPage}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroGlow} />

        <div className={styles.container}>
          <span className={styles.badge}>İletişim</span>

          <h1>NZM Motors ile Hızlıca İletişime Geçin</h1>

          <p>
            Telefon, WhatsApp, Instagram ve konum bilgileri üzerinden bize kolayca
            ulaşabilir, servis süreci hakkında hızlı şekilde bilgi alabilirsiniz.
          </p>

          <div className={styles.cards}>
            <a href={`tel:${siteConfig.phone}`} className={styles.card}>
              <div className={styles.cardIcon}>
                <PhoneCall size={18} />
              </div>
              <div className={styles.cardContent}>
                <strong>Telefon</strong>
                <span>{siteConfig.phoneDisplay}</span>
              </div>
              <ArrowUpRight size={16} className={styles.arrow} />
            </a>

            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className={styles.card}
            >
              <div className={`${styles.cardIcon} ${styles.whatsappIcon}`}>
                <MessageCircle size={18} />
              </div>
              <div className={styles.cardContent}>
                <strong>WhatsApp</strong>
                <span>Mesaj Gönder</span>
              </div>
              <ArrowUpRight size={16} className={styles.arrow} />
            </a>

            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className={styles.card}
            >
              <div className={`${styles.cardIcon} ${styles.instagramIcon}`}>
                <FaInstagram size={16} />
              </div>
              <div className={styles.cardContent}>
                <strong>Instagram</strong>
                <span>nzm_motors</span>
              </div>
              <ArrowUpRight size={16} className={styles.arrow} />
            </a>

            <a
              href={siteConfig.maps}
              target="_blank"
              rel="noreferrer"
              className={styles.card}
            >
              <div className={styles.cardIcon}>
                <MapPin size={18} />
              </div>
              <div className={styles.cardContent}>
                <strong>Konum</strong>
                <span>Google Maps’te Aç</span>
              </div>
              <ArrowUpRight size={16} className={styles.arrow} />
            </a>
          </div>
        </div>
      </section>

      <MapSection />
    </main>
  );
}