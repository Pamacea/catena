"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the Grid component.
 */
export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of columns (responsive breakpoints: mobile → tablet → desktop) */
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  /** Gap between grid items */
  gap?: 0 | 1 | 2 | 4 | 6 | 8;
}

const colsMap: Record<NonNullable<GridProps["cols"]>, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  12: "grid-cols-4 md:grid-cols-6 lg:grid-cols-12",
};

const gapMap: Record<NonNullable<GridProps["gap"]>, string> = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  4: "gap-4",
  6: "gap-6",
  8: "gap-8",
};

/**
 * Responsive CSS Grid container component.
 * Automatically adjusts columns based on screen size.
 *
 * @example
 * ```tsx
 * <Grid cols={3} gap={6}>
 *   <GridItem>Item 1</GridItem>
 *   <GridItem>Item 2</GridItem>
 * </Grid>
 * ```
 */
export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 1, gap = 4, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("grid", colsMap[cols], gapMap[gap], className)} {...props}>
        {children}
      </div>
    );
  }
);

Grid.displayName = "Grid";

/**
 * Props for the GridItem component.
 */
export interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of columns to span (or "full" for all) */
  colSpan?: 1 | 2 | 3 | 4 | 6 | 12 | "full";
  /** Number of rows to span (or "full" for all) */
  rowSpan?: 1 | 2 | 3 | 4 | "full";
}

const colSpanMap: Record<NonNullable<GridItemProps["colSpan"]>, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  6: "col-span-6",
  12: "col-span-12",
  full: "col-span-full",
};

const rowSpanMap: Record<NonNullable<GridItemProps["rowSpan"]>, string> = {
  1: "row-span-1",
  2: "row-span-2",
  3: "row-span-3",
  4: "row-span-4",
  full: "row-span-full",
};

/**
 * Grid item with optional column/row spanning.
 */
export const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  ({ className, colSpan, rowSpan, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(colSpan && colSpanMap[colSpan], rowSpan && rowSpanMap[rowSpan], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GridItem.displayName = "GridItem";
