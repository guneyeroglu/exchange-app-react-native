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
  setBuying,
  setSales,
  isCurrentInput,
  setIsCurrenctInput,
}) => {
  const { navigate } = useNavigation();
  const [currentValue, setCurrentValue] = useState('');

  const convertMoney = (moneyValue) => {
    if (moneyValue === '.' || moneyValue === ',') return setCurrentValue('0.');

    const convertedValue = moneyValue
      .replace(/[^0-9.,]/g, '')
      .replace(/,+/g, '.')
      .replace(/^(\d+)\.(\d*).*/, '$1.$2');

    setValue(convertedValue * buying);
    setBuying(convertedValue * buying);
    setSales(convertedValue * sales);
    setCurrentValue(convertedValue);
  };

  const getValue = (commingValue, secondOne) => {
    if (symbol === isCurrentInput) return currentValue;
    if (commingValue === '' || commingValue === '0' || commingValue === 0) return '';

    return moneyFormat(String(commingValue / secondOne));
  };

  const _currentValue = getValue(value, buying);

  const focusInput = () => {
    setIsCurrenctInput(symbol);
    setCurrentValue(_currentValue);

    if (value !== '') return;
  };

  const blurInput = () => {
    if (_currentValue === '' || _currentValue === '0' || _currentValue === 0) {
      setValue('');
      setCurrentValue('');
    }
  };

  const onPressToNavigate = (navigation, currentScreen) => {
    navigate(navigation, { symbol, previousScreen: currentScreen });
  };

  const onKeyPressToMaxLength = (key) => {
    if (currentValue.includes('.')) return;

    if (key === '.' || key === ',') setCurrentValue((preValue) => preValue + '.');
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
            {buying} ₺
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>
            Satış
          </Text>
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.subtitle}>
            {sales} ₺
          </Text>
        </View>
      </View>
      <TextInput
        onFocus={focusInput}
        onBlur={blurInput}
        style={styles.input}
        placeholder='Miktar'
        value={_currentValue}
        onChangeText={convertMoney}
        onKeyPress={(e) => onKeyPressToMaxLength(e.nativeEvent.key)}
        maxLength={currentValue.includes('.') ? 9 : 5}
      />
    </TouchableOpacity>
  );
};
