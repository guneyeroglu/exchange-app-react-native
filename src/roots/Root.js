import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ToastProvider } from 'react-native-toast-notifications';

import { CalculationScreen, ProfileScreen, DetailScreen, HomeScreen, LoginScreen, PariteScreen, RegisterScreen, SettingsScreen } from '../screens';

import { ExchangeContext } from '../store';

import { CustomToast } from '../components/CustomToast';

import { enumScreens } from '../global/constants/variables/screens';

export const Root = () => {
  const Tab = createBottomTabNavigator();
  const { isAuthenticated, handleAuthControl, theme } = useContext(ExchangeContext);

  useEffect(() => {
    handleAuthControl();
  }, []);

  return (
    <ToastProvider renderToast={(props) => <CustomToast {...props} />} duration={2000} animationType='slide-in'>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={isAuthenticated ? enumScreens.HOME_SCREEN : enumScreens.LOGIN_SCREEN}
          tabBar={() => null}
        >
          {!isAuthenticated && (
            <>
              <Tab.Screen name={enumScreens.LOGIN_SCREEN} component={LoginScreen} />
              <Tab.Screen name={enumScreens.REGISTER_SCREEN} component={RegisterScreen} />
            </>
          )}
          <Tab.Screen name={enumScreens.HOME_SCREEN} component={HomeScreen} />
          <Tab.Screen name={enumScreens.DETAIL_SCREEN} component={DetailScreen} />
          <Tab.Screen name={enumScreens.PARITE_SCREEN} component={PariteScreen} />
          <Tab.Screen name={enumScreens.CALCULATION_SCREEN} component={CalculationScreen} />
          <Tab.Screen name={enumScreens.PROFILE_SCREEN} component={ProfileScreen} />
          <Tab.Screen name={enumScreens.SETTINGS_SCREEN} component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ToastProvider>
  );
};
