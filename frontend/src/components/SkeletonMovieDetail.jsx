export default function SkeletonMovieDetail() {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative bg-white dark:bg-neutral-900 w-full sm:max-w-5xl max-h-[92vh] sm:max-h-[88vh] rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col">
        {/* Backdrop skeleton */}
        <div className="relative h-48 sm:h-56 shrink-0">
          <div className="w-full h-full skeleton" />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-900 via-transparent to-transparent" />

          {/* Close button */}
          <div className="absolute top-3 right-3 w-9 h-9 rounded-full skeleton" />

          {/* Poster and title area*/}
          <div className="absolute bottom-0 left-4 right-4 flex items-end gap-3 pb-3">
            <div className="w-16 sm:w-20 h-24 sm:h-32 rounded-xl skeleton shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-6 skeleton rounded-full w-3/4" />
              <div className="h-3 skeleton rounded-full w-1/2" />
            </div>
          </div>
        </div>

        <div className="overflow-y-auto flex-1 px-4 pb-6">
          {/* Metadata  */}
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <div className="h-4 skeleton rounded-full w-12" />
            <div className="h-4 skeleton rounded-full w-16" />
            <div className="h-4 skeleton rounded-full w-14" />
          </div>

          {/* Genres  */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-7 skeleton rounded-full w-20" />
            ))}
          </div>

          {/* Overview  */}
          <div className="mt-4 space-y-2">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-3 skeleton rounded-full" style={{ width: `${95 - i * 5}%` }} />
            ))}
          </div>

          {/* Additional info */}
          <div className="mt-6 space-y-4">
            <div className="space-y-2">
              <div className="h-4 skeleton rounded-full w-24" />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-8 skeleton rounded-lg w-16" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
