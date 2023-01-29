import { Link } from 'react-router-dom';
import useAuth from 'shared/hooks/useAuth';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const HomePage = () => {
  const isLogin = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }} textAlign="center">
      <Typography
        variant="h3"
        justifyContent="center"
        sx={{
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: '.1rem',
        }}
      >
        This is you phonebook!
      </Typography>
      <Typography variant="body1">
        Here you can record and store contacts your friends....{' '}
      </Typography>
      <Typography variant="body2">Now you can go to page ....</Typography>
      <Stack
        justifyContent="center"
        direction="row"
        spacing={3}
        variant="body2"
      >
        {!isLogin ? (
          <>
            <Link to="goit-react-hw-08-phonebook/register">To register page</Link>
            <span>or</span>
            <Link to="goit-react-hw-08-phonebook/login">To login page</Link>
          </>
        ) : (
          <Link to="goit-react-hw-08-phonebook/contacts">My contacts</Link>
        )}
      </Stack>
    </Box>
  );
};

export default HomePage;
