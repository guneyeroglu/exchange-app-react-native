import { useState, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { tokenApi } from '../global/services/config/';
import { loginService, registerService } from '../global/services';
import { enumScreens } from '../global/constants/screens';

export const ExchangeContext = createContext();

export const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthControl = async () => {
    const token = await AsyncStorage.getItem('jwt');
    const user = await AsyncStorage.getItem('user');

    if (token && user) {
      tokenApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(JSON.parse(user));
      setIsAuthenticated(true);
    }
  };

  const register = async (data, navigate) => {
    const response = await registerService(data);

    if (response.status) {
      setUser(response.data.user);
      setIsAuthenticated(true);
      navigate(enumScreens.HOME_SCREEN);
    }

    return { data: response.data, status: true };
  };

  const login = async (data, navigate) => {
    const response = await loginService(data);

    if (response.status) {
      setUser(response.data.user);
      setIsAuthenticated(true);
      navigate(enumScreens.HOME_SCREEN);
    }
  };

  const logout = async (navigate) => {
    await AsyncStorage.removeItem('jwt');
    await AsyncStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
    tokenApi.defaults.headers.common['Authorization'] = null;
    navigate(enumScreens.LOGIN_SCREEN);
  };

  return <ExchangeContext.Provider value={{ user, isAuthenticated, login, logout, register, handleAuthControl }}>{children}</ExchangeContext.Provider>;
};
