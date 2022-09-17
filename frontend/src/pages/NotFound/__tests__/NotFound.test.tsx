import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import NotFoundView from 'src/app/pages/NotFound';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('NotFoundView', () => {
  beforeEach(() => {
    render(<NotFoundView />);
  });

  it('should render NotFoundView', () => {
    expect(screen.getByTestId('not-found')).toBeDefined();
  });

  it('should render NotFoundView title', () => {
    expect(screen.getByText('titles.notFoundPage')).toBeDefined();
  });
});
