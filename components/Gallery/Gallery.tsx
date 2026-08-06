"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { galleryItems } from "@/data/gallery";
import { siteConfig } from "@/data/site";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? null : (current + 1) % galleryItems.length
        );
      }
      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null
            ? null
            : (current - 1 + galleryItems.length) % galleryItems.length
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex]);

  const selected = selectedIndex === null ? null : galleryItems[selectedIndex];

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === null ? null : (current - 1 + galleryItems.length) % galleryItems.length
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % galleryItems.length
    );
  };

  return (
    <section id="calismalar" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headingRow}>
          <SectionTitle
            eyebrow="Gerçek Çalışmalar"
            title="Sözden Önce İşçilik Konuşsun"
            description="Serviste gerçekleştirilen motor, bakım ve onarım çalışmalarından seçilmiş gerçek kareler."
            light
          />

          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            className={styles.instagramLink}
          >
            Instagram’da Tümünü Gör
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className={styles.scroller} aria-label="NZM Motors çalışma galerisi">
          {galleryItems.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={styles.card}
              onClick={() => setSelectedIndex(index)}
              aria-label={`${item.title} görselini büyüt`}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 620px) 78vw, (max-width: 980px) 42vw, 25vw"
                  className={styles.image}
                />
                <div className={styles.overlay} />
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <div className={styles.caption}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className={styles.openLabel}>Büyüt</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <p className={styles.scrollHint}>Çalışmaları incelemek için yatay kaydırın veya görsele dokunun.</p>
      </div>

      {selected ? (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} görseli`}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setSelectedIndex(null);
          }}
        >
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setSelectedIndex(null)}
            aria-label="Galeriyi kapat"
          >
            <X size={23} />
          </button>

          <button type="button" className={`${styles.navButton} ${styles.previous}`} onClick={showPrevious} aria-label="Önceki görsel">
            <ArrowLeft size={22} />
          </button>

          <div className={styles.lightboxCard}>
            <div className={styles.lightboxImage}>
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                sizes="90vw"
                className={styles.lightboxPhoto}
                priority
              />
            </div>
            <div className={styles.lightboxCaption}>
              <span>{String((selectedIndex ?? 0) + 1).padStart(2, "0")} / {String(galleryItems.length).padStart(2, "0")}</span>
              <h3>{selected.title}</h3>
              <p>{selected.text}</p>
            </div>
          </div>

          <button type="button" className={`${styles.navButton} ${styles.next}`} onClick={showNext} aria-label="Sonraki görsel">
            <ArrowRight size={22} />
          </button>
        </div>
      ) : null}
    </section>
  );
}