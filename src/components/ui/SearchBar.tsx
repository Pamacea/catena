"use client";

import { InputHTMLAttributes, forwardRef, useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the SearchBar component.
 */
export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Callback fired when search query changes (debounced) */
  onSearch?: (query: string) => void;
  /** Debounce delay in milliseconds (default: 300, set to 0 for immediate) */
  debounceMs?: number;
  /** Visual style variant */
  variant?: "default" | "parchment" | "minimal";
  /** Icon to display in the input */
  icon?: "search" | "filter" | "book" | "cross" | "none";
}

const iconMap = {
  search: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      suppressHydrationWarning
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  ),
  filter: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      suppressHydrationWarning
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
      />
    </svg>
  ),
  book: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      suppressHydrationWarning
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  ),
  cross: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      suppressHydrationWarning
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  ),
  none: null,
};

const variantStyles: Record<NonNullable<SearchBarProps["variant"]>, string> = {
  default: "bg-parchment-50 border-gold-400/40 focus:border-gold-400/40 focus:ring-ink-900/50",
  parchment:
    "bg-parchment-100 border-gold-400/40 focus:border-liturgical-red focus:ring-liturgical-red/50",
  minimal: "bg-transparent border-none focus:ring-0 px-0",
};

/**
 * Search input component with debounced search callback and icon support.
 * Traditional Catholic theme with parchment styling.
 *
 * @example
 * ```tsx
 * <SearchBar
 *   onSearch={(query) => console.log('Searching:', query)}
 *   placeholder="Rechercher une prière..."
 *   icon="book"
 * />
 * ```
 */
export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      className,
      onSearch,
      debounceMs = 300,
      variant = "default",
      icon = "search",
      placeholder = "Rechercher...",
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [localValue, setLocalValue] = useState(value || "");
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setLocalValue(newValue);

      if (onChange) {
        onChange(e);
      }

      if (onSearch) {
        if (debounceMs > 0) {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          timeoutRef.current = setTimeout(() => {
            onSearch(newValue);
          }, debounceMs);
        } else {
          onSearch(newValue);
        }
      }
    };

    const selectedIcon = iconMap[icon];

    return (
      <div className="relative w-full">
        {selectedIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-ink-500">
            {selectedIcon}
          </div>
        )}
        <input
          ref={ref}
          type="search"
          value={value !== undefined ? value : localValue}
          onChange={handleChange}
          className={cn(
            "w-full rounded-md border py-2.5 px-4 text-ink-900 placeholder:text-ink-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1",
            variantStyles[variant],
            icon !== "none" && "pl-10",
            className
          )}
          placeholder={placeholder}
          {...props}
        />
      </div>
    );
  }
);

SearchBar.displayName = "SearchBar";
