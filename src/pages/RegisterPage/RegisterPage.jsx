import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import RegisterForm from '../../components/RegisterForm/RegisterForm';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const onRegister = data => {
    dispatch(signup(data));
  };

  return (
    <Box sx={{ flexGrow: 1 }} marginLeft={20}>
      <Typography variant="h3">Register Page</Typography>
      <Typography variant="body2">Enter your data for Register Page</Typography>
      <RegisterForm onSubmit={onRegister} />
    </Box>
  );
}
