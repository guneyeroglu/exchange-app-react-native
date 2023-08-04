import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from './CurrencyBox.style';

export const CurrencyBox = ({
  name = 'Amerikan Doları',
  symbol = 'USD',
  iconUri = 'https://exchange.akbolat.net/uploads/usd_544ebb78e2.png',
  buying = 27.2321,
  sales = 27.8514,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: iconUri }} style={styles.image} />
      <View style={styles.naming}>
        <Text style={styles.symbol}>{symbol}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.info}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Alış</Text>
          <Text style={styles.subtitle}>{buying}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Satış</Text>
          <Text style={styles.subtitle}>{sales}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
