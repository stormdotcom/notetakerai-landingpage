/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import apiClient from "@/app/axios";
import { STORAGE_KEYS } from "@/modules/home/constant";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiClient.post("/auth/social-login", {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem(STORAGE_KEYS.LOCAL_STORAGE, response.data.token);
        localStorage.setItem(
          STORAGE_KEYS.USER,
          JSON.stringify(response.data.user)
        );
        setToken(response.data.token);
        setUser(response.data.user);
        return { success: true, user: response.data.user };
      } else {
        throw new Error("Login failed");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
      return { success: false, error: err.response?.data?.error };
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiClient.post("/auth/social-register", {
        name,
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem(STORAGE_KEYS.LOCAL_STORAGE, response.data.token);
        localStorage.setItem(
          STORAGE_KEYS.USER,
          JSON.stringify(response.data.user)
        );
        setToken(response.data.token);
        setUser(response.data.user);
        return { success: true, user: response.data.user };
      } else {
        throw new Error("Registration failed");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed");
      return { success: false, error: err.response?.data?.error };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEYS.LOCAL_STORAGE);
    localStorage.removeItem(STORAGE_KEYS.USER);
    setToken(null);
    setUser(null);
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
