/* eslint-disable react/prop-types */
import { useSession } from "@/context/SessionContext";
import _ from "lodash";
import { Clock2, FileText, Mic } from "lucide-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SessionsCard = ({ loading = false }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { sessions, setCurrent } = useSession();

  useEffect(() => {
    if (!_.isEmpty(sessions)) {
      // const latestSession = _.keys(sessions)[0];
      // if (latestSession) {
      //   navigate(`/dashboard/${latestSession}`);
      // }
      setCurrent(_.values(sessions)[0])
    }
  }, [sessions, navigate]);
  const handleSession = (data) => {
    setCurrent(data)
  }
  // Skeleton loader for loading state
  const renderSkeleton = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <li
        key={index}
        className="p-3 rounded-lg shadow-sm border border-gray-300 bg-gray-200 animate-pulse"
      >
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-300 rounded-md" />
          <div className="flex flex-col space-y-1 w-full">
            <div className="h-3 sm:h-4 bg-gray-300 rounded w-2/3" />
            <div className="h-2 sm:h-3 bg-gray-300 rounded w-4/5" />
          </div>
        </div>
      </li>
    ));
  };

  return (
    <aside className="h-[90vh] xl:w-100 lg:w-65 md:w-59 sm:w-48 xs:w-40 bg-gray-100 p-3 sm:p-4 rounded-lg shadow-md overflow-y-auto">
      <h2 className="text-md sm:text-lg font-semibold mb-3 sm:mb-4">Sessions</h2>
      <ul className="space-y-2">
        {loading
          ? renderSkeleton()
          : _.map(sessions, (sessionData, sessionKey) => {
              const { startDate = "", durationMinutes = 0, totalSummary = "-" } = sessionData;

              return (
                <li
                  key={sessionKey}
                  className={`p-2 sm:p-3 rounded-lg shadow-sm border ${
                    location.pathname === `/dashboard/${sessionKey}`
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-300"
                  }`}
                >
                  <div className="flex items-center hover:bg-gray-100 rounded-lg cursor-pointer" onClick={()=>handleSession(sessionData)}>
                    <Mic className="w-5 h-5 text-gray-800 mr-2" />
                    <div className="flex flex-col flex-grow truncate">
                      <h3 className="text-sm font-medium text-gray-800 truncate">{sessionKey}</h3>
                      <div className="flex justify-evenly">
                        <div className="flex items-center text-gray-600 space-x-1">
                          <FileText className="w-3 h-3" />
                          <p className="text-xs truncate">{totalSummary}</p>
                        </div>
                        <div className="flex items-center text-gray-600 space-x-1">
                          <Clock2 className="w-3 h-3" />
                          <p className="text-xs">{`${durationMinutes}m`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
      </ul>
    </aside>
  );
};

export default SessionsCard;