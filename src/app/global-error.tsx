"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased bg-stone-200 text-ink-900 min-h-screen flex items-center justify-center">
        <div className="text-center px-6 py-12">
          <div className="text-6xl mb-6">&#10013;</div>
          <h2 className="text-3xl font-serif font-semibold mb-4 text-ink-800">
            Une erreur est survenue
          </h2>
          <p className="text-ink-600 mb-8 max-w-md mx-auto">
            Quelque chose ne fonctionne pas correctement. Veuillez réessayer.
          </p>
          <button
            onClick={reset}
            className="px-6 py-3 bg-gold-500 text-white rounded-md hover:bg-gold-600 transition-colors font-medium"
          >
            Réessayer
          </button>
        </div>
      </body>
    </html>
  );
}
