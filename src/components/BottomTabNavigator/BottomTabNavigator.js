import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { CalculationIcon, ContactIcon, HomeIcon, AboutIcon, SettingIcon } from '../../global/constants/icons';
import { enumScreens } from '../../global/constants/screens';

import styles from './BottomTabNavigator.style';

export const BottomTabNavigator = () => {
  const route = useRoute();
  const { navigate } = useNavigation();

  const buttons = [
    { id: 2, icon: ContactIcon, route: enumScreens.CONTACT_SCREEN },
    { id: 1, icon: CalculationIcon, route: enumScreens.CALCULATION_SCREEN },
    { id: 3, icon: HomeIcon, route: enumScreens.HOME_SCREEN },
    { id: 5, icon: SettingIcon, route: enumScreens.SETTINGS_SCREEN },
    { id: 4, icon: AboutIcon, route: enumScreens.ABOUT_SCREEN },
  ];

  const currenctRoute = (routeName) => {
    if (route.name === routeName) return { color: '#202124', size: 48 };

    return { color: '#20212495', size: 32 };
  };

  const onPressToNavigate = (navigation) => {
    navigate(navigation);
  };

  return (
    <View style={styles.container}>
      {buttons.map((button) => (
        <TouchableOpacity key={button.id} style={styles.button} onPress={() => onPressToNavigate(button.route)}>
          <button.icon {...currenctRoute(button.route)} />
        </TouchableOpacity>
      ))}
    </View>
  );
};
