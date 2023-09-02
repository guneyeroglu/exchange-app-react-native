import { FlatList, Text, View, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Layout } from '../../components/Layout';
import { CurrencyBoxInput } from '../../components/CurrencyBoxInput';
import { Loading } from '../../components/Loading';
import { CustomKeyboardAvoidingView } from '../../components/CustomKeyboardAvoidingView';

import { TurkeyIcon } from '../../global/constants/icons';
import { getExchangeRate } from '../../global/services/';
import { moneyFormat } from '../../global/utils';

import styles from './CalculationScreen.style';

export const CalculationScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [value, setValue] = useState('');
  const [buying, setBuying] = useState('');
  const [sales, setSales] = useState('');
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
    setRefreshing(false);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await getAllData();
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <Layout style={styles.container}>
        {(!isLoading || refreshing) && (
          <>
            <View style={styles.localContainer}>
              <View style={styles.localIcon}>
                <TurkeyIcon size={32} />
              </View>
              <View style={styles.localType}>
                <Text style={styles.localTypeTitle}>TRY</Text>
                <Text style={styles.localTypeSubtitle}>Türk Lirası</Text>
              </View>
              <View style={styles.localInfoContainer}>
                <View style={styles.localInfo}>
                  <Text style={styles.localInfoText}>Alış</Text>
                  <Text style={styles.localInfoMoney} numberOfLines={1} ellipsizeMode='tail'>
                    {moneyFormat(buying)} ₺
                  </Text>
                </View>
                <View style={styles.localInfo}>
                  <Text style={styles.localInfoText}>Satış</Text>
                  <Text style={styles.localInfoMoney} numberOfLines={1} ellipsizeMode='tail'>
                    {moneyFormat(sales)} ₺
                  </Text>
                </View>
              </View>
            </View>
            <CustomKeyboardAvoidingView enabled={false}>
              <FlatList
                data={data}
                renderItem={({ item, index }) => (
                  <View style={[styles.currencyContainer, index === data.length - 1 ? styles.lastItem : {}]}>
                    <CurrencyBoxInput
                      {...{ ...item, iconUri: item.icon }}
                      key={item.symbol}
                      value={value}
                      setValue={setValue}
                      setBuying={setBuying}
                      setSales={setSales}
                      isCurrentInput={isCurrentInput}
                      setIsCurrenctInput={setIsCurrenctInput}
                    />
                  </View>
                )}
                keyExtractor={(item) => item.symbol}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
              />
            </CustomKeyboardAvoidingView>
          </>
        )}
        {isLoading && !refreshing && <Loading />}
      </Layout>
    </>
  );
};
