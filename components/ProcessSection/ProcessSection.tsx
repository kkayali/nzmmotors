import {
  ClipboardCheck,
  MessageCircle,
  SearchCheck,
  Wrench,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { getWhatsAppUrl, siteConfig } from "@/data/site";
import styles from "./ProcessSection.module.css";

const steps = [
  {
    icon: MessageCircle,
    title: "Bize Ulaşın",
    text: "Aracınızın marka, model ve yaşadığınız sorunu telefon veya WhatsApp üzerinden paylaşın.",
  },
  {
    icon: SearchCheck,
    title: "Kontrol ve Teşhis",
    text: "Araç incelenir, sorunun kaynağı ve yapılması gereken işlemler belirlenir.",
  },
  {
    icon: ClipboardCheck,
    title: "Bilgi ve Onay",
    text: "İşlem kapsamı netleştirilir; uygulamaya geçilmeden önce size bilgi verilir.",
  },
  {
    icon: Wrench,
    title: "Onarım ve Teslim",
    text: "Onaylanan işlemler titizlikle tamamlanır, kontrollerin ardından araç teslim edilir.",
  },
];

export default function ProcessSection() {
  return (
    <section className={styles.section} aria-labelledby="process-title">
      <div className={styles.container}>
        <div className={styles.intro}>
          <SectionTitle
            eyebrow="Servis Süreci"
            title="Ne Yapılacağını Baştan Bilin"
            description="Belirsizliği azaltan, kontrol ve bilgilendirme odaklı dört adımlı servis süreci."
            light
          />

          <div className={styles.quickContact}>
            <span>Aracınızla ilgili hızlı bilgi alın</span>
            <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
              WhatsApp’tan Yaz
            </a>
            <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
          </div>
        </div>

        <div className={styles.steps}>
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article key={step.title} className={styles.step}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepIcon} aria-hidden="true">
                    <Icon size={21} strokeWidth={1.8} />
                  </span>
                  <span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}