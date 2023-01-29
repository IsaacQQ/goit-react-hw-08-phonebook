import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../shared/hooks/useAuth';

export default function PrivatRoute() {
  const isLogin = useAuth();

  if (!isLogin) {
    return <Navigate to="goit-react-hw-08-phonebook/register"/>;
  }
  return <Outlet />;
}
