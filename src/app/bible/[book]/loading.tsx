export default function BookLoading() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Breadcrumb skeleton */}
      <div className="h-6 w-48 bg-parchment-200 rounded-xs animate-pulse mb-8"></div>

      {/* Header skeleton */}
      <div className="mb-8 pb-6 border-b border-gold-400/40">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="h-10 w-64 bg-parchment-200 rounded-xs animate-pulse mb-2"></div>
            <div className="h-5 w-48 bg-parchment-200 rounded-xs animate-pulse"></div>
          </div>
          <div className="h-8 w-12 bg-parchment-200 rounded-xs animate-pulse"></div>
        </div>
        <div className="h-5 w-32 bg-parchment-200 rounded-xs animate-pulse"></div>
      </div>

      {/* Navigation skeleton */}
      <div className="h-20 bg-parchment-100 rounded-xs animate-pulse mb-8"></div>

      {/* Chapters grid skeleton */}
      <div className="space-y-4">
        <div className="h-6 w-24 bg-parchment-200 rounded-xs animate-pulse"></div>
        <div className="grid grid-cols-10 gap-2">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="h-12 bg-parchment-200 rounded-xs animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
