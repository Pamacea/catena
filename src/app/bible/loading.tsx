export default function BibleLoading() {
  return (
    <div className="px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb skeleton */}
        <div className="h-6 w-48 bg-parchment-200 rounded-xs animate-pulse mb-8"></div>

        {/* Title skeleton */}
        <div className="h-10 w-3/4 bg-parchment-200 rounded-xs animate-pulse mb-4"></div>
        <div className="h-5 w-1/2 bg-parchment-200 rounded-xs animate-pulse mb-12"></div>

        {/* Chapter content skeleton */}
        <div className="space-y-3">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="h-5 bg-parchment-200 rounded-xs animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
