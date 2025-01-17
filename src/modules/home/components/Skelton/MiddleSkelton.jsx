export const renderSkeleton = () => {
  return Array.from({ length: 3 }).map((_, idx) => (
    <div
      key={idx}
      className="relative bg-gray-100 border-l-4 border-gray-300 p-3 sm:p-4 rounded-lg shadow-md animate-pulse mb-4"
    >
      {/* Skeleton Header (Mimicking the Title & User Info) */}
      <div className="flex items-center mb-3 sm:mb-4">
        <div className="w-20 sm:w-24 h-4 sm:h-5 bg-gray-300 rounded-md mr-2" />
        <div className="w-16 sm:w-20 h-3 sm:h-4 bg-gray-300 rounded-md" />
      </div>

      {/* Skeleton Content (Mimicking Summary Text) */}
      <div className="space-y-2">
        <div className="w-full h-3 sm:h-4 bg-gray-300 rounded-md" />
        <div className="w-5/6 h-3 sm:h-4 bg-gray-300 rounded-md" />
        <div className="w-4/6 h-3 sm:h-4 bg-gray-300 rounded-md" />
      </div>

      {/* Skeleton Playback Buttons */}
      <div className="mt-3 sm:mt-4 flex items-center space-x-2">
        <div className="w-6 h-6 bg-gray-300 rounded-full" />
        <div className="w-6 h-6 bg-gray-300 rounded-full" />
      </div>
    </div>
  ));
};
