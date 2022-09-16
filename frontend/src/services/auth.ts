import api from 'src/factory/api';
import { AuthUser } from 'src/interfaces/auth';

const authUser = async ({ email, password }: AuthUser) => {
  try {
    const { data } = await api.post('/v1/users/auth', { email, password });

    return data;
  } catch (error) {
    return error;
  }
};

export { authUser };
