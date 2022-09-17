import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { dataMocks } from 'src/app/__mocks__/dataMocks';
import Categories from 'src/app/pages/Categories';

jest.mock('react-query', () => ({
  useQuery: () => ({
    isLoading: false,
    data: [dataMocks],
  }),
}));

jest.mock('src/app/store/shared', () => ({
  useAppDispatch: () => jest.fn(),
  useAppSelector: () => [dataMocks],
}));

describe('Categories component', () => {
  beforeEach(() => {
    render(<Categories />);
  });

  it('should render the Categories component', () => {
    expect(screen.getByTestId('categories')).toBeInTheDocument();
  });

  it('should render the Categories component with the correct text', () => {
    expect(screen.getByTestId('categories')).toHaveTextContent('tabs.categoriesAwesome');
  });
});
