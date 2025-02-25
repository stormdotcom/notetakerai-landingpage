import { BarChart3, Table } from "lucide-react"; // Import Lucide icons
import UsageList from "./UsageList";
import UsageSummaryCard from "./UsageSummaryCard";

const ViewUsage = () => {
  return (
    <div className="p-6 space-y-8 h-screen flex flex-col">
      {/* Usage Summary Card */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <BarChart3 size={24} className="text-blue-500" />
          <h2 className="text-xl font-bold">Usage Summary</h2>
        </div>
        <UsageSummaryCard />
      </div>

      {/* Usage Details Table - Scrollable */}
      <div className="bg-white shadow-md rounded-lg p-6 flex-1 overflow-hidden">
        <div className="flex items-center space-x-2 mb-4">
          <Table size={24} className="text-green-500" />
          <h2 className="text-xl font-bold">Detailed Usage</h2>
        </div>
        <div className="max-h-[400px] overflow-y-auto">
          <UsageList />
        </div>
      </div>
    </div>
  );
};

export default ViewUsage;
