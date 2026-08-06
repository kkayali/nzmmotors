import Image from "next/image";
import { ArrowUpRight, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import styles from "./Hero.module.css";
import { getWhatsAppUrl, siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            Akınsal Sanayi Sitesi’nde profesyonel oto servis
          </div>

          <h1 id="hero-title" className={styles.title}>
            Aracınızı güvenle teslim edebileceğiniz
            <span> güçlü servis işçiliği.</span>
          </h1>

          <p className={styles.description}>
            Nazım Ateş liderliğinde motor, mekanik, şanzıman, elektrik, kaporta,
            periyodik bakım ve arıza tespit işlemlerinde doğru teşhis ve titiz
            uygulama sunuyoruz.
          </p>

          <div className={styles.actionArea}>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className={styles.primaryAction}
            >
              <MessageCircle size={20} />
              <span>WhatsApp’tan Randevu Al</span>
              <ArrowUpRight size={18} />
            </a>

            <div className={styles.quickLinks} aria-label="Hızlı iletişim bağlantıları">
              <a href={`tel:${siteConfig.phone}`}>
                <PhoneCall size={16} />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <span className={styles.separator} aria-hidden="true" />
              <a href={siteConfig.maps} target="_blank" rel="noreferrer">
                <MapPin size={16} />
                <span>Yol Tarifi</span>
              </a>
            </div>
          </div>

          <div className={styles.proofRow}>
            <span>Doğru teşhis</span>
            <span>İşlem öncesi bilgilendirme</span>
            <span>Temiz ve titiz işçilik</span>
          </div>
        </div>

        <div className={styles.visual} aria-label="NZM Motors servis görünümü">
          <Image
            src="/images/hero/nzm-garage.png"
            alt="NZM Motors servis dış görünümü ve servis önündeki araçlar"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
            className={styles.image}
          />
          <div className={styles.imageShade} />
          <div className={styles.visualBadge}>
            <span className={styles.visualBadgeLabel}>NZM Motors</span>
            <strong>Gerçek servis. Gerçek işçilik.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}