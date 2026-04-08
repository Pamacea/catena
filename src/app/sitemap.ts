import type { MetadataRoute } from "next";
import { bibleBooks } from "@/data/bible";
import { heresies } from "@/data/heresies";
import { councils } from "@/data/councils";
import { catechisms } from "@/data/catechisms";
import { prayers } from "@/data/prayers";
import { getCatechismIds } from "@/data/catechism";

const BASE_URL = "https://catena.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/bible`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/doctrine`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/catechism`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/liturgy`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/councils`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  const bibleRoutes: MetadataRoute.Sitemap = bibleBooks.map(book => ({
    url: `${BASE_URL}/bible/${book.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const doctrineRoutes: MetadataRoute.Sitemap = heresies.map(h => ({
    url: `${BASE_URL}/doctrine/${h.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const councilRoutes: MetadataRoute.Sitemap = councils.map(c => ({
    url: `${BASE_URL}/doctrine/councils/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const catechismRoutes: MetadataRoute.Sitemap = catechisms.map(c => ({
    url: `${BASE_URL}/catechism/${c.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const liturgyRoutes: MetadataRoute.Sitemap = prayers.map(p => ({
    url: `${BASE_URL}/liturgy/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...bibleRoutes,
    ...doctrineRoutes,
    ...councilRoutes,
    ...catechismRoutes,
    ...liturgyRoutes,
  ];
}
