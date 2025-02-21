import { HashRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { PrivateRoute, PublicRoute } from "./components/custom/AuthGuard";
import { AudioProvider } from "./context/AudioContext";
import { SessionProvider } from "./context/SessionContext";
import { UserProvider } from "./context/UserContext";
import DashboardLayout from "./layouts/DashboardLayout";
import TranscriptionInterface from "./modules/home/components/Audio/TranscriptionInterface";
import SessionDashboard from "./modules/home/components/HomeDashboard";
import Middle from "./modules/home/components/Middle";
import UserHome from "./modules/home/components/UserHome";
import Login from "./page/auth/Login";
import Register from "./page/auth/Register";
import ErrorPage from "./page/ErrorPage";
import HomeLayout from "./page/HomeLayout";
import LandingPage from "./page/landing/LandingPage";
import PrivacyPolicy from "./page/privacy/PrivacyPolicy";

function App() {
  return (
    <HashRouter>
      <UserProvider>
        <SessionProvider>
          <AudioProvider>
            <Routes>
              {/* Common Route */}
              <Route path="/" element={<HomeLayout />}>
                <Route index element={<LandingPage />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="*" element={<ErrorPage />} />
              </Route>
              <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>

              <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<DashboardLayout />}>
                  <Route index element={<UserHome />} />
                  <Route
                    path="session/:sessionId"
                    element={<SessionDashboard />}
                  >
                    <Route index element={<Middle />} />
                  </Route>
                  <Route
                    path="audio/record/:sessionId"
                    element={<TranscriptionInterface />}
                  />
                </Route>
              </Route>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </AudioProvider>
        </SessionProvider>
      </UserProvider>
    </HashRouter>
  );
}

export default App;
