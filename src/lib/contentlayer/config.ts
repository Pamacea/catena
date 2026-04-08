/**
 * Contentlayer / Velite Configuration
 *
 * This configuration is prepared for parsing Obsidian-like markdown files
 * with WikiLinks [[...]] syntax and frontmatter metadata.
 *
 * For now, the data is served from the /data directory, but this config
 * will be used when migrating to a content-based approach.
 */

import { defineConfig, defineCollection, s } from "velite";

/**
 * Generic frontmatter schema for content pages
 */
const frontmatterSchema = {
  title: s.string(),
  description: s.string().optional(),
  slug: s.string(),
  tags: s.array(s.string()).optional(),
  category: s.string().optional(),
  date: s.isodate().optional(),
  updated: s.isodate().optional(),
};

/**
 * Heresy content collection schema
 *
 * For heresy articles with Obsidian-style WikiLinks
 */
export const heresiesCollection = defineCollection({
  name: "Heresy",
  pattern: "content/heresies/**/*.md",
  schema: s.object({
    ...frontmatterSchema,
    nameLatin: s.string().optional(),
    category: s.enum([
      "CHRISTOLOGICAL",
      "TRINITARIAN",
      "ANTHROPOLOGICAL",
      "ECCLESIOLOGICAL",
      "ESCHATOLOGICAL",
      "SCRIPTURAL",
      "SACRAMENTAL",
    ]),
    century: s.number(),
    origin: s.string().optional(),
    promoter: s.string(),
    // Content body will be processed for WikiLinks
  }),
});

/**
 * Council content collection schema
 */
export const councilsCollection = defineCollection({
  name: "Council",
  pattern: "content/councils/**/*.md",
  schema: s.object({
    ...frontmatterSchema,
    nameLatin: s.string(),
    number: s.number(),
    year: s.number(),
    yearEnd: s.number().optional(),
    location: s.string(),
    convokedBy: s.string(),
    participants: s.number().optional(),
  }),
});

/**
 * Catechism content collection schema
 */
export const catechismsCollection = defineCollection({
  name: "Catechism",
  pattern: "content/catechisms/**/*.md",
  schema: s.object({
    ...frontmatterSchema,
    nameLatin: s.string().optional(),
    author: s.string().optional(),
    year: s.number().optional(),
    type: s.enum([
      "CATECHISM_OF_THE_COUNCIL_OF_TRENT",
      "CATECHISM_OF_ST_PIUS_X",
      "CATECHISM_OF_THE_CATHOLIC_CHURCH",
      "CATECHISM_OF_THE_CURE_D_ARS",
      "BALTIMORE_CATECHISM",
    ]),
  }),
});

/**
 * WikiLink transformation
 *
 * Transforms Obsidian-style [[WikiLinks]] to Next.js <Link> components
 * or markdown links.
 *
 * Example:
 *   [[arianisme]] -> [Arianisme](/heresies/arianisme)
 *   [[Concile de Nicée I]] -> [Concile de Nicée I](/councils/nicee-i)
 */
export function transformWikiLinks(content: string): string {
  // Match [[link]] or [[link|text]]
  return content.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (match, slug, text) => {
    const displayText = text || slug;
    // Try to determine the URL based on slug format
    // This is a simple implementation; could be enhanced with a lookup
    return `[${displayText}](/${slug})`;
  });
}

/**
 * Extract backlinks from content
 *
 * Finds all WikiLinks in the content to build the backlinks index.
 */
export function extractBacklinks(content: string, currentSlug: string): string[] {
  const links: string[] = [];

  // Match [[link]] or [[link|text]]
  const matches = content.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)??\]\]/g);

  for (const match of matches) {
    links.push(match[1]);
  }

  return links;
}

/**
 * Main Contentlayer configuration
 *
 * Uncomment and use when migrating from /data to /content
 */
export default defineConfig({
  collections: {
    heresies: heresiesCollection,
    councils: councilsCollection,
    catechisms: catechismsCollection,
  },
});
