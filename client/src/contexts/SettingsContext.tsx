import _ from 'lodash';
import { createContext, useState, ReactNode } from 'react';
import { storeSettings } from 'src/utils/settings';

const SettingsContext = createContext({
  settings: {
    token: '',
    email : '',
    isLoggedIn: false,
  },
  setSettings: (settings: object) => {},
});

const defaultSettings = {
  token: '',
  email: '',
  isLoggedIn: false,
};

export function SettingsProvider({
  settings,
  children,
}: {
  settings: {
    token: string;
    email: string;
    isLoggedIn: boolean;
  };
  children: ReactNode;
}) {
  const [currentSettings, setCurrentSettings] = useState(
    settings || defaultSettings
  );

  const handleSaveSettings = (updatedSettings = {}) => {
    const mergedSettings = _.merge({}, currentSettings, updatedSettings);

    setCurrentSettings(mergedSettings);
    storeSettings(mergedSettings);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        setSettings: handleSaveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
