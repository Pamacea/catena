/**
 * Icônes SVG sacrées — Style gothique uniforme
 *
 * Collection de symboles chrétiens et liturgiques en SVG
 * avec un style gothique cohérent pour l'application Catena.
 *
 * @example
 * ```tsx
 * import { CrossGothic, Candle, Church } from '@/components/ui/Icons'
 *
 * <CrossGothic className="w-8 h-8 text-gold-500" />
 * <Candle className="w-6 h-6 text-liturgical-red" />
 * ```
 */

/**
 * Gothic cross icon with ornate design.
 * Features a decorated crossbeam and base.
 *
 * @param className - CSS classes to apply
 */
export function CrossGothic({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      suppressHydrationWarning
    >
      <path d="M12 3v18M12 3c-2 0-3 1-3 3h6c0-2-1-3-3-3z" />
      <path d="M9 6v4c0 1 1 2 3 2s3-1 3-2V6" />
      <path d="M12 12v3" />
      <path d="M10 15h4" />
    </svg>
  );
}

/**
 * Simple Latin cross icon.
 * Traditional cross shape with equal-length arms.
 *
 * @param className - CSS classes to apply
 */
export function CrossLatin({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      suppressHydrationWarning
    >
      <path d="M11 3v18M7 8h10" />
    </svg>
  );
}

/**
 * Cross pattée icon with flared arms.
 * Heraldic cross symbol often used in Crusader imagery.
 *
 * @param className - CSS classes to apply
 */
export function CrossPatee({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      suppressHydrationWarning
    >
      <path d="M10 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1 0-4h1V2h5zm0 9v7a2 2 0 0 0 2 2h4a2 2 0 0 0 0-4h-1v-5h-5z" />
      <path d="M12 11a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3 3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3z" />
    </svg>
  );
}

/**
 * Scroll/ parchment icon representing sacred texts.
 * Depicts an unrolled scroll with content markers.
 *
 * @param className - CSS classes to apply
 */
export function Scroll({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      suppressHydrationWarning
    >
      <path d="M8 3v18c0-1.5 1-2.5 2.5-2.5h5c1.5 0 2.5 1 2.5 2.5V3" />
      <path d="M8 3c0-1.5 1-2.5 2.5-2.5h5c1.5 0 2.5 1 2.5 2.5" />
      <path d="M15 3v4.5" />
      <path d="M8 7.5V3" />
      <circle cx="10.5" cy="12" r="0.5" fill="currentColor" />
      <circle cx="10.5" cy="15" r="0.5" fill="currentColor" />
    </svg>
  );
}

/**
 * Liturgical candle icon with flame.
 * Represents prayer, vigil, and divine presence.
 *
 * @param className - CSS classes to apply
 */
export function Candle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      suppressHydrationWarning
    >
      <path d="M12 2v10" />
      <path d="M9 12v8c0 1.5 1.5 2 3 2s3-0.5 3-2v-8" />
      <ellipse cx="12" cy="12" rx="3" ry="1" />
      <path d="M12 2c0.5 0 1 0.5 1 1s-0.5 1-1 1-1-0.5-1-1 0.5-1 1-1z" fill="currentColor" />
      <path
        d="M11.5 5c0.3 0 0.5-0.2 0.5-0.5s-0.2-0.5-0.5-0.5-0.5 0.2-0.5 0.5 0.2 0.5 0.5 0.5z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M11.3 6.5c0.2 0 0.3-0.1 0.3-0.3s-0.1-0.3-0.3-0.3-0.3 0.1-0.3 0.3 0.1 0.3 0.3 0.3z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}

/**
 * Church building icon with gothic architecture.
 * Represents the physical house of worship.
 *
 * @param className - CSS classes to apply
 */
export function Church({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      suppressHydrationWarning
    >
      <path d="M12 2L4 8v12h16V8l-8-6z" />
      <path d="M4 8l8 6 8-6" />
      <path d="M12 2v4" />
      <path d="M9 6h6" />
      <path d="M10 14v6" />
      <path d="M14 14v6" />
      <path d="M8 18h8" />
      <path d="M4 20h16" />
    </svg>
  );
}

/**
 * Chi-Rho symbol (☧).
 * Early Christian symbol representing Christ (XP monogram).
 *
 * @param className - CSS classes to apply
 */
export function ChiRho({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      suppressHydrationWarning
    >
      <circle cx="16" cy="8" r="6" />
      <path d="M4 20h8a4 4 0 0 0 4-4v-2a3 3 0 0 0-3-3H6v9z" />
      <path d="M6 11v9" fill="none" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

export function OrnamentLeft({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
      suppressHydrationWarning
    >
      <path d="M8 12c0-3 2-5 5-5s5 2 5 5-2 5-5 5" />
      <circle cx="8" cy="12" r="1.5" fill="currentColor" />
      <path d="M10 9c-1 0-2 0.5-2 1.5" />
    </svg>
  );
}

export function OrnamentRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
      suppressHydrationWarning
    >
      <path d="M16 12c0-3-2-5-5-5s-5 2-5 5 2 5 5 5" />
      <circle cx="16" cy="12" r="1.5" fill="currentColor" />
      <path d="M14 9c1 0 2 0.5 2 1.5" />
    </svg>
  );
}

export function SeparatorCross({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
      suppressHydrationWarning
    >
      <path d="M0 4h16M24 4h16" />
      <circle cx="20" cy="4" r="2" fill="currentColor" />
    </svg>
  );
}

export function BookBible({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      suppressHydrationWarning
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M12 6h5M12 10h5M12 14h5" />
    </svg>
  );
}

export function Hourglass({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      suppressHydrationWarning
    >
      <path d="M5 22h14" />
      <path d="M5 2h14" />
      <path d="M12 2v20" />
      <path d="M5 7c0-2.5 3-4 7-4s7 1.5 7 4" />
      <path d="M5 17c0 2.5 3 4 7 4s7-1.5 7-4" />
      <path d="M7 7h10" />
      <path d="M7 17h10" />
    </svg>
  );
}
