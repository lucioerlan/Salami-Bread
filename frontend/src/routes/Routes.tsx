import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import LoginView from 'src/pages/Login';
import NotFoundView from 'src/pages/NotFound';

const routes = (isLoggedIn: string) => [
  {
    path: '/app',
    element: isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />,
    children: [
      {
        path: 'dashboard',
        element: isLoggedIn ? <h1>tessst</h1> : <Navigate to="/login" />,
      },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
