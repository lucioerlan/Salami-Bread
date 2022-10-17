import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import CategoriesView from 'src/pages/Categories';
import DashboardView from 'src/pages/Dashboard';
import LoginView from 'src/pages/Login';
import NotFoundView from 'src/pages/NotFound';
import ProductsView from 'src/pages/Products';

const routes = (isLoggedIn: boolean) => [
  {
    path: '/app',
    element: isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />,
    children: [
      {
        path: 'dashboard',
        element: isLoggedIn ? <DashboardView /> : <Navigate to="/login" />,
      },
      {
        path: 'categories',
        element: isLoggedIn ? <CategoriesView /> : <Navigate to="/login" />,
      },

      {
        path: 'products',
        element: isLoggedIn ? <ProductsView /> : <Navigate to="/login" />,
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
