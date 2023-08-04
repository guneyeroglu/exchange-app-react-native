import axios from 'axios';

const URL = 'https://exchange.akbolat.net/api/exchanges';

export const getExchangeRate = async () => {
  const response = await axios.get(URL);

  if (response.status === 200) {
    return response.data;
  }

  return [];
};

export const getExchangeRateDetail = async (symbol) => {
  const response = await axios.get(`${URL}/${symbol}`);

  if (response.status === 200) {
    return response.data;
  }

  return [];
};
