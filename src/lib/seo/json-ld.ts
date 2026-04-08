/**
 * JSON-LD structured data helpers for Catena
 * Generates Schema.org markup for SEO
 */

const BASE_URL = "https://catena.vercel.app";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

export function bookJsonLd(params: {
  name: string;
  nameLatin?: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: params.name,
    alternateName: params.nameLatin,
    description: params.description,
    url: `${BASE_URL}${params.url}`,
    inLanguage: "fr",
    genre: "Religious",
  };
}

export function articleJsonLd(params: {
  title: string;
  description: string;
  url: string;
  type?: "Article" | "WebPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": params.type ?? "Article",
    headline: params.title,
    description: params.description,
    url: `${BASE_URL}${params.url}`,
    inLanguage: "fr",
  };
}
