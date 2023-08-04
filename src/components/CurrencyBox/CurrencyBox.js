import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { enumScreens } from '../../global/constants/screens';

import styles from './CurrencyBox.style';

export const CurrencyBox = ({
  name = 'Amerikan Doları',
  symbol = 'USD',
  iconUri = 'https://exchange.akbolat.net/uploads/usd_544ebb78e2.png',
  buying = 27.2321,
  sales = 27.8514,
}) => {
  const { navigate } = useNavigation();

  const onPressToNavigate = (navigation, thisPage) => {
    navigate(navigation, { symbol, thisPage });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPressToNavigate(enumScreens.DETAIL_SCREEN, enumScreens.HOME_SCREEN)}>
      <Image source={{ uri: iconUri }} style={styles.image} />
      <View style={styles.naming}>
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.symbol}>
          {symbol}
        </Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.name}>
          {name}
        </Text>
      </View>
      <View style={styles.info}>
        <View style={styles.infoContainer}>
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>
            Alış
          </Text>
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.subtitle}>
            {buying}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>
            Satış
          </Text>
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.subtitle}>
            {sales}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
