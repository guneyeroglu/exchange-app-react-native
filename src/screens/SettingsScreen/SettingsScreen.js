import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { Layout } from '../../components/Layout';

import styles from './SettingsScreen.style';

export const SettingsScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <View></View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Light</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Dark</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};
