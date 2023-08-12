import { FlatList, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Layout } from '../../components/Layout';
import { CurrencyBoxInput } from '../../components/CurrencyBoxInput';
import { Loading } from '../../components/Loading';

import { getExchangeRate } from '../../global/services/';
import { moneyFormat } from '../../global/utils';

import styles from './CalculationScreen.style';

export const CalculationScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState('');
  const [isCurrentInput, setIsCurrenctInput] = useState('');

  const getAllData = async () => {
    setIsLoading(true);
    const response = await getExchangeRate();

    if (response.data.data.length) {
      setData(
        response.data.data.map((item) => ({
          ...item,
          buying: moneyFormat(item.buying),
          sales: moneyFormat(item.sales),
        })),
      );
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <Layout styles={styles.container}>
        {!isLoading && (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View style={styles.currencyContainer}>
                <CurrencyBoxInput
                  {...{ ...item, iconUri: item.icon }}
                  key={item.symbol}
                  value={value}
                  setValue={setValue}
                  isCurrentInput={isCurrentInput}
                  setIsCurrenctInput={setIsCurrenctInput}
                />
              </View>
            )}
            keyExtractor={(item) => item.symbol}
          />
        )}
        {isLoading && <Loading />}
      </Layout>
    </>
  );
};
