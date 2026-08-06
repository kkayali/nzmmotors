import { ArrowUpRight, MapPin, MessageCircle, PhoneCall, Star } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { getWhatsAppUrl, siteConfig } from "@/data/site";
import styles from "./ContactStrip.module.css";

export default function ContactStrip() {
  return (
    <section className={styles.section} aria-labelledby="contact-strip-title">
      <div className={styles.container}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Hızlı İletişim</span>
          <h2 id="contact-strip-title">Aracınızla İlgili Bilgi Alın, Randevunuzu Planlayın</h2>
          <p>
            Sorunu kısaca anlatın. Araç kontrolü ve uygun servis süreci için sizinle iletişime geçelim. Çalışma saatleri: {siteConfig.workingHours}.
          </p>
        </div>

        <div className={styles.actions}>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className={styles.primaryAction}
          >
            <MessageCircle size={19} />
            WhatsApp’tan Randevu Al
          </a>

          <a href={`tel:${siteConfig.phone}`} className={styles.secondaryAction}>
            <PhoneCall size={19} />
            {siteConfig.phoneDisplay}
          </a>

          <div className={styles.smallLinks}>
            <a href={siteConfig.maps} target="_blank" rel="noreferrer">
              <MapPin size={15} /> Yol Tarifi
            </a>
            <a href={siteConfig.googleBusiness} target="_blank" rel="noreferrer">
              <Star size={15} /> Google Yorumları
            </a>
            <a href={siteConfig.instagram} target="_blank" rel="noreferrer">
              <FaInstagram size={15} /> Instagram
            </a>
            <ArrowUpRight size={15} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}