"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SacredSeparatorProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "cross" | "chi-rho" | "line" | "ornate";
  decorative?: boolean;
}

const variantStyles: Record<NonNullable<SacredSeparatorProps["variant"]>, string> = {
  cross:
    "flex items-center justify-center gap-4 before:content-[''] before:flex-1 before:h-px before:bg-gradient-to-r before:from-transparent before:via-gold-500/50 before:to-transparent after:content-[''] after:flex-1 after:h-px after:bg-gradient-to-r after:from-transparent after:via-gold-500/50 after:to-transparent",
  "chi-rho":
    "flex items-center justify-center gap-4 before:content-[''] before:flex-1 before:h-px before:bg-gradient-to-r before:from-transparent before:via-liturgical-red/30 before:to-transparent after:content-[''] after:flex-1 after:h-px after:bg-gradient-to-r after:from-transparent after:via-liturgical-red/30 after:to-transparent",
  line: "h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent",
  ornate:
    "flex items-center justify-center gap-4 before:content-[''] before:flex-1 before:h-px before:bg-gradient-to-r before:from-transparent before:via-gold-500 before:to-transparent after:content-[''] after:flex-1 after:h-px after:bg-gradient-to-r after:from-transparent before:via-gold-500 after:to-transparent",
};

export const SacredSeparator = forwardRef<HTMLDivElement, SacredSeparatorProps>(
  ({ className, variant = "cross", decorative = false, ...props }, ref) => {
    const symbol = variant === "cross" ? "✝" : variant === "chi-rho" ? "☧" : null;

    return (
      <div
        ref={ref}
        className={cn("my-8", variantStyles[variant], className)}
        role={decorative ? "separator" : undefined}
        aria-orientation="horizontal"
        {...props}
      >
        {symbol && <span className="text-gold-600 text-xl font-serif opacity-80">{symbol}</span>}
      </div>
    );
  }
);

SacredSeparator.displayName = "SacredSeparator";

/**
 * Composant SacredSeparator - Séparateurs sacrés
 *
 * Utilisation:
 *
 * <SacredSeparator variant="cross" />
 * <SacredSeparator variant="chi-rho" />
 * <SacredSeparator variant="line" />
 * <SacredSeparator variant="ornate" />
 *
 * Variantes:
 * - cross: Croix chrétienne (✝) avec lignes dorées
 * - chi-rho: Chi-Rho (☧) avec lignes rouges liturgiques
 * - line: Ligne simple dorée subtile
 * - ornate: Lignes dorées plus prononcées (sans symbole central)
 *
 * Le composant est sémantiquement correct avec role="separator"
 * et aria-orientation="horizontal" pour l'accessibilité.
 */
