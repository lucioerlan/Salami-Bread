import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => ({
  useRoutes: () => jest.fn(),
}));

describe('App', () => {
  let rtlContainer: HTMLElement;

  beforeEach(() => {
    const { container } = render(<App />);
    rtlContainer = container;
  });

  it('should matches with snapshot', () => {
    expect(rtlContainer.firstChild).toMatchSnapshot();
  });
});
