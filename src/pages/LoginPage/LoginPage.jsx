import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import LoginForm from 'components/LoginForm/LoginForm';

export default function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(login(data));
  };

  return (
    <Box sx={{ flexGrow: 1 }} marginLeft={20}>
      <Typography variant="h3">Login Page</Typography>
      <Typography variant="body2">Enter your data for Login</Typography>
      <LoginForm onSubmit={onLogin} />
    </Box>
  );
}
