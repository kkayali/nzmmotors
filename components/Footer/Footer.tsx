import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin, MessageCircle, PhoneCall, Star } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { getWhatsAppUrl, siteConfig } from "@/data/site";
import styles from "./Footer.module.css";

const navigation = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/#calismalar", label: "Çalışmalarımız" },
  { href: "/#yorumlar", label: "Müşteri Yorumları" },
  { href: "/#sik-sorulanlar", label: "Sık Sorulanlar" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandColumn}>
          <Link href="/" className={styles.logoLink} aria-label="NZM Motors ana sayfa">
            <Image
              src="/images/logo/nzm-logo.png"
              alt="NZM Motors"
              width={1536}
              height={1024}
              className={styles.logo}
            />
          </Link>
          <p>
            Nazım Ateş liderliğinde mekanik, motor, şanzıman, elektrik, kaporta ve bakım işlemlerinde güvenilir servis yaklaşımı.
          </p>
          <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className={styles.whatsappLink}>
            <MessageCircle size={17} /> WhatsApp’tan Ulaşın
          </a>
        </div>

        <div className={styles.column}>
          <h2>Sayfalar</h2>
          <nav className={styles.linkList} aria-label="Alt menü">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.column}>
          <h2>İletişim</h2>
          <div className={styles.contactList}>
            <a href={`tel:${siteConfig.phone}`}>
              <PhoneCall size={16} />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a href={siteConfig.maps} target="_blank" rel="noreferrer">
              <MapPin size={16} />
              <span>{siteConfig.shortAddress}</span>
            </a>
            <div>
              <Clock3 size={16} />
              <span>{siteConfig.workingHours}</span>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <h2>Sosyal ve Yorumlar</h2>
          <div className={styles.socialList}>
            <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className={styles.socialLink}>
              <FaInstagram size={17} />
              <span>Instagram’da Takip Edin</span>
              <ArrowUpRight size={15} />
            </a>
            <a href={siteConfig.googleBusiness} target="_blank" rel="noreferrer" className={styles.socialLink}>
              <Star size={17} />
              <span>Google Yorumlarını Gör</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
          <a href={siteConfig.maps} target="_blank" rel="noreferrer" className={styles.mapLink}>
            Google Maps’te Yol Tarifi
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p>© {new Date().getFullYear()} NZM Motors. Tüm hakları saklıdır.</p>
          <nav className={styles.legalLinks} aria-label="Yasal bağlantılar">
            <Link href="/gizlilik-politikasi">Gizlilik</Link>
            <Link href="/kvkk">KVKK</Link>
            <Link href="/cerez-politikasi">Çerezler</Link>
          </nav>
          <span>İstanbul</span>
        </div>
      </div>
    </footer>
  );
}