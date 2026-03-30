import { Wrench, Cpu, Shield, Disc3, Cog, Fuel } from "lucide-react";
import styles from "./Services.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { services } from "@/data/services";

const icons = [Wrench, Cpu, Shield, Disc3, Cog, Fuel];

export default function Services() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionTitle
          eyebrow="Hizmetlerimiz"
          title="Aracınız İçin Uçtan Uca Servis Çözümleri"
          description="NZM Motors olarak mekanikten elektriğe, kaportadan fren sistemlerine kadar aracınızın ihtiyaç duyduğu birçok işlemi tek noktada profesyonel şekilde sunuyoruz."
          light
        />

        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article key={service.title} className={styles.card}>
                <div className={styles.topRow}>
                  <div className={styles.iconWrap}>
                    <Icon size={20} />
                  </div>
                  <span className={styles.number}>0{index + 1}</span>
                </div>

                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardText}>{service.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}