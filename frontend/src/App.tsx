import { useRoutes } from 'react-router-dom';
import routes from './routes';

const App = () => {
  const routing = useRoutes(routes('dsd'));

  return (
    <div className="App" data-testid="app">
      {routing}
    </div>
  );
};

export default App;
