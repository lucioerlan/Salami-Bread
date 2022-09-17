import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { dataMocks } from 'src/__mocks__/dataMocks';
import Categories from 'src/pages/Categories';

jest.mock('react-query', () => ({
  useQuery: () => ({
    isLoading: false,
    data: [dataMocks],
  }),
}));

jest.mock('src/store/shared', () => ({
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
