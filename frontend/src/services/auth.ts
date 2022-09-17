import api from 'src/app/factory/api';
import { AuthUser } from 'src/app/interfaces/auth';

const authUser = async ({ email, password }: AuthUser) => {
  try {
    const { data } = await api.post('users/auth', { email, password });

    return data;
  } catch (error) {
    return error;
  }
};

const refreshToken = async ({ access_token }: { access_token: string }) => {
  try {
    const { data } = await api.post('users/auth/refresh', { access_token });

    return data;
  } catch (error) {
    return error;
  }
};

export { authUser, refreshToken };
