import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { enumScreens } from '../../global/constants/screens';
import { moneyFormat } from '../../global/utils';

import styles from './CurrencyBoxInput.style';

export const CurrencyBoxInput = ({
  name = 'Amerikan Doları',
  symbol = 'USD',
  iconUri = 'https://exchange.akbolat.net/uploads/usd_544ebb78e2.png',
  buying = 27.2321,
  sales = 27.8514,
  value = '',
  setValue,
  isCurrentInput,
  setIsCurrenctInput,
}) => {
  const { navigate } = useNavigation();
  const [currentValue, setCurrentValue] = useState('');

  const converMoney = (moneyValue) => {
    const convertedValue = moneyValue.replace(/[^0-9.,]/g, '');
    setValue(convertedValue / buying);
    setCurrentValue(convertedValue);
  };

  const getValue = (commingValue, secondOne) => {
    if (commingValue === '' || commingValue === '0' || commingValue === 0) return '';
    if (symbol === isCurrentInput) return currentValue;

    return String(moneyFormat(commingValue * secondOne));
  };

  const focusInput = () => {
    setValue('');
    setIsCurrenctInput(symbol);
  };

  const onPressToNavigate = (navigation, currentScreen) => {
    navigate(navigation, { symbol, previousScreen: currentScreen });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPressToNavigate(enumScreens.DETAIL_SCREEN, enumScreens.CALCULATION_SCREEN)}>
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
      <TextInput onFocus={focusInput} style={styles.input} placeholder='Miktar' value={getValue(value, buying)} onChangeText={(e) => converMoney(e)} />
    </TouchableOpacity>
  );
};
