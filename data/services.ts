export type ServiceIconKey =
  | "engine"
  | "diagnostic"
  | "electric"
  | "body"
  | "brake"
  | "maintenance";

export type ServiceItem = {
  slug: string;
  title: string;
  shortTitle: string;
  text: string;
  description: string;
  icon: ServiceIconKey;
  scope: string[];
  details: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "motor-ve-mekanik",
    title: "Motor ve Mekanik",
    shortTitle: "Motor ve Mekanik",
    text: "Motor, debriyaj, triger, zincir, şanzıman ve genel mekanik işlemlerde doğru teşhis odaklı servis.",
    description:
      "Motor ve mekanik sistemlerde arızanın kaynağını belirlemeye, gerekli işlemleri açık biçimde aktarmaya ve kontrollü uygulama yapmaya odaklanıyoruz.",
    icon: "engine",
    scope: ["Motor onarımı", "Şanzıman işlemleri", "Ağır bakım"],
    details: [
      "Motor kontrolü, söküm ve onarım işlemleri",
      "Triger, zincir, debriyaj ve aktarma kontrolleri",
      "Şanzıman ve genel mekanik sistem incelemesi",
      "İşlem öncesi kapsam ve parça ihtiyacı bilgilendirmesi",
    ],
  },
  {
    slug: "ariza-tespiti",
    title: "Arıza Tespiti",
    shortTitle: "Arıza Tespiti",
    text: "Belirtiyi değil sorunun kaynağını bulmaya odaklanan bilgisayarlı ve mekanik kontrol süreci.",
    description:
      "Aracın verdiği belirtiyi dinleyip bilgisayarlı ve mekanik kontrollerle sorunun kaynağını mümkün olduğunca netleştiren bir inceleme süreci yürütüyoruz.",
    icon: "diagnostic",
    scope: ["Bilgisayarlı kontrol", "Sensör kontrolleri", "Mekanik analiz"],
    details: [
      "Arıza kodu ve sistem taraması",
      "Sensör ve elektronik bileşen kontrolleri",
      "Mekanik belirtilerin karşılaştırmalı incelenmesi",
      "Kontrol sonucuna göre işlem planı oluşturulması",
    ],
  },
  {
    slug: "elektrik-elektronik",
    title: "Elektrik ve Elektronik",
    shortTitle: "Elektrik ve Elektronik",
    text: "Akü, marş, şarj sistemi, tesisat ve elektronik bileşenlerde kontrollü arıza çözümü.",
    description:
      "Elektrik ve elektronik sistemlerde aküden tesisata, marş ve şarj sisteminden sensörlere kadar kontrollü inceleme ve onarım hizmeti sunuyoruz.",
    icon: "electric",
    scope: ["Akü ve marş", "Şarj sistemi", "Elektrik tesisatı"],
    details: [
      "Akü, marş ve şarj sistemi kontrolleri",
      "Elektrik tesisatı ve bağlantı incelemesi",
      "Sensör ve elektronik bileşen arızaları",
      "Bilgisayarlı kontrol sonrası hedefli müdahale",
    ],
  },
  {
    slug: "kaporta-ve-hasar",
    title: "Kaporta ve Hasar",
    shortTitle: "Kaporta ve Hasar",
    text: "Kaporta düzeltme, parça değişimi ve dış aksam toparlama işlemlerinde titiz uygulama.",
    description:
      "Kaporta ve dış aksam işlemlerinde hasarın kapsamını belirleyip parça düzeltme, değişim ve toparlama süreçlerini kontrollü biçimde yürütüyoruz.",
    icon: "body",
    scope: ["Kaporta düzeltme", "Parça değişimi", "Hasar onarımı"],
    details: [
      "Kaporta hasarı ve dış aksam kontrolü",
      "Düzeltme veya parça değişimi planlaması",
      "Montaj ve uyum kontrolleri",
      "Teslim öncesi görsel ve işlevsel son kontrol",
    ],
  },
  {
    slug: "fren-ve-yuruyen",
    title: "Fren ve Yürüyen",
    shortTitle: "Fren ve Yürüyen",
    text: "Fren, süspansiyon ve direksiyon sistemlerinde güvenli sürüşü etkileyen parçaların kontrolü.",
    description:
      "Fren, süspansiyon, direksiyon ve yürüyen aksam bileşenlerinde sürüş güvenliğini etkileyen noktaları kontrol ederek ihtiyaç odaklı işlem planlıyoruz.",
    icon: "brake",
    scope: ["Fren sistemi", "Süspansiyon", "Direksiyon"],
    details: [
      "Balata, disk ve fren sistemi kontrolleri",
      "Amortisör, salıncak, rotil ve bağlantı elemanları",
      "Direksiyon ve sürüş hissi değerlendirmesi",
      "Aşınan parçalar için işlem ve parça bilgilendirmesi",
    ],
  },
  {
    slug: "periyodik-bakim",
    title: "Periyodik Bakım",
    shortTitle: "Periyodik Bakım",
    text: "Yağ, filtre, sıvı ve genel kontrollerle aracın düzenli bakım ihtiyaçlarının tamamlanması.",
    description:
      "Aracın kullanım ve bakım ihtiyacına göre yağ, filtre, sıvı ve temel güvenlik kontrollerini düzenli bir bakım planı içinde tamamlıyoruz.",
    icon: "maintenance",
    scope: ["Yağ ve filtre", "Sıvı kontrolleri", "Genel kontrol"],
    details: [
      "Motor yağı ve filtre değişimleri",
      "Soğutma, fren ve diğer sıvı kontrolleri",
      "Temel mekanik ve güvenlik kontrolleri",
      "Bakım sonrası yapılan işlemlerin bilgilendirmesi",
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);