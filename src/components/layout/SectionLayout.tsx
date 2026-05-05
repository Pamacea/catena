import type { ReactNode } from "react";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface SectionLayoutProps {
  title: string;
  description?: string;
  breadcrumbs: Breadcrumb[];
  children: ReactNode;
  /** Hide the section header (title + description) but keep the breadcrumb */
  hideHeader?: boolean;
  /** Additional className on the main content wrapper */
  contentClassName?: string;
}

export function SectionLayout({
  title,
  description,
  breadcrumbs,
  children,
  hideHeader = false,
  contentClassName,
}: SectionLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-stone-200">
      <Header compact />
      <main className="flex-1 px-6 py-8">
        <div className="max-w-2/3 mx-auto stagger">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-ink-600 mb-6">
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                {index > 0 && <span className="text-gold-500">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-gold-700 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-ink-900">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          {/* Section header */}
          {!hideHeader && (
            <header className="mb-10 pb-6 border-b-2 border-gold-400/30 text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink-900 mb-3">
                {title}
              </h1>
              {description && <p className="text-lg text-ink-700 mx-auto">{description}</p>}
            </header>
          )}

          <div className={contentClassName}>{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
