import { getRequest } from "@/app/service";
import { useSession } from "@/context/SessionContext";
import SessionsCard from "@/modules/home/components/SessionsCard";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import RightSidebar from "./RightSide";

const SessionDashboard = () => {
  const [loading, setLoading] = useState(true);
  const { updateSessions, setCurrent } = useSession();
  const { sessionId } = useParams();
  // Fetch data on mount
  useEffect(() => {
    fetchSummary();
  }, []);

  const fetchSummary = async () => {
    try {
      const result = await getRequest(`/v1/session/${sessionId}`);
      setCurrent(result.data.audioChunks);
      updateSessions(result.data.sessionData);
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
        <SessionsCard loading={loading} />
      </div>

      {/* Middle Content */}
      <div className="lg:col-span-3 p-1 sm:p-2 bg-white overflow-y-auto">
        <Outlet />
      </div>

      {/* Right Sidebar */}
      <div className="col-span-1 lg:col-span-1 p-2 sm:p-3 bg-gray-100">
        <RightSidebar />
      </div>
    </div>
  );
};

export default SessionDashboard;
