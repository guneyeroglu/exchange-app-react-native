import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ToastProvider } from 'react-native-toast-notifications';

import { enumScreens } from '../global/constants/variables/screens';
import { CustomToast } from '../components/CustomToast';

import { TabNavigator } from './TabNavigator';
import { DetailScreen } from '../screens';
import { ExchangeContext } from '../store';

export const Root = () => {
  const Stack = createStackNavigator();
  const { handleAuthControl } = useContext(ExchangeContext);

  useEffect(() => {
    handleAuthControl();
  }, []);

  return (
    <ToastProvider renderToast={(props) => <CustomToast {...props} />} duration={2000} animationType='slide-in'>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={enumScreens.HOME_SCREEN} screenOptions={{ headerShown: false }}>
          <Stack.Screen name={enumScreens.MAIN_SCREEN} component={TabNavigator} />
          <Stack.Screen name={enumScreens.DETAIL_SCREEN} component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ToastProvider>
  );
};
