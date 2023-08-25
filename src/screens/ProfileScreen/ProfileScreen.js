import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';

import { Layout } from '../../components/Layout';
import { CustomTextInput, CustomTextInputMask } from '../../components/CustomTextInput';
import { CustomDatePicker } from '../../components/CustomDatePicker';
import { CustomModal } from '../../components/CustomModal';

import { colors } from '../../global/constants/variables/colors';
import {
  CloseIcon,
  EditIcon,
  LogoutIcon,
  SaveIcon,
  MailIcon,
  UserIcon,
  CityIcon,
  UniversityIcon,
  PhoneIcon,
  BirthdayIcon,
  GenderIcon,
  CalendarIcon,
} from '../../global/constants/icons';

import { ExchangeContext } from '../../store';

import styles from './ProfileScreen.style';

export const ProfileScreen = ({ route }) => {
  const { user, logout, updateUserInformation } = useContext(ExchangeContext);
  const { navigate } = useNavigation();
  const [datePickerVisibility, setDatePickerVisibility] = useState(false);
  const [editable, setEditable] = useState(false);
  const [saveModal, setSaveModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const toast = useToast();
  const isFocus = useIsFocused();

  const id = user && user.id ? user.id : '';
  const username = user && user.username ? user.username : '';
  const email = user && user.email ? user.email : '';
  const birthday = user && user.birthday ? user.birthday : new Date();
  const createdAt = user && user.createdAt ? moment(user.createdAt).format('DD.MM.YYYY') : '';
  const updatedAt = user && user.updatedAt ? moment(user.updatedAt).format('DD.MM.YYYY') : '';
  const gender = user && user.gender ? user.gender : '3';
  const phone = user && user.phone ? user.phone : '';
  const university = user && user.university ? user.university : '';
  const city = user && user.city ? user.city : '';

  const enumGender = {
    1: 'Erkek',
    2: 'Kadın',
    3: 'Belirtmek İstemiyorum',
  };

  const usernameAbbreviation = username
    .split(' ')
    .map((word, index) => (index < 3 ? word[0] : null))
    .join('');

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Kullanıcı adı alanı zorunludur'),
    birthday: Yup.date().typeError('Lütfen doğru formatta bir tarih giriniz.'),
    gender: Yup.string(),
    phone: Yup.string(),
    university: Yup.string(),
    city: Yup.string(),
  });

  const formik = useFormik({
    initialValues: { username, birthday, gender, phone, university, city },
    validationSchema,
    onSubmit: () => setSaveModal(true),
  });

  const handleValueChange = (state, value) => {
    formik.setFieldValue(state, value);
  };

  const onPressToEdit = () => {
    setEditable((preValue) => !preValue);
  };

  const onPressToCancel = () => {
    formik.setFieldValue('username', username);
    formik.setFieldValue('birthday', birthday);
    formik.setFieldValue('gender', gender);
    formik.setFieldValue('phone', phone);
    formik.setFieldValue('university', university);
    formik.setFieldValue('city', city);

    setEditable(false);
    setDatePickerVisibility(false);
  };

  const handleSave = async () => {
    const response = await updateUserInformation(formik.values, id);

    setDatePickerVisibility(false);
    setSaveModal(false);

    if (response.status) {
      toast.show(`Profil bilgileriniz güncellendi.`);
      toast.show(`Son güncellenme tarihi: ${updatedAt}`);
      setEditable(false);
    } else {
      toast.show('Profil bilgileriniz güncellenirken bir hata oluştu.');
    }
  };

  const onPressToLogout = () => {
    logout(navigate);
    setLogoutModal(false);
    toast.show('Başarıyla çıkış yapıldı.');
  };

  const onChangeDatePicker = (event) => {
    formik.setFieldValue('birthday', moment(event).toISOString());
    setDatePickerVisibility(false);
  };

  useEffect(() => {
    if (route.params && route.params.editable && isFocus) {
      setEditable(route.params.editable);
    } else {
      setEditable(false);
    }
  }, [route.params, route.params?.editable, isFocus]);

  return (
    <Layout style={styles.layoutContainer}>
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
              <CloseIcon size={24} />
              <Text style={styles.editTxt}>Vazgeç</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.edit, styles.save]} onPress={formik.handleSubmit}>
              <SaveIcon size={24} color={colors.white} />
              <Text style={styles.saveTxt}>Kaydet</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <KeyboardAvoidingView style={styles.keyboard} behavior='padding'>
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
                key={username}
                name='username'
                autoCapitalize='none'
                placeholder='kullanıcı adı'
                placeholderTextColor={formik.touched.username && formik.errors.username ? colors.error_75 : colors.black_75}
                leftIcon={<UserIcon size={20} color={formik.touched.username && formik.errors.username && colors.error} />}
                value={formik.values.username}
                onChangeText={(e) => handleValueChange('username', e)}
                editable={editable}
                error={formik.touched.username && formik.errors.username}
              />
              <CustomTextInput
                name='email'
                autoCapitalize='none'
                leftIcon={<MailIcon size={20} />}
                value={email}
                editable={false}
                info={editable ? 'Mail adresi değiştirilemez.' : null}
              />
              {!datePickerVisibility && (
                <CustomTextInput
                  name='birthday'
                  autoCapitalize='none'
                  placeholder='doğum günü'
                  placeholderTextColor={formik.touched.birthday && formik.errors.birthday ? colors.error_75 : colors.black_75}
                  leftIcon={<BirthdayIcon size={20} color={formik.touched.birthday && formik.errors.birthday && colors.error} />}
                  rightIcon={
                    editable ? (
                      <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
                        <CalendarIcon size={20} color={formik.touched.birthday && formik.errors.birthday && colors.error} />
                      </TouchableOpacity>
                    ) : null
                  }
                  value={moment(formik.values.birthday).format('DD.MM.YYYY')}
                  onChangeText={(e) => handleValueChange('birthday', e)}
                  editable={false}
                  error={formik.touched.birthday && formik.errors.birthday}
                />
              )}
              {!editable ? (
                <CustomTextInput
                  name='gender'
                  autoCapitalize='none'
                  placeholder='cinsiyet'
                  placeholderTextColor={formik.touched.gender && formik.errors.gender ? colors.error_75 : colors.black_75}
                  leftIcon={<GenderIcon size={20} />}
                  value={enumGender[formik.values.gender]}
                  editable={false}
                />
              ) : (
                <View style={styles.genderContainer}>
                  <TouchableOpacity
                    style={[styles.genderButton, formik.values.gender === '1' ? styles.genderButtonActive : {}]}
                    onPress={() => handleValueChange('gender', '1')}
                  >
                    <Text style={styles.genderTxt}>Erkek</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.genderButton, formik.values.gender === '2' ? styles.genderButtonActive : {}]}
                    onPress={() => handleValueChange('gender', '2')}
                  >
                    <Text style={styles.genderTxt}>Kadın</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.genderButton, formik.values.gender === '3' ? styles.genderButtonActive : {}]}
                    onPress={() => handleValueChange('gender', '3')}
                  >
                    <Text style={styles.genderTxt}>Belirtmek İstemiyorum</Text>
                  </TouchableOpacity>
                </View>
              )}
              <CustomTextInputMask
                mask={'0999 999 9999'}
                name='phone'
                autoCapitalize='none'
                placeholder='telefon numarası'
                placeholderTextColor={formik.touched.phone && formik.errors.phone ? colors.error_75 : colors.black_75}
                leftIcon={<PhoneIcon size={20} />}
                value={formik.values.phone}
                onChangeText={(e) => handleValueChange('phone', e)}
                editable={editable}
                inputMode='numeric'
                keyboardType='numeric'
              />
              <CustomTextInput
                name='university'
                autoCapitalize='none'
                placeholder='üniversite'
                placeholderTextColor={formik.touched.university && formik.errors.university ? colors.error_75 : colors.black_75}
                leftIcon={<UniversityIcon size={20} />}
                value={formik.values.university}
                onChangeText={(e) => handleValueChange('university', e)}
                editable={editable}
              />
              <CustomTextInput
                name='city'
                autoCapitalize='none'
                leftIcon={<CityIcon size={20} />}
                value={formik.values.city}
                onChangeText={(e) => handleValueChange('city', e)}
                editable={editable}
              />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.exit} onPress={() => setLogoutModal(true)}>
          <LogoutIcon size={24} color={colors.error} />
          <Text style={styles.exitTxt}>Çıkış</Text>
        </TouchableOpacity>
      </View>
      {editable && datePickerVisibility && (
        <CustomDatePicker
          value={new Date(birthday)}
          display='spinner'
          onPressToCancel={() => setDatePickerVisibility(false)}
          onPressToSubmit={onChangeDatePicker}
        />
      )}
      <CustomModal
        open={saveModal}
        title={'Profil Bilgisini Güncelle'}
        subtitle={'Değişiklikleri kaydetmek istediğinizden emin misiniz?'}
        onCancelButton={{ text: 'İptal', onPress: () => setSaveModal(false) }}
        onConfirmButton={{ text: 'Kaydet', onPress: handleSave }}
      />
      <CustomModal
        open={logoutModal}
        title={'Çıkış Yap'}
        subtitle={'Çıkış yapmak istediğinizden emin misiniz?'}
        onCancelButton={{ text: 'İptal', onPress: () => setLogoutModal(false) }}
        onConfirmButton={{ text: 'Çıkış Yap', onPress: onPressToLogout }}
      />
    </Layout>
  );
};
