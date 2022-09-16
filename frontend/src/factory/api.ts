import axios, { AxiosRequestConfig } from 'axios';
import { restoreSettings } from 'src/utils/settings';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const settings = restoreSettings();

  if (settings && settings.token) {
    config.headers = {
      Authorization: `Bearer ${settings.token}`,
    };
  }

  return config;
});

export default api;
