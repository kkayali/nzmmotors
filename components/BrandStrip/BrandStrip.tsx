import { serviceBrands } from "@/data/brands";
import styles from "./BrandStrip.module.css";

export default function BrandStrip() {
  return (
    <section className={styles.section} aria-labelledby="brand-strip-title">
      <div className={styles.container}>
        <div className={styles.copy}>
          <span>Marka ve Model Deneyimi</span>
          <h2 id="brand-strip-title">Farklı araçlarda aynı titiz servis yaklaşımı</h2>
          <p>
            Servisimizde sık karşılaştığımız marka ve modellerde bakım, arıza tespiti
            ve onarım süreçlerini araç ihtiyacına göre planlıyoruz.
          </p>
        </div>

        <div className={styles.brandList} aria-label="Servis verilen araç markaları">
          {serviceBrands.map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </div>

        <p className={styles.note}>
          Marka isimleri ilgili hak sahiplerine aittir. NZM Motors bağımsız özel servis olarak hizmet verir.
        </p>
      </div>
    </section>
  );
}