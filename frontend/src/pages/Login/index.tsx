import { useTranslation } from 'react-i18next';
import { Tab } from 'src/components';

const Login = () => {
  const { t } = useTranslation();

  return (
    <Tab title={t('tabs.login')}>
      <div>Login</div>
    </Tab>
  );
};

export default Login;
