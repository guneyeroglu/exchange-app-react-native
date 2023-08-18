import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Root } from './src/roots';

import { Provider } from './src/store/';

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
