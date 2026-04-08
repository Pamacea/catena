import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges className strings with Tailwind CSS classes intelligently.
 * Combines clsx for conditional classes and tailwind-merge to resolve
 * Tailwind CSS conflicts (e.g., 'p-4 p-2' → 'p-2').
 *
 * @param inputs - Class names to merge (strings, objects, arrays)
 * @returns Merged class string with resolved Tailwind conflicts
 *
 * @example
 * ```tsx
 * cn('px-4', isActive && 'bg-red-500', 'text-sm')
 * // Returns: "px-4 text-sm bg-red-500" (when isActive is true)
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date to French locale string.
 *
 * @param date - Date object or ISO string to format
 * @returns Formatted date string (e.g., "7 avril 2026")
 *
 * @example
 * ```ts
 * formatDate(new Date('2026-04-07'))
 * // Returns: "7 avril 2026"
 * ```
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Formats a year range in French with appropriate prefixes.
 *
 * @param start - Start year (optional)
 * @param end - End year (optional)
 * @returns Formatted range string or "Depuis/start", "Jusqu'à/end", or empty string
 *
 * @example
 * ```ts
 * formatYearRange(325, 787)  // Returns: "325-787"
 * formatYearRange(1054)       // Returns: "Depuis 1054"
 * formatYearRange(undefined, 476)  // Returns: "Jusqu'en 476"
 * ```
 */
export function formatYearRange(start?: number, end?: number): string {
  if (start && end) {
    return `${start}-${end}`;
  }
  if (start) {
    return `Depuis ${start}`;
  }
  if (end) {
    return `Jusqu'en ${end}`;
  }
  return "";
}

/**
 * Converts a string to a URL-friendly slug.
 * Removes accents, converts to lowercase, and replaces spaces with hyphens.
 *
 * @param str - String to slugify
 * @returns URL-safe slug string
 *
 * @example
 * ```ts
 * slugify('Concile de Nicée')  // Returns: "concile-de-nicee"
 * slugify('Saint Jean Chrysostome')  // Returns: "saint-jean-chrysostome"
 * ```
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with dashes
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing dashes
}

/**
 * Truncates text to a specified length with ellipsis.
 *
 * @param str - String to truncate
 * @param length - Maximum length before truncation
 * @returns Truncated string with "..." appended if needed
 *
 * @example
 * ```ts
 * truncate('Lorem ipsum dolor sit amet', 10)  // Returns: "Lorem ipsu..."
 * truncate('Short', 10)  // Returns: "Short"
 * ```
 */
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
}

/**
 * Creates a debounced function that delays invoking the provided function
 * until after the specified delay has elapsed since the last invocation.
 * Useful for search inputs, scroll handlers, and resize observers.
 *
 * @template T - Function type to debounce
 * @param fn - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function with same signature as input
 *
 * @example
 * ```ts
 * const debouncedSearch = debounce((query: string) => {
 *   console.log('Searching for:', query)
 * }, 300)
 *
 * debouncedSearch('query')
 * ```
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
