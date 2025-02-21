import { STORAGE_KEYS } from "@/modules/home/constant";
import { Navigate, Outlet } from "react-router-dom";

/**
 * Private Route - Only accessible when authenticated
 * Redirects to login if no token is found.
 */
export const PrivateRoute = () => {
  const token = localStorage.getItem(STORAGE_KEYS.LOCAL_STORAGE);

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

/**
 * Public Route - Only accessible when NOT authenticated
 * Redirects to /dashboard if already logged in.
 */
export const PublicRoute = () => {
  const token = localStorage.getItem(STORAGE_KEYS.LOCAL_STORAGE);

  return token ? <Navigate to="/dashboard" replace /> : <Outlet />;
};
