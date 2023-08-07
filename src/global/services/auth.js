import AsyncStorage from '@react-native-async-storage/async-storage';

import { apiURL } from '../constants/urls';
import { noTokenApi, tokenApi } from './config';

export const loginService = async (data) => {
  const response = await noTokenApi.post(apiURL.withoutToken.login, data);

  if (response.status === 200) {
    const jwt = response.data.jwt;
    tokenApi.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
    AsyncStorage.setItem('jwt', jwt);
    AsyncStorage.setItem('user', JSON.stringify(response.data.user));

    return { data: response.data, status: true };
  }

  return { data: [], status: false };
};

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
    console.error('==>', error);
  }

  return { data: [], status: false };
};
