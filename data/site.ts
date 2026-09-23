const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

export const siteConfig = {
  name: "NZM Motors",
  owner: "Nazım Ateş",
  url: baseUrl,
  phone: "05551430429",
  phoneDisplay: "0555 143 04 29",
  whatsapp: "905551430429",
  whatsappMessage:
    "Merhaba, aracımla ilgili servis ve randevu bilgisi almak istiyorum.",
  instagram: "https://www.instagram.com/nzm_motors/",
  googleBusiness: "https://share.google/8bxDIe20seX6otgfO",
  address:
    "Maltepe Mahallesi Yedikule Çırpıcı Sokak Akınsal Sanayi Sitesi C Blok No 10, İstanbul",
  shortAddress: "Akınsal Sanayi Sitesi, C Blok No: 10",
  maps: "https://maps.app.goo.gl/bSA6YZQZdVrfqJXJA",
  workingHours: "08:00–21:00",
  city: "İstanbul",
  locale: "tr_TR",
} as const;

export const getWhatsAppUrl = () =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;