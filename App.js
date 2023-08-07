import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Provider } from './src/store/';
import { Root } from './src/roots';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider>
        <Root />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
