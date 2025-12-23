"use client";

import { Briefcase } from "lucide-react";

export default function ExperienceSkeleton() {
  return (
    <section
      id="experience"
      className="flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Experience Items Skeleton */}
            {[...Array(1)].map((_, index) => (
              <div
                key={index}
                className="relative mb-8 sm:mb-10 md:mb-12 last:mb-0"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Content Card Skeleton */}
                <div className="sm:ml-12 md:ml-20">
                  <div className="p-4 sm:p-5 md:p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border-default">
                    {/* Header Skeleton */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 sm:mb-4 gap-2">
                      <div className="flex-1 min-w-0">
                        {/* Position Title Skeleton */}
                        <div className="h-6 sm:h-7 md:h-8 w-48 sm:w-64 bg-gray-700/50 rounded mb-1 sm:mb-2 animate-pulse"></div>
                        {/* Company Name Skeleton */}
                        <div className="h-5 sm:h-6 w-32 sm:w-48 bg-gray-700/50 rounded animate-pulse"></div>
                      </div>
                      {/* Current Badge Skeleton (only on first item) */}
                      {index === 0 && (
                        <div className="h-6 sm:h-7 w-16 sm:w-20 bg-gray-700/50 rounded-full animate-pulse"></div>
                      )}
                    </div>

                    {/* Meta Info Skeleton */}
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mb-3 sm:mb-4">
                      <div className="h-4 w-40 sm:w-48 bg-gray-700/50 rounded animate-pulse"></div>
                      <div className="h-4 w-32 sm:w-40 bg-gray-700/50 rounded animate-pulse"></div>
                    </div>

                    {/* Responsibilities Skeleton */}
                    <div className="mb-3 sm:mb-4">
                      <div className="h-4 w-48 sm:w-64 bg-gray-700/50 rounded mb-2 sm:mb-3 animate-pulse"></div>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {[...Array(6)].map((_, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-gray-600 mt-1 shrink-0">
                              •
                            </span>
                            <div
                              className={`h-4 bg-gray-700/50 rounded animate-pulse ${
                                idx === 0
                                  ? "w-full"
                                  : idx === 1
                                  ? "w-5/6"
                                  : "w-4/6"
                              }`}
                            ></div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Skeleton */}
                    <div>
                      <div className="h-4 w-32 sm:w-40 bg-gray-700/50 rounded mb-2 sm:mb-3 animate-pulse"></div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {[...Array(5)].map((_, idx) => (
                          <div
                            key={idx}
                            className="h-6 sm:h-7 w-16 sm:w-20 bg-gray-700/50 rounded-full animate-pulse"
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
