import { useRoutes } from 'react-router-dom';
import { GlobalStyle } from './components';
import useSettings from './hooks/useSettings';
import routes from './routes';

const App = () => {
  const { settings } = useSettings();
  const routing = useRoutes(routes(settings.isLoggedIn));

  return (
    <>
      <GlobalStyle />
      {routing}
    </>
  );
};

export default App;
