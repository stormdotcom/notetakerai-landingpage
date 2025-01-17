

export const renderSkeleton = () => {
  return Array.from({ length: 3 }).map((_, idx) => (
    <div
      key={idx}
      className="relative bg-gray-100 border-l-4 border-gray-300 p-3 sm:p-4 rounded-lg shadow-sm animate-pulse "
    >
      {/* Skeleton Playback Buttons */}
      <div className="absolute top-2 left-2 flex items-center space-x-2">
        <div className="w-5 h-5 bg-gray-300 rounded-full" />
        <div className="w-10 h-3 bg-gray-300 rounded" />
      </div>

      {/* Skeleton Section Title */}
      <div className="flex items-center mb-2">
        <div className="w-20 h-4 bg-gray-300 rounded mr-2" />
        <div className="w-24 h-3 bg-gray-300 rounded" />
      </div>

      {/* Skeleton Content */}
      <div className="space-y-2">
        <div className="w-full h-3 bg-gray-300 rounded" />
        <div className="w-5/6 h-3 bg-gray-300 rounded" />
        <div className="w-4/6 h-3 bg-gray-300 rounded" />
      </div>

      {/* Bottom Skeleton Playback Button */}
      <div className="mt-3 flex items-center space-x-2">
        <div className="w-5 h-5 bg-gray-300 rounded-full" />
        <div className="w-12 h-3 bg-gray-300 rounded" />
      </div>
    </div>
  ));
};