import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Layout } from '../../components/Layout';
import { CustomInput } from '../../components/CustomInput';

import { EyeOffIcon, EyeOnIcon, KeyIcon, MailIcon } from '../../global/constants/icons';
import { enumScreens } from '../../global/constants/screens';
import { ExchangeContext } from '../../store/';

import styles from './LoginScreen.style';

export const LoginScreen = () => {
  const { login } = useContext(ExchangeContext);
  const { navigate } = useNavigation();
  const [isHidden, setisHidden] = useState(true);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Lütfen geçerli bir e-posta adresi giriniz.').required('Lütfen e-posta adresinizi giriniz.'),
    password: Yup.string().min(6, 'Lütfen şifre alanını en az 6 karakter olacak şekilde doldurun.').required('Lütfen şifrenizi giriniz.'),
  });

  const formik = useFormik({
    initialValues: { email: 'deneme1234@gmail.com', password: 'deneme1234' },
    validationSchema,
    onSubmit: async (values) => {
      await login({ identifier: values.email, password: values.password }, navigate);
    },
  });

  const handleInitialValues = (name, value) => {
    formik.setFieldValue(name, value);
  };

  const onPressHiddenPassword = () => {
    setisHidden((preValue) => !preValue);
  };

  const handleNavigateToRegister = () => {
    navigate(enumScreens.REGISTER_SCREEN);
  };

  return (
    <Layout bottomTabNavigator={false} styles={styles.container}>
      <Image source={require('../../../assets/login.png')} style={styles.mainLogo} />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Giriş</Text>
        <CustomInput
          leftIcon={<MailIcon size={20} color={formik.touched.email && formik.errors.email && '#d32f2f'} />}
          autoCapitalize='none'
          placeholder='e-posta'
          placeholderTextColor={formik.touched.email && formik.errors.email ? '#d32f2f75' : '#20212475'}
          name='email'
          value={formik.values.email}
          onChangeText={(e) => handleInitialValues('email', e)}
          containerStyles={styles.input}
          error={formik.touched.email && formik.errors.email}
        />
        <CustomInput
          leftIcon={<KeyIcon size={20} color={formik.touched.password && formik.errors.password && '#d32f2f'} />}
          rightIcon={
            <TouchableOpacity style={styles.rightIcon} onPress={onPressHiddenPassword}>
              {isHidden ? <EyeOffIcon size={20} /> : <EyeOnIcon size={20} />}
            </TouchableOpacity>
          }
          secureTextEntry={isHidden}
          autoCapitalize='none'
          placeholder='şifre'
          placeholderTextColor={formik.touched.password && formik.errors.password ? '#d32f2f75' : '#20212475'}
          name='password'
          value={formik.values.password}
          onChangeText={(e) => handleInitialValues('password', e)}
          containerStyles={styles.input}
          hint={'Şifreniz en az 6 karakter olmalıdır.'}
          error={formik.touched.password && formik.errors.password}
        />
        <TouchableOpacity style={styles.button} onPress={formik.handleSubmit}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Hesabınız yok mu?</Text>
          <TouchableOpacity onPress={handleNavigateToRegister}>
            <Text style={styles.footerLink}>Kaydol</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Layout>
  );
};