import { Navigate } from 'react-router-dom';

const routes = (isLoggedIn = 'test') => [
  {
    path: '/app',
    element: isLoggedIn ? <h1>test</h1> : <Navigate to="/login" />,
    children: [
      {
        path: 'dashboard',
        element: isLoggedIn ? <h1>test</h1> : <Navigate to="/login" />,
      },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
  {
    path: '/',
    element: <h1>test</h1>,
    children: [
      { path: 'login', element: <h1>test</h1> },
      { path: '404', element: <h1>test</h1> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
