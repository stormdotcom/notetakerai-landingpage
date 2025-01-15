import { Outlet } from "react-router-dom";
import DashboardHeader from "./dashboard/Header";
import Sidebar from "@/components/custom/SideBar";
import DashboardFooter from "./dashboard/Footer";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <DashboardHeader />

      {/* Content Area */}
      <div className="flex flex-grow">
        {/* Sidebar */}

        {/* Main Content */}
        <main className="flex-grow p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <DashboardFooter />
    </div>
  );
};

export default DashboardLayout;
