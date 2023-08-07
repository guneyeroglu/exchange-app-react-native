import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { BackIcon } from '../../global/constants/icons';
import { Layout } from '../../components/Layout';
import { Loading } from '../../components/Loading';

import { moneyFormat, dateFormat } from '../../global/utils';
import { getExchangeRateDetail } from '../../global/services';
import { apiURL } from '../../global/constants/urls';

import styles from './DetailScreen.style';

export const DetailScreen = ({ route }) => {
  const symbol = route.params.symbol;
  const previousScreen = route.params.previousScreen;

  const navigation = useNavigation();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getDataDetail = async () => {
    setIsLoading(true);

    const response = await getExchangeRateDetail(apiURL.withToken.exchange, symbol);

    if (response.data) {
      setData(response.data);
    }

    setIsLoading(false);
  };

  const onPressToBack = () => {
    navigation.navigate(previousScreen);
  };

  useEffect(() => {
    getDataDetail();
  }, [symbol]);

  return (
    <Layout bottomTabNavigator={false} styles={styles.container}>
      {!isLoading && (
        <>
          <View style={styles.header}>
            <TouchableOpacity onPress={onPressToBack}>
              <BackIcon size={36} />
            </TouchableOpacity>
            <Text style={styles.title}>{data.name}</Text>
            <Image source={{ uri: data.icon }} style={styles.headerIcon} />
          </View>
          <View style={styles.content}>
            <View style={styles.tableHead}>
              <Text style={styles.tableHeadTxt}>Alış</Text>
              <Text style={styles.tableHeadTxt}>Satış</Text>
              <Text style={styles.tableHeadTxt}>Tarih</Text>
            </View>
            {data?.exchanges?.map((item, index) => (
              <View key={item.buy * item.sale + item.date} style={[styles.tableRow, index % 2 !== 0 ? styles.tableSecondRow : {}]}>
                <Text style={[styles.tableRowTxt, styles.firstTxt]}>{`${moneyFormat(item.sale)} ₺`}</Text>
                <Text style={[styles.tableRowTxt, styles.middleTxt]}>{`${moneyFormat(item.buy)} ₺`}</Text>
                <Text style={[styles.tableRowTxt, styles.lastTxt]}>{dateFormat(item.date)}</Text>
              </View>
            ))}
          </View>
        </>
      )}
      {isLoading && <Loading />}
    </Layout>
  );
};
