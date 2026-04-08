export default function ChapterLoading() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Breadcrumb skeleton */}
      <div className="h-6 w-64 bg-parchment-200 rounded-xs animate-pulse mb-8"></div>

      {/* Header skeleton */}
      <div className="mb-8 pb-6 border-b border-gold-400/40">
        <div className="h-10 w-48 bg-parchment-200 rounded-xs animate-pulse mb-2"></div>
        <div className="h-7 w-32 bg-parchment-200 rounded-xs animate-pulse"></div>
      </div>

      {/* Navigation skeleton */}
      <div className="h-16 bg-parchment-100 rounded-xs animate-pulse mb-8"></div>

      {/* Verses skeleton */}
      <div className="space-y-4 mb-12">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="flex gap-4">
            <div className="h-5 w-8 bg-parchment-200 rounded-xs animate-pulse flex-shrink-0"></div>
            <div className="flex-1 h-5 bg-parchment-200 rounded-xs animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Chapter selector skeleton */}
      <div className="pt-8 border-t border-gold-400/40">
        <div className="h-5 w-48 bg-parchment-200 rounded-xs animate-pulse mb-4"></div>
        <div className="flex flex-wrap gap-2">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="h-10 w-10 bg-parchment-200 rounded-xs animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
