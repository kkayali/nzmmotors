"use client";

import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import styles from "./Gallery.module.css";
import { galleryItems } from "@/data/gallery";

const loopItems = [...galleryItems, ...galleryItems];

export default function Gallery() {
  return (
    <section className={styles.section}>
      <div className={styles.bgGlow} />

      <div className={styles.container}>
        <SectionTitle
          eyebrow="Galeri"
          title="Gerçek İşçilikten Gerçek Kareler"
          description="NZM Motors’ta yapılan işlemleri, motor sökümlerini, revize süreçlerini ve servis içi çalışmaları Instagram Reels oranında güçlü bir vitrin alanında sunuyoruz."
          light
        />

        <div className={styles.sliderShell}>
          <div className={styles.sliderTrack}>
            {loopItems.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className={`${styles.card} ${
                  index % 2 === 0 ? styles.cardTiltLeft : styles.cardTiltRight
                }`}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 700px) 60vw, (max-width: 1100px) 34vw, 22vw"
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.playIconWrap}>
                      <FaInstagram size={26} className={styles.playIcon} />
                    </div>
                  </div>
                </div>

                <div className={styles.content}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}