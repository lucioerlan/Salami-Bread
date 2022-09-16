import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SettingsProvider } from 'src/contexts/SettingsContext';
import { restoreSettings } from 'src/utils/settings';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './translate'; // i18n

const settings = restoreSettings();
const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
  <BrowserRouter>
    <SettingsProvider settings={settings}>
      <App />
    </SettingsProvider>
  </BrowserRouter>
);

reportWebVitals();
