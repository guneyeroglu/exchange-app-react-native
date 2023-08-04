import { View, Text } from 'react-native';
import React from 'react';

import { Layout } from '../../components/Layout';

import styles from './AboutScreen.style';

export const AboutScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>AboutScreen</Text>
      </View>
    </Layout>
  );
};
