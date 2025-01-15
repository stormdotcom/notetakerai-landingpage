/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { FileText } from "lucide-react"; // For icons, install 'lucide-react'

const SummaryCard = ({ summaries = [] }) => {
  const location = useLocation();

  return (
    <aside className="h-[90vh] w-64 bg-gray-100 p-4 rounded-lg shadow-md overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Sections</h2>
      <ul className="space-y-2">
        {summaries.map((section, index) => (
          <li
            key={index}
            className={`p-3 rounded-lg shadow-sm border ${
              location.pathname === section.path
                ? "border-purple-500 bg-purple-50"
                : "border-gray-300"
            }`}
          >
            {/* Link with Icon */}
            <Link
              to={section.timestamp}
              className="flex items-center space-x-3"
            >
              {/* Icon */}
              <FileText className="w-5 h-5 text-gray-500" />

              {/* Section Info */}
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  Section {index + 1}
                </h3>
                <p className="text-xs text-gray-600 truncate">
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
