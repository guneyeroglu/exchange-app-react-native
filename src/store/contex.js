import { useState, createContext } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { tokenApi } from '../global/services/config/';
import { loginService, registerService, updateUserInformationService } from '../global/services';
import { enumScreens } from '../global/constants/variables/screens';

export const ExchangeContext = createContext();

export const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState(Appearance.getColorScheme() || 'light');

  const handleAuthControl = async () => {
    const token = await AsyncStorage.getItem('jwt');
    const user = JSON.parse(await AsyncStorage.getItem('user'));

    if (token && user) {
      tokenApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(user);
      setIsAuthenticated(true);
    }

    return { user, token };
  };

  const register = async (data, navigate) => {
    const response = await registerService(data);

    if (response.status) {
      AsyncStorage.setItem('user', JSON.stringify(response.data.user));
      AsyncStorage.setItem('jwt', response.data.jwt);
      setUser(response.data.user);
      setIsAuthenticated(true);
      navigate(enumScreens.HOME_SCREEN);
    }

    return response;
  };

  const login = async (data, navigate) => {
    const response = await loginService(data);

    if (response.status) {
      AsyncStorage.setItem('user', JSON.stringify(response.data.user));
      AsyncStorage.setItem('jwt', response.data.jwt);
      setUser(response.data.user);
      setIsAuthenticated(true);
      navigate(enumScreens.HOME_SCREEN);
    }

    return response;
  };

  const logout = async (navigate) => {
    await AsyncStorage.removeItem('jwt');
    await AsyncStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
    tokenApi.defaults.headers.common['Authorization'] = null;
    navigate(enumScreens.LOGIN_SCREEN);
  };

  const updateUserInformation = async (data, id) => {
    const response = await updateUserInformationService(data, id);

    if (response.status) {
      AsyncStorage.setItem('user', JSON.stringify(response.data));
      setUser(response.data);
    }

    return response;
  };

  Appearance.addChangeListener(({ colorScheme }) => {
    setTheme(colorScheme);
  });

  return (
    <ExchangeContext.Provider value={{ user, isAuthenticated, theme, setTheme, login, logout, register, handleAuthControl, updateUserInformation }}>
      {children}
    </ExchangeContext.Provider>
  );
};
