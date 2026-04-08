"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Badge visual variants with traditional Catholic theming.
 * - default: Parchment background with gold border
 * - primary: Liturgical red (main actions)
 * - secondary: Dark ink background
 * - success: Liturgical green
 * - warning: Gold background
 * - danger: Liturgical red (destructive)
 * - outline: Transparent with gold border
 * - liturgical: Purple to red gradient
 * - century: Dark background with gold text (for centuries)
 */
export type BadgeVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "outline"
  | "liturgical"
  | "century";

/**
 * Badge size presets.
 */
export type BadgeSize = "sm" | "md" | "lg";

/**
 * Props for the Badge component.
 */
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Visual style variant */
  variant?: BadgeVariant;
  /** Size preset */
  size?: BadgeSize;
  /** Show a colored dot indicator before the text */
  dot?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-parchment-200 text-ink-900 border border-gold-400/40",
  primary: "bg-liturgical-red text-parchment-50 border border-liturgical-red",
  secondary: "bg-ink-900 text-parchment-50 border border-gold-400/40",
  success: "bg-liturgical-green text-parchment-50 border border-liturgical-green",
  warning: "bg-gold-500 text-ink-900 border border-gold-600",
  danger: "bg-liturgical-red text-parchment-50 border border-liturgical-red",
  outline: "bg-transparent border-2 border-gold-400/40 text-ink-900",
  liturgical:
    "bg-gradient-to-r from-liturgical-purple to-liturgical-red text-parchment-50 border border-liturgical-red",
  century: "bg-ink-900/80 text-gold-400 border border-gold-500/30 font-serif italic",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base",
};

/**
 * Badge component for labels, categories, and status indicators.
 * Traditional Catholic theme with parchment, gold, and liturgical colors.
 *
 * @example
 * ```tsx
 * <Badge variant="primary">New</Badge>
 * <Badge variant="century">IVe</Badge>
 * <Badge variant="success" dot>Complete</Badge>
 * ```
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "md", dot = false, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full font-medium transition-colors duration-200",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {dot && (
          <span
            className={cn(
              "h-2 w-2 rounded-full",
              variant === "success" && "bg-green-400",
              variant === "warning" && "bg-gold-400",
              variant === "danger" && "bg-red-400",
              variant === "default" && "bg-ink-400"
            )}
          />
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

/**
 * Props for CategoryBadge preset component.
 */
export interface CategoryBadgeProps extends Omit<BadgeProps, "variant"> {
  /** Category name that maps to a specific badge variant */
  category: string;
}

/**
 * Mapping of category names to badge variants.
 * @internal
 */
const categoryMap: Record<string, BadgeVariant> = {
  doctrine: "primary",
  liturgy: "secondary",
  bible: "success",
  catechism: "warning",
  fathers: "liturgical",
  council: "century",
  default: "default",
};

/**
 * Preset badge component that automatically selects the variant based on category.
 *
 * @example
 * ```tsx
 * <CategoryBadge category="doctrine" />  // Uses primary variant
 * <CategoryBadge category="council" />   // Uses century variant
 * ```
 */
export function CategoryBadge({ category, ...props }: CategoryBadgeProps) {
  const variant = categoryMap[category.toLowerCase()] || categoryMap.default;
  return (
    <Badge variant={variant} {...props}>
      {category}
    </Badge>
  );
}

/**
 * Props for CenturyBadge preset component.
 */
export interface CenturyBadgeProps extends Omit<BadgeProps, "variant" | "children"> {
  /** Century as number (e.g., 4) or string (e.g., "IVe") */
  century: string | number;
}

/**
 * Preset badge for displaying centuries with Roman numerals.
 * Automatically converts numbers to Roman numerals (e.g., 4 → "IVe").
 *
 * @example
 * ```tsx
 * <CenturyBadge century={4} />    // Displays: "IVe"
 * <CenturyBadge century="XIIIe" /> // Displays: "XIIIe"
 * ```
 */
export function CenturyBadge({ century, ...props }: CenturyBadgeProps) {
  const centuryStr = typeof century === "number" ? romanize(century) : century;
  return (
    <Badge variant="century" size="sm" {...props}>
      {centuryStr}
    </Badge>
  );
}

/**
 * Converts a number to a Roman numeral string with 'e' suffix.
 * @param num - Number to convert (1-3999)
 * @returns Roman numeral string with 'e' suffix
 * @internal
 */
function romanize(num: number): string {
  const lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";
  let i = num;
  for (const key in lookup) {
    const value = lookup[key as keyof typeof lookup];
    while (i >= value) {
      roman += key;
      i -= value;
    }
  }
  return roman + "e";
}
