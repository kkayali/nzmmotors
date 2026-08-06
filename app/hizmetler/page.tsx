import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  BatteryCharging,
  CarFront,
  CheckCircle2,
  Disc3,
  Gauge,
  Settings2,
  type LucideIcon,
} from "lucide-react";
import ContactStrip from "@/components/ContactStrip/ContactStrip";
import { services, type ServiceIconKey } from "@/data/services";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Oto Servis Hizmetleri",
  description:
    "NZM Motors motor ve mekanik, arıza tespiti, elektrik-elektronik, kaporta, fren-yürüyen ve periyodik bakım hizmetleri.",
  alternates: { canonical: "/hizmetler" },
};

const icons: Record<ServiceIconKey, LucideIcon> = {
  engine: Settings2,
  diagnostic: Activity,
  electric: BatteryCharging,
  body: CarFront,
  brake: Disc3,
  maintenance: Gauge,
};

const standards = [
  "Önce doğru teşhis",
  "İşlem öncesi net bilgilendirme",
  "Kontrollü ve titiz uygulama",
];

export default function HizmetlerPage() {
  return (
    <main id="main-content" className={styles.page}>
      <section className={styles.hero} aria-labelledby="services-page-title">
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.container}>
          <span className={styles.eyebrow}>NZM Motors Hizmetleri</span>
          <div className={styles.heroGrid}>
            <h1 id="services-page-title">
              Aracınız için <span>doğru servis çözümü</span>
            </h1>
            <div className={styles.heroCopy}>
              <p>
                Kontrol, teşhis, bilgilendirme ve uygulama adımlarını açık biçimde
                yürüterek bakım ve onarım sürecini gereksiz karmaşadan uzak tutuyoruz.
              </p>
              <a href="#hizmet-listesi" className={styles.heroLink}>
                Hizmetleri inceleyin <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <div className={styles.standardBar} aria-label="Çalışma standartlarımız">
            {standards.map((item) => (
              <div key={item} className={styles.standardItem}>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hizmet-listesi" className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>Uzmanlık Alanlarımız</span>
              <h2>Aracınızın ihtiyacı tek noktada</h2>
            </div>
            <p>
              Her işlem, araç kontrolünden sonra ihtiyaç ve uygulama kapsamı
              netleştirilerek planlanır.
            </p>
          </div>

          <div className={styles.grid}>
            {services.map((service, index) => {
              const Icon = icons[service.icon];

              return (
                <article key={service.slug} className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.icon} aria-hidden="true">
                      <Icon size={23} strokeWidth={1.8} />
                    </span>
                    <span className={styles.number}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.text}</p>

                  <ul className={styles.scopeList}>
                    {service.scope.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <Link href={`/hizmetler/${service.slug}`} className={styles.cardLink}>
                    Hizmeti incele <ArrowUpRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}