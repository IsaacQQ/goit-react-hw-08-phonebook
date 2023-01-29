import Loader from 'components/Loader/Loader';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './components/PrivatRoute/PrivatRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const MyContactsPage = lazy(() =>
  import('./pages/MyContactsPage/MyContactsPage')
);
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<MyContactsPage />} />
        </Route>
        <Route path="" element={<NotFoundPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
