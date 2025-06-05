import api from '../api';

const baseURL = '/auth';

export const singIn = async (username: string, password: string) => {
  const response = await api.post(`${baseURL}/login`, {
    username,
    password,
  });
  return response.data;
};
