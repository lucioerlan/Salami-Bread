import { Outlet } from 'react-router-dom';
import Header from 'src/app/layouts/Header';

const DashboardLayout = () => (
  <>
    <Outlet />
    <Header />
  </>
);

export default DashboardLayout;
