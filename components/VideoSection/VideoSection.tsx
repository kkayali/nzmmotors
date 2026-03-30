import { Play, CheckCircle2 } from "lucide-react";
import styles from "./VideoSection.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export default function VideoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <SectionTitle
            eyebrow="Servis Atmosferi"
            title="Sanki Atölyenin İçine Giriyormuş Hissi Veren Bir Deneyim"
            description="NZM Motors’un dijital yüzünde de gerçek servis ruhunu hissettirmek istiyoruz. Bu alan, ileride eklenecek servis videoları için premium bir vitrin olarak hazırlandı."
            light
          />

          <div className={styles.points}>
            <div className={styles.pointCard}>
              <CheckCircle2 size={18} />
              <div>
                <strong>Gerçek Ustalık</strong>
                <span>
                  Araç üzerinde çalışma, kontrol ve onarım süreçlerini ön plana çıkaran bir sunum.
                </span>
              </div>
            </div>

            <div className={styles.pointCard}>
              <CheckCircle2 size={18} />
              <div>
                <strong>Canlı Sunum Dili</strong>
                <span>
                  Koyu zemin, kırmızı vurgu ve güçlü hareket hissi ile otomotiv atmosferi.
                </span>
              </div>
            </div>

            <div className={styles.pointCard}>
              <CheckCircle2 size={18} />
              <div>
                <strong>Video Odaklı Vitrin</strong>
                <span>
                  Servis içi görüntüler ve kısa tanıtım videoları ile güven veren görünüm.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.videoFrame}>
            <div className={styles.videoOverlay} />
            <div className={styles.playArea}>
              <span className={styles.playButton}>
                <Play size={28} fill="currentColor" />
              </span>
              <h3>Tanıtım Videosu Alanı</h3>
              <p>
                Daha sonra <strong>/public/videos/hero/nzm-hero-video.mp4</strong> dosyasını buraya bağlayacağız.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}