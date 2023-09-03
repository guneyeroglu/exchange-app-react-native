import { apiURL } from '../constants/variables/urls';
import { tokenApi } from './config';

export const updateUserInformationService = async (data = {}, id) => {
  try {
    const response = await tokenApi.put(`${apiURL.withToken.userInformation}${id}`, data);

    return { data: response.data, status: true };
  } catch (error) {
    return { data: [], status: false, message: error };
  }
};
