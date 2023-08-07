import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { baseURL } from '../../constants/urls';

export const tokenApi = axios.create({ baseURL });
export const noTokenApi = axios.create({ baseURL });

tokenApi.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('jwt');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

tokenApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      await AsyncStorage.removeItem('jwt');
      tokenApi.defaults.headers.common['Authorization'] = null;
    }

    return Promise.reject(error);
  },
);
