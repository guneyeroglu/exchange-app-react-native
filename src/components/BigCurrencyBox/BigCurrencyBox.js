import { View, Text } from 'react-native';
import React from 'react';

import { DolarIcon } from '../../global/constants/icons';
import { colors } from '../../global/constants/variables/colors';

import styles from './BigCurrencyBox.style';

export const BigCurrencyBox = ({
  icon = <DolarIcon size={72} color={colors.black} stroke={colors.white} />,
  symbol = 'USD',
  name = 'Amerikan Doları',
  sales = 16.7221,
  buying = 17.7321,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>{icon}</View>
      <Text style={styles.containerTitle}>{symbol}</Text>
      <Text style={styles.containerSubtitle}>{name}</Text>
      <View style={[styles.moneyContainer, styles.border]}>
        <Text style={styles.containerSubtitle}>Alış</Text>
        <Text style={styles.containerSubtitle}>{sales}</Text>
      </View>
      <View style={styles.moneyContainer}>
        <Text style={styles.containerSubtitle}>Satış</Text>
        <Text style={styles.containerSubtitle}>{buying}</Text>
      </View>
    </View>
  );
};
