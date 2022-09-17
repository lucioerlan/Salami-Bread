import { useContext } from 'react';
import SettingsContext from 'src/app/contexts/SettingsContext';

export default function useSettings() {
  return useContext(SettingsContext);
}
