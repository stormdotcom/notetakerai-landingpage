import { getRequest } from "@/app/service";
import SummaryCard from "@/components/custom/SessionsCard";
import { useSession } from "@/context/SessionContext";
import { useEffect, useState } from "react";
import Middle from "./Middle";
import RightSidebar from "./RightSide";
import { renderSkeleton } from "./Skelton/MiddleSkelton";

const HomeDashboard = () => {
  const [summaries, setSummary] = useState([]);
  const [loading, setLoading] = useState(true);
      const {  updateSessions } = useSession();
  // Fetch data on mount
  useEffect(() => {
    fetchSummary();
  }, []);

  const fetchSummary = async () => {
    try {
      const result = await getRequest("/summary");
      setSummary(result.data);
      updateSessions(result.data)
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
<div className="grid grid-cols-3 lg:grid-cols-5 h-screen gap-1">
  {/* Left Sidebar */}
  <div className="col-span-1 lg:col-span-1 p-1 sm:p-1 bg-gray-100">
    <SummaryCard sessions={summaries} loading={loading} />
  </div>

  {/* Middle Content */}
  <div className="lg:col-span-3 p-1 sm:p-2 bg-white overflow-y-auto">
    {loading ? renderSkeleton() : <Middle />}
  </div>

  {/* Right Sidebar */}
  <div className="col-span-1 lg:col-span-1 p-2 sm:p-3 bg-gray-100">
    <RightSidebar />
  </div>
</div>

  );
};

export default HomeDashboard;
