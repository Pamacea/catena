"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Skeleton visual variants for different content types.
 * - text: Multiple lines of text
 * - circle: Circular loading indicator
 * - rect: Rectangular placeholder
 * - manuscript: Staggered widths mimicking handwritten text
 */
export type SkeletonVariant = "text" | "circle" | "rect" | "manuscript";

/**
 * Props for the Skeleton component.
 */
export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual style variant */
  variant?: SkeletonVariant;
  /** Fixed width */
  width?: string;
  /** Fixed height */
  height?: string;
  /** Number of lines (for text and manuscript variants) */
  lines?: number;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = "rect", width, height, lines, ...props }, ref) => {
    // Manuscript variant - hand-written style loading skeleton
    if (variant === "manuscript") {
      return (
        <div ref={ref} className="space-y-3 w-full" style={{ width }} {...props}>
          {/* Title line */}
          <div
            className={cn(
              "h-7 rounded bg-gradient-to-r from-parchment-200 via-parchment-100 to-parchment-200 animate-pulse",
              "w-3/4"
            )}
          />
          {/* Content lines with manuscript-style staggered widths */}
          {Array.from({ length: lines || 4 }).map((_, i) => {
            const widths = ["100%", "95%", "92%", "97%", "88%", "94%"];
            const w = widths[i % widths.length];
            return (
              <div
                key={i}
                className={cn(
                  "h-5 rounded bg-gradient-to-r from-parchment-200 via-parchment-100 to-parchment-200 animate-pulse",
                  i === 0 && "mt-4"
                )}
                style={{ width: w }}
              />
            );
          })}
        </div>
      );
    }

    // Text variant - multiple lines
    if (variant === "text") {
      return (
        <div ref={ref} className="space-y-2" style={{ width }} {...props}>
          {Array.from({ length: lines || 3 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-4 rounded bg-parchment-200 animate-pulse",
                i === (lines || 3) - 1 && "w-2/3"
              )}
              style={i === (lines || 3) - 1 ? {} : { width: "100%" }}
            />
          ))}
        </div>
      );
    }

    // Circle variant
    if (variant === "circle") {
      return (
        <div
          ref={ref}
          className={cn("rounded-full bg-parchment-200 animate-pulse", className)}
          style={{ width: width || "40px", height: height || width || "40px" }}
          {...props}
        />
      );
    }

    // Rect variant (default)
    return (
      <div
        ref={ref}
        className={cn("rounded bg-parchment-200 animate-pulse", className)}
        style={{ width, height }}
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";

// Manuscript-style skeleton loader
export interface ManuscriptSkeletonProps {
  lines?: number;
  className?: string;
}

export function ManuscriptSkeleton({ lines = 8, className }: ManuscriptSkeletonProps) {
  return (
    <div className={cn("space-y-3 w-full", className)}>
      {/* Title line */}
      <div className="h-7 w-3/4 rounded bg-gradient-to-r from-parchment-200 via-parchment-100 to-parchment-200 animate-pulse" />
      {/* Content lines with staggered widths */}
      {Array.from({ length: lines }).map((_, i) => {
        const widths = ["100%", "95%", "92%", "97%", "88%", "94%", "90%", "96%"];
        const w = widths[i % widths.length];
        return (
          <div
            key={i}
            className="h-5 rounded bg-gradient-to-r from-parchment-200 via-parchment-100 to-parchment-200 animate-pulse"
            style={{ width: w }}
          />
        );
      })}
    </div>
  );
}

// Card skeleton for grid layouts
export function CardSkeleton() {
  return (
    <div className="border border-gold-400/40/50 rounded-lg p-6 space-y-4 bg-parchment-50">
      <div className="flex items-start justify-between">
        <Skeleton variant="circle" width="48px" height="48px" />
        <Skeleton variant="rect" width="80px" height="24px" />
      </div>
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="80%" />
      <div className="flex gap-2 pt-2">
        <Skeleton variant="rect" width="60px" height="24px" />
        <Skeleton variant="rect" width="60px" height="24px" />
      </div>
    </div>
  );
}

// Grid skeleton for listing pages
export interface GridSkeletonProps {
  count?: number;
  cols?: 2 | 3 | 4;
}

export function GridSkeleton({ count = 8, cols = 3 }: GridSkeletonProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid gap-6", gridCols[cols])}>
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

// Chapter skeleton for Bible/catechism pages
export function ChapterSkeleton() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Chapter number */}
      <Skeleton variant="rect" width="120px" height="48px" className="mx-auto" />
      {/* Verse blocks */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="flex gap-4">
          <Skeleton variant="rect" width="32px" height="24px" className="flex-shrink-0" />
          <ManuscriptSkeleton lines={Math.floor(Math.random() * 3) + 2} />
        </div>
      ))}
    </div>
  );
}
