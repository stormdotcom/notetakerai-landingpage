/* eslint-disable react/prop-types */
import { Play, Pause } from "lucide-react";

const Middle = ({ summaries = [] }) => {
  return (
    <div className="max-h-screen overflow-y-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Main Content</h2>

      {summaries.map((item, idx) => (
        <div
          key={idx}
          className="relative bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg shadow-sm"
        >
          {/* Playback Buttons */}
          <div className="absolute top-2 left-2 flex items-center space-x-2">
            <button className="p-1 rounded-full hover:bg-purple-100">
              <Play size={16} />
            </button>
            <span className="text-xs text-gray-500">200ms</span>
          </div>

          {/* Section Title */}
          <div className="flex items-center mb-2">
            <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-xs font-medium mr-2">
              Section {idx + 1}
            </span>

            {/* User Info */}
            <div className="flex items-center text-sm text-gray-600">
              <img
                src="https://via.placeholder.com/20" // Replace with user icon if available
                alt="User"
                className="w-5 h-5 rounded-full mr-1"
              />
              <span>Jenny (Female, English)</span>
            </div>
          </div>

          {/* Summary Content */}
          <p className="text-gray-800 leading-relaxed">{item.summary}</p>

          {/* Bottom Playback Button */}
          <div className="mt-3 flex items-center space-x-2">
            <button className="p-1 rounded-full hover:bg-purple-100">
              <Pause size={16} />
            </button>
            <span className="text-xs text-gray-500">350ms</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Middle;
