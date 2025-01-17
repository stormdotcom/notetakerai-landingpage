import { HashRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { SessionProvider } from "./context/SessionContext";
import DashboardLayout from "./layouts/DashboardLayout";
import HomeDashboard from "./modules/home/components/HomeDashboard";
import HomeLayout from "./page/HomeLayout";
import LandingPage from "./page/landing/LandingPage";
import PrivacyPolicy from "./page/privacy/PrivacyPolicy";

function App() {
  return (
    <SessionProvider>
    <HashRouter>
      <Routes>
        {/* 🌐 Public Routes with HomePageLayout */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Route>

        {/* 🔒 Dashboard Routes with DashboardLayout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<HomeDashboard />} />
          {/* <Route path=":sessionId" element={<Middle />} /> */}
          <Route path="*" element={<h1>404 - Dashboard Page Not Found</h1>} />
        </Route>
      </Routes>
    </HashRouter>
    </SessionProvider>
  );
}

export default App;
