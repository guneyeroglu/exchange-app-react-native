import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AboutScreen, CalculationScreen, ContactScreen, DetailScreen, HomeScreen, LoginScreen, PariteScreen, SettingsScreen } from './src/screens';
import { enumScreens } from './src/global/constants/screens';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName={enumScreens.LOGIN_SCREEN} tabBar={() => null}>
          <Tab.Screen name={enumScreens.LOGIN_SCREEN} component={LoginScreen} />
          <Tab.Screen name={enumScreens.HOME_SCREEN} component={HomeScreen} />
          <Tab.Screen name={enumScreens.DETAIL_SCREEN} component={DetailScreen} />
          <Tab.Screen name={enumScreens.PARITE_SCREEN} component={PariteScreen} />
          <Tab.Screen name={enumScreens.CALCULATION_SCREEN} component={CalculationScreen} />
          <Tab.Screen name={enumScreens.ABOUT_SCREEN} component={AboutScreen} />
          <Tab.Screen name={enumScreens.CONTACT_SCREEN} component={ContactScreen} />
          <Tab.Screen name={enumScreens.SETTINGS_SCREEN} component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
