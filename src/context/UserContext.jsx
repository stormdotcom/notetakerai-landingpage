/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import apiClient from "@/app/axios";
import { signInWithGoogle } from "@/config/firebase";
import { STORAGE_KEYS } from "@/modules/home/constant";
import { handleResponseError } from "@/utils/errorHandler";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Importing toast from React-Toastify
import "react-toastify/dist/ReactToastify.css"; // Importing the default CSS for toast

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

// UserProvider Component
export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem(STORAGE_KEYS.LOCAL_STORAGE);
    const storedUser = localStorage.getItem(STORAGE_KEYS.USER);

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    if (!storedToken) {
      navigate("/login");
    }

    setLoading(false);
  }, []);

  const login = async (provider) => {
    setLoading(true);
    setError(null);

    try {
      const idToken = await signInWithGoogle();
      const response = await apiClient.post("/auth/social-login", {
        idToken,
        provider,
      });

      if (response.data.token) {
        localStorage.setItem(STORAGE_KEYS.LOCAL_STORAGE, response.data.token);
        localStorage.setItem(
          STORAGE_KEYS.USER,
          JSON.stringify(response.data.user)
        );
        setToken(response.data.token);
        setUser(response.data.user);
        navigate("/dashboard");
      } else {
        throw new Error("Login failed");
      }
    } catch (err) {
      const errorMessage = err.response?.data?.error || "Login failed";
      setError(errorMessage);
      await handleResponseError(error);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const register = async (provider) => {
    setLoading(true);
    setError(null);

    try {
      const idToken = await signInWithGoogle();
      const response = await apiClient.post("/auth/social-login", {
        idToken,
        provider,
      });

      if (response.data.token) {
        localStorage.setItem(STORAGE_KEYS.LOCAL_STORAGE, response.data.token);
        localStorage.setItem(
          STORAGE_KEYS.USER,
          JSON.stringify(response.data.user)
        );
        setToken(response.data.token);
        setUser(response.data.user);
        navigate("/dashboard");
      } else {
        throw new Error("Registration failed");
      }
    } catch (err) {
      const errorMessage = err.response?.data?.error || "Registration failed";
      setError(errorMessage);
      await handleResponseError(err);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEYS.LOCAL_STORAGE);
    localStorage.removeItem(STORAGE_KEYS.USER);
    setToken(null);
    setUser(null);
    navigate("/");

    toast.info("Logged out successfully");
  };

  return (
    <UserContext.Provider
      value={{ user, token, loading, login, register, logout, error }}
    >
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
          <h1 className="text-2xl">Checking authentication...</h1>
        </div>
      ) : (
        children
      )}
    </UserContext.Provider>
  );
};
