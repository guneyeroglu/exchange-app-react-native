import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';

import { Layout } from '../../components/Layout';
import { ExchangeContext } from '../../store';

import styles from './SettingsScreen.style';

export const SettingsScreen = () => {
  const { theme, setTheme } = useContext(ExchangeContext);

  const handleTheme = (themeName) => {
    setTheme(themeName);
  };

  return (
    <Layout>
      <View style={styles.container}>
        <View>
          <Text>{theme}</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={() => handleTheme('light')}>
            <Text style={styles.text}>Light</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleTheme('dark')}>
            <Text style={styles.text}>Dark</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};
