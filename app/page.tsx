import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import BrandStrip from "@/components/BrandStrip/BrandStrip";
import ProcessSection from "@/components/ProcessSection/ProcessSection";
import AboutPreview from "@/components/AboutPreview/AboutPreview";
import Gallery from "@/components/Gallery/Gallery";
import ReviewsSection from "@/components/ReviewsSection/ReviewsSection";
import MapSection from "@/components/MapSection/MapSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import ContactStrip from "@/components/ContactStrip/ContactStrip";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main id="main-content" className={styles.home}>
      <Hero />
      <Services />
      <BrandStrip />
      <ProcessSection />
      <AboutPreview />
      <Gallery />
      <ReviewsSection />
      <MapSection />
      <FAQSection />
      <ContactStrip />
    </main>
  );
}