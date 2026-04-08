"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface DropCapProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "classic" | "illuminated" | "simple";
  size?: "sm" | "md" | "lg";
}

const variantStyles: Record<NonNullable<DropCapProps["variant"]>, string> = {
  classic: "font-serif text-gold-600 float-left mr-3 mt-1 leading-none",
  illuminated:
    "font-serif bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent float-left mr-3 mt-1 leading-none",
  simple: "font-serif text-ink-900 float-left mr-2 mt-1 leading-none font-bold",
};

const sizeStyles: Record<NonNullable<DropCapProps["size"]>, string> = {
  sm: "text-4xl",
  md: "text-5xl",
  lg: "text-6xl",
};

export const DropCap = forwardRef<HTMLSpanElement, DropCapProps>(
  ({ className, variant = "classic", size = "md", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

DropCap.displayName = "DropCap";

/**
 * Composant DropCap - Lettrines sacrées
 *
 * Utilisation:
 *
 * <p>
 *   <DropCap variant="illuminated" size="lg">L</DropCap>
 *   'orem ipsum dolor sit amet, consectetur adipiscing elit.
 * </p>
 *
 * Variantes:
 * - classic: Or classique avec fond transparent
 * - illuminated: Dégradé doré avec clipping texte
 * - simple: Noir, style manuscrit
 *
 * Tailles:
 * - sm: 2.5rem (40px)
 * - md: 3rem (48px)
 * - lg: 3.75rem (60px)
 */
