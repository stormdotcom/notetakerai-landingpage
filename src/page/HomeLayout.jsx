/* eslint-disable react/prop-types */
import { useUser } from "@/context/UserContext";
import {
  faSignOutAlt,
  faSpinner,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet, useNavigate } from "react-router-dom";
import HomeFooter from "./HomeFooter";

const HomeLayout = () => {
  const navigate = useNavigate();
  const { user, loading, token, logout } = useUser();

  const handleHome = () => navigate("/");
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={handleHome}>
          <h1 className="text-2xl font-bold text-green-600">QNotes AI</h1>
        </div>

        <div className="flex items-center space-x-4">
          {loading ? (
            <FontAwesomeIcon
              icon={faSpinner}
              spin
              className="text-green-600 text-lg"
            />
          ) : token ? (
            <div className="flex items-center space-x-3">
              {user?.picture ? (
                <img
                  src={user.picture}
                  alt="User Avatar"
                  className="w-9 h-9 rounded-full border-2 border-green-600"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="text-green-600 text-3xl"
                />
              )}
              <span className="font-medium text-gray-800">
                {user?.name || "User"}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition flex items-center space-x-2"
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
              </button>
            </div>
          ) : (
            // User Not Logged In (Show Login & Subscribe)
            <>
              <button
                className="text-gray-800 hover:text-gray-600 font-medium"
                onClick={() => navigate("/login")}
              >
                Log in
              </button>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                onClick={() => navigate("/subscribe")}
              >
                Start for Free
              </button>
            </>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="relative flex-grow flex items-center justify-center">
        <Outlet />
      </main>

      {/* Footer */}
      <HomeFooter />
    </div>
  );
};

export default HomeLayout;
