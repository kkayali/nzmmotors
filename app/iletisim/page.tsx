import type { Metadata } from "next";
import {
  ArrowUpRight,
  Clock3,
  MapPin,
  MessageCircle,
  Navigation,
  PhoneCall,
  Star,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import MapSection from "@/components/MapSection/MapSection";
import { getWhatsAppUrl, siteConfig } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "NZM Motors telefon, WhatsApp, Instagram, Google İşletme ve yol tarifi bilgilerine ulaşın; servis ve randevu bilgisi alın.",
  alternates: { canonical: "/iletisim" },
};

const contactItems = [
  {
    icon: PhoneCall,
    label: "Telefon",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Mesaj gönderin",
    href: getWhatsAppUrl(),
    external: true,
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "@nzm_motors",
    href: siteConfig.instagram,
    external: true,
  },
  {
    icon: Navigation,
    label: "Yol tarifi",
    value: "Google Maps'te açın",
    href: siteConfig.maps,
    external: true,
  },
];

export default function Iletisim() {
  return (
    <main id="main-content" className={styles.page}>
      <section className={styles.hero} aria-labelledby="contact-title">
        <div className={styles.pattern} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>İletişim</span>
              <h1 id="contact-title">Aracınızla ilgili bilgi almak artık tek dokunuş uzakta.</h1>
              <p>
                Aracınızın marka, model ve yaşadığınız sorunu kısaca iletin.
                Kontrol, servis süreci ve randevu hakkında size uygun iletişim
                kanalından bilgi alın.
              </p>
            </div>

            <div className={styles.primaryCard}>
              <span className={styles.primaryIcon} aria-hidden="true">
                <MessageCircle size={25} strokeWidth={1.8} />
              </span>
              <div>
                <small>En hızlı iletişim</small>
                <h2>WhatsApp’tan yazın</h2>
                <p>Marka, model ve şikâyetinizi yazarak servis bilgisi alın.</p>
              </div>
              <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
                Mesaj Gönder
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <div className={styles.contactGrid}>
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className={styles.contactCard}
                >
                  <span className={styles.contactIcon} aria-hidden="true">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                  <span className={styles.contactText}>
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </span>
                  <ArrowUpRight size={16} className={styles.arrow} />
                </a>
              );
            })}
          </div>

          <div className={styles.quickInfo}>
            <div>
              <MapPin size={17} />
              <span>{siteConfig.shortAddress}</span>
            </div>
            <div>
              <Clock3 size={17} />
              <span>{siteConfig.workingHours}</span>
            </div>
            <a href={siteConfig.googleBusiness} target="_blank" rel="noreferrer">
              <Star size={17} />
              <span>Google İşletme Profili ve Yorumlar</span>
            </a>
          </div>
        </div>
      </section>

      <MapSection />
    </main>
  );
}