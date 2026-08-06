"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall, MapPin } from "lucide-react";
import styles from "./Navbar.module.css";
import { siteConfig } from "@/data/site";

type NavItem = {
  href: string;
  label: string;
  section?: boolean;
};

const navLinks: NavItem[] = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/#calismalar", label: "Çalışmalarımız", section: true },
  { href: "/#yorumlar", label: "Yorumlar", section: true },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const isActive = (item: NavItem) => {
    if (item.section) return false;
    if (item.href === "/") return pathname === "/";
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Ana menü">
        <Link href="/" className={styles.brand} aria-label="NZM Motors ana sayfa">
          <Image
            src="/images/logo/nzm-logo.png"
            alt="NZM Motors"
            width={1536}
            height={1024}
            className={styles.logo}
            priority
          />
        </Link>

        <div className={styles.desktopLinks}>
          {navLinks.map((item) => {
            const className = `${styles.navLink} ${isActive(item) ? styles.active : ""}`;

            return item.section ? (
              <a key={item.href} href={item.href} className={className}>
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={className}
                aria-current={isActive(item) ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className={styles.desktopActions}>
          <a
            href={siteConfig.maps}
            target="_blank"
            rel="noreferrer"
            className={styles.locationButton}
            aria-label="Google Maps'te yol tarifi aç"
            title="Yol tarifi"
          >
            <MapPin size={18} />
          </a>

          <a href={`tel:${siteConfig.phone}`} className={styles.callButton}>
            <PhoneCall size={18} />
            <span>Hemen Ara</span>
          </a>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`${styles.mobilePanel} ${isOpen ? styles.mobilePanelOpen : ""}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.mobileInner}>
          <div className={styles.mobileLinks}>
            {navLinks.map((item) => {
              const className = `${styles.mobileLink} ${isActive(item) ? styles.mobileLinkActive : ""}`;

              return item.section ? (
                <a
                  key={item.href}
                  href={item.href}
                  className={className}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={className}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className={styles.mobileActions}>
            <a href={`tel:${siteConfig.phone}`} className={styles.mobilePrimary}>
              <PhoneCall size={18} />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={siteConfig.maps}
              target="_blank"
              rel="noreferrer"
              className={styles.mobileSecondary}
            >
              <MapPin size={18} />
              <span>Yol Tarifi</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}