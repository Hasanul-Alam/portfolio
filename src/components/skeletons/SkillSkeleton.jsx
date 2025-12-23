"use client";

export default function SkillsSkeleton() {
  return (
    <section
      id="skills"
      className="flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Skills Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg flex flex-col items-center justify-center border border-gray-700/50"
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              {/* Icon Skeleton */}
              <div className="mb-4 p-4 bg-gray-700/50 rounded-full animate-pulse">
                <div className="w-8 h-8"></div>
              </div>

              {/* Name Skeleton */}
              <div className="h-6 w-32 bg-gray-700/50 rounded-lg mb-2 animate-pulse"></div>

              {/* Progress Bar Skeleton */}
              <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden mb-2">
                <div
                  className="bg-gray-600/50 h-2.5 rounded-full animate-pulse"
                  style={{ width: "60%" }}
                ></div>
              </div>

              {/* Level Skeleton */}
              <div className="h-4 w-12 bg-gray-700/50 rounded animate-pulse"></div>
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
