import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { current } from './redux/auth/auth-operations';
import { getLoadingUserStatus } from './redux/auth/auth-selectors';

import Navbar from './components/Navbar/Navbar';
import UserRoutes from './userRoutes';

import Loader from 'components/Loader/Loader';

function App() {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(getLoadingUserStatus);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div>
      {isLoadingUser ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <UserRoutes />
        </>
      )}
    </div>
  );
}

export default App;
