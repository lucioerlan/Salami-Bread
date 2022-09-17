import { useTranslation } from 'react-i18next';
import { Tab } from 'src/app/components';

const Products = () => {
  const { t } = useTranslation();

  return (
    <Tab title={t('tabs.products')} data-testid="products">
      <>Products</>
    </Tab>
  );
};

export default Products;
