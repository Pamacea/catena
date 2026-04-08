export default function TimelineLoading() {
  return (
    <div className="px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Sub-header skeleton */}
        <div className="mb-8 border-b border-gold-400/40 pb-6">
          <div className="flex items-center gap-2 text-sm mb-4">
            <div className="h-4 w-20 bg-parchment-200 rounded-xs animate-pulse" />
            <span className="text-ink-400">/</span>
            <div className="h-4 w-28 bg-parchment-200 rounded-xs animate-pulse" />
          </div>
          <div className="h-10 w-72 bg-parchment-200 rounded-xs animate-pulse mb-2" />
          <div className="h-6 w-64 bg-parchment-200 rounded-xs animate-pulse" />
        </div>

        {/* Era filter skeleton */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="h-10 w-24 bg-parchment-200 rounded-xs animate-pulse" />
            ))}
          </div>
        </div>

        {/* Timeline skeleton */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-ink-200 -translate-x-1/2 md:translate-x-0" />

          {/* Timeline items */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex gap-6 mb-12">
              <div className="hidden md:block w-1/2 pr-8">
                <div className="h-6 w-16 bg-parchment-200 rounded-xs animate-pulse mb-2" />
                <div className="h-6 w-48 bg-parchment-200 rounded-xs animate-pulse mb-2" />
                <div className="h-4 w-64 bg-parchment-200 rounded-xs animate-pulse" />
              </div>
              <div className="h-6 w-6 rounded-xs border-4 border-gold-400/40 bg-ink-300" />
              <div className="flex-1 md:hidden">
                <div className="h-6 w-16 bg-parchment-200 rounded-xs animate-pulse mb-2" />
                <div className="h-6 w-48 bg-parchment-200 rounded-xs animate-pulse mb-2" />
                <div className="h-4 w-64 bg-parchment-200 rounded-xs animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
