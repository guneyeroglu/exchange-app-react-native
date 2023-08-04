import { FlatList, View } from 'react-native';
import React from 'react';

import { Layout } from '../../components/Layout';
import { ExchangeBox } from '../../components/ExchangeBox';
import { DolarIcon, EuroIcon } from '../../global/constants/icons';

import styles from './HomeScreen.style';

export const HomeScreen = () => {
  const exchanges = [
    { id: '1', icon: <DolarIcon size={72} color='#202124' stroke={'#eeeeee'} />, title: 'USD', subtitle: 'Amerikan Doları', sales: 16.7221, buying: 17.7321 },
    { id: '2', icon: <EuroIcon size={72} color='#202124' stroke={'#eeeeee'} />, title: 'EUR', subtitle: 'Euro', sales: 16.7221, buying: 17.7321 },
  ];
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          {exchanges.map((item) => (
            <ExchangeBox key={item.id} icon={item.icon} title={item.title} subtitle={item.subtitle} sales={item.sales} buying={item.buying} />
          ))}
        </View>
      </View>
    </Layout>
  );
};
