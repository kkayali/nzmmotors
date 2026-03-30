"use client";

import {
  PhoneCall,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import styles from "./ContactStrip.module.css";
import { siteConfig } from "@/data/site";

export default function ContactStrip() {
  return (
    <section className={styles.section}>
      {/* Arka plan premium aydınlatma efekti */}
      <div className={styles.bgGlow} />

      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.badge}>Hızlı İletişim</span>
          <h2>Aracınız İçin Hızlı Bilgi ve Randevu Alın</h2>
          <p>
            NZM Motors ile telefon veya WhatsApp üzerinden hızlı şekilde iletişime
            geçebilir, konum bilgisine ulaşabilir ve servisimiz hakkında detaylı
            bilgi alabilirsiniz.
          </p>
        </div>

        <div className={styles.right}>
          <a href={`tel:${siteConfig.phone}`} className={`${styles.btn} ${styles.primaryBtn}`}>
            <PhoneCall size={18} />
            <span>{siteConfig.phoneDisplay}</span>
          </a>

          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className={`${styles.btn} ${styles.whatsappBtn}`}
          >
            <MessageCircle size={18} />
            <span>WhatsApp’tan Yaz</span>
          </a>

          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            className={`${styles.btn} ${styles.instagramBtn}`}
          >
            <FaInstagram size={18} />
            <span>Instagram</span>
          </a>

          <a
            href={siteConfig.maps}
            target="_blank"
            rel="noreferrer"
            className={`${styles.btn} ${styles.mapBtn}`}
          >
            <MapPin size={18} />
            <span>Konum Aç</span>
          </a>
        </div>
      </div>
    </section>
  );
}