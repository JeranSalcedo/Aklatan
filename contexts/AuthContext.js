import { createContext, useContext, useState, useEffect } from 'react';

import authService from '@/services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    const response = await authService.getSesssion();

    if (response?.error) {
      setSession(null);
    } else {
      setSession(response);
    }

    await checkUser();
  };

  const checkUser = async () => {
    setLoading(true);

    const response = await authService.getUser();

    if (response?.error) {
      setUser(null);
    } else {
      setUser(response);
    }

    setLoading(false);
  };

  const login = async (email, password) => {
    setLoading(true);
    const response = await authService.login(email, password);

    if (response?.error) {
      return response;
    }

    setSession(response);

    await checkUser();
    return { success: true };
  };

  const register = async (email, password) => {
    const response = await authService.register(email, password);

    if (response?.error) {
      return response;
    }

    return login(email, password);
  };

  const logout = async () => {
    setLoading(true);
    await authService.logout();

    if (response?.error) {
      return response;
    }

    setUser(null);
    setSession(null);
    await checkUser();
  };

  return (
    <AuthContext.Provider
      value={{ session, user, login, register, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
