import { useTranslation } from 'react-i18next';
import { Tab, Chip } from 'src/components';
import { NotfoundContainer, Title, Subtitle } from './styled';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Tab title={t('tabs.notFound')} data-testid="not-found">
      <NotfoundContainer>
        <Chip link="/app/dashboard" label={t('chip.back')} />
        <Title>{t('titles.notFoundPage')}</Title>
        <Subtitle>{t('subtitles.notFoundPage')}</Subtitle>
      </NotfoundContainer>
    </Tab>
  );
};
export default NotFound;
