import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage/LegalPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "NZM Motors internet sitesi gizlilik politikası.",
  alternates: { canonical: "/gizlilik-politikasi" },
};

export default function GizlilikPolitikasi() {
  return (
    <LegalPage
      eyebrow="Yasal Bilgilendirme"
      title="Gizlilik Politikası"
      description="Bu metin, NZM Motors internet sitesini ziyaret ettiğinizde paylaşılan bilgilerin nasıl ele alındığını açıklar."
      sections={[
        {
          title: "Toplanan bilgiler",
          paragraphs: [
            "Sitede doğrudan veri toplayan bir iletişim formu bulunmamaktadır. Telefon, WhatsApp, Instagram veya Google Maps bağlantılarını kullandığınızda ilgili platformların kendi gizlilik koşulları geçerlidir.",
            "Barındırma hizmeti kapsamında IP adresi, tarayıcı türü, ziyaret zamanı ve teknik hata kayıtları gibi sınırlı teknik veriler güvenlik ve hizmetin çalışması amacıyla işlenebilir.",
          ],
        },
        {
          title: "Kullanım amaçları",
          items: [
            "İnternet sitesinin güvenli ve doğru şekilde çalışmasını sağlamak",
            "Teknik sorunları tespit etmek ve gidermek",
            "Telefon veya WhatsApp üzerinden iletilen servis taleplerine yanıt vermek",
            "Randevu ve servis iletişimini yürütmek",
          ],
        },
        {
          title: "Üçüncü taraf hizmetler",
          paragraphs: [
            "Sitede Google Maps, Google İşletme Profili, Instagram ve WhatsApp bağlantıları kullanılmaktadır. Bu hizmetler açıldığında veriler ilgili üçüncü tarafların koşullarına göre işlenebilir.",
          ],
        },
        {
          title: "İletişim",
          paragraphs: [
            `Gizlilikle ilgili sorularınız için ${siteConfig.phoneDisplay} numaralı telefondan NZM Motors ile iletişime geçebilirsiniz. Adres: ${siteConfig.address}.`,
          ],
        },
      ]}
    />
  );
}