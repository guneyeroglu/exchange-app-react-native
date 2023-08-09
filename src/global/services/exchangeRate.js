import { tokenApi } from './config';

export const getExchangeRate = async (url) => {
  try {
    const response = await tokenApi(url);

    return { data: response.data, status: true };
  } catch (error) {
    console.error('get is not working!', error);

    return { data: [], status: false };
  }
};

export const getExchangeRateDetail = async (url) => {
  try {
    const response = await tokenApi(url);

    return { data: response.data, status: true };
  } catch (error) {
    console.error('get is not working!', error);

    return { data: [], status: false, message: error };
  }
};

export const postExchangeRate = async (url, data = {}) => {
  try {
    const response = await tokenApi.post(url, data);

    return { data: response.data, status: true };
  } catch (error) {
    console.error('post is not working!', error);

    return { data: [], status: false, message: error };
  }
};

export const putUserInformation = async (url, data = {}) => {
  try {
    const response = await tokenApi.put(url, data);

    return { data: response.data, status: true };
  } catch (error) {
    console.error('put is not working!', error);

    return { data: [], status: false, message: error };
  }
};
