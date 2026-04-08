"use client";

import NextLink from "next/link";
import { forwardRef, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Link visual variants with traditional Catholic styling.
 * - default: Standard text link with red hover underline
 * - wiki: Link with cross (†) suffix for wiki-style references
 * - button: Styled as a button with parchment background
 * - subtle: Minimal hover effect
 * - divine: Link with gold underline animation
 */
export type LinkVariant = "default" | "wiki" | "button" | "subtle" | "divine";

/**
 * Props for the Link component.
 */
export interface LinkProps extends Omit<HTMLAttributes<HTMLAnchorElement>, "href"> {
  /** URL path */
  href: string;
  /** Visual style variant */
  variant?: LinkVariant;
  /** Optional icon to display after the link text */
  icon?: ReactNode;
  /** Show external link icon */
  external?: boolean;
}

const variantStyles: Record<NonNullable<LinkProps["variant"]>, string> = {
  default:
    "text-ink-900 hover:text-liturgical-red underline-offset-4 hover:underline transition-colors",
  wiki: "text-ink-900 hover:text-liturgical-red underline-offset-4 hover:underline font-serif after:content-['†'] after:ml-1 after:text-liturgical-red transition-colors",
  button:
    "inline-flex items-center gap-2 px-4 py-2 rounded-md bg-parchment-200 text-ink-900 hover:bg-parchment-300 border border-gold-400/40 transition-colors",
  subtle: "text-ink-700 hover:text-ink-900 transition-colors",
  divine:
    "text-ink-900 hover:text-gold-600 relative inline-block transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-gold-400 after:to-gold-600 hover:after:w-full after:transition-all after:duration-300",
};

/**
 * Link component with support for wikilink syntax and external indicators.
 * Automatically parses [[wikilink]] syntax and converts to links.
 *
 * @example
 * ```tsx
 * <Link href="/doctrine/arianisme">Arianism</Link>
 * <Link href="/page" external>External Page</Link>
 * <Link href="/page">[[Wiki Link]]</Link>  // Auto-parsed
 * ```
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant = "default", icon, external = false, children, href, ...props }, ref) => {
    // Support Wikilinks format: [[Page Name]] or [[Page Name|Display Text]]
    const wikiLinkRegex = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

    if (typeof children === "string" && wikiLinkRegex.test(children)) {
      // This is a wikilink, parse and render
      const parts: ReactNode[] = [];
      let lastIndex = 0;
      let match;

      wikiLinkRegex.lastIndex = 0;
      while ((match = wikiLinkRegex.exec(children)) !== null) {
        // Add text before the wikilink
        if (match.index > lastIndex) {
          parts.push(children.slice(lastIndex, match.index));
        }

        const pageName = match[1];
        const displayText = match[2] || pageName;
        // Convert page name to slug: lowercase, replace spaces with hyphens
        const slug = pageName
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "");

        parts.push(
          <NextLink
            key={match.index}
            href={`/${slug}`}
            className={cn(variantStyles.wiki, className)}
            ref={ref}
            {...props}
          >
            {displayText}
          </NextLink>
        );

        lastIndex = wikiLinkRegex.lastIndex;
      }

      // Add remaining text
      if (lastIndex < children.length) {
        parts.push(children.slice(lastIndex));
      }

      return <>{parts}</>;
    }

    const content = (
      <>
        {children}
        {icon && <span className="inline-flex">{icon}</span>}
        {external && (
          <svg
            className="inline-block w-4 h-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            suppressHydrationWarning
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
      </>
    );

    return (
      <NextLink ref={ref} href={href} className={cn(variantStyles[variant], className)} {...props}>
        {content}
      </NextLink>
    );
  }
);

Link.displayName = "Link";
