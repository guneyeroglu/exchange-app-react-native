import { FlatList, View, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Layout } from '../../components/Layout';
import { BigCurrencyBox } from '../../components/BigCurrencyBox';
import { PariteBox } from '../../components/PariteBox';
import { CurrencyBox } from '../../components/CurrencyBox';
import { Loading } from '../../components/Loading';

import { DolarIcon, EuroIcon } from '../../global/constants/icons';
import { colors } from '../../global/constants/variables/colors';
import { getExchangeRate } from '../../global/services/';
import { moneyFormat } from '../../global/utils';

import styles from './HomeScreen.style';

export const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const currencyIcon = {
    USD: <DolarIcon size={72} color={colors.black} stroke={colors.white} />,
    EUR: <EuroIcon size={72} color={colors.black} stroke={colors.white} />,
  };

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
    setRefreshing(false);
  };

  useEffect(() => {
    getAllData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    getAllData();
  };

  return (
    <>
      <Layout style={styles.layoutContainer}>
        {(!isLoading || refreshing) && (
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
                firstCurrency={{ ...data[0], icon: <DolarIcon size={36} color={colors.white_80} stroke={colors.black} /> }}
                secondCurrency={{ ...data[1], icon: <EuroIcon size={36} color={colors.white} stroke={colors.black} /> }}
              />
            </View>
            <FlatList
              data={data}
              renderItem={({ item }) => <CurrencyBox {...{ ...item, iconUri: item.icon }} key={item.symbol} />}
              keyExtractor={(item) => item.symbol}
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            />
          </View>
        )}
        {isLoading && !refreshing && <Loading />}
      </Layout>
    </>
  );
};
