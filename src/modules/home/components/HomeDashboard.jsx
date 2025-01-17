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
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Sidebar */}
      <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 p-2 sm:p-3 bg-gray-100">
        <SummaryCard sessions={summaries} loading={loading} />
      </div>

      {/* Middle Content */}
      <div className="flex-grow p-3 sm:p-4 bg-white">
        {/* <Outlet /> */}
        {loading ? renderSkeleton() : <Middle />}
      </div>

      {/* Right Sidebar */}
    <div className="absolute sm:absolute md:sticky right-1 top-0 md:w-1/4 w-full p-2 sm:p-3 bg-gray-100">
  <RightSidebar />
</div>

    </div>
  );
};

export default HomeDashboard;
