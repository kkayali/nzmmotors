import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "./LegalPage.module.css";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: LegalSection[];
};

export default function LegalPage({ eyebrow, title, description, sections }: LegalPageProps) {
  return (
    <main id="main-content" className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={17} /> Ana sayfaya dön
          </Link>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.content}>
          {sections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.items ? (
                <ul>
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              ) : null}
            </article>
          ))}
          <p className={styles.update}>Son güncelleme: 6 Ağustos 2026</p>
        </div>
      </section>
    </main>
  );
}