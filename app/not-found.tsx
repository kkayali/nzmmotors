import Link from "next/link";
import { ArrowLeft, Home, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/data/site";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main id="main-content" className={styles.page}>
      <span className={styles.code}>404</span>
      <p className={styles.eyebrow}>Sayfa bulunamadı</p>
      <h1>Aradığınız sayfa burada değil.</h1>
      <p className={styles.description}>
        Bağlantı değişmiş veya sayfa kaldırılmış olabilir. Ana sayfaya dönebilir ya da servis bilgisi için bize ulaşabilirsiniz.
      </p>
      <div className={styles.actions}>
        <Link href="/">
          <Home size={18} /> Ana Sayfa
        </Link>
        <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>
      <Link href="/hizmetler" className={styles.backLink}>
        <ArrowLeft size={16} /> Hizmetleri incele
      </Link>
    </main>
  );
}