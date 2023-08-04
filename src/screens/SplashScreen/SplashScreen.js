import { View } from 'react-native';
import React from 'react';

import { DolarIcon } from '../../global/constants/icons';

import styles from './SplashScreen.style';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.shadow}></View>
      <DolarIcon size={500} color='#202124' stroke={'#eeeeee'} />
    </View>
  );
};
