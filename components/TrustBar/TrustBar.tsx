import { CircleCheck, MapPin, PhoneCall, Wrench } from "lucide-react";
import styles from "./TrustBar.module.css";
import { siteConfig } from "@/data/site";

const trustItems = [
  {
    icon: CircleCheck,
    label: "Usta",
    value: `${siteConfig.owner} liderliğinde`,
  },
  {
    icon: Wrench,
    label: "Uzmanlık",
    value: "Motor, mekanik ve şanzıman",
  },
  {
    icon: MapPin,
    label: "Konum",
    value: "Akınsal Sanayi Sitesi",
  },
  {
    icon: PhoneCall,
    label: "Hızlı iletişim",
    value: siteConfig.phoneDisplay,
  },
];

export default function TrustBar() {
  return (
    <section className={styles.section} aria-label="NZM Motors güven bilgileri">
      <div className={styles.container}>
        {trustItems.map((item) => {
          const Icon = item.icon;

          return (
            <div className={styles.item} key={item.label}>
              <span className={styles.icon} aria-hidden="true">
                <Icon size={19} strokeWidth={1.9} />
              </span>
              <span className={styles.copy}>
                <span className={styles.label}>{item.label}</span>
                <strong>{item.value}</strong>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}