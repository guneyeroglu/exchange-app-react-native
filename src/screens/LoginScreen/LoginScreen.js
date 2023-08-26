import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Layout } from '../../components/Layout';
import { CustomTextInput } from '../../components/CustomTextInput';
import { CustomKeyboardAvoidingView } from '../../components/CustomKeyboardAvoidingView';

import { EyeOffIcon, EyeOnIcon, KeyIcon, MailIcon } from '../../global/constants/icons';
import { enumScreens } from '../../global/constants/variables/screens';
import { colors } from '../../global/constants/variables/colors';

import { ExchangeContext } from '../../store/';

import styles from './LoginScreen.style';

export const LoginScreen = () => {
  const { login } = useContext(ExchangeContext);
  const { navigate } = useNavigation();
  const [isHidden, setisHidden] = useState(true);
  const toast = useToast();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Lütfen geçerli bir e-posta adresi giriniz.').required('Lütfen e-posta adresinizi giriniz.'),
    password: Yup.string().min(6, 'Lütfen şifre alanını en az 6 karakter olacak şekilde doldurun.').required('Lütfen şifrenizi giriniz.'),
  });

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: async (values) => {
      const response = await login({ identifier: values.email, password: values.password }, navigate);

      if (response.status) {
        toast.show('Giriş başarılı.');
      } else {
        toast.show('Giriş başarısız.');
        toast.show('Lütfen kullanıcı adı ve şifrenizi kontrol edin.');
      }
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
    <Layout bottomTabNavigator={false} style={styles.container}>
      <Image source={require('../../../assets/login.png')} style={styles.mainLogo} />
      <CustomKeyboardAvoidingView>
        <ScrollView style={styles.content}>
          <Text style={styles.title}>Giriş</Text>
          <CustomTextInput
            leftIcon={<MailIcon size={20} color={formik.touched.email && formik.errors.email && colors.error} />}
            autoCapitalize='none'
            placeholder='e-posta'
            placeholderTextColor={formik.touched.email && formik.errors.email ? colors.error_75 : colors.black_75}
            name='email'
            value={formik.values.email}
            onChangeText={(e) => handleInitialValues('email', e)}
            containerStyle={styles.input}
            error={formik.touched.email && formik.errors.email}
          />
          <CustomTextInput
            leftIcon={<KeyIcon size={20} color={formik.touched.password && formik.errors.password && colors.error} />}
            rightIcon={
              <TouchableOpacity style={styles.rightIcon} onPress={onPressHiddenPassword}>
                {isHidden ? <EyeOffIcon size={20} /> : <EyeOnIcon size={20} />}
              </TouchableOpacity>
            }
            secureTextEntry={isHidden}
            autoCapitalize='none'
            placeholder='şifre'
            placeholderTextColor={formik.touched.password && formik.errors.password ? colors.error_75 : colors.black_75}
            name='password'
            value={formik.values.password}
            onChangeText={(e) => handleInitialValues('password', e)}
            containerStyle={styles.input}
            info={'Şifreniz en az 6 karakter olmalıdır.'}
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
      </CustomKeyboardAvoidingView>
    </Layout>
  );
};
