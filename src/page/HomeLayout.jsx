/* eslint-disable react/prop-types */
import Logo from "@/assets/images/logo.png";
import { Outlet, useNavigate } from "react-router-dom";

const HomeLayout = () => {
  const navigate = useNavigate();
  const handleHome = () => navigate("../");
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={handleHome}>
          <img src={Logo} alt="Logo" className="w-10 h-10 cursor-pointer" />
        </div>

        <h1 className="text-2xl font-bold text-green-600">QNotes AI</h1>
      </header>

      {/* Main Content with Smooth GIF Rotation */}
      <main className="relative flex-grow flex items-center justify-center">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-3 text-center text-sm">
        <p>
          © {new Date().getFullYear()} QNotes AI. Made with ❤️ by{" "}
          <a
            href="https://ajmalnasumudeen.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ajmal Nasumudeen
          </a>
          .
        </p>
        <a
          className="text-blue-500 mt-2 cursor-pointer"
          onClick={() => navigate("/privacy-policy")}
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        .
      </footer>
    </div>
  );
};

export default HomeLayout;
