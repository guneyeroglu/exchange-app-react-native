export const baseURL = 'https://exchange.akbolat.net/api';

export const apiURL = {
  withToken: {
    exchange: '/exchanges',
    exchangeDetail: '/exchanges/',
    userInformation: '/users/',
  },
  withoutToken: {
    login: '/auth/local',
    register: '/auth/local/register',
  },
};
