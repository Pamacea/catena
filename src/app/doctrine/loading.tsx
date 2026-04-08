export default function DoctrineLoading() {
  return (
    <div className="px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="h-8 w-48 bg-parchment-200 rounded-xs animate-pulse mb-8"></div>
        <div className="h-10 w-full bg-parchment-200 rounded-xs animate-pulse mb-4"></div>
        <div className="h-5 w-2/3 bg-parchment-200 rounded-xs animate-pulse mb-12"></div>

        <div className="space-y-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-32 bg-parchment-200 rounded-xs animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
