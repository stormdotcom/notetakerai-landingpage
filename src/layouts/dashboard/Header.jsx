import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { faSignOutAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bell } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DashboardHeader = () => {
  const { user, logout } = useUser();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  const toggleNotificationMenu = () =>
    setIsNotificationOpen(!isNotificationOpen);

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white">
      <h1
        className="text-2xl font-bold text-green-600 cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        {" "}
        QNotes AI
      </h1>

      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleNotificationMenu}
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </Button>
        {isNotificationOpen && (
          <div className="absolute top-14 right-8 p-4 w-64 bg-white shadow-lg rounded-md">
            <p>No new notifications</p>
          </div>
        )}

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleUserMenu}
            aria-label="User Menu"
          >
            {user?.picture ? (
              <img
                src={user.picture}
                alt="User Avatar"
                className="w-8 h-8 rounded-full border-2 border-green-600 cursor-pointer"
              />
            ) : (
              <FontAwesomeIcon
                icon={faUserCircle}
                className="text-green-600 text-2xl cursor-pointer"
              />
            )}
          </Button>
          {isUserMenuOpen && (
            <div className="absolute top-14 right-0 p-4 w-48 bg-white shadow-lg rounded-md">
              <div className="flex items-center space-x-2">
                {user?.picture ? (
                  <img
                    src={user.picture}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="text-green-600"
                  />
                )}
                <span className="text-sm font-weight-300">
                  {user?.name || "User"}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="mt-3 w-full text-left text-red-500 hover:bg-gray-100 px-3 py-2 rounded-md flex items-center space-x-2"
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
