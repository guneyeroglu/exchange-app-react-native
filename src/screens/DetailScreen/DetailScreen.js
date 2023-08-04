import { View, Text } from 'react-native';
import React from 'react';

import { Layout } from '../../components/Layout';

import styles from './DetailScreen.style';

export const DetailScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>DetailScreen</Text>
      </View>
    </Layout>
  );
};
