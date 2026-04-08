"use client";

import { useState } from "react";
import Link from "next/link";
import { CrossGothic } from "@/components/ui/Icons";

const navItems = [
  { name: "Bible", href: "/bible" },
  { name: "Doctrine", href: "/doctrine" },
  { name: "Catéchisme", href: "/catechism" },
  { name: "Liturgie", href: "/liturgy" },
  { name: "Chronologie", href: "/timeline" },
];

export function Header({ compact = false }: { compact?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`border-b-2 border-gold-500/50 px-6 bg-stone-50/90 dark:bg-stone-900/95 backdrop-blur-sm sticky top-0 z-50 ${compact ? "py-3" : "py-6"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <CrossGothic
              className={`${compact ? "w-6 h-6" : "w-8 h-8"} text-gold-600 group-hover:text-gold-700 transition-colors`}
            />
            <div>
              <h1
                className={`font-serif text-ink-900 dark:text-parchment-50 leading-tight ${compact ? "text-base" : "text-xl"}`}
              >
                Catena
              </h1>
              <p
                className={`text-ink-600 dark:text-ink-400 uppercase tracking-widest ${compact ? "text-[10px]" : "text-xs"}`}
              >
                Tradition
              </p>
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-ink-700 dark:text-ink-400 hover:text-gold-700 dark:hover:text-gold-500 transition-colors relative group ${compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"}`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-ink-700 dark:text-ink-400 hover:text-gold-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={compact ? "w-5 h-5" : "w-6 h-6"}
              suppressHydrationWarning
            >
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileOpen && (
          <nav className="lg:hidden mt-4 pb-2 border-t border-gold-400/20 pt-4">
            <div className="flex flex-col gap-1">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 text-ink-700 dark:text-ink-400 hover:text-gold-700 hover:bg-parchment-50 dark:hover:bg-stone-800 rounded-xs transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
