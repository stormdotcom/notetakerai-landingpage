import ExportData from "@/components/custom/Modal/ExportData";
import ShareContent from "@/components/custom/Modal/ShareData";
import { ClipboardList, FileEdit } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const RightSidebar = () => {
  const navigate = useNavigate();
  const { sessionId } = useParams();
  return (
    <>
      <div className="xs:w-3/4 md:w-full max-h-[40vh] overflow-y-auto p-3 bg-gray-50 shadow-md rounded-lg">
        <h2 className="text-md font-bold mb-4 text-gray-800">Actions</h2>

        {/* Go to Editor */}
        <button
          onClick={() => navigate("edit")}
          className="w-full cursor-pointer flex items-center justify-start gap-2 py-2 px-3 text-sm text-white bg-green-600 rounded-md hover:bg-green-700 transition mb-3"
        >
          <FileEdit size={18} />
          Go to Editor
        </button>

        {/* Export Data */}
        <ExportData />

        {/* Divider Line */}
        <hr className="my-3 border-t border-gray-300" />

        {/* Settings */}
        <button
          onClick={() => navigate(`../session/${sessionId}/usage`)}
          className="w-full flex items-center justify-start gap-2 py-2 px-3 text-sm text-green-700 border border-green-700 rounded-md hover:bg-gray-100 transition mb-3"
        >
          <ClipboardList size={18} />
          View Usage
        </button>
        <ShareContent />
      </div>
    </>
  );
};

export default RightSidebar;
