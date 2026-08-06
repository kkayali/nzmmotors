import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck, MessageCircle } from "lucide-react";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { getWhatsAppUrl, siteConfig } from "@/data/site";
import styles from "./AboutPreview.module.css";

const strengths = [
  {
    title: "Doğru teşhis",
    text: "Gereksiz parça ve işlem yerine sorunun kaynağına odaklanan kontrol yaklaşımı.",
  },
  {
    title: "Net bilgilendirme",
    text: "Yapılacak işlemler ve servis süreci hakkında anlaşılır iletişim.",
  },
  {
    title: "Titiz uygulama",
    text: "Düzenli çalışma, kontrollü uygulama ve teslim öncesi son kontroller.",
  },
];

export default function AboutPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.visualColumn}>
          <div className={styles.visualBox}>
            <Image
              src="/images/about/about-cover.jpeg"
              alt="NZM Motors servis içi çalışma alanı"
              fill
              className={styles.visualImage}
              sizes="(max-width: 980px) 100vw, 52vw"
            />
            <div className={styles.visualOverlay} />
            <div className={styles.visualCaption}>
              <span>NZM Motors</span>
              <strong>Nazım Ateş liderliğinde gerçek servis işçiliği</strong>
            </div>
          </div>
        </div>

        <div className={styles.contentColumn}>
          <SectionTitle
            eyebrow="Neden NZM Motors?"
            title="Güven, İşin Nasıl Yapıldığını Bilmekle Başlar"
            description="Aracınızı teslim ettiğiniz andan geri aldığınız ana kadar süreci açık, düzenli ve kontrollü şekilde yönetmeyi önemsiyoruz."
            light
          />

          <div className={styles.strengths}>
            {strengths.map((strength) => (
              <div key={strength.title} className={styles.strengthItem}>
                <BadgeCheck size={20} aria-hidden="true" />
                <div>
                  <h3>{strength.title}</h3>
                  <p>{strength.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <Link href="/hakkimizda" className={styles.primaryAction}>
              Servisimizi Tanıyın
              <ArrowUpRight size={17} />
            </Link>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryAction}
            >
              <MessageCircle size={17} />
              WhatsApp’tan Bilgi Alın
            </a>
          </div>

          <p className={styles.contactNote}>
            Telefon: <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
          </p>
        </div>
      </div>
    </section>
  );
}