import { Outlet } from 'react-router-dom';
import Header from 'src/layouts/Header';

const DashboardLayout = () => (
  <>
    <Outlet />
    <Header />
  </>
);

export default DashboardLayout;
