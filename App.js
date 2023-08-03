import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AboutScreen, CalculationScreen, ContactScreen, DetailScreen, HomeScreen, PariteScreen, SettingsScreen } from './src/screens';
import { enumScreens } from './src/global/constants/screens';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={enumScreens.HOME_SCREEN} component={HomeScreen} />
          <Stack.Screen name={enumScreens.DETAIL_SCREEN} component={DetailScreen} />
          <Stack.Screen name={enumScreens.PARITE_SCREEN} component={PariteScreen} />
          <Stack.Screen name={enumScreens.CALCULATION_SCREEN} component={CalculationScreen} />
          <Stack.Screen name={enumScreens.ABOUT_SCREEN} component={AboutScreen} />
          <Stack.Screen name={enumScreens.CONTACT_SCREEN} component={ContactScreen} />
          <Stack.Screen name={enumScreens.SETTINGS_SCREEN} component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
