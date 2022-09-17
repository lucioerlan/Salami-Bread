import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Dashboard from 'src/app/pages/Dashboard';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

jest.mock('src/app/hooks/useSettings', () => ({
  __esModule: true,
  default: () => ({
    settings: {
      email: 'admin@user.com',
    },
  }),
}));

describe('Dashboard component', () => {
  beforeEach(() => {
    render(<Dashboard />);
  });

  it('should render the Dashboard component', () => {
    expect(screen.getByTestId('dashboard')).toBeInTheDocument();
  });
});
