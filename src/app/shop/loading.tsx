export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <header>
          <div className="h-4 w-32 bg-muted rounded animate-pulse mb-2"></div>
          <div className="h-8 w-48 bg-muted rounded animate-pulse"></div>
          <div className="h-4 w-64 bg-muted rounded animate-pulse mt-2"></div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="bg-card rounded-lg overflow-hidden border shadow-sm"
            >
              <div className="h-48 w-full bg-muted animate-pulse"></div>
              <div className="p-4">
                <div className="h-5 w-3/4 bg-muted rounded animate-pulse mb-2"></div>
                <div className="h-4 w-full bg-muted rounded animate-pulse mb-1"></div>
                <div className="h-4 w-2/3 bg-muted rounded animate-pulse mb-3"></div>
                <div className="flex items-center justify-between mt-3">
                  <div className="h-6 w-16 bg-muted rounded animate-pulse"></div>
                  <div className="h-8 w-28 bg-muted rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
