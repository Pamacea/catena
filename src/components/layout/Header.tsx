"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CrossGothic } from "@/components/ui/Icons";

// Sections principales — visibles dans la nav
const primaryNavItems = [
  { name: "Bible", href: "/bible" },
  { name: "Catéchisme", href: "/catechism" },
  { name: "Liturgie", href: "/liturgy" },
];

// Sections secondaires — dans le dropdown Ressources
const resourcesNavItems = [
  { name: "Hérésies", href: "/heresies" },
  { name: "Conciles", href: "/councils" },
  { name: "Dogmes", href: "/dogmas" },
  { name: "Vault", href: "/vault" },
  { name: "Disputationes", href: "/disputationes" },
  { name: "Crise", href: "/crise" },
  { name: "Chronologie", href: "/chronologie" },
];

export function Header({ compact = false }: { compact?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`border-b-2 border-gold-500/50 px-6 bg-stone-50/90 backdrop-blur-sm sticky top-0 z-50 ${compact ? "py-3" : "py-6"}`}
    >
      <div className="max-w-2/3 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <CrossGothic
              className={`${compact ? "w-6 h-6" : "w-8 h-8"} text-gold-600 group-hover:text-gold-700 transition-colors`}
            />
            <div>
              <h1
                className={`font-serif text-ink-900 leading-tight ${compact ? "text-base" : "text-xl"}`}
              >
                Catena
              </h1>
              <p
                className={`text-ink-600 uppercase tracking-widest ${compact ? "text-[10px]" : "text-xs"}`}
              >
                Tradition
              </p>
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {primaryNavItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-ink-700 hover:text-gold-700 transition-colors relative group ${compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"}`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {/* Ressources dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className={`text-ink-700 hover:text-gold-700 transition-colors flex items-center gap-1 ${compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"}`}
                aria-expanded={resourcesOpen}
                aria-haspopup="true"
              >
                Ressources
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {resourcesOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-stone-50 border-2 border-gold-400/30 shadow-lg rounded-xs py-1 z-50">
                  {resourcesNavItems.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setResourcesOpen(false)}
                      className="block px-4 py-2 text-sm text-ink-700 hover:text-gold-700 hover:bg-parchment-50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-ink-700 hover:text-gold-700 min-h-[44px] min-w-[44px] flex items-center justify-center"
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
              {primaryNavItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 text-ink-700 hover:text-gold-700 hover:bg-parchment-50 rounded-xs transition-colors text-sm min-h-[44px] flex items-center"
                >
                  {item.name}
                </Link>
              ))}

              {/* Separator */}
              <div className="my-1 border-t border-gold-400/20" />
              <p className="px-4 py-1 text-xs text-ink-500 uppercase tracking-wider">Ressources</p>

              {resourcesNavItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 text-ink-600 hover:text-gold-700 hover:bg-parchment-50 rounded-xs transition-colors text-sm min-h-[44px] flex items-center"
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
