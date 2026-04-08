import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-200 text-ink-900 flex items-center justify-center">
      <div className="text-center px-6 py-12">
        <div className="text-8xl font-serif font-bold text-gold-500/30 mb-4">404</div>
        <h2 className="text-3xl font-serif font-semibold mb-4 text-ink-800">
          Page introuvable
        </h2>
        <p className="text-ink-600 mb-8 max-w-md mx-auto">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="px-5 py-2.5 bg-gold-500 text-white rounded-md hover:bg-gold-600 transition-colors text-sm font-medium"
          >
            Accueil
          </Link>
          <Link
            href="/bible"
            className="px-5 py-2.5 bg-stone-100 text-ink-800 rounded-md hover:bg-stone-50 transition-colors text-sm border border-stone-300"
          >
            Bible
          </Link>
          <Link
            href="/doctrine"
            className="px-5 py-2.5 bg-stone-100 text-ink-800 rounded-md hover:bg-stone-50 transition-colors text-sm border border-stone-300"
          >
            Doctrine
          </Link>
          <Link
            href="/catechism"
            className="px-5 py-2.5 bg-stone-100 text-ink-800 rounded-md hover:bg-stone-50 transition-colors text-sm border border-stone-300"
          >
            Catéchisme
          </Link>
          <Link
            href="/liturgy"
            className="px-5 py-2.5 bg-stone-100 text-ink-800 rounded-md hover:bg-stone-50 transition-colors text-sm border border-stone-300"
          >
            Liturgie
          </Link>
        </div>
      </div>
    </div>
  );
}
