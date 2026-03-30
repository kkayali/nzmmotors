"use client";

import Link from "next/link";
import Image from "next/image";
import { BadgeCheck, PhoneCall, ArrowRight } from "lucide-react";
import styles from "./AboutPreview.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { siteConfig } from "@/data/site";

export default function AboutPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <SectionTitle
            eyebrow="Hakkımızda"
            title="Tamirhaneye Değil, Güvenilir Bir Usta Ekibine Geliyorsunuz"
            description="NZM Motors, Nazım Ateş liderliğinde müşteri memnuniyetini, doğru teşhisi ve temiz işçiliği merkeze alan profesyonel bir oto servis anlayışıyla hizmet verir."
            light
          />

          <p className={styles.text}>
            Aracınızın ihtiyacı olan bakım ve onarım işlemlerinde yalnızca parça
            deşimine değil, sorunun kaynağını doğru tespit etmeye odaklanıyoruz.
            Mekanik, elektrik, kaporta, motor revizyonu, şanzıman işlemleri ve
            daha birçok alanda aracınızı güvenle teslim edebileceğiniz güçlü bir
            servis deneyimi sunuyoruz.
          </p>

          <div className={styles.features}>
            <div className={styles.featureCard}>
              <BadgeCheck size={22} className={styles.featureIcon} />
              <div className={styles.featureContent}>
                <strong>Doğru Teşhis</strong>
                <p>
                  Arızayı yüzeysel değil, kök nedenine inerek analiz ediyor ve
                  kalıcı çözümler üretiyoruz.
                </p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <BadgeCheck size={22} className={styles.featureIcon} />
              <div className={styles.featureContent}>
                <strong>Titiz İşçilik</strong>
                <p>
                  Her işlemde düzenli çalışma, temiz teslim ve profesyonel
                  uygulama anlayışını ön planda tutuyoruz.
                </p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <BadgeCheck size={22} className={styles.featureIcon} />
              <div className={styles.featureContent}>
                <strong>Hızlı İletişim</strong>
                <p>
                  Telefon ve WhatsApp üzerinden hızlı geri dönüş sağlayarak süreci
                  net ve güvenilir şekilde yönetiyoruz.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <Link href="/hakkimizda" className={styles.primaryBtn}>
              <span>Daha Fazla Bilgi</span>
              <ArrowRight size={18} />
            </Link>

            <a href={`tel:${siteConfig.phone}`} className={styles.secondaryBtn}>
              <PhoneCall size={18} />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.visualBox}>
            <Image
              src="/images/about/about-cover.jpeg"
              alt="NZM Motors servis içi çalışma alanı"
              fill
              className={styles.visualImage}
              sizes="(max-width: 980px) 100vw, 50vw"
              priority
            />
            <div className={styles.visualOverlay} />
            <div className={styles.visualGlow} />

            <div className={styles.visualContent}>
              <span className={styles.visualBadge}>NZM Motors</span>
              <h3>Profesyonel Oto Servis Atmosferi</h3>
              <p>
                Güçlü ekipman, gerçek işçilik ve güven veren servis ortamı ile
                araç bakım ve onarım süreçlerini profesyonel standartta
                yürütüyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}