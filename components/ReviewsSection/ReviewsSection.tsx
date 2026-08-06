import { ArrowUpRight, Quote, Star } from "lucide-react";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/data/site";
import styles from "./ReviewsSection.module.css";

export default function ReviewsSection() {
  return (
    <section
      id="yorumlar"
      className={styles.section}
      aria-labelledby="reviews-title"
      tabIndex={-1}
    >
      <div className={styles.container}>
        <div className={styles.headingRow}>
          <SectionTitle
            eyebrow="Müşteri Yorumları"
            title="Güven, Gerçek Deneyimlerle Oluşur"
            description="Google İşletme profilimizde paylaşılan müşteri değerlendirmelerinden seçilmiş yorumlar."
            light
          />

          <a
            href={siteConfig.googleBusiness}
            target="_blank"
            rel="noreferrer"
            className={styles.googleLink}
          >
            Google’da Tüm Yorumları Gör
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className={styles.scroller} aria-label="NZM Motors müşteri yorumları">
          {reviews.map((review) => (
            <article key={`${review.name}-${review.date}`} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.stars} aria-label="5 üzerinden 5 yıldız">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <Quote size={22} className={styles.quoteIcon} aria-hidden="true" />
              </div>

              <blockquote>{review.text}</blockquote>

              <footer className={styles.author}>
                <span className={styles.avatar} aria-hidden="true">
                  {review.name.slice(0, 1).toLocaleUpperCase("tr-TR")}
                </span>
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.source} yorumu · {review.date}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>

        <div className={styles.disclaimerRow}>
          <p>Yorum metinleri Google İşletme profilindeki müşteri değerlendirmelerinden alınmıştır.</p>
          <a href={siteConfig.googleBusiness} target="_blank" rel="noreferrer">
            NZM Motors Google İşletme Profili
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}