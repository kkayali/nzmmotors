"use client";

import { motion } from "framer-motion";
import { PhoneCall, MessageCircle, MapPin, UserCircle2 } from "lucide-react";
import styles from "./Hero.module.css";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.photoSide} />
      <div className={styles.photoShade} />
      <div className={styles.overlay} />
      <div className={styles.glowLeft} />
      <div className={styles.glowRight} />
      <div className={styles.gridLines} />

      <div className={styles.content}>
        <motion.span
          className={styles.badge}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          Profesyonel Oto Servis Deneyimi
        </motion.span>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05 }}
        >
          Güvenilir Usta Dokunuşu,
          <span> Güçlü Servis Deneyimi</span>
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
        >
          Nazım Ateş liderliğinde mekanik, elektrik, kaporta, bakım, arıza
          tespiti, yürüyen aksam ve fren sistemlerinde profesyonel, hızlı ve
          güvenilir oto servis hizmeti sunuyoruz.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          <a href={`tel:${siteConfig.phone}`} className={styles.primaryBtn}>
            <PhoneCall size={18} />
            <span>Hemen Ara</span>
          </a>

          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className={styles.whatsappBtn}
          >
            <MessageCircle size={18} />
            <span>WhatsApp’tan Yaz</span>
          </a>

          <a
            href={siteConfig.maps}
            target="_blank"
            rel="noreferrer"
            className={styles.locationBtn}
          >
            <MapPin size={18} />
            <span>Konum Aç</span>
          </a>
        </motion.div>

        <motion.div
          className={styles.infoRow}
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28 }}
        >
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <UserCircle2 size={18} />
            </div>
            <div>
              <strong>Usta</strong>
              <span>{siteConfig.owner}</span>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <PhoneCall size={18} />
            </div>
            <div>
              <strong>Telefon</strong>
              <span>{siteConfig.phoneDisplay}</span>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <MapPin size={18} />
            </div>
            <div>
              <strong>Konum</strong>
              <span>Maltepe / Akınsal Sanayi Sitesi</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}