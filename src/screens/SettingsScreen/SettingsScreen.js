import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import React, { useContext, useState } from 'react';
import { useToast } from 'react-native-toast-notifications';

import { Layout } from '../../components/Layout';
import { List } from '../../components/List';
import { CustomModal } from '../../components/CustomModal';

import { enumScreens } from '../../global/constants/variables/screens';
import { colors } from '../../global/constants/variables/colors';
import { LogoutIcon } from '../../global/constants/icons';

import { ExchangeContext } from '../../store';

import styles from './SettingsScreen.style';

export const SettingsScreen = () => {
  const { navigate } = useNavigation();
  const [logoutModal, setLogoutModal] = useState(false);
  const [developmentModal, setDevelopmentModal] = useState(false);
  const [otherModal, setOtherModal] = useState(false);
  const { logout } = useContext(ExchangeContext);
  const toast = useToast();

  const list = [
    {
      title: 'Hesap',
      contents: [
        { text: 'Profilimi Düzenle', onPress: () => navigate(enumScreens.PROFILE_SCREEN, { editable: true }) },
        { text: 'Hesabımı Gör', onPress: () => navigate(enumScreens.PROFILE_SCREEN) },
        { text: 'Hesabımı Sil', onPress: () => setOtherModal(true) },
      ],
    },
    {
      title: 'Destek',
      contents: [
        { text: 'İletişime Geç', onPress: () => setOtherModal(true) },
        { text: 'Bir Hata Raporla', onPress: () => setOtherModal(true) },
      ],
    },
    {
      title: 'Yasal',
      contents: [
        { text: 'Gizlilik Sözleşmesi', onPress: () => setOtherModal(true) },
        { text: 'Aydınlatma Metni', onPress: () => setOtherModal(true) },
        { text: 'Şartlar ve Koşullar', onPress: () => setOtherModal(true) },
      ],
    },
    {
      title: 'Geliştirici',
      contents: [{ text: 'Geliştrici Bilgileri', onPress: () => setDevelopmentModal(true) }],
    },
  ];

  const onPressToLogout = () => {
    logout(navigate);
    setLogoutModal(false);
    toast.show('Başarıyla çıkış yapıldı.');
  };

  const openWebLink = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      Linking.openURL(url);
    } else {
      toast.show(`Bu URL desteklenmiyor: ${url}`);
    }
  };

  return (
    <Layout style={styles.layout}>
      <View style={styles.container}>
        <ScrollView style={styles.listContainer}>
          {list.map((listItem) => (
            <View key={listItem.title} style={styles.list}>
              <List title={listItem.title} contents={listItem.contents} />
            </View>
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.exit} onPress={() => setLogoutModal(true)}>
            <LogoutIcon size={24} color={colors.error} />
            <Text style={styles.exitTxt}>Çıkış</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CustomModal
        open={logoutModal}
        title={'Çıkış Yap'}
        subtitle={'Çıkış yapmak istediğinizden emin misiniz?'}
        onCancelButton={{ text: 'İptal', onPress: () => setLogoutModal(false) }}
        onConfirmButton={{ text: 'Çıkış Yap', onPress: onPressToLogout }}
      />
      <CustomModal
        open={developmentModal}
        title={'Geliştirici Bilgileri'}
        subtitle={'Bu proje Güney Eroğlu tarafından geliştirilmiştir.'}
        showCloseIcon
        onClose={() => setDevelopmentModal(false)}
        onCancelButton={{
          text: 'GitHub',
          onPress: () => openWebLink('https://github.com/guneyeroglu'),
          buttonStyles: styles.equalButton,
          textStyles: styles.equalButtonText,
        }}
        onConfirmButton={{
          text: 'LinkedIn',
          onPress: () => openWebLink('https://www.linkedin.com/in/guneyeroglu/'),
          buttonStyles: styles.equalButton,
          textStyles: styles.equalButtonText,
        }}
      />
      <CustomModal
        open={otherModal}
        title={'Geliştirme Sürecinde'}
        subtitle={'Gerekli servisler henüz hazır olmadığı için bu özellik şu anda kullanılamıyor.'}
        onConfirmButton={{ text: 'Tamam', onPress: () => setOtherModal(false) }}
        onClose={() => setOtherModal(false)}
      />
    </Layout>
  );
};
