import { View, Text } from 'react-native';
import React from 'react';

import { Layout } from '../../components/Layout';

import styles from './ContactScreen.style';

export const ContactScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>ContactScreen</Text>
      </View>
    </Layout>
  );
};
