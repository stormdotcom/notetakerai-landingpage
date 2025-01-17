import { Outlet } from "react-router-dom";
import DashboardFooter from "./dashboard/Footer";
import DashboardHeader from "./dashboard/Header";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col min-h-[91vh]">
      {/* Header */}
      <DashboardHeader />

      {/* Content Area */}
      <div className="flex flex-grow">
        {/* Sidebar */}

        {/* Main Content */}
        <main className="flex-grow p-6 bg-gray-100 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <DashboardFooter />
    </div>
  );
};

export default DashboardLayout;
