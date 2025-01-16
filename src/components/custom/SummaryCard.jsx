/* eslint-disable react/prop-types */
import { FileText } from "lucide-react"; // For icons, install 'lucide-react'
import { Link, useLocation } from "react-router-dom";

const SummaryCard = ({ summaries = [], loading = false }) => {
  const location = useLocation();

  // Skeleton loader for loading state
  const renderSkeleton = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <li
        key={index}
        className="p-3 rounded-lg shadow-sm border border-gray-300 bg-gray-200 animate-pulse"
      >
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Skeleton Icon */}
          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-300 rounded-md" />

          {/* Skeleton Text */}
          <div className="flex flex-col space-y-1 w-full">
            <div className="h-3 sm:h-4 bg-gray-300 rounded w-2/3" />
            <div className="h-2 sm:h-3 bg-gray-300 rounded w-4/5" />
          </div>
        </div>
      </li>
    ));
  };

  return (
    <aside className="h-[90vh] w-56 sm:w-48 xs:w-40 bg-gray-100 p-3 sm:p-4 rounded-lg shadow-md overflow-y-auto">
      <h2 className="text-md sm:text-lg font-semibold mb-3 sm:mb-4">Sections</h2>
      <ul className="space-y-2">
        {loading
          ? renderSkeleton()
          : summaries.map((section, index) => (
              <li
                key={index}
                className={`p-2 sm:p-3 rounded-lg shadow-sm border ${
                  location.pathname === section.path
                    ? "border-purple-500 bg-purple-50"
                    : "border-gray-300"
                }`}
              >
                {/* Link with Icon */}
                <Link to={section.timestamp} className="flex items-center space-x-2 sm:space-x-3">
                  {/* Icon */}
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />

                  {/* Section Info */}
                  <div className="truncate">
                    <h3 className="text-xs sm:text-sm font-medium text-gray-800">
                      Section {index + 1}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-600 truncate">
                      {section.transcript || "No content available"}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
      </ul>
    </aside>
  );
};

export default SummaryCard;
