import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { dataMocks } from 'src/__mocks__/dataMocks';

import Gallery from '..';

jest.mock('src/store/shared', () => ({
  useAppSelector: () => [dataMocks],
}));

describe('Card component', () => {
  beforeEach(() => {
    render(<Gallery data-testid="Gallery" />);
  });

  it('should render the Gallery component', () => {
    expect(screen.getByTestId('Gallery')).toBeInTheDocument();
  });

  it('should render the Gallery component with the correct text', () => {
    expect(screen.getByTestId('Gallery')).toHaveTextContent('Awesome category');
  });
});
