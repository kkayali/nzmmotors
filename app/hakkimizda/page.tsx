import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  ScanSearch,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import ContactStrip from "@/components/ContactStrip/ContactStrip";
import { getWhatsAppUrl, siteConfig } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "NZM Motors'un servis yaklaşımını, doğru teşhis, açık bilgilendirme ve titiz işçilik anlayışını yakından tanıyın.",
};

const principles = [
  {
    icon: ScanSearch,
    title: "Önce doğru teşhis",
    text: "Belirtiyi değil, sorunun kaynağını anlamaya odaklanan kontrollü inceleme süreci.",
  },
  {
    icon: BadgeCheck,
    title: "Net bilgilendirme",
    text: "İşlem kapsamı ve uygulanacak çözüm hakkında çalışma başlamadan önce açık iletişim.",
  },
  {
    icon: ShieldCheck,
    title: "Titiz uygulama",
    text: "Düzenli çalışma, kontrollü montaj ve teslim öncesi son kontrollerle tamamlanan servis süreci.",
  },
];

const serviceFlow = [
  "Araç ve şikâyet bilgisi alınır",
  "Kontrol ve arıza tespiti yapılır",
  "İşlem kapsamı netleştirilir",
  "Onay sonrası uygulama tamamlanır",
];

export default function Hakkimizda() {
  return (
    <main id="main-content" className={styles.page}>
      <section className={styles.hero} aria-labelledby="about-title">
        <div className={styles.heroPattern} aria-hidden="true" />

        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>NZM Motors’u Tanıyın</span>
              <h1 id="about-title" className={styles.title}>
                Güven, yapılan işi bilmekle başlar.
              </h1>
              <p className={styles.lead}>
                Nazım Ateş liderliğinde; mekanik, motor, şanzıman, elektrik,
                kaporta, bakım ve arıza tespit işlemlerinde kontrollü ve açık bir
                servis deneyimi sunuyoruz.
              </p>

              <div className={styles.heroActions}>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.primaryAction}
                >
                  <MessageCircle size={18} />
                  WhatsApp’tan Bilgi Al
                </a>
                <a href={`tel:${siteConfig.phone}`} className={styles.textAction}>
                  <PhoneCall size={17} />
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <div className={styles.promise}>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>İşlem öncesi bilgilendirme, onay sonrası uygulama.</span>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.imageFrame}>
                <Image
                  src="/images/about/about-cover.jpeg"
                  alt="NZM Motors servisinde araç bakım ve motor çalışması"
                  fill
                  className={styles.image}
                  sizes="(max-width: 900px) 100vw, 48vw"
                  priority
                />
                <div className={styles.imageShade} />
                <div className={styles.imageCaption}>
                  <span>Servis yaklaşımımız</span>
                  <strong>Gerçek işçilik, açık iletişim</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.principles} aria-labelledby="principles-title">
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <div>
              <span className={styles.eyebrow}>Çalışma standardımız</span>
              <h2 id="principles-title">Aracınız servise girdiği andan teslim anına kadar</h2>
            </div>
            <p>
              Amaç yalnızca parçayı değiştirmek değil; ihtiyacı doğru belirlemek,
              süreci anlaşılır biçimde yönetmek ve yapılan işi kontrol ederek
              teslim etmektir.
            </p>
          </div>

          <div className={styles.principleGrid}>
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className={styles.principleCard}>
                  <div className={styles.cardTop}>
                    <span className={styles.cardIcon} aria-hidden="true">
                      <Icon size={21} strokeWidth={1.8} />
                    </span>
                    <span className={styles.cardNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.workflow} aria-labelledby="workflow-title">
        <div className={styles.container}>
          <div className={styles.workflowPanel}>
            <div className={styles.workflowCopy}>
              <span className={styles.eyebrow}>Servis süreci</span>
              <h2 id="workflow-title">Belirsizliği azaltan net bir çalışma düzeni</h2>
              <p>
                Araç kontrolünden teslim aşamasına kadar sürecin her adımı
                ihtiyaca göre planlanır ve uygulanacak işlem müşteriye aktarılır.
              </p>
              <Link href="/#hizmetler" className={styles.servicesLink}>
                Hizmetleri inceleyin
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <ol className={styles.flowList}>
              {serviceFlow.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </li>
              ))}
            </ol>

            <div className={styles.ownerCard}>
              <span className={styles.ownerIcon} aria-hidden="true">
                <Wrench size={22} strokeWidth={1.8} />
              </span>
              <div>
                <small>Usta</small>
                <strong>{siteConfig.owner}</strong>
                <p>NZM Motors servis yönetimi ve uygulama takibi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}