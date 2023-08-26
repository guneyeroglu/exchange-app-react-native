import { KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';

import styles from './CustomKeyboardAvoidingView.style';

export const CustomKeyboardAvoidingView = ({ children, style = {}, ...rest }) => {
  return (
    <KeyboardAvoidingView style={[styles.keyboard, style]} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} {...rest}>
      {children}
    </KeyboardAvoidingView>
  );
};
