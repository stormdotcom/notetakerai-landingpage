import { HashRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { AudioProvider } from "./context/AudioContext";
import { SessionProvider } from "./context/SessionContext";
import DashboardLayout from "./layouts/DashboardLayout";
import TranscriptionInterface from "./modules/home/components/Audio/TranscriptionInterface";
import SessionDashboard from "./modules/home/components/HomeDashboard";
import Middle from "./modules/home/components/Middle";
import UserHome from "./modules/home/components/UserHome";
import Login from "./page/auth/Login";
import Register from "./page/auth/Register";
import HomeLayout from "./page/HomeLayout";
import LandingPage from "./page/landing/LandingPage";
import PrivacyPolicy from "./page/privacy/PrivacyPolicy";

function App() {
  return (
    <SessionProvider>
      <AudioProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<LandingPage />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<UserHome />} />
              <Route path="session/:sessionId" element={<SessionDashboard />}>
                <Route index element={<Middle />} />
              </Route>
              <Route
                path="audio/record/:sessionId"
                element={<TranscriptionInterface />}
              />
            </Route>
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </HashRouter>
      </AudioProvider>
    </SessionProvider>
  );
}

export default App;
