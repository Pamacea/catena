/**
 * BilingualText - Texte bilingue Latin/Français
 *
 * Composant pour afficher des prières et textes liturgiques
 * en latin et français avec grid-cols-2 et scroll synchronisé.
 *
 * @example
 * ```tsx
 * <BilingualText
 *   latin="Pater noster qui es in caelis..."
 *   french="Notre Père qui es aux cieux..."
 *   showLatin={true}
 * />
 * ```
 */

"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

/**
 * Props pour le composant BilingualText.
 */
interface BilingualTextProps {
  /** Texte en latin (Vulgate) */
  latin: string;
  /** Texte en français */
  french: string;
  /** Si true, traite chaque ligne comme un verset séparé */
  verses?: boolean;
  /** Toggle pour afficher/masquer le latin */
  showLatin?: boolean;
  /** Mode d'alignement des colonnes */
  alignBy?: "line" | "paragraph";
}

export function BilingualText({
  latin,
  french,
  verses = false,
  showLatin: controlledShowLatin,
  alignBy = "line",
}: BilingualTextProps) {
  const [internalShowLatin, setInternalShowLatin] = useState(true);
  const showLatin = controlledShowLatin ?? internalShowLatin;

  // Traitement du texte en lignes ou paragraphes
  const latinLines = latin.split(/\n+/).filter(l => l.trim());
  const frenchLines = french.split(/\n+/).filter(l => l.trim());

  // Références pour le scroll synchronisé
  const latinContainerRef = useRef<HTMLDivElement>(null);
  const frenchContainerRef = useRef<HTMLDivElement>(null);

  // Scroll synchronisé
  useEffect(() => {
    const latinContainer = latinContainerRef.current;
    const frenchContainer = frenchContainerRef.current;

    if (!latinContainer || !frenchContainer) return;

    let isLatinScrolling = false;
    let isFrenchScrolling = false;

    const handleLatinScroll = () => {
      if (!isLatinScrolling) {
        isFrenchScrolling = true;
        const ratio = frenchContainer.scrollHeight / latinContainer.scrollHeight;
        frenchContainer.scrollTop = latinContainer.scrollTop * ratio;
        setTimeout(() => {
          isFrenchScrolling = false;
        }, 100);
      }
    };

    const handleFrenchScroll = () => {
      if (!isFrenchScrolling) {
        isLatinScrolling = true;
        const ratio = latinContainer.scrollHeight / frenchContainer.scrollHeight;
        latinContainer.scrollTop = frenchContainer.scrollTop * ratio;
        setTimeout(() => {
          isLatinScrolling = false;
        }, 100);
      }
    };

    latinContainer.addEventListener("scroll", handleLatinScroll);
    frenchContainer.addEventListener("scroll", handleFrenchScroll);

    return () => {
      latinContainer.removeEventListener("scroll", handleLatinScroll);
      frenchContainer.removeEventListener("scroll", handleFrenchScroll);
    };
  }, []);

  return (
    <div className="space-y-4">
      {/* Toggle Latin */}
      {controlledShowLatin === undefined && (
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => setInternalShowLatin(!internalShowLatin)}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-colors",
              showLatin
                ? "bg-liturgical-purple text-white"
                : "bg-parchment-100 text-ink-600 hover:bg-gold-400/40"
            )}
          >
            <span>🇻🇦</span>
            <span>{showLatin ? "Latina" : "Français seulement"}</span>
          </button>
        </div>
      )}

      {/* Contenu bilingue */}
      <div
        className={cn(
          "grid gap-4 rounded-lg border border-gold-400/40 bg-white overflow-hidden",
          showLatin ? "grid-cols-2" : "grid-cols-1"
        )}
      >
        {/* Colonne Latine */}
        {showLatin && (
          <div className="border-r border-gold-400/40">
            <div className="bg-parchment-50 px-4 py-2 border-b border-gold-400/40">
              <p className="text-sm font-semibold text-ink-700">Latina</p>
            </div>
            <div ref={latinContainerRef} className="p-4 space-y-3 max-h-[500px] overflow-y-auto">
              {latinLines.map((line, i) => (
                <p key={i} className="font-serif text-ink-800 leading-relaxed" data-verse-index={i}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Colonne Française */}
        <div>
          <div className="bg-parchment-50 px-4 py-2 border-b border-gold-400/40">
            <p className="text-sm font-semibold text-ink-700">Français</p>
          </div>
          <div ref={frenchContainerRef} className="p-4 space-y-3 max-h-[500px] overflow-y-auto">
            {frenchLines.map((line, i) => (
              <p key={i} className="font-serif text-ink-800 leading-relaxed" data-verse-index={i}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Note sur le scroll synchronisé */}
      {showLatin && (
        <p className="text-xs text-ink-500 text-center">Les colonnes défilent ensemble</p>
      )}
    </div>
  );
}

/**
 * VersePair - Ligne bilingue alignée
 */
interface VersePairProps {
  latin: string;
  french: string;
  verseNumber?: number;
}

export function VersePair({ latin, french, verseNumber }: VersePairProps) {
  return (
    <div className="grid grid-cols-2 gap-4 py-2 border-b border-parchment-100 last:border-0">
      {verseNumber && (
        <span className="col-span-2 text-xs text-ink-400 font-medium">{verseNumber}</span>
      )}
      <p className="font-serif text-ink-800 italic text-sm leading-relaxed">{latin}</p>
      <p className="font-serif text-ink-800 text-sm leading-relaxed">{french}</p>
    </div>
  );
}

/**
 * ParallelText - Texte parallèle avec sections
 */
interface TextSection {
  title?: string;
  latin: string[];
  french: string[];
}

interface ParallelTextProps {
  sections: TextSection[];
  showLatin?: boolean;
}

export function ParallelText({ sections, showLatin = true }: ParallelTextProps) {
  return (
    <div className="space-y-6">
      {sections.map((section, i) => (
        <div key={i} className="space-y-2">
          {section.title && (
            <h4 className="text-sm font-semibold text-ink-700 uppercase tracking-wider">
              {section.title}
            </h4>
          )}

          <div
            className={cn(
              "bg-white rounded-lg border border-gold-400/40 overflow-hidden",
              showLatin ? "grid grid-cols-2" : "grid-cols-1"
            )}
          >
            {/* Latin */}
            {showLatin && (
              <div className="border-r border-gold-400/40 p-4">
                <p className="text-xs text-ink-500 uppercase mb-3">Latina</p>
                <div className="space-y-2">
                  {section.latin.map((line, j) => (
                    <p key={j} className="font-serif text-ink-800 italic leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Français */}
            <div className="p-4">
              <p className="text-xs text-ink-500 uppercase mb-3">Français</p>
              <div className="space-y-2">
                {section.french.map((line, j) => (
                  <p key={j} className="font-serif text-ink-800 leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * PrayerLayout - Mise en page spéciale pour les prières
 */
interface PrayerLayoutProps {
  title: string;
  titleLatin?: string;
  sections: Array<{
    latin?: string;
    french: string;
    responseLatin?: string;
    responseFrench?: string;
  }>;
  rubrics?: {
    latin?: string;
    french: string;
  };
}

export function PrayerLayout({ title, titleLatin, sections, rubrics }: PrayerLayoutProps) {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Titre */}
      <header className="text-center space-y-2 pb-4 border-b border-parchment-300">
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-ink-900">{title}</h1>
        {titleLatin && <p className="text-lg text-ink-600 italic">{titleLatin}</p>}
      </header>

      {/* Sections de la prière */}
      <div className="space-y-4">
        {sections.map((section, i) => (
          <div key={i} className="text-center space-y-2">
            {/* Texte principal */}
            <p className="text-lg md:text-xl font-serif text-ink-900 leading-relaxed">
              {section.latin && <span className="italic text-ink-700">{section.latin}</span>}
              {section.latin && <br />}
              <span>{section.french}</span>
            </p>

            {/* Réponse (si présente) */}
            {(section.responseLatin || section.responseFrench) && (
              <p className="text-base font-serif text-ink-700 leading-relaxed">
                <span className="italic text-ink-600">{section.responseLatin} </span>
                {section.responseLatin && <span>R. </span>}
                {section.responseFrench}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Rubriques */}
      {rubrics && (
        <div className="bg-parchment-50 rounded-lg p-4 border border-gold-400/40">
          <p className="text-sm text-ink-600 italic">
            {rubrics.latin && <span className="text-ink-500">{rubrics.latin} — </span>}
            {rubrics.french}
          </p>
        </div>
      )}
    </div>
  );
}
