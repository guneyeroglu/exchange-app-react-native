import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { CalculationIcon, ContactIcon, HomeIcon, AboutIcon, SettingIcon } from '../../global/constants/icons';
import { enumScreens } from '../../global/constants/screens';

import styles from './BottomTabNavigator.style';

export const BottomTabNavigator = () => {
  const route = useRoute();
  const { navigate } = useNavigation();

  const currenctRoute = (routeName) => {
    if (route.name === routeName) return { color: '#202124', size: 48 };

    return { color: '#20212495', size: 32 };
  };

  const onPressToNavigate = (navigation) => {
    navigate(navigation);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => onPressToNavigate(enumScreens.CALCULATION_SCREEN)}>
        <CalculationIcon {...currenctRoute(enumScreens.CALCULATION_SCREEN)} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onPressToNavigate(enumScreens.CONTACT_SCREEN)}>
        <ContactIcon {...currenctRoute(enumScreens.CONTACT_SCREEN)} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onPressToNavigate(enumScreens.HOME_SCREEN)}>
        <HomeIcon {...currenctRoute(enumScreens.HOME_SCREEN)} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onPressToNavigate(enumScreens.ABOUT_SCREEN)}>
        <AboutIcon {...currenctRoute(enumScreens.ABOUT_SCREEN)} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onPressToNavigate(enumScreens.SETTINGS_SCREEN)}>
        <SettingIcon {...currenctRoute(enumScreens.SETTINGS_SCREEN)} />
      </TouchableOpacity>
    </View>
  );
};
