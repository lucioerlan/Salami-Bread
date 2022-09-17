import axios, { AxiosRequestConfig } from 'axios';
import { refreshToken } from 'src/app/services/auth';
import { restoreSettings, storeSettings } from 'src/app/utils/settings';

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

api.interceptors.response.use((response) => response,
  async(error) => {

    if (error.response.status === 401) {
      const settings = await restoreSettings();
      const data = await refreshToken({ access_token: settings.token });

      if (data) {
        const newSettings = {
          token: data.token,
          email: settings.email,
          isLoggedIn: true
        };

        storeSettings(newSettings);
        window.location.reload();
      }
    }

    return Promise.reject(error);
  }
);

export default api;
