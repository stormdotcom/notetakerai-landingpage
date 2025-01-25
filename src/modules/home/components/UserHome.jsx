import { getRequest } from "@/app/service";
import { format } from "date-fns"; // For date formatting

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ToolsSections from "./ToolsSections";


  const UserHome = () => {
    const [sessions, setSessions] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
  
    const fetchSummary = async () => {
      try {
        const result = await getRequest(`/session/all`);
        setSessions(result.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchSummary();
    }, []);
  
    return (
      <div className="p-1 md:p-2 bg-gray-50 min-h-screen">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            It’s late, pal, time to call it a day.
          </h1>
          <p className="text-sm text-gray-500">
            Plato: Thinking, the talking of the soul with itself.
          </p>
        </div>
        <ToolsSections />
  
        {/* Recordings Table */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">My Records</h2>
  
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : sessions.length === 0 ? (
            <p className="text-center text-gray-500">No records found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-600 text-sm uppercase tracking-wide">
                    <th className="py-2 px-4">Title</th>
                    <th className="py-2 px-4">Status</th>
                    <th className="py-2 px-4">Date Created</th>
                    <th className="py-2 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sessions .map((record) => (
                    <tr
                      key={record._id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-2 px-4 flex items-center gap-3">
                        <img
                          src={record.tabInfo.favIconUrl}
                          alt="Favicon"
                          className="w-3 h-3"
                        />
                        <a
                          href={record.tabInfo.url}
                          className=" hover:underline text-sm truncate w-[22vw]"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                         <p className="truncate"> {record.tabInfo.title}</p>
                        </a>
                      </td>
                      <td className="py-2 px-4 text-sm text-gray-600">{record.status}</td>
                      <td className="py-2 px-1 text-sm text-gray-600">
                        {format(new Date(record.createdAt), "MMM dd, yyyy")}
                      </td>
                      <td className="py-2 px-4 text-right">
                        <button className="text-xs text-blue-500 hover:underline" onClick={()=> navigate(`../dashboard/session/${record.sessionId}`)}> 
                          View
                        </button>
                        <button className="text-xs text-red-500 hover:underline ml-4">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default UserHome;
  