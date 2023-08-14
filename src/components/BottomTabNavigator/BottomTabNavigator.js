import { View, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { CalculationIcon, ProfileIcon, HomeIcon, AboutIcon, SettingIcon } from '../../global/constants/icons';
import { enumScreens } from '../../global/constants/screens';

import styles from './BottomTabNavigator.style';

export const BottomTabNavigator = () => {
  const route = useRoute();
  const { navigate } = useNavigation();
  const { width } = Dimensions.get('window');

  const buttons = [
    { id: 'homeTab', icon: HomeIcon, route: enumScreens.HOME_SCREEN },
    { id: 'calculationTab', icon: CalculationIcon, route: enumScreens.CALCULATION_SCREEN },
    { id: 'profileTab', icon: ProfileIcon, route: enumScreens.PROFILE_SCREEN },
    { id: 'settingsTab', icon: SettingIcon, route: enumScreens.SETTINGS_SCREEN },
  ];

  const currenctRoute = (routeName) => {
    if (route.name === routeName) return { color: '#202124', size: 40 };

    return { color: '#20212475', size: 32 };
  };

  const onPressToNavigate = (navigation) => {
    navigate(navigation);
  };

  return (
    <View style={styles.container}>
      {buttons.map((button) => (
        <TouchableOpacity key={button.id} style={[styles.button, { width: width / buttons.length }]} onPress={() => onPressToNavigate(button.route)}>
          <button.icon {...currenctRoute(button.route)} />
        </TouchableOpacity>
      ))}
    </View>
  );
};
