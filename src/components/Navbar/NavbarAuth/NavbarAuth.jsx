import { NavigationLink } from '../Navbar.styled';

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

export default function NavbarAuth() {
  return (
    <div>
      <Stack
        spacing={3}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
      >
        <NavigationLink to="goit-react-hw-08-phonebook/register">Register</NavigationLink>
        <NavigationLink to="goit-react-hw-08-phonebook/login">Log in</NavigationLink>
      </Stack>
    </div>
  );
}
