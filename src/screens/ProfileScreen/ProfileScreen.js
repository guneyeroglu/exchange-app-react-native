import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Layout } from '../../components/Layout';
import { CustomInput } from '../../components/CustomInput';
import { ExchangeContext } from '../../store';

import { dateFormat } from '../../global/utils';
import { CancelIcon, EditIcon, LogoutIcon, SaveIcon } from '../../global/constants/icons';

import styles from './ProfileScreen.style';

export const ProfileScreen = () => {
  const { user, logout } = useContext(ExchangeContext);
  const { navigate } = useNavigation();
  const [editable, setEditable] = useState(false);

  const username = user ? user.username : '';
  const email = user ? user.email : '';
  const updatedAt = user ? dateFormat(user.updatedAt) : '';

  const usernameAbbreviation = username
    .split(' ')
    .map((word, index) => (index < 3 ? word[0] : null))
    .join('');

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Kullanıcı adı alanı zorunludur'),
    email: Yup.string().email('Lütfen geçerli bir email adresi giriniz').required('Email alanı zorunludur'),
  });

  const formik = useFormik({
    initialValues: { username, email, updatedAt },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleSave();
    },
  });

  const handleValueChange = (state, value) => {
    formik.setFieldValue(state, value);
  };

  const onPressToEdit = () => {
    setEditable((preValue) => !preValue);
  };

  const onPressToCancel = () => {
    formik.setFieldValue('username', user.username);
    formik.setFieldValue('email', user.email);
    setEditable(false);
  };

  const handleSave = () => {
    setEditable(false);
  };

  const onPressToLogout = () => {
    logout(navigate);
  };

  return (
    <Layout styles={styles.layoutContainer}>
      <View style={styles.header}>
        {!editable ? (
          <View style={styles.editContainer}>
            <TouchableOpacity style={styles.edit} onPress={onPressToEdit}>
              <EditIcon size={24} />
              <Text style={styles.editTxt}>Düzenle</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.edit, styles.cancel]} onPress={onPressToCancel}>
              <CancelIcon size={24} />
              <Text style={styles.editTxt}>Vazgeç</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.edit, styles.save]} onPress={formik.onSubmit}>
              <SaveIcon size={24} color='#eeeeee' />
              <Text style={styles.saveTxt}>Kaydet</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={styles.image}>
            <Text style={styles.imageTxt}>{usernameAbbreviation}</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{username}</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <CustomInput value={formik.values.username} onChangeText={(e) => handleValueChange('username', e)} editable={editable} />
          <CustomInput value={formik.values.email} onChangeText={(e) => handleValueChange('email', e)} editable={editable} />
          <CustomInput value={formik.values.updatedAt} onChangeText={(e) => handleValueChange('updatedAt', e)} editable={false} />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.exit} onPress={onPressToLogout}>
          <LogoutIcon size={24} color='#d32f2f' />
          <Text style={styles.exitTxt}>Çıkış</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};
