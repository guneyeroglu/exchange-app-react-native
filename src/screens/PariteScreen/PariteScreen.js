import { View, Text } from 'react-native';
import React from 'react';

import { Layout } from '../../components/Layout';

import styles from './PariteScreen.style';

export const PariteScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>PariteScreen</Text>
      </View>
    </Layout>
  );
};
