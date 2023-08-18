import { View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BottomTabNavigator } from '../BottomTabNavigator';

import styles from './Layout.style';

export const Layout = ({ children, bottomTabNavigator = true, style = {} }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom, ...style }]}>
      <StatusBar style='dark' />
      {children}
      {bottomTabNavigator && <BottomTabNavigator />}
    </View>
  );
};
