export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Servise gelmeden önce randevu almam gerekir mi?",
    answer:
      "Gelmeden önce telefon veya WhatsApp üzerinden iletişim kurmanız, uygun zamanın ve yapılacak ilk kontrolün daha net planlanmasını sağlar.",
  },
  {
    question: "Bakım veya onarım fiyatı nasıl belirleniyor?",
    answer:
      "Araç kontrol edildikten sonra arızanın kaynağı, işlem kapsamı ve gerekiyorsa parça ihtiyacı belirlenir. Uygulamaya geçilmeden önce yapılacak işlemler hakkında bilgi verilir.",
  },
  {
    question: "NZM Motors’ta hangi işlemler yapılıyor?",
    answer:
      "Motor ve mekanik onarım, şanzıman işlemleri, bilgisayarlı arıza tespiti, elektrik ve elektronik, kaporta, fren ve yürüyen aksam ile periyodik bakım hizmetleri sunulmaktadır.",
  },
  {
    question: "Arıza tespit süreci nasıl ilerliyor?",
    answer:
      "Önce aracınızda yaşadığınız sorun dinlenir. Ardından mekanik ve gerektiğinde bilgisayarlı kontroller yapılır; yalnızca belirtiye değil, sorunun kaynağına odaklanılır.",
  },
  {
    question: "İşleme başlamadan önce bilgilendirme yapılıyor mu?",
    answer:
      "Evet. Kontrol sonrasında işlem kapsamı netleştirilir ve uygulamaya geçilmeden önce yapılacak işlemler hakkında bilgi verilir.",
  },
  {
    question: "Servise nasıl ulaşabilirim?",
    answer:
      "NZM Motors, Maltepe Mahallesi Akınsal Sanayi Sitesi C Blok No: 10 adresindedir. Sitedeki Yol Tarifi bağlantısıyla Google Maps üzerinden doğrudan rota oluşturabilirsiniz.",
  },
];