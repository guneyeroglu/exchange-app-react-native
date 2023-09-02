import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { enumScreens } from '../global/constants/variables/screens';

import { CalculationScreen, ProfileScreen, HomeScreen, LoginScreen, RegisterScreen, SettingsScreen } from '../screens';
import { ExchangeContext } from '../store';

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  const { isAuthenticated } = useContext(ExchangeContext);

  return (
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
      <Tab.Screen name={enumScreens.CALCULATION_SCREEN} component={CalculationScreen} />
      <Tab.Screen name={enumScreens.PROFILE_SCREEN} component={ProfileScreen} />
      <Tab.Screen name={enumScreens.SETTINGS_SCREEN} component={SettingsScreen} />
    </Tab.Navigator>
  );
};
