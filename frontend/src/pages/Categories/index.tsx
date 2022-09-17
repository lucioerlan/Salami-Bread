import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { Gallery, Spinner, Tab } from 'src/app/components';
import { getAllCategories } from 'src/app/services/categories';
import { initializeCategories } from 'src/app/store/reducers/categoriesReducer';
import { useAppDispatch } from 'src/app/store/shared';

const Categories = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { isLoading, data } = useQuery('@categories', getAllCategories);

  if (data) {
    dispatch(initializeCategories(data));
  }

  return (
    <Tab title={t('tabs.categories')} data-testid="categories">
      {isLoading ? (
        <Spinner />
      ) : (
        <Gallery categories={`🍇 ${t('tabs.categories')}`} />
      )}
    </Tab>
  );
};

export default Categories;
