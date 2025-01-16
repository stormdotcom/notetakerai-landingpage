/* eslint-disable react/prop-types */
import { Pause, Play } from "lucide-react";

const Middle = ({ summaries = [], loading = false }) => {
  // Skeleton Loader for loading state
  const renderSkeleton = () => {
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

  return (
    <div className="max-h-screen overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 rounded-lg">
      <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">Summaries</h2>

      {loading
        ? renderSkeleton()
        : summaries.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-green-50 border-l-4 border-green-500 p-3 sm:p-4 rounded-lg shadow-sm"
            >


              {/* Section Title */}
              <div className="flex items-center mb-2">
                <span className="bg-gray-200 text-gray-800 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium mr-1 sm:mr-2">
                  Summary {idx + 1}
                </span>

                {/* User Info (Image Removed) */}
                <div className="text-[10px] sm:text-sm text-gray-600">
                  User (English)
                </div>
              </div>

              {/* Summary Content */}
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                {item.summary}
              </p>

              {/* Bottom Playback Button */}
             <div className="flex"> 
             <div className="mt-2 sm:mt-3 flex items-center space-x-1 sm:space-x-2">
                <button className="p-1 sm:p-1.5 rounded-full hover:bg-purple-100">
                  <Pause size={14} />
                </button>
              </div>
              <div className="mt-2 sm:mt-3 flex items-center space-x-1 sm:space-x-2">
                <button className="p-1 sm:p-1.5 rounded-full hover:bg-purple-100">
                  <Play size={14} />
                </button>
              </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Middle;
