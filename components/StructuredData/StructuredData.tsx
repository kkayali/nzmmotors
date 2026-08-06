import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export default function StructuredData() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      url: siteConfig.url,
      image: `${siteConfig.url}/images/hero/nzm-garage.png`,
      telephone: `+90${siteConfig.phone.slice(1)}`,
      description:
        "Motor, mekanik, şanzıman, elektrik, kaporta, periyodik bakım ve arıza tespit hizmetleri sunan özel oto servis.",
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address,
        addressLocality: siteConfig.city,
        addressCountry: "TR",
      },
      openingHours: siteConfig.workingHours.replace("–", "-"),
      hasMap: siteConfig.maps,
      sameAs: [siteConfig.instagram, siteConfig.googleBusiness],
      areaServed: {
        "@type": "City",
        name: siteConfig.city,
      },
      founder: {
        "@type": "Person",
        name: siteConfig.owner,
      },
      makesOffer: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.text,
          url: `${siteConfig.url}/hizmetler/${service.slug}`,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: "tr-TR",
      publisher: {
        "@id": `${siteConfig.url}/#business`,
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}