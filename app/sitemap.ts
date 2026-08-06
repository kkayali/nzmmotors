import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/hizmetler",
    "/hakkimizda",
    "/iletisim",
    "/gizlilik-politikasi",
    "/kvkk",
    "/cerez-politikasi",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path === "/hizmetler" ? 0.9 : 0.7,
    })),
    ...services.map((service) => ({
      url: `${siteConfig.url}/hizmetler/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}