import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Layout } from '../../components/Layout';
import { CustomTextInput } from '../../components/CustomTextInput';
import { ExchangeContext } from '../../store';

import { dateFormat } from '../../global/utils';
import {
  CancelIcon,
  EditIcon,
  LogoutIcon,
  SaveIcon,
  MailIcon,
  UserIcon,
  CityIcon,
  UniversityIcon,
  PhoneIcon,
  BirthdayIcon,
  SecretIcon,
} from '../../global/constants/icons';

import styles from './ProfileScreen.style';

export const ProfileScreen = () => {
  const { user, logout } = useContext(ExchangeContext);
  const { navigate } = useNavigation();
  const [editable, setEditable] = useState(false);

  const id = user && user.id ? user.id : '';
  const username = user && user.username ? user.username : '';
  const email = user && user.email ? user.email : '';
  const birthday = user && user.birthday ? dateFormat(user.birthday) : '';
  const createdAt = user && user.createdAt ? dateFormat(user.createdAt) : '';
  const updatedAt = user && user.updatedAt ? dateFormat(user.updatedAt) : '';
  const gender = user && user.gender ? user.gender : '';
  const phone = user && user.phone ? user.phone : '';
  const university = user && user.university ? user.university : '';
  const city = user && user.city ? user.city : '';

  const usernameAbbreviation = username
    .split(' ')
    .map((word, index) => (index < 3 ? word[0] : null))
    .join('');

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Kullanıcı adı alanı zorunludur'),
    email: Yup.string(),
    birthday: Yup.string(),
    updatedAt: Yup.string(),
    gender: Yup.string(),
    phone: Yup.string(),
    university: Yup.string(),
    city: Yup.string(),
  });

  const formik = useFormik({
    initialValues: { username, email, birthday, gender, updatedAt, phone, university, city },
    validationSchema,
    onSubmit: (values) => {
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
    formik.setFieldValue('username', username);
    formik.setFieldValue('email', email);
    formik.setFieldValue('birthday', birthday);
    formik.setFieldValue('gender', gender);
    formik.setFieldValue('phone', phone);
    formik.setFieldValue('university', university);
    formik.setFieldValue('city', city);

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
            <TouchableOpacity style={[styles.edit, styles.save]} onPress={formik.handleSubmit}>
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
            <Text style={styles.subtitle}>{createdAt}</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.inputContainer}>
            <CustomTextInput
              name='username'
              leftIcon={<UserIcon size={20} color={formik.touched.username && formik.errors.username && '#d32f2f'} />}
              value={formik.values.username}
              onChangeText={(e) => handleValueChange('username', e)}
              editable={editable}
              error={formik.touched.username && formik.errors.username}
            />
            <CustomTextInput
              name='email'
              leftIcon={<MailIcon size={20} />}
              value={formik.values.email}
              onChangeText={(e) => handleValueChange('email', e)}
              editable={false}
            />
            <CustomTextInput
              name='birthday'
              leftIcon={<BirthdayIcon size={20} />}
              value={formik.values.birthday}
              onChangeText={(e) => handleValueChange('birthday', e)}
              editable={editable}
            />
            <CustomTextInput
              name='gender'
              leftIcon={<SecretIcon size={20} />}
              value={formik.values.gender}
              onChangeText={(e) => handleValueChange('gender', e)}
              editable={editable}
            />
            <CustomTextInput
              name='phone'
              leftIcon={<PhoneIcon size={20} />}
              value={formik.values.phone}
              onChangeText={(e) => handleValueChange('phone', e)}
              editable={editable}
            />
            <CustomTextInput
              name='university'
              leftIcon={<UniversityIcon size={20} />}
              value={formik.values.university}
              onChangeText={(e) => handleValueChange('university', e)}
              editable={editable}
            />
            <CustomTextInput
              name='city'
              leftIcon={<CityIcon size={20} />}
              value={formik.values.city}
              onChangeText={(e) => handleValueChange('city', e)}
              editable={editable}
            />
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.exit} onPress={onPressToLogout}>
            <LogoutIcon size={24} color='#d32f2f' />
            <Text style={styles.exitTxt}>Çıkış</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};
