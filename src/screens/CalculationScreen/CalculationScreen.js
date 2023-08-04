import { View, Text } from 'react-native';
import React from 'react';

import { Layout } from '../../components/Layout';

import styles from './CalculationScreen.style';

export const CalculationScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>CalculationScreen</Text>
      </View>
    </Layout>
  );
};
