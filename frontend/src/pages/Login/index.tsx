import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Tab, Toast } from 'src/components';
import { AuthUser } from 'src/interfaces/auth';
import { authUser } from 'src/services/auth';
import { LoginSchema } from 'src/validators/schemas';
import FormContainer from 'src/constants/form-container';
import useSettings from 'src/hooks/useSettings';

import { LoginForm } from './components/LoginForm';

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setSettings } = useSettings();

  const tryToLogin = async (values: AuthUser) => {
    const { data } = await authUser({
      email: values.email,
      password: values.password,
    });

    try {
      if (data && data.token) {
        setSettings({
          token: data.token,
          isLoggedIn: true,
        });

        navigate('/app/dashboard');
      } else {
        toast.warning(t('warning.credentials'));
      }

    } catch (error) {
      toast.error(t('error.login'));
    }
  };

  return (
    <Tab title={t('tabs.login')} data-testid="login">
      <Formik
        initialValues={FormContainer.INITIAL_VALUES.FormLogin}
        onSubmit={tryToLogin}
        validationSchema={LoginSchema()}
        component={LoginForm}
      />
      <Toast />
    </Tab>
  );
};

export default Login;
