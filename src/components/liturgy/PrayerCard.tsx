/**
 * PrayerCard - Carte pour une prière avec latin/français alignés
 *
 * Affichage compact d'une prière pour les listes et cartes,
 * avec possibilité de voir le latin et le français.
 *
 * @example
 * ```tsx
 * <PrayerCard
 * slug="pater-noster"
 * name="Notre Père"
 * nameLatin="Pater Noster"
 * category={PrayerCategory.OUR_FATHER}
 * excerpt={{ french: "Notre Père qui es aux cieux..." }}
 * variant="default"
 * />
 * ```
 */

"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { PrayerCategory, type Prayer } from "@/data/prayers";

/**
 * Props pour le composant PrayerCard.
 */
interface PrayerCardProps {
 /** Slug unique de la prière */
 slug: string;
 /** Nom de la prière en français */
 name: string;
 /** Nom de la prière en latin */
 nameLatin?: string;
 /** Catégorie liturgique de la prière */
 category: PrayerCategory;
 /** Description courte de la prière */
 description?: string;
 /** Extrait de la prière en latin et français */
 excerpt: {
 latin?: string;
 french: string;
 };
 /** Tags pour la recherche et filtrage */
 tags?: string[];
 /** Variante visuelle de la carte */
 variant?: "default" | "compact" | "detailed";
 /** Contrôle l'affichage du latin (optionnel) */
 showLatin?: boolean;
}

const categoryConfig: Record<PrayerCategory, { label: string; icon: string; color: string }> = {
 [PrayerCategory.OUR_FATHER]: { label: "Notre Père", icon: "🙏", color: "blue" },
 [PrayerCategory.HAIL_MARY]: { label: "Je vous salue Marie", icon: "🌹", color: "rose" },
 [PrayerCategory.CREED]: { label: "Symbole de foi", icon: "✝", color: "violet" },
 [PrayerCategory.ACTS]: { label: "Actes", icon: "💝", color: "amber" },
 [PrayerCategory.LITANY]: { label: "Litanies", icon: "📿", color: "purple" },
 [PrayerCategory.ROSARY]: { label: "Rosaire", icon: "📿", color: "pink" },
 [PrayerCategory.LITURGICAL]: { label: "Liturgique", icon: "⛪", color: "green" },
 [PrayerCategory.MARIAN]: { label: "Mariane", icon: "👑", color: "blue" },
 [PrayerCategory.SAINT]: { label: "Saint", icon: "🏆", color: "yellow" },
 [PrayerCategory.EUCHARISTIC]: { label: "Eucharistique", icon: "🍞", color: "amber" },
 [PrayerCategory.PENITENTIAL]: { label: "Pénitentielle", icon: "😔", color: "gray" },
 [PrayerCategory.MORNING]: { label: "Matin", icon: "🌅", color: "orange" },
 [PrayerCategory.EVENING]: { label: "Soir", icon: "🌙", color: "indigo" },
 [PrayerCategory.MEAL]: { label: "Repas", icon: "🍽️", color: "green" },
 [PrayerCategory.OTHER]: { label: "Autre", icon: "📜", color: "slate" },
};

export function PrayerCard({
 slug,
 name,
 nameLatin,
 category,
 description,
 excerpt,
 tags,
 variant = "default",
 showLatin: controlledShowLatin,
}: PrayerCardProps) {
 const [internalShowLatin, setInternalShowLatin] = useState(false);
 const showLatin = controlledShowLatin ?? internalShowLatin;

 const config = categoryConfig[category];

 if (variant === "compact") {
 return (
 <Link
 href={`/liturgy/${slug}`}
 className="flex items-center gap-3 p-3 rounded-lg hover:bg-parchment-100 transition-colors border border-transparent hover:border-parchment-200 group"
 >
 <span className="text-2xl">{config.icon}</span>
 <div className="flex-1 min-w-0">
 <p className="font-medium text-ink-800 group-hover:text-gold-700 transition-colors">
 {name}
 </p>
 {excerpt.french && <p className="text-xs text-ink-500 truncate">{excerpt.french}</p>}
 </div>
 <svg
 className="w-5 h-5 text-ink-400 group-hover:text-gold-600"
 fill="none"
 stroke="currentColor"
 viewBox="0 0 24 24"
 >
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
 </svg>
 </Link>
 );
 }

 if (variant === "detailed") {
 return (
 <Link
 href={`/liturgy/${slug}`}
 className="block p-6 rounded-lg border border-parchment-200 bg-white hover:shadow-lg transition-all"
 >
 {/* En-tête */}
 <div className="flex items-start justify-between mb-4">
 <div>
 <h3 className="text-xl font-serif font-bold text-ink-900">{name}</h3>
 {nameLatin && <p className="text-sm text-ink-500 italic mt-1">{nameLatin}</p>}
 </div>
 <span className="text-3xl">{config.icon}</span>
 </div>

 {/* Catégorie et tags */}
 <div className="flex flex-wrap gap-2 mb-4">
 <span className="px-2 py-1 bg-parchment-100 text-ink-700 rounded text-xs">
 {config.label}
 </span>
 {tags?.slice(0, 3).map(tag => (
 <span key={tag} className="px-2 py-1 bg-parchment-50 text-ink-600 rounded text-xs">
 #{tag}
 </span>
 ))}
 </div>

 {/* Description */}
 {description && <p className="text-ink-600 text-sm mb-4">{description}</p>}

 {/* Extrait bilingue */}
 <div className="bg-parchment-50 rounded-lg p-4 border border-parchment-200">
 {excerpt.latin && (
 <p className="text-ink-600 italic font-serif text-sm mb-2">{excerpt.latin}</p>
 )}
 <p className="text-ink-800 font-serif">{excerpt.french}</p>
 </div>

 {/* Toggle Latin (non cliquable dans ce cas) */}
 {excerpt.latin && controlledShowLatin === undefined && (
 <div className="flex items-center justify-end mt-3 gap-2">
 <span className="text-xs text-ink-500">Latin:</span>
 <button
 onClick={e => {
 e.preventDefault();
 setInternalShowLatin(!internalShowLatin);
 }}
 className={cn(
 "w-10 h-6 rounded-full transition-colors relative",
 showLatin ? "bg-liturgical-purple" : "bg-parchment-200"
 )}
 >
 <span
 className={cn(
 "absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all",
 showLatin ? "left-5" : "left-1"
 )}
 />
 </button>
 </div>
 )}
 </Link>
 );
 }

 // Variant 'default'
 return (
 <Link
 href={`/liturgy/${slug}`}
 className="block p-4 rounded-lg border border-parchment-200 bg-white hover:shadow-md transition-all group"
 >
 <div className="flex items-start gap-3">
 <span className="text-2xl">{config.icon}</span>

 <div className="flex-1 min-w-0">
 <h3 className="font-serif font-bold text-ink-900 group-hover:text-gold-600 transition-colors">
 {name}
 </h3>
 {nameLatin && <p className="text-sm text-ink-500 italic">{nameLatin}</p>}

 {/* Extrait */}
 <div className="mt-2 space-y-1">
 {excerpt.latin && showLatin && (
 <p className="text-sm text-ink-600 italic truncate">{excerpt.latin}</p>
 )}
 <p className="text-sm text-ink-700 line-clamp-2">{excerpt.french}</p>
 </div>

 {/* Tags */}
 {tags && tags.length > 0 && (
 <div className="flex flex-wrap gap-1 mt-2">
 {tags.slice(0, 2).map(tag => (
 <span
 key={tag}
 className="text-xs text-ink-500 bg-parchment-50 px-2 py-0.5 rounded"
 >
 #{tag}
 </span>
 ))}
 </div>
 )}
 </div>
 </div>
 </Link>
 );
}

/**
 * PrayerMention - Mention très compacte pour inline
 */
interface PrayerMentionProps {
 slug: string;
 name: string;
 icon?: string;
}

export function PrayerMention({ slug, name, icon = "📜" }: PrayerMentionProps) {
 return (
 <Link
 href={`/liturgy/${slug}`}
 className="inline-flex items-center gap-1 px-2 py-1 bg-parchment-100 hover:bg-parchment-200 rounded text-sm text-ink-700 hover:text-gold-600 transition-colors"
 >
 <span>{icon}</span>
 <span>{name}</span>
 </Link>
 );
}

/**
 * RosaryDecade - Affichage d'une dizaine de chapelet
 */
interface RosaryDecadeProps {
 mysteryName: string;
 prayers: {
 ourFather?: { latin: string; french: string };
 hailMarys: Array<{ latin: string; french: string }>;
 gloryBe?: { latin: string; french: string };
 fatimaPrayer?: { latin: string; french: string };
 };
}

export function RosaryDecade({ mysteryName, prayers }: RosaryDecadeProps) {
 return (
 <div className="bg-parchment-50 rounded-lg p-4 border border-parchment-200">
 <h4 className="text-sm font-semibold text-ink-700 uppercase tracking-wider mb-3">
 {mysteryName}
 </h4>

 <div className="space-y-3">
 {/* Notre Père */}
 {prayers.ourFather && (
 <div className="text-center">
 <p className="text-xs text-ink-400 uppercase mb-1">Notre Père</p>
 <p className="font-serif text-ink-700 text-sm">{prayers.ourFather.french}</p>
 </div>
 )}

 {/* Je vous salue Marie (x10) */}
 <div className="space-y-2">
 <p className="text-xs text-ink-400 uppercase text-center">Je vous salue Marie (10)</p>
 {prayers.hailMarys.map((hailMary, i) => (
 <p key={i} className="font-serif text-ink-700 text-sm text-center italic">
 {hailMary.french}
 </p>
 ))}
 </div>

 {/* Gloire au Père */}
 {prayers.gloryBe && (
 <div className="text-center pt-2 border-t border-parchment-200">
 <p className="font-serif text-ink-700 text-sm">{prayers.gloryBe.french}</p>
 </div>
 )}

 {/* Prière de Fatima */}
 {prayers.fatimaPrayer && (
 <div className="text-center pt-2 border-t border-parchment-200">
 <p className="font-serif text-ink-700 text-sm italic">{prayers.fatimaPrayer.french}</p>
 </div>
 )}
 </div>
 </div>
 );
}

/**
 * LiturgicalDay - Carte pour un jour liturgique avec prières
 */
interface LiturgicalDayProps {
 name: string;
 date: string;
 color: "purple" | "white" | "red" | "green" | "rose";
 prayers: Array<{ slug: string; name: string }>;
}

export function LiturgicalDay({ name, date, color, prayers }: LiturgicalDayProps) {
 const colorClasses = {
 purple: "border-liturgical-purple bg-liturgical-purple/5",
 white: "border-liturgical-white bg-liturgical-white/50",
 red: "border-liturgical-red bg-liturgical-red/5",
 green: "border-liturgical-green bg-liturgical-green/5",
 rose: "border-liturgical-rose bg-liturgical-rose/5",
 };

 return (
 <div className={cn("rounded-lg border-2 p-4", colorClasses[color])}>
 <div className="flex items-center justify-between mb-3">
 <div>
 <h3 className="font-serif font-bold text-ink-900">{name}</h3>
 <p className="text-sm text-ink-600">{date}</p>
 </div>
 <div
 className={cn(
 "w-4 h-4 rounded-full",
 color === "purple" && "bg-liturgical-purple",
 color === "white" && "bg-liturgical-white border border-ink-200",
 color === "red" && "bg-liturgical-red",
 color === "green" && "bg-liturgical-green",
 color === "rose" && "bg-liturgical-rose"
 )}
 />
 </div>

 <ul className="space-y-1">
 {prayers.map(prayer => (
 <li key={prayer.slug}>
 <Link
 href={`/liturgy/${prayer.slug}`}
 className="text-sm text-ink-700 hover:text-gold-600 flex items-center gap-2 py-1"
 >
 <span>📜</span>
 <span>{prayer.name}</span>
 </Link>
 </li>
 ))}
 </ul>
 </div>
 );
}
