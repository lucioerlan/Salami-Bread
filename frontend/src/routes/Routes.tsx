import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/app/layouts/DashboardLayout';
import MainLayout from 'src/app/layouts/MainLayout';
import CategoriesView from 'src/app/pages/Categories';
import DashboardView from 'src/app/pages/Dashboard';
import LoginView from 'src/app/pages/Login';
import NotFoundView from 'src/app/pages/NotFound';
import ProductsView from 'src/app/pages/Products';

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
