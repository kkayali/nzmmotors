import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import AboutPreview from "@/components/AboutPreview/AboutPreview";
import VideoSection from "@/components/VideoSection/VideoSection";
import Gallery from "@/components/Gallery/Gallery";
import ContactStrip from "@/components/ContactStrip/ContactStrip";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <Services />
      <AboutPreview />
      <VideoSection />
      <Gallery />
      <ContactStrip />
    </main>
  );
}