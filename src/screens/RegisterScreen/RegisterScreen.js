import { Text, Image, TouchableOpacity, ScrollView, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Layout } from '../../components/Layout';
import { CustomInput } from '../../components/CustomInput';

import { ExchangeContext } from '../../store';

import { EyeOffIcon, EyeOnIcon, KeyIcon, MailIcon, UserIcon } from '../../global/constants/icons';
import { enumScreens } from '../../global/constants/screens';

import styles from './RegisterScreen.style';

export const RegisterScreen = () => {
  const { register } = useContext(ExchangeContext);
  const { navigate } = useNavigation();
  const [isHidden, setisHidden] = useState(true);
  const [isHiddenConfirm, setisHiddenConfirm] = useState(true);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Lütfen kullanıcı adınızı giriniz.'),
    email: Yup.string().email('Lütfen geçerli bir e-posta adresi giriniz.').required('Lütfen e-posta adresinizi giriniz.'),
    password: Yup.string().min(6, 'Lütfen şifre alanını en az 6 karakter olacak şekilde doldurun.').required('Lütfen şifrenizi giriniz.'),
    confirmPassword: Yup.string()
      .required('Lütfen şifre tekrarı giriniz.')
      .oneOf([Yup.ref('password'), null], 'Şifreler eşleşmiyor.'),
  });

  const formik = useFormik({
    initialValues: { username: '', email: '', password: '', confirmPassword: '' },
    validationSchema,
    onSubmit: async (values) => {
      await register(values, navigate);
    },
  });

  const handleInitialValues = (name, value) => {
    formik.setFieldValue(name, value);
  };

  const onPressHiddenPassword = () => {
    setisHidden((preValue) => !preValue);
  };

  const onPressHiddenConfirmPassword = () => {
    setisHiddenConfirm((preValue) => !preValue);
  };

  const handleNavigateToRegister = () => {
    navigate(enumScreens.LOGIN_SCREEN);
  };

  return (
    <Layout bottomTabNavigator={false} styles={styles.container}>
      <Image source={require('../../../assets/login.png')} style={styles.mainLogo} />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Üye Ol</Text>
        <CustomInput
          leftIcon={<UserIcon size={20} color={formik.touched.username && formik.errors.username && '#d32f2f'} />}
          autoCapitalize='none'
          placeholder='kullanıcı adı'
          placeholderTextColor={formik.touched.username && formik.errors.username ? '#d32f2f75' : '#20212475'}
          name='username'
          value={formik.values.username}
          onChangeText={(e) => handleInitialValues('username', e)}
          containerStyles={styles.input}
          error={formik.touched.username && formik.errors.username}
        />
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
          error={formik.touched.password && formik.errors.password}
        />
        <CustomInput
          leftIcon={<KeyIcon size={20} color={formik.touched.confirmPassword && formik.errors.confirmPassword && '#d32f2f'} />}
          rightIcon={
            <TouchableOpacity style={styles.rightIcon} onPress={onPressHiddenConfirmPassword}>
              {isHiddenConfirm ? <EyeOffIcon size={20} /> : <EyeOnIcon size={20} />}
            </TouchableOpacity>
          }
          secureTextEntry={isHiddenConfirm}
          autoCapitalize='none'
          placeholder='şifre tekrarı'
          placeholderTextColor={formik.touched.confirmPassword && formik.errors.confirmPassword ? '#d32f2f75' : '#20212475'}
          name='confirmPassword'
          value={formik.values.confirmPassword}
          onChangeText={(e) => handleInitialValues('confirmPassword', e)}
          containerStyles={styles.input}
          error={formik.touched.confirmPassword && formik.errors.confirmPassword}
          hint={'Şifreniz en az 6 karakter olmalıdır.'}
        />
        <TouchableOpacity style={styles.button} onPress={formik.handleSubmit}>
          <Text style={styles.buttonText}>Kaydol</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Hesabınız zaten var mı?</Text>
          <TouchableOpacity onPress={handleNavigateToRegister}>
            <Text style={styles.footerLink}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Layout>
  );
};
