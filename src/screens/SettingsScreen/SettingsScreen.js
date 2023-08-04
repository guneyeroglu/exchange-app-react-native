import { View, Text } from 'react-native';
import React from 'react';

import { Layout } from '../../components/Layout';

import styles from './SettingsScreen.style';

export const SettingsScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>SettingsScreen</Text>
      </View>
    </Layout>
  );
};
