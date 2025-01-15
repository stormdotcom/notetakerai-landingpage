import { Button } from "@/components/ui/button";
import { Bell, User } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="flex justify-between items-center bg-gray-800 text-white p-4 shadow-md">
      {/* Logo */}
      <h1 className="text-xl font-bold">🚀 Quick Note AI</h1>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default DashboardHeader;
