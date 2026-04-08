"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Button visual style variants for different UI contexts.
 * - primary: Main action buttons with liturgical red
 * - secondary: Less prominent actions with parchment background
 * - danger: Destructive actions (same as primary visually)
 * - outline: Bordered buttons with hover fill
 * - ghost: Minimal style with hover background
 * - sacred: Prominent gold gradient for sacred/important actions
 * - vitrail: Stained glass effect with liturgical colors gradient
 */
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "outline"
  | "ghost"
  | "sacred"
  | "vitrail";

/**
 * Button size presets.
 * - sm: Small buttons (px-3 py-1.5 text-sm)
 * - md: Medium buttons (px-4 py-2 text-base) - default
 * - lg: Large buttons (px-6 py-3 text-lg)
 */
export type ButtonSize = "sm" | "md" | "lg";

/**
 * Props for the Button component.
 * Extends standard button attributes with variant, size, and width options.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size preset */
  size?: ButtonSize;
  /** Whether button takes full width of container */
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-liturgical-red text-parchment-50 hover:bg-liturgical-red/90 shadow-md",
  secondary: "bg-parchment-200 text-ink-900 hover:bg-parchment-300 border border-gold-400/40",
  danger: "bg-liturgical-red text-parchment-50 hover:bg-liturgical-red/90 shadow-md",
  outline:
    "bg-transparent border-2 border-gold-400/40 text-ink-900 hover:bg-ink-900 hover:text-parchment-50",
  ghost: "bg-transparent text-ink-900 hover:bg-parchment-200",
  sacred:
    "bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-ink-950 hover:from-gold-600 hover:via-gold-500 hover:to-gold-600 border-2 border-gold-600/30 shadow-lg font-serif tracking-wide",
  vitrail:
    "bg-gradient-to-br from-liturgical-purple via-liturgical-blue to-liturgical-green text-parchment-50 hover:opacity-90 border-2 border-gold-500/50 shadow-lg backdrop-blur-sm",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

/**
 * Button component with multiple variants and sizes.
 * Traditional Catholic theme with parchment, gold, and liturgical colors.
 *
 * @example
 * ```tsx
 * <Button variant="primary">Save</Button>
 * <Button variant="sacred">Sacred Action</Button>
 * <Button variant="outline" size="sm">Cancel</Button>
 * <Button variant="vitrail" fullWidth>Stained Glass Button</Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      type = "button",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
