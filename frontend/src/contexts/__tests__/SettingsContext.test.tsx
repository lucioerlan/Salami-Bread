import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { SettingsProvider } from 'src/contexts/SettingsContext';

describe('SettingsContext', () => {
  it('Should render SettingsContext', () => {
    const settings = {
      token: '',
      isLoggedIn: false,
    };

    const { container } = render(
      <SettingsProvider settings={settings}>
        <div>SettingsContext</div>
      </SettingsProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
