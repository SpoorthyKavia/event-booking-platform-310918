import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import * as authAPI from "../api/auth";
import { useQueryClient } from "@tanstack/react-query";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("accessToken"));
  const [loading, setLoading] = useState(true);
  const queryClient = useQueryClient();

  useEffect(() => {
    async function check() {
      if (token) {
        try {
          const data = await authAPI.getProfile();
          setUser(data);
        } catch {
          logout();
        }
      }
      setLoading(false);
    }
    check();
    // Listen for manual logout requests
    window.addEventListener('auth-logout', logout);
    return () => window.removeEventListener('auth-logout', logout);
    // eslint-disable-next-line
  }, [token]);

  // PUBLIC_INTERFACE
  const login = async ({ email, password }) => {
    const resp = await authAPI.login({ email, password });
    localStorage.setItem("accessToken", resp.access_token);
    setToken(resp.access_token);
    const userData = await authAPI.getProfile();
    setUser(userData);
    return userData;
  };

  // PUBLIC_INTERFACE
  const register = async ({ email, password, name }) => {
    await authAPI.register({ email, password, name });
    // After registration, auto-login
    await login({ email, password });
  };

  // PUBLIC_INTERFACE
  const logout = useCallback(() => {
    authAPI.logout();
    setUser(null);
    setToken(null);
    queryClient.removeQueries(); // Clear all queries
  }, [queryClient]);

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout, register, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useAuth() {
  return useContext(AuthContext);
}
