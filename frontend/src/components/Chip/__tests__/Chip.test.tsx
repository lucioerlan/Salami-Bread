import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import Chip from '..';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('Chip component', () => {
  beforeEach(() => {
    render(<Chip link="/app/dashboard" label="Back" data-testid="chip" />);
  });

  it('should render Chip label', () => {
    expect(screen.getByText('Back')).toBeDefined();
  });
});
