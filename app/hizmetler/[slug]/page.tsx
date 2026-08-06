import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Activity,
  ArrowLeft,
  ArrowUpRight,
  BatteryCharging,
  CarFront,
  CheckCircle2,
  Disc3,
  Gauge,
  MessageCircle,
  Settings2,
  type LucideIcon,
} from "lucide-react";
import ContactStrip from "@/components/ContactStrip/ContactStrip";
import { getServiceBySlug, services, type ServiceIconKey } from "@/data/services";
import { getWhatsAppUrl } from "@/data/site";
import styles from "./page.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const icons: Record<ServiceIconKey, LucideIcon> = {
  engine: Settings2,
  diagnostic: Activity,
  electric: BatteryCharging,
  body: CarFront,
  brake: Disc3,
  maintenance: Gauge,
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/hizmetler/${service.slug}` },
    openGraph: {
      title: `${service.title} | NZM Motors`,
      description: service.description,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = icons[service.icon];
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main id="main-content" className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <Link href="/hizmetler" className={styles.backLink}>
            <ArrowLeft size={17} /> Tüm hizmetler
          </Link>

          <div className={styles.heroGrid}>
            <div>
              <span className={styles.icon} aria-hidden="true"><Icon size={28} strokeWidth={1.7} /></span>
              <p className={styles.eyebrow}>NZM Motors Servis Hizmeti</p>
              <h1>{service.title}</h1>
              <p className={styles.lead}>{service.description}</p>
              <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className={styles.primaryAction}>
                <MessageCircle size={18} /> WhatsApp’tan Bilgi Al <ArrowUpRight size={16} />
              </a>
            </div>

            <div className={styles.scopePanel}>
              <span>Bu hizmet kapsamında</span>
              <ul>
                {service.details.map((detail) => (
                  <li key={detail}><CheckCircle2 size={18} /> {detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processIntro}>
            <span>Çalışma düzeni</span>
            <h2>Kontrolden teslim aşamasına kadar net süreç</h2>
            <p>Her araç ve arıza farklıdır. Uygulama kapsamı, araç incelendikten ve ihtiyaç netleştirildikten sonra belirlenir.</p>
          </div>
          <ol className={styles.processList}>
            <li><span>01</span><strong>Şikâyet ve araç bilgisi alınır</strong></li>
            <li><span>02</span><strong>Kontrol ve teşhis yapılır</strong></li>
            <li><span>03</span><strong>İşlem kapsamı paylaşılır</strong></li>
            <li><span>04</span><strong>Onay sonrası uygulama tamamlanır</strong></li>
          </ol>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <div className={styles.container}>
          <div className={styles.relatedHeading}>
            <span>Diğer Hizmetler</span>
            <h2>Aracınız için tamamlayıcı servis çözümleri</h2>
          </div>
          <div className={styles.relatedGrid}>
            {related.map((item) => (
              <Link key={item.slug} href={`/hizmetler/${item.slug}`}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
                <span>İncele <ArrowUpRight size={15} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}