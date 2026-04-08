import { CrossGothic } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="border-t-2 border-gold-500/50 px-6 py-8 bg-stone-200/50 mt-auto">
      <div className="max-w-6xl mx-auto">
        {/* Ornementation centrale */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px bg-gold-400/50 w-24" />
          <CrossGothic className="w-6 h-6 text-gold-600" />
          <div className="h-px bg-gold-400/50 w-24" />
        </div>

        <div className="text-center text-sm text-ink-600 space-y-2">
          <p className="font-serif text-ink-700">Catena — Chaîne de la Tradition</p>
          <p className="text-xs uppercase tracking-wider text-ink-500">
            © {new Date().getFullYear()} — Soli Deo Gloria
          </p>
        </div>
      </div>
    </footer>
  );
}
