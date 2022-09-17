import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Tab, Toast } from 'src/app/components';
import { AuthUser } from 'src/app/interfaces/auth';
import { authUser } from 'src/app/services/auth';
import { LoginSchema } from 'src/app/validators/schemas';
import FormContainer from 'src/app/constants/form-container';
import useSettings from 'src/app/hooks/useSettings';

import { LoginForm } from './components/LoginForm';

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setSettings } = useSettings();

  const tryToLogin = async (values: AuthUser) => {
    const data = await authUser({
      email: values.email,
      password: values.password,
    });

    try {
      if (data && data.token) {
        setSettings({
          token: data.token,
          email: data.email,
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
        initialValues={
           FormContainer
          .INITIAL_VALUES
          .FormLogin
          }
        onSubmit={tryToLogin}
        validationSchema={LoginSchema()}
        component={LoginForm}
      />
      <Toast />
    </Tab>
  );
};

export default Login;
