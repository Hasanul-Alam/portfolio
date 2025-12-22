"use client";
import React from "react";

const EmptyState = ({
  icon,
  title = "No items found",
  description = "Get started by adding your first item",
  actionLabel,
  onAction,
}) => {
  return (
    <div className="flex items-center justify-center min-h-[300px] sm:min-h-[400px] p-4 sm:p-6 md:p-8">
      <div className="text-center max-w-md w-full">
        {/* Icon Container */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gray-100 flex items-center justify-center">
            {icon ? (
              <div className="text-gray-400 text-3xl sm:text-4xl md:text-5xl">
                {icon}
              </div>
            ) : (
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-200 mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 px-2">
          {description}
        </p>

        {/* Action Button */}
        {actionLabel && onAction && (
          <button
            onClick={onAction}
            className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 w-full sm:w-auto"
          >
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
