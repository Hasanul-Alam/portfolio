"use client";

export default function ProjectsSkeleton() {
  return (
    <section
      id="projects"
      className="flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-0 relative z-10">
        {/* Projects Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 overflow-hidden p-6"
              style={{
                animationDelay: `${index * 0.08}s`,
              }}
            >
              {/* Project Image Skeleton */}
              <div className="relative overflow-hidden rounded-lg mb-4 h-48 bg-gray-700/50 animate-pulse">
                {/* Featured Badge Skeleton */}
                {index % 3 === 0 && (
                  <div className="absolute top-3 right-3 z-10 w-20 h-6 bg-gray-600/50 rounded-full animate-pulse"></div>
                )}
              </div>

              {/* Project Info Skeleton */}
              <div className="space-y-3">
                {/* Title and Category Skeleton */}
                <div className="flex items-center justify-between">
                  <div className="h-6 w-40 bg-gray-700/50 rounded animate-pulse"></div>
                  <div className="h-6 w-24 bg-gray-700/50 rounded-full animate-pulse"></div>
                </div>

                {/* Description Skeleton */}
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-700/50 rounded animate-pulse"></div>
                  <div className="h-4 w-5/6 bg-gray-700/50 rounded animate-pulse"></div>
                  <div className="h-4 w-4/6 bg-gray-700/50 rounded animate-pulse"></div>
                </div>

                {/* Technologies Skeleton */}
                <div className="flex flex-wrap gap-2">
                  {[...Array(4)].map((_, techIndex) => (
                    <div
                      key={techIndex}
                      className="h-6 w-16 bg-gray-700/50 rounded animate-pulse"
                    ></div>
                  ))}
                </div>

                {/* Duration Skeleton */}
                <div className="h-4 w-32 bg-gray-700/50 rounded animate-pulse"></div>

                {/* Links Skeleton */}
                <div className="flex gap-3 pt-3 border-t border-gray-700">
                  {[...Array(2)].map((_, linkIndex) => (
                    <div
                      key={linkIndex}
                      className="h-5 w-20 bg-gray-700/50 rounded animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}
