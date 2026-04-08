"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Card visual variants with traditional Catholic styling.
 * - default: Basic parchment card
 * - parchment: Enhanced parchment with shadow
 * - ink: Dark ink background for contrast
 * - gold: Gold gradient for divine/sacred content
 * - divine: Premium gold gradient with elevated shadow
 * - manuscrit: Manuscript style with red border (for Bible verses)
 */
export type CardVariant = "default" | "parchment" | "ink" | "gold" | "divine" | "manuscrit";

/**
 * Props for the Card component.
 */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual style variant */
  variant?: CardVariant;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: "bg-parchment-50 border-gold-400/40/20",
  parchment: "bg-parchment-100 border-gold-400/40 shadow-md",
  ink: "bg-ink-900 text-parchment-50 border-gold-400/40",
  gold: "bg-gradient-to-br from-parchment-50 to-parchment-200 border-gold-500/30 shadow-lg",
  divine:
    "bg-gradient-to-br from-parchment-50 via-gold-500/10 to-parchment-100 border-2 border-gold-500/40 shadow-xl relative overflow-hidden",
  manuscrit:
    "bg-parchment-100/90 border-l-4 border-liturgical-red border-y border-r border-gold-400/40 shadow-inner font-serif",
};

/**
 * Card container component with traditional Catholic styling.
 * Use with CardHeader, CardTitle, CardDescription, CardBody, and CardFooter.
 *
 * @example
 * ```tsx
 * <Card variant="manuscrit">
 *   <CardHeader>
 *     <CardTitle>Pater Noster</CardTitle>
 *   </CardHeader>
 *   <CardBody>
 *     <p>Notre Père...</p>
 *   </CardBody>
 * </Card>
 * ```
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border transition-shadow duration-200",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

/**
 * Props for CardHeader component.
 */
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Card header section with bottom border.
 * Typically contains CardTitle and CardDescription.
 */
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6 border-b border-gold-400/40/10", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";

/**
 * Props for CardTitle component.
 */
export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

/**
 * Card title rendered as an h3 element with serif font.
 */
export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(
          "text-2xl font-semibold leading-none tracking-tight text-ink-900 font-serif",
          className
        )}
        {...props}
      >
        {children}
      </h3>
    );
  }
);

CardTitle.displayName = "CardTitle";

/**
 * Props for CardDescription component.
 */
export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

/**
 * Card description with smaller text for subtitles.
 */
export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={cn("text-sm text-ink-700", className)} {...props}>
        {children}
      </p>
    );
  }
);

CardDescription.displayName = "CardDescription";

/**
 * Props for CardBody component.
 */
export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Main content area of the card (no top padding).
 */
export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("p-6 pt-0", className)} {...props}>
        {children}
      </div>
    );
  }
);

CardBody.displayName = "CardBody";

/**
 * Props for CardFooter component.
 */
export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Card footer with top border, typically for actions.
 */
export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center p-6 pt-0 border-t border-gold-400/40/10", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = "CardFooter";
