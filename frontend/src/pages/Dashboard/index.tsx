import { useTranslation } from 'react-i18next';
import { Tab, VisitorTime } from 'src/app/components';
import useSettings from 'src/app/hooks/useSettings';

import { DashboardMenu } from './components/DashboardMenu';
import { DashboardContainer, Title } from './styled';

const Dashboard = () => {
  const { t } = useTranslation();
  const { settings } = useSettings();
  const user = settings?.email;

  return (
    <Tab title={t('tabs.dashboard')} data-testid="dashboard">
      <DashboardContainer>
        <Title>{VisitorTime(user)}</Title>

        <DashboardMenu />
      </DashboardContainer>
    </Tab>
  );
};

export default Dashboard;
