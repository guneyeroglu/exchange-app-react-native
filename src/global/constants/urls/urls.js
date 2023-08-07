export const baseURL = 'https://exchange.akbolat.net/api';

export const apiURL = {
  withToken: {
    exchange: '/exchanges',
  },
  withoutToken: {
    login: '/auth/local',
    register: '/auth/local/register',
  },
};
