import { tokenApi } from './config';
import { apiURL } from '../constants/variables/urls';

export const getExchangeRate = async () => {
  try {
    const response = await tokenApi.get(apiURL.withToken.exchange);

    return { data: response.data, status: true };
  } catch (error) {
    console.error('get is not working!', error);
    return { data: [], status: false };
  }
};

export const getExchangeRateDetail = async (id) => {
  try {
    const response = await tokenApi.get(`${apiURL.withToken.exchangeDetail}${id}`);

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
