import { useContext } from 'react';
import SettingsContext from 'src/contexts/SettingsContext';

export default function useSettings() {
  return useContext(SettingsContext);
}
