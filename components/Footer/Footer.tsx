"use client";

import Link from "next/link";
import Image from "next/image";
import {
  PhoneCall,
  MessageCircle,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css";
import { siteConfig } from "@/data/site";

const quickLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topGlow} />

      <div className={styles.container}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logoWrap}>
            <Image
              src="/images/logo/nzm-logo.png"
              alt="NZM Motors"
              width={260}
              height={110}
              className={styles.logo}
              priority={false}
            />
          </Link>

          <p>
            Nazım Ateş liderliğinde mekanik, elektrik, kaporta, bakım, motor,
            şanzıman ve arıza tespit alanlarında güçlü işçilik ve güvenilir
            servis anlayışı sunuyoruz.
          </p>

          <div className={styles.brandActions}>
            <a href={`tel:${siteConfig.phone}`} className={styles.primaryAction}>
              <PhoneCall size={17} />
              <span>{siteConfig.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryAction}
            >
              <MessageCircle size={17} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h4>Hızlı Menü</h4>

          <div className={styles.links}>
            {quickLinks.map((item) => (
              <Link key={item.href} href={item.href} className={styles.menuLink}>
                <span>{item.label}</span>
                <ArrowUpRight size={16} className={styles.linkIcon} />
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <h4>İletişim</h4>

          <div className={styles.infoList}>
            <a href={`tel:${siteConfig.phone}`} className={styles.infoItem}>
              <span className={styles.iconBox}>
                <PhoneCall size={16} />
              </span>
              <span>{siteConfig.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className={styles.infoItem}
            >
              <span className={`${styles.iconBox} ${styles.whatsappBox}`}>
                <MessageCircle size={16} />
              </span>
              <span>WhatsApp'tan Ulaşın</span>
            </a>

            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className={styles.infoItem}
            >
              <span className={`${styles.iconBox} ${styles.instagramBox}`}>
                <FaInstagram size={16} />
              </span>
              <span>Instagram'da Takip Et</span>
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h4>Adres</h4>

          <div className={styles.addressCard}>
            <div className={styles.addressTop}>
              <span className={styles.iconBox}>
                <MapPin size={16} />
              </span>
              <span>{siteConfig.address}</span>
            </div>

            <a
              href={siteConfig.maps}
              target="_blank"
              rel="noreferrer"
              className={styles.mapLink}
            >
              <span>Google Maps’te Aç</span>
              <ArrowUpRight size={16} className={styles.linkIcon} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomContent}>
          <p>© {new Date().getFullYear()} NZM Motors. Tüm hakları saklıdır.</p>
          <div className={styles.legalLinks}>
            <Link href="#">Gizlilik Politikası</Link>
            <span className={styles.dot}>•</span>
            <Link href="#">Kullanım Koşulları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}