import { View } from 'react-native';
import React from 'react';

import { DolarIcon } from '../../global/constants/icons';

import styles from './SplashScreen.style';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <DolarIcon size={600} color='#20212495' stroke={'#202124'} />
    </View>
  );
};
