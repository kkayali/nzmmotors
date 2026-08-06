import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage/LegalPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "NZM Motors kişisel verilerin korunması aydınlatma metni.",
  alternates: { canonical: "/kvkk" },
};

export default function KvkkPage() {
  return (
    <LegalPage
      eyebrow="6698 Sayılı Kanun"
      title="KVKK Aydınlatma Metni"
      description="Telefon, WhatsApp ve diğer iletişim kanalları üzerinden paylaşılan kişisel verilerin işlenmesine ilişkin temel bilgilendirme."
      sections={[
        {
          title: "Veri sorumlusu",
          paragraphs: [
            `Kişisel verileriniz, iletişim ve servis süreçleri kapsamında NZM Motors tarafından işlenebilir. İletişim: ${siteConfig.phoneDisplay}. Adres: ${siteConfig.address}.`,
          ],
        },
        {
          title: "İşlenebilecek veri kategorileri",
          items: [
            "Ad, soyad ve iletişim bilgileri",
            "Araç marka, model, plaka ve servis geçmişi bilgileri",
            "Arıza, bakım ve onarım talebine ilişkin açıklamalar",
            "Randevu, teklif ve servis iletişimi kayıtları",
          ],
        },
        {
          title: "İşleme amaçları ve hukuki sebepler",
          paragraphs: [
            "Veriler; servis talebinin değerlendirilmesi, randevu planlanması, bakım ve onarım sürecinin yürütülmesi, müşteri iletişimi ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla; sözleşmenin kurulması veya ifası, hukuki yükümlülük ve meşru menfaat sebeplerine dayanılarak işlenebilir.",
          ],
        },
        {
          title: "Aktarım ve saklama",
          paragraphs: [
            "Kişisel veriler yalnızca hizmetin yürütülmesi için gerekli olduğu ölçüde yetkili servis çalışanları, muhasebe veya yasal hizmet sağlayıcıları ve yetkili kamu kurumlarıyla paylaşılabilir. Veriler, amaç için gerekli süre ve ilgili mevzuatta öngörülen saklama süreleri boyunca muhafaza edilir.",
          ],
        },
        {
          title: "Haklarınız",
          paragraphs: [
            "KVKK’nın 11. maddesi kapsamında verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltilmesini veya şartları oluştuğunda silinmesini isteme ve kanunda belirtilen diğer haklara sahipsiniz. Taleplerinizi kimliğinizi doğrulayacak bilgilerle birlikte işletmeye iletebilirsiniz.",
          ],
        },
      ]}
    />
  );
}