import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage/LegalPage";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "NZM Motors internet sitesi çerez politikası.",
  alternates: { canonical: "/cerez-politikasi" },
};

export default function CerezPolitikasi() {
  return (
    <LegalPage
      eyebrow="Site Kullanımı"
      title="Çerez Politikası"
      description="Sitede kullanılan teknik özellikler ve üçüncü taraf hizmetlerin çerez kullanımı hakkında bilgi."
      sections={[
        {
          title: "Çerez nedir?",
          paragraphs: [
            "Çerezler, internet sitelerinin tarayıcınıza kaydedebildiği küçük veri dosyalarıdır. Site tercihlerini hatırlamak, güvenliği sağlamak ve hizmet kullanımını ölçmek gibi amaçlarla kullanılabilir.",
          ],
        },
        {
          title: "Bu sitedeki kullanım",
          paragraphs: [
            "NZM Motors sitesi temel işlevler için gerekli teknik depolama araçlarını kullanabilir. Siteye analiz veya reklam araçları eklenmesi hâlinde çerez tercihleri ve gerekli izin mekanizması ayrıca güncellenmelidir.",
          ],
        },
        {
          title: "Üçüncü taraflar",
          paragraphs: [
            "Google Maps haritası, Google İşletme Profili, Instagram ve WhatsApp bağlantıları üçüncü taraf hizmetlerdir. Bu hizmetlere geçtiğinizde ilgili sağlayıcılar kendi çerezlerini veya benzer teknolojilerini kullanabilir.",
          ],
        },
        {
          title: "Tarayıcı ayarları",
          paragraphs: [
            "Çerezleri tarayıcı ayarlarınızdan silebilir, engelleyebilir veya belirli siteler için sınırlandırabilirsiniz. Bazı teknik çerezlerin engellenmesi site işlevlerini etkileyebilir.",
          ],
        },
      ]}
    />
  );
}