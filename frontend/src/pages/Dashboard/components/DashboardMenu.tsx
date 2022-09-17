import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ImageButton } from 'src/app/components';

import { Box } from '../styled';

export const DashboardMenu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const menus = [
    {
      label: t('menus.categories'),
      color: '#263238',
      onClick: () => navigate('/app/categories'),
    },
    {
      label: t('menus.products'),
      color: '#263238',
      onClick: () => navigate('/app/products'),
    },
  ];

  const MenuWrapper = () => (
    <Box>
      {menus.map((menu) => (
        <ImageButton
          key={menu.label}
          label={menu.label}
          color={menu.color}
          onClick={menu.onClick}
        />
      ))}
    </Box>
  );

  return <MenuWrapper />;
};
