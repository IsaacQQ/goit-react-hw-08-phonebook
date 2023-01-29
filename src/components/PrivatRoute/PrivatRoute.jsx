import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../shared/hooks/useAuth';

export default function PrivatRoute() {
  const isLogin = useAuth();

  if (!isLogin) {
    return <Navigate to="/register"/>;
  }
  return <Outlet />;
}
