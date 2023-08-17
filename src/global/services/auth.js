import AsyncStorage from '@react-native-async-storage/async-storage';

import { apiURL } from '../constants/urls';
import { noTokenApi, tokenApi } from './config';

export const registerService = async (data) => {
  try {
    const response = await noTokenApi.post(apiURL.withoutToken.register, data);

    if (response.status === 200) {
      const jwt = response.data.jwt;

      tokenApi.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
      AsyncStorage.setItem('jwt', jwt);
      AsyncStorage.setItem('user', JSON.stringify(response.data.user));

      return { data: response.data, status: true };
    }
  } catch (error) {
    return { data: [], status: false };
  }
};

export const loginService = async (data) => {
  try {
    const response = await noTokenApi.post(apiURL.withoutToken.login, data);

    if (response.status === 200) {
      const jwt = response.data.jwt;

      tokenApi.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
      AsyncStorage.setItem('jwt', jwt);
      AsyncStorage.setItem('user', JSON.stringify(response.data.user));

      return { data: response.data, status: true };
    }
  } catch (error) {
    return { data: [], status: false, message: error };
  }
};

export const updateUserInformationService = async (data = {}, id) => {
  try {
    const response = await tokenApi.put(`${apiURL.withToken.userInformation}${id}`, data);

    AsyncStorage.setItem('user', JSON.stringify(response.data));

    return { data: response.data, status: true };
  } catch (error) {
    return { data: [], status: false, message: error };
  }
};
