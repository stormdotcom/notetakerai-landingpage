import { HashRouter, Routes, Route } from "react-router-dom";

import PrivacyPolicy from "./page/privacy/PrivacyPolicy";
import LandingPage from "./page/landing/LandingPage";
import DashboardLayout from "./layouts/DashboardLayout";
import HomePageLayout from "./layouts/HomePageLayout";
import "./App.css";
import HomeDashboard from "./modules/home/components/HomeDashboard";
import HomeLayout from "./page/HomeLayout";

function App() {
  return (
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
          <Route path="*" element={<h1>404 - Dashboard Page Not Found</h1>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
