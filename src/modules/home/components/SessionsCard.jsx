/* eslint-disable react/prop-types */
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSession } from "@/context/SessionContext";
import { generateSummaryMeta } from "@/lib/summaryUtils";
import _ from "lodash";
import { Clock2, FileText, Mic } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
const SessionsCard = ({ loading = false }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { sessions, setCurrent } = useSession();

  // useEffect(() => {
  //   if (!_.isEmpty(sessions)) {
  //     const latestSession = _.keys(sessions)[0];
  //     if (latestSession) {
  //       navigate(`/dashboard/${latestSession}`);
  //     }
  //   }
  // }, [sessions, navigate]);
  const handleSession = (data, sessionKey) => {
    navigate(`/dashboard/${sessionKey}`);
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
    <aside className="h-[90vh] xl:w-100 lg:w-65 md:w-59 sm:w-48 xs:w-48 bg-gray-100 p-3 sm:p-1 rounded-lg border border-gray-100 shadow-md overflow-y-auto">
      <h6 className="text-sm sm:text-sm font-semibold mb-3 sm:mb-4 ml-2 text-gray-500">Sessions</h6>
      <ul className="space-y-2">
        {loading
          ? renderSkeleton()
          : _.map(sessions, (sessionData, sessionKey) => {
              const { startDate = "", durationMinutes = 0, totalSummary = "-" } = generateSummaryMeta(sessionData);
           
              return (
                <li
                  key={sessionKey}
                  onClick={()=>handleSession(sessionData, sessionKey)}
                  className={`p-2 sm:p-3 rounded-lg shadow-sm border cursor-pointer ${
                    location.pathname === `/dashboard/${sessionKey}`
                      ? "bg-green-50 border-l-4 border-green-500"
                      : "border-gray-400"
                  }`}
                >
                  <div className="flex items-center rounded-lg">
                    <Mic className="w-5 h-5 text-gray-800 mr-2" />
                    <div className="flex flex-col flex-grow truncate">
                    <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger>
                                    <h3 className="text-sm font-medium text-gray-800 truncate">{sessionKey}</h3>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                    {sessionKey}
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                     
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
