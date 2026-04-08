export default function LiturgyLoading() {
  return (
    <div className="px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="h-8 w-48 bg-parchment-200 rounded-xs animate-pulse mb-8"></div>
        <div className="h-10 w-full bg-parchment-200 rounded-xs animate-pulse mb-4"></div>
        <div className="h-5 w-2/3 bg-parchment-200 rounded-xs animate-pulse mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-48 bg-parchment-200 rounded-xs animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
