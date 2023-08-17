import { View } from 'react-native';
import React from 'react';

import { DolarIcon } from '../../global/constants/icons';

import styles from './Loading.style';
import { colors } from '../../global/constants/variables/colors';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.shadow}></View>
      <View style={styles.icon}>
        <DolarIcon size={48} color={colors.black} stroke={colors.white} />
      </View>
    </View>
  );
};
