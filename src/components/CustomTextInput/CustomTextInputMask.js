import { View, Text } from 'react-native';
import React from 'react';
import { MaskedTextInput } from 'react-native-mask-text';

import { ErrorIcon, InfoIcon } from '../../global/constants/icons';

import styles from './CustomTextInput.style.js';

export const CustomTextInputMask = ({
  value,
  onChangeText,
  leftIcon = null,
  rightIcon = null,
  styles: _styles = {},
  containerStyles = {},
  error = null,
  info = null,
  editable = true,
  mask = undefined,
  ...rest
}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={[styles.container, containerStyles]}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <MaskedTextInput
          mask={mask}
          style={[
            styles.input,
            leftIcon ? styles.leftPadding : {},
            rightIcon ? styles.rightPadding : {},
            error ? styles.errorBorder : {},
            !editable ? styles.disabled : {},
            _styles,
          ]}
          value={value}
          onChangeText={onChangeText}
          editable={editable}
          {...rest}
        />
        {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
        {info && (
          <View style={styles.messageContainer}>
            <InfoIcon size={12} color='#2979ff' />
            <Text style={styles.info}>{info}</Text>
          </View>
        )}
        {error && (
          <View style={styles.messageContainer}>
            <ErrorIcon size={12} color='#d32f2f' />
            <Text style={styles.error}>{error}</Text>
          </View>
        )}
      </View>
    </View>
  );
};