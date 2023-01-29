import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../shared/hooks/useAuth';

export default function PublicRoute() {
  const isLogin = useAuth();

  if (isLogin) {
    return <Navigate to="goit-react-hw-08-phonebook/contacts"/>;
  }
  return <Outlet />;
}
