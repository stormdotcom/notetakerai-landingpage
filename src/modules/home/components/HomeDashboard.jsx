import SummaryCard from "@/components/custom/SummaryCard";

import RightSidebar from "./RightSide";
import { useEffect, useState } from "react";
import { getRequest } from "@/app/service";
import Middle from "./Middle";

const HomeDashboard = () => {
  const [summaries, setSummary] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data on mount
  useEffect(() => {
    fetchSummary();
  }, []);

  const fetchSummary = async () => {
    try {
      const result = await getRequest("/summary", { sessionId: "default" });
      setSummary(result.data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Sidebar */}
      <div className="w-full lg:w-1/4 p-2 bg-gray-100">
        <SummaryCard summaries={summaries} />
      </div>
      {loading && (
        <div className="flex items-center justify-center h-full">
          Loading...
        </div>
      )}
      {/* Middle Content */}
      <div className="flex-grow p-4 bg-white">
        <Middle summaries={summaries} />
      </div>

      {/* Right Sidebar */}
      <div className="w-full lg:w-1/4 p-2 bg-gray-100">
        <RightSidebar />
      </div>
    </div>
  );
};

export default HomeDashboard;
