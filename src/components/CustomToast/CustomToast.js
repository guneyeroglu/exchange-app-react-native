import { View, Text } from 'react-native';
import React from 'react';

import styles from './CustomToast.style';

export const CustomToast = ({ message, type }) => {
  return (
    <View style={[styles.container, type ? styles[type] : {}]}>
      <Text style={styles.containerText}>{message}</Text>
    </View>
  );
};
