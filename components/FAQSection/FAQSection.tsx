import { ArrowUpRight, HelpCircle, MessageCircle } from "lucide-react";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { faqs } from "@/data/faqs";
import { getWhatsAppUrl } from "@/data/site";
import styles from "./FAQSection.module.css";

export default function FAQSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="sik-sorulanlar" className={styles.section} aria-labelledby="faq-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className={styles.container}>
        <div className={styles.intro}>
          <SectionTitle
            eyebrow="Sık Sorulanlar"
            title="Servise Gelmeden Önce Aklınızdakiler"
            description="Kontrol, fiyatlandırma, onay ve servis süreciyle ilgili en çok merak edilen konular."
            light
          />

          <div className={styles.contactCard}>
            <span className={styles.contactIcon} aria-hidden="true">
              <HelpCircle size={22} strokeWidth={1.8} />
            </span>
            <div>
              <strong>Başka bir sorunuz mu var?</strong>
              <p>Aracınızın marka, model ve sorununu yazarak doğrudan bilgi alın.</p>
              <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
                <MessageCircle size={17} />
                WhatsApp’tan Sorun
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.list}>
          {faqs.map((item, index) => (
            <details key={item.question} className={styles.item} open={index === 0}>
              <summary>
                <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.question}>{item.question}</span>
                <span className={styles.toggle} aria-hidden="true" />
              </summary>
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}