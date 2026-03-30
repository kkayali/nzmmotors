"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { PhoneCall, Menu, X, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { siteConfig } from "@/data/site";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    // Cleanup function in case component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.headerGlow} />

      <nav className={styles.navbar}>
        <Link href="/" className={styles.brand} onClick={() => setIsOpen(false)}>
          <div className={styles.logoWrap}>
            <Image
              src="/images/logo/nzm-logo.png"
              alt="NZM Motors Logo"
              width={320}
              height={160}
              className={styles.logo}
              priority
            />
          </div>
        </Link>

        <div className={styles.desktopLinks}>
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className={styles.desktopActions}>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            className={`${styles.iconButton} ${styles.instagramButton}`}
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </a>

          <a
            href={siteConfig.maps}
            target="_blank"
            rel="noreferrer"
            className={`${styles.iconButton} ${styles.locationButton}`}
            aria-label="Konum"
          >
            <MapPin size={18} />
          </a>

          <a 
            href={`tel:${siteConfig.phone}`} 
            className={styles.callButton}
            title="Bizi arayın"
          >
            <PhoneCall size={18} />
            <span>Hemen Ara</span>
          </a>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div className={`${styles.mobilePanel} ${isOpen ? styles.mobilePanelOpen : ""}`}>
        <div className={styles.mobileLinks}>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className={styles.mobileActions}>
            <a
              href={`tel:${siteConfig.phone}`}
              className={styles.mobileCall}
              onClick={() => setIsOpen(false)}
            >
              <PhoneCall size={18} />
              <span>Hemen Ara</span>
            </a>

            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className={`${styles.mobileIconLink} ${styles.mobileInstagram}`}
              onClick={() => setIsOpen(false)}
            >
              <FaInstagram size={18} />
              <span>Instagram</span>
            </a>

            <a
              href={siteConfig.maps}
              target="_blank"
              rel="noreferrer"
              className={`${styles.mobileIconLink} ${styles.mobileLocation}`}
              onClick={() => setIsOpen(false)}
            >
              <MapPin size={18} />
              <span>Konum Aç</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}