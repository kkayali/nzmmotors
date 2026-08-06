import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  BatteryCharging,
  CarFront,
  Disc3,
  Gauge,
  Settings2,
  type LucideIcon,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { services, type ServiceIconKey } from "@/data/services";
import styles from "./Services.module.css";

const serviceIcons: Record<ServiceIconKey, LucideIcon> = {
  engine: Settings2,
  diagnostic: Activity,
  electric: BatteryCharging,
  body: CarFront,
  brake: Disc3,
  maintenance: Gauge,
};

export default function Services() {
  return (
    <section id="hizmetler" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headingRow}>
          <SectionTitle
            eyebrow="Hizmetlerimiz"
            title="Aracınızın İhtiyacı Tek Noktada"
            description="Bakım ve onarım sürecini gereksiz karmaşadan uzak, doğru teşhis ve net iletişimle yönetiyoruz."
            light
          />

          <div className={styles.headingAside}>
            <p className={styles.headingNote}>
              Her işlem, araç kontrolünden sonra ihtiyaç ve uygulama kapsamı netleştirilerek planlanır.
            </p>
            <Link href="/hizmetler" className={styles.allServicesLink}>
              Tüm Hizmetleri Gör <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];

            return (
              <article key={service.slug} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.iconWrap} aria-hidden="true">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.text}</p>

                <ul className={styles.scopeList}>
                  {service.scope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <Link href={`/hizmetler/${service.slug}`} className={styles.cardLink}>
                  Detayları İncele <ArrowUpRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}