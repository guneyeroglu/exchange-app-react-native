import { View, TextInput } from 'react-native';
import React from 'react';

import styles from './CustomInput.style.js';

export const CustomInput = ({ value, onChangeText, leftIcon = null, rightIcon = null, styles: _styles = {}, ...rest }) => {
  return (
    <View style={styles.container}>
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
      <TextInput style={[styles.input, leftIcon ? styles.leftPadding : {}, rightIcon ? styles.rightPadding : {}, _styles]} {...rest} />
      {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
    </View>
  );
};
