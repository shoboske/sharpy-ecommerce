import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
// import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Inventory';
// import Blog from './pages/Blog';
// import User from './pages/User';
import Order from './pages/Order';
import NotFound from './pages/Page404';
import EmptyPageApp from './pages/EmptyPageApp';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/home" replace /> },
        { path: 'home', element: <DashboardApp /> },
        { path: 'orders', element: <Order /> },
        { path: 'inventory', element: <Products /> },
        // { path: 'user', element: <User /> },
        // { path: 'blog', element: <Blog /> }
        { path: '*', element: <EmptyPageApp /> }
      ]
    },
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <EmptyPageApp /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
