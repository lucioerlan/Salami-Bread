import { useTranslation } from 'react-i18next';
import { Tab } from 'src/components';

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <Tab title={t('tabs.dashboard')}>
      <div>Dashboard</div>
    </Tab>
  );
};

export default Dashboard;
