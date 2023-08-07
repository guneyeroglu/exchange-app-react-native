import { FlatList, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Layout } from '../../components/Layout';
import { BigCurrencyBox } from '../../components/BigCurrencyBox';
import { PariteBox } from '../../components/PariteBox';
import { CurrencyBox } from '../../components/CurrencyBox';
import { Loading } from '../../components/Loading';

import { DolarIcon, EuroIcon } from '../../global/constants/icons';
import { getExchangeRate } from '../../global/services/';
import { moneyFormat } from '../../global/utils';
import { apiURL } from '../../global/constants/urls';

import styles from './HomeScreen.style';

export const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const currencyIcon = {
    USD: <DolarIcon size={72} color='#202124' stroke={'#eeeeee'} />,
    EUR: <EuroIcon size={72} color='#202124' stroke={'#eeeeee'} />,
  };

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
        <Layout>
          <View style={styles.container}>
            <View style={styles.containerHeader}>
              {[data[0], data[1]].map((item) => (
                <BigCurrencyBox
                  key={item.symbol}
                  icon={currencyIcon[item.symbol]}
                  symbol={item.symbol}
                  name={item.name}
                  buying={moneyFormat(item.buying)}
                  sales={moneyFormat(item.sales)}
                />
              ))}
            </View>
            <View style={styles.containerParite}>
              <PariteBox
                firstCurrency={{ ...data[0], icon: <DolarIcon size={36} color='#eeeeee80' stroke={'#202124'} /> }}
                secondCurrency={{ ...data[1], icon: <EuroIcon size={36} color='#eeeeee' stroke={'#202124'} /> }}
              />
            </View>
            <FlatList
              data={data}
              renderItem={({ item }) => <CurrencyBox {...{ ...item, iconUri: item.icon }} key={item.symbol} />}
              keyExtractor={(item) => item.symbol}
            />
          </View>
        </Layout>
      ) : (
        <Loading />
      )}
    </>
  );
};
