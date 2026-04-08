"use client";

import { createContext, useContext, useState, HTMLAttributes, forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Context value passed to Accordion children components.
 * @internal
 */
interface AccordionContextValue {
  /** Set of currently open item values */
  openItems: Set<string>;
  /** Function to toggle an item's open state */
  toggleItem: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

/**
 * Hook to access Accordion context.
 * @throws Error if used outside of Accordion component
 * @internal
 */
function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
}

/**
 * Props for the Accordion container component.
 */
export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  /** Item values that should be open by default */
  defaultOpen?: string[];
  /** Whether multiple items can be open simultaneously (default: false) */
  allowMultiple?: boolean;
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, defaultOpen = [], allowMultiple = false, children, ...props }, ref) => {
    const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultOpen));

    const toggleItem = (value: string) => {
      setOpenItems(prev => {
        const next = new Set(prev);
        if (allowMultiple) {
          if (next.has(value)) {
            next.delete(value);
          } else {
            next.add(value);
          }
        } else {
          // Single mode: close all, open only this one
          next.clear();
          next.add(value);
        }
        return next;
      });
    };

    return (
      <AccordionContext.Provider value={{ openItems, toggleItem }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

Accordion.displayName = "Accordion";

/**
 * Props for AccordionItem component.
 */
export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Unique identifier for this item */
  value: string;
}

/**
 * Accordion item wrapper with parchment styling.
 */
export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const { openItems } = useAccordion();
    const isOpen = openItems.has(value);

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border border-gold-400/40/20 bg-parchment-50 overflow-hidden",
          className
        )}
        data-state={isOpen ? "open" : "closed"}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

/**
 * Props for AccordionTrigger component.
 */
export interface AccordionTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  /** Value matching parent AccordionItem */
  value: string;
  /** Optional icon to display before the title */
  icon?: ReactNode;
}

/**
 * Clickable trigger button that toggles the accordion item.
 */
export const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, value, icon, children, ...props }, ref) => {
    const { openItems, toggleItem } = useAccordion();
    const isOpen = openItems.has(value);

    return (
      <button
        ref={ref}
        onClick={() => toggleItem(value)}
        className={cn(
          "flex w-full items-center justify-between p-4 text-left font-serif font-semibold text-ink-900 transition-all duration-200 hover:bg-parchment-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900",
          className
        )}
        {...props}
      >
        <span className="flex items-center gap-2">
          {icon}
          {children}
        </span>
        <svg
          className={cn(
            "h-5 w-5 transition-transform duration-200 shrink-0 text-ink-700",
            isOpen && "rotate-180"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    );
  }
);

AccordionTrigger.displayName = "AccordionTrigger";

/**
 * Props for AccordionContent component.
 */
export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  /** Value matching parent AccordionItem */
  value: string;
}

/**
 * Collapsible content panel that shows when parent item is open.
 */
export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, value, children, ...props }, ref) => {
    const { openItems } = useAccordion();
    const isOpen = openItems.has(value);

    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden transition-all duration-200 ease-in-out",
          isOpen ? "animate-in slide-in-from-top-2" : "animate-out slide-out-to-top-2",
          className
        )}
        {...props}
      >
        <div className="p-4 pt-0 text-ink-800 leading-relaxed border-t border-gold-400/40/10 mt-2">
          {children}
        </div>
      </div>
    );
  }
);

AccordionContent.displayName = "AccordionContent";
