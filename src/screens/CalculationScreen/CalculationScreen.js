import { FlatList, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Layout } from '../../components/Layout';
import { CurrencyBoxInput } from '../../components/CurrencyBoxInput';
import { Loading } from '../../components/Loading';

import { DolarIcon, EuroIcon } from '../../global/constants/icons';
import { getExchangeRate } from '../../global/services/';
import { moneyFormat } from '../../global/utils';
import { apiURL } from '../../global/constants/urls';

import styles from './CalculationScreen.style';

export const CalculationScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');
  const [isCurrentInput, setIsCurrenctInput] = useState('');

  const getAllData = async () => {
    setIsLoading(true);
    const response = await getExchangeRate(apiURL.withToken.exchange);

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
      {!!data.length && !isLoading ? (
        <Layout styles={styles.container}>
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
        </Layout>
      ) : (
        <Loading />
      )}
    </>
  );
};
