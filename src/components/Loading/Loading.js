import { View } from 'react-native';
import React from 'react';

import { DolarIcon } from '../../global/constants/icons';

import styles from './Loading.style';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.shadow}></View>
      <View style={styles.icon}>
        <DolarIcon size={48} color='#202124' stroke={'#eeeeee'} />
      </View>
    </View>
  );
};
