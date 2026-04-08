/**
 * Backlinks Parser - Wikilinks [[slug]] pour Catena
 *
 * Cette bibliothèque permet de parser les wikilinks [[slug]] dans le contenu
 * et de trouver les backlinks (références croisées) entre les entités.
 *
 * @example
 * ```ts
 * import { parseWikilinks, wikilinkToUrl } from '@/lib/backlinks'
 *
 * const text = "Voir aussi [[arianisme]] et [[council:nicee-1]]"
 * const links = parseWikilinks(text)
 * // Returns: [{ slug: 'arianisme', type: 'heresy', ... }, ...]
 * ```
 */

/**
 * Represents a parsed wikilink match in text content.
 */
export interface WikilinkMatch {
  /** The slug identifier (e.g., "arianisme", "catechism/tridentine/1") */
  slug: string;
  /** Detected entity type based on slug patterns */
  type: "heresy" | "council" | "catechism" | "bible" | "prayer" | "unknown";
  /** Start index of the match in the original text */
  startIndex: number;
  /** End index of the match in the original text */
  endIndex: number;
  /** The full matched string including brackets */
  fullMatch: string;
}

/**
 * Represents a backlink result from another entity.
 */
export interface BacklinkResult {
  /** Source slug where the backlink originates */
  source: string;
  /** Type of the source entity */
  type: "heresy" | "council" | "catechism" | "bible" | "prayer";
  /** Context excerpt around the backlink reference */
  context?: string;
  /** Relevance score based on connection type and frequency */
  relevance?: "high" | "medium" | "low";
}

/**
 * Regex pour détecter les wikilinks [[slug]]
 * Supporte: [[slug]], [[slug|texte]], [[type:slug]]
 * @internal
 */
const WIKILINK_REGEX = /\[\[([a-z]+:)?([a-z0-9-]+)(\|([^\]]+))?\]\]/gi;

/**
 * Détecte le type d'entité depuis le slug ou le préfixe.
 * @internal
 * @param slug - The slug to analyze
 * @returns The detected entity type
 */
function detectEntityType(slug: string): WikilinkMatch["type"] {
  const prefixes: Record<string, WikilinkMatch["type"]> = {
    heresy: "heresy",
    council: "council",
    concile: "council",
    catechism: "catechism",
    catechisme: "catechism",
    bible: "bible",
    prayer: "prayer",
    priere: "prayer",
    liturgie: "prayer",
  };

  const [prefix] = slug.split("-");

  if (prefixes[prefix]) {
    return prefixes[prefix];
  }

  // Détection basée sur des slugs connus
  if (
    slug.includes("arianisme") ||
    slug.includes("nestorianisme") ||
    slug.includes("monophysisme") ||
    slug.includes("pelagianisme") ||
    slug.includes("jansenisme") ||
    slug.includes("donatisme") ||
    slug.includes("iconoclasme")
  ) {
    return "heresy";
  }

  if (
    slug.includes("nicee") ||
    slug.includes("constantinople") ||
    slug.includes("ephese") ||
    slug.includes("chalcedoine") ||
    slug.includes("lateran") ||
    slug.includes("trente") ||
    slug.includes("vatican") ||
    slug.includes("lyon") ||
    slug.includes("constance") ||
    slug.includes("bal") ||
    slug.includes("vienne")
  ) {
    return "council";
  }

  if (slug.includes("tridentine") || slug.includes("pius-x") || slug.includes("cure-d-ars")) {
    return "catechism";
  }

  return "unknown";
}

/**
 * Extrait tous les wikilinks d'un texte.
 *
 * @param text - Text content to parse for wikilinks
 * @returns Array of parsed wikilink matches
 *
 * @example
 * ```ts
 * parseWikilinks("See [[arianisme]] and [[council:nicee-1]]")
 * // Returns: [{ slug: 'arianisme', type: 'heresy', ... }, ...]
 * ```
 */
export function parseWikilinks(text: string): WikilinkMatch[] {
  const matches: WikilinkMatch[] = [];
  let match: RegExpExecArray | null;

  while ((match = WIKILINK_REGEX.exec(text)) !== null) {
    const [, prefix, slug, , displayText] = match;
    const fullSlug = prefix ? `${prefix}${slug}` : slug;
    const type = detectEntityType(fullSlug);

    matches.push({
      slug: fullSlug,
      type,
      startIndex: match.index,
      endIndex: match.index + match[0].length,
      fullMatch: match[0],
    });
  }

  return matches;
}

/**
 * Remplace les wikilinks par des liens Markdown/custom.
 *
 * @param text - Text content containing wikilinks
 * @param replacer - Function that returns replacement string for each match
 * @returns Text with wikilinks replaced
 *
 * @example
 * ```ts
 * replaceWikilinks("See [[arianisme]]", (match) => {
 *   return `[${match.slug}](/doctrine/${match.slug})`
 * })
 * ```
 */
export function replaceWikilinks(text: string, replacer: (match: WikilinkMatch) => string): string {
  let result = text;
  const matches = parseWikilinks(text);

  // Remplacer de la fin vers le début pour préserver les indices
  for (let i = matches.length - 1; i >= 0; i--) {
    const match = matches[i];
    const replacement = replacer(match);
    result = result.slice(0, match.startIndex) + replacement + result.slice(match.endIndex);
  }

  return result;
}

/**
 * Génère un lien vers une entité depuis un wikilink.
 * Routes based on entity type (heresy → /doctrine, council → /timeline, etc.)
 *
 * @param match - Parsed wikilink match
 * @returns URL path to the entity
 *
 * @example
 * ```ts
 * wikilinkToUrl({ slug: 'arianisme', type: 'heresy' })
 * // Returns: "/doctrine/arianisme"
 * ```
 */
export function wikilinkToUrl(match: WikilinkMatch): string {
  const { slug, type } = match;

  switch (type) {
    case "heresy":
      return `/doctrine/${slug}`;
    case "council":
      return `/timeline/${slug}`;
    case "catechism":
      const [catechismId, questionId] = slug.split("/");
      if (questionId) {
        return `/catechism/${catechismId}/${questionId}`;
      }
      return `/catechism/${slug}`;
    case "bible":
      const [bookId, chapter] = slug.split("/");
      if (chapter) {
        return `/bible/${bookId}/${chapter}`;
      }
      return `/bible/${slug}`;
    case "prayer":
      return `/liturgy/${slug}`;
    default:
      return `/${slug}`;
  }
}

/**
 * Extrait le contexte autour d'un wikilink pour les backlinks.
 *
 * @param text - Full text content
 * @param match - Wikilink match to get context for
 * @param windowSize - Number of characters before and after (default: 100)
 * @returns Context string with ellipses if truncated
 *
 * @example
 * ```ts
 * extractContext("Lorem [[link]] ipsum", match, 20)
 * // Returns: "...Lorem [[link]] ipsu..."
 * ```
 */
export function extractContext(
  text: string,
  match: WikilinkMatch,
  windowSize: number = 100
): string {
  const start = Math.max(0, match.startIndex - windowSize);
  const end = Math.min(text.length, match.endIndex + windowSize);

  let context = text.slice(start, end);

  // Nettoyer le contexte
  context = context.replace(/\s+/g, " ").trim();

  // Ajouter des ellipses si tronqué
  if (start > 0) context = "..." + context;
  if (end < text.length) context = context + "...";

  return context;
}

/**
 * Compte les occurrences d'un slug dans un texte.
 *
 * @param text - Text content to search
 * @param slug - Slug to count (case-insensitive)
 * @returns Number of occurrences
 */
export function countWikilinkOccurrences(text: string, slug: string): number {
  const normalizedSlug = slug.toLowerCase();
  const matches = parseWikilinks(text);

  return matches.filter(m => m.slug.toLowerCase() === normalizedSlug).length;
}

/**
 * Transforme un texte avec wikilinks en HTML avec des liens cliquables.
 *
 * @param text - Text containing wikilinks
 * @param options - Configuration options
 * @returns HTML string with anchor tags
 *
 * @example
 * ```ts
 * wikilinksToHtml("See [[arianisme]]", { linkClass: "text-red-500" })
 * // Returns: 'See <a href="/doctrine/arianisme" class="text-red-500">arianisme</a>'
 * ```
 */
export function wikilinksToHtml(
  text: string,
  options: {
    linkClass?: string;
    includeContext?: boolean;
  } = {}
): string {
  return replaceWikilinks(text, match => {
    const url = wikilinkToUrl(match);
    const displayText = match.slug.replace(/-/g, " ");
    const className = options.linkClass || "wikilink";

    return `<a href="${url}" class="${className}" data-type="${match.type}">${displayText}</a>`;
  });
}

/**
 * Trouve tous les backlinks pour un slug donné dans une collection de textes.
 *
 * @param targetSlug - Slug to find backlinks for (case-insensitive)
 * @param texts - Array of text objects with id, type, and content
 * @returns Array of backlink results with context and relevance
 */
export function findBacklinksInCollection(
  targetSlug: string,
  texts: Array<{ id: string; type: string; content: string }>
): BacklinkResult[] {
  const results: BacklinkResult[] = [];

  for (const text of texts) {
    const matches = parseWikilinks(text.content);
    const relevantMatches = matches.filter(m => m.slug.toLowerCase() === targetSlug.toLowerCase());

    if (relevantMatches.length > 0) {
      for (const match of relevantMatches) {
        results.push({
          source: text.id,
          type: text.type as BacklinkResult["type"],
          context: extractContext(text.content, match),
          relevance: relevantMatches.length > 2 ? "high" : "medium",
        });
      }
    }
  }

  return results;
}

/**
 * Nettoie un texte en supprimant les wikilinks (pour l'indexation).
 * Keeps only the slug text, removing brackets.
 *
 * @param text - Text containing wikilinks
 * @returns Cleaned text with wikilinks removed
 *
 * @example
 * ```ts
 * stripWikilinks("See [[arianisme]] and [[council:nicee-1]]")
 * // Returns: "See arianisme and nicee-1"
 * ```
 */
export function stripWikilinks(text: string): string {
  return text.replace(WIKILINK_REGEX, "$2"); // Garde seulement le slug
}

/**
 * Récupère tous les backlinks vers une hérésie donnée.
 * Scan les connexions et les références dans les autres hérésies.
 *
 * @param slug - Slug of the heresy to find backlinks for
 * @returns Promise resolving to array of backlink results
 */
export async function getBacklinks(slug: string): Promise<BacklinkResult[]> {
  const { heresies } = await import("@/data/heresies");
  const results: BacklinkResult[] = [];

  heresies.forEach(heresy => {
    if (heresy.slug === slug) return;

    // Vérifier les connexions explicites
    const connection = heresy.connections?.find(c => c.slug === slug);
    if (connection) {
      results.push({
        source: heresy.slug,
        type: "heresy",
        context: `Connection ${connection.type}: ${heresy.name}`,
        relevance: connection.type === "refuted" ? "high" : "medium",
      });
      return;
    }

    // Chercher dans les champs textuels
    const searchFields = [
      heresy.description,
      heresy.error,
      heresy.promoter,
      ...heresy.refutations.map(r => r.source + " " + (r.latin || "")),
      ...heresy.condemnations.map(c => (c.document || "") + " " + c.authority),
    ]
      .join(" ")
      .toLowerCase();

    const targetName =
      heresies.find(h => h.slug === slug)?.name.toLowerCase() || slug.toLowerCase();

    if (searchFields.includes(targetName) || searchFields.includes(slug.toLowerCase())) {
      results.push({
        source: heresy.slug,
        type: "heresy",
        context: `Citée dans: ${heresy.name}`,
        relevance: "low",
      });
    }
  });

  return results;
}
