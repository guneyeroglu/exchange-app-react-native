import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import { Layout } from '../../components/Layout';

import { EyeOffIcon, EyeOnIcon, KeyIcon, MailIcon } from '../../global/constants/icons';

import styles from './LoginScreen.style';

export const LoginScreen = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [hidden, setHidden] = useState(true);

  const onPressHiddenPassword = () => {
    setHidden((preValue) => !preValue);
  };

  const onLogin = () => {
    console.log(mail, password);
  };

  return (
    <Layout bottomTabNavigator={false} styles={styles.container}>
      <Image source={require('../../../assets/login.png')} style={styles.mainLogo} />
      <View style={styles.content}>
        <Text style={styles.title}>Giriş</Text>
        <View style={styles.inputContainer}>
          <View style={styles.leftIcon}>
            <MailIcon size={20} />
          </View>
          <TextInput
            style={styles.input}
            autoCapitalize='none'
            placeholder='e-posta'
            placeholderTextColor={'#20212475'}
            value={mail}
            onChangeText={(e) => setMail(e)}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.leftIcon}>
            <KeyIcon size={20} color='#eeeeee' />
          </View>
          <TextInput
            secureTextEntry={hidden}
            style={styles.input}
            autoCapitalize='none'
            placeholder='şifre'
            placeholderTextColor={'#20212475'}
            value={password}
            onChangeText={(e) => setPassword(e)}
          />
          <TouchableOpacity style={styles.rightIcon} onPress={onPressHiddenPassword}>
            {hidden ? <EyeOffIcon size={20} /> : <EyeOnIcon size={21} />}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};
