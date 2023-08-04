import { View, Text } from 'react-native';
import React from 'react';
import { DolarIcon } from '../../global/constants/icons';

import styles from './ExchangeBox.style';

export const ExchangeBox = ({
  icon = <DolarIcon size={72} color='#202124' stroke={'#eeeeee'} />,
  title = 'USD',
  subtitle = 'Amerikan Doları',
  sales = 16.7221,
  buying = 17.7321,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>{icon}</View>
      <Text style={styles.containerTitle}>{title}</Text>
      <Text style={styles.containerSubtitle}>{subtitle}</Text>
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
