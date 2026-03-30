import { MessageCircle } from "lucide-react";
import styles from "./WhatsAppButton.module.css";
import { siteConfig } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}`}
      className={styles.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ile iletişim"
    >
      <MessageCircle size={18} />
      <span>WhatsApp</span>
    </a>
  );
}