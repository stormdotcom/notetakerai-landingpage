import { Suspense, lazy } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

import { PrivateRoute, PublicRoute } from "./components/custom/AuthGuard";
import Loader from "./components/custom/Loader";
import { AudioProvider } from "./context/AudioContext";
import { SessionProvider } from "./context/SessionContext";
import { UserProvider } from "./context/UserContext";
import ViewUsage from "./modules/home/components/Usage/ViewUsage";

// ** Lazy Loading Components for Code Splitting **
const DashboardLayout = lazy(() => import("./layouts/DashboardLayout"));
const TranscriptionInterface = lazy(() =>
  import("./modules/home/components/Audio/TranscriptionInterface")
);
const SessionDashboard = lazy(() =>
  import("./modules/home/components/HomeDashboard")
);
const Middle = lazy(() => import("./modules/home/components/Middle"));
const UserHome = lazy(() => import("./modules/home/components/UserHome"));
const Login = lazy(() => import("./page/auth/Login"));
const Register = lazy(() => import("./page/auth/Register"));
const ErrorPage = lazy(() => import("./page/ErrorPage"));
const HomeLayout = lazy(() => import("./page/HomeLayout"));
const LandingPage = lazy(() => import("./page/landing/LandingPage"));
const PrivacyPolicy = lazy(() => import("./page/privacy/PrivacyPolicy"));
const RichTextEditor = lazy(() =>
  import("./modules/home/components/Editor/RichTextEditor")
);
function App() {
  return (
    <HashRouter>
      <UserProvider>
        <SessionProvider>
          <AudioProvider>
            <Suspense fallback={<Loader />}>
              <Routes>
                {/* Common Route */}
                <Route path="/" element={<HomeLayout />}>
                  <Route index element={<LandingPage />} />
                  <Route path="privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="*" element={<ErrorPage />} />
                </Route>

                {/* Public Routes (Login/Register) */}
                <Route element={<PublicRoute />}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Route>

                {/* Private Routes (Authenticated) */}
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
                      path="session/:sessionId/edit"
                      element={<RichTextEditor />}
                    />
                    <Route
                      path="session/:sessionId/usage"
                      element={<ViewUsage />}
                    />
                    <Route
                      path="audio/record/:sessionId"
                      element={<TranscriptionInterface />}
                    />
                  </Route>
                </Route>

                {/* Catch-All Error Page */}
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </Suspense>
            <ToastContainer />
          </AudioProvider>
        </SessionProvider>
      </UserProvider>
    </HashRouter>
  );
}

export default App;
