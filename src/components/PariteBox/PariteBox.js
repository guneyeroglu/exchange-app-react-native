import { View, Text } from 'react-native';
import React from 'react';

import { DolarIcon, EuroIcon } from '../../global/constants/icons';
import { moneyFormat } from '../../global/utils';

import styles from './PariteBox.style';

export const PariteBox = ({
  firstCurrency = {
    icon: <DolarIcon size={36} color='#eeeeee80' stroke={'#202124'} />,
    title: 'USD',
    subtitle: 'Amerikan Doları',
    buying: 24.5321,
    sales: 24.7321,
  },
  secondCurrency = {
    icon: <EuroIcon size={36} color='#eeeeee' stroke={'#202124'} />,
    title: 'EUR',
    subtitle: 'Euro',
    buying: 27.7321,
    sales: 27.4321,
  },
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {firstCurrency.icon}
        <View style={styles.secondIcon}>{secondCurrency.icon}</View>
      </View>
      <View>
        <Text style={styles.title}>{`${firstCurrency.symbol}/${secondCurrency.symbol} Paritesi`}</Text>
        <Text style={styles.subtitle}>{moneyFormat(firstCurrency.sales / secondCurrency.sales)}</Text>
      </View>
    </View>
  );
};
