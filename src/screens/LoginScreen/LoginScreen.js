import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import { Layout } from '../../components/Layout';
import { CustomInput } from '../../components/CustomInput';

import { EyeOffIcon, EyeOnIcon, KeyIcon, MailIcon } from '../../global/constants/icons';

import styles from './LoginScreen.style';

export const LoginScreen = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isHidden, setisHidden] = useState(true);

  const onPressHiddenPassword = () => {
    setisHidden((preValue) => !preValue);
  };

  const onLogin = () => {
    console.log(mail, password);
  };

  return (
    <Layout bottomTabNavigator={false} styles={styles.container}>
      <Image source={require('../../../assets/login.png')} style={styles.mainLogo} />
      <View style={styles.content}>
        <Text style={styles.title}>Giriş</Text>
        <CustomInput
          leftIcon={<MailIcon size={20} />}
          autoCapitalize='none'
          placeholder='e-posta'
          placeholderTextColor={'#20212475'}
          value={mail}
          onChangeText={(e) => setMail(e)}
          styles={styles.input}
        />
        <CustomInput
          leftIcon={<KeyIcon size={20} color='#eeeeee' />}
          rightIcon={
            <TouchableOpacity style={styles.rightIcon} onPress={onPressHiddenPassword}>
              {isHidden ? <EyeOffIcon size={20} /> : <EyeOnIcon size={20} />}
            </TouchableOpacity>
          }
          secureTextEntry={isHidden}
          autoCapitalize='none'
          placeholder='şifre'
          placeholderTextColor={'#20212475'}
          value={password}
          onChangeText={(e) => setPassword(e)}
          styles={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
    </Layout>
  );
};
