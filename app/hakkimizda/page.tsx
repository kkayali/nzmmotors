import Image from "next/image";
import {
  Wrench,
  ShieldCheck,
  Gauge,
  PhoneCall,
  MessageCircle,
  MapPin,
  BadgeCheck,
} from "lucide-react";
import styles from "./page.module.css";
import { siteConfig } from "@/data/site";

const servicePoints = [
  {
    icon: Wrench,
    title: "Mekanik ve Motor İşlemleri",
    text: "Periyodik bakım, motor onarım, revize, zincir değişimi, şanzıman ve yürüyen aksam işlemlerinde güçlü teknik yaklaşım sunuyoruz.",
  },
  {
    icon: Gauge,
    title: "Doğru Arıza Tespiti",
    text: "Sorunun kaynağını doğru analiz ederek gereksiz işlem ve parça değişiminden kaçınan, çözüm odaklı bir servis anlayışı benimsiyoruz.",
  },
  {
    icon: ShieldCheck,
    title: "Güven ve İşçilik Kalitesi",
    text: "Her araçta düzenli çalışma, temiz teslim, güçlü ekipman ve müşteri memnuniyeti odaklı hizmet standartlarıyla ilerliyoruz.",
  },
];

const highlights = [
  "Nazım Ateş liderliğinde güçlü servis anlayışı",
  "Motor, şanzıman, bakım ve arıza tespiti uzmanlığı",
  "Titiz işçilik ve güven veren uygulama standardı",
  "Telefon ve WhatsApp üzerinden hızlı iletişim",
];

export default function Hakkimizda() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroGlow} />

        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.badge}>Hakkımızda</span>

              <h1 className={styles.title}>
                Gerçek İşçilik, Güvenilir Usta Dokunuşu ve Güçlü Servis Anlayışı
              </h1>

              <p className={styles.description}>
                NZM Motors olarak Nazım Ateş liderliğinde araç bakım, onarım,
                arıza tespiti, motor işlemleri, şanzıman çözümleri, kaporta ve
                mekanik uygulamalarda profesyonel hizmet sunuyoruz. Amacımız
                yalnızca aracı onarmak değil; doğru teşhis, kaliteli işçilik ve
                güven veren iletişim ile güçlü bir servis deneyimi oluşturmaktır.
              </p>

              <div className={styles.actionRow}>
                <a href={`tel:${siteConfig.phone}`} className={styles.primaryBtn}>
                  <PhoneCall size={18} />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.secondaryBtn}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp ile Ulaşın</span>
                </a>

                <a
                  href={siteConfig.maps}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.locationBtn}
                >
                  <MapPin size={18} />
                  <span>Konum Aç</span>
                </a>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.visualCard}>
                <Image
                  src="/images/about/about-cover.jpeg"
                  alt="NZM Motors servis içi görünüm"
                  fill
                  className={styles.visualImage}
                  sizes="(max-width: 980px) 100vw, 46vw"
                />
                <div className={styles.visualOverlay} />

                <div className={styles.visualText}>
                  <span className={styles.visualBadge}>NZM Motors</span>
                  <h2>Profesyonel Servis Ortamı</h2>
                  <p>
                    Düzenli çalışma alanı, güçlü ekipman ve tecrübeli işçilik ile
                    araç bakım ve onarım süreçlerinde güven veren bir servis
                    deneyimi sunuyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyLeft}>
              <span className={styles.sectionEyebrow}>Servis Anlayışımız</span>
              <h2 className={styles.sectionTitle}>
                Her Araçta Güven, Her İşlemde Titizlik
              </h2>

              <p className={styles.sectionText}>
                NZM Motors’ta her araç, yalnızca teknik bir işlem olarak değil,
                müşterinin güvenini taşıyan bir sorumluluk olarak ele alınır.
                Bu nedenle bakım ve onarım süreçlerinde doğru teşhisi, şeffaf
                yaklaşımı ve temiz işçiliği ön planda tutuyoruz.
              </p>

              <p className={styles.sectionText}>
                Servis sürecinde aracın ihtiyacına uygun çözümler üretmeye,
                gereksiz işlemden kaçınmaya ve yapılan işi uzun ömürlü hale
                getirmeye odaklanıyoruz. Bizi ayıran en önemli nokta; güçlü
                işçilik ile güven veren hizmeti bir araya getirmemizdir.
              </p>
            </div>

            <div className={styles.storyRight}>
              <div className={styles.highlightList}>
                {highlights.map((item) => (
                  <div key={item} className={styles.highlightItem}>
                    <BadgeCheck size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <span className={styles.sectionEyebrow}>Neler Sunuyoruz</span>
          <h2 className={styles.sectionTitle}>Güçlü Hizmet Yapımız</h2>

          <div className={styles.serviceGrid}>
            {servicePoints.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>
                    <Icon size={20} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}