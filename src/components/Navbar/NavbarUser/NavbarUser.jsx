import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/auth/auth-operations';
import { getUser } from '../../../redux/auth/auth-selectors';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';

export default function NavbarUser() {
  const dispatch = useDispatch();
  const { email, name } = useSelector(getUser);

  const stringAvatar = ({ name }) => {
    return {
      sx: {
        bgcolor: '#0d47a1',
      },
    };
  };

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <Stack
        spacing={3}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
      >
        <Stack direction="row" spacing={1}>
          <Typography variant="subtitle1">You logined like</Typography>
          <Typography variant="subtitle1" color="#191970">
            {' '}
            {email}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Avatar {...stringAvatar({ name })} />
          <Button onClick={onLogout} variant="text" color="inherit">
            Logout
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}
