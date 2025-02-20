/* eslint-disable react/prop-types */
import HomeFooter from "@/page/HomeFooter";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-grow flex items-center justify-center px-2 overflow-auto h-[90-vh]">
        {children}
      </main>
      <HomeFooter />
    </div>
  );
};

export default AuthLayout;
