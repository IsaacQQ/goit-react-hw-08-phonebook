import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import useAuth from '../../shared/hooks/useAuth';
import { NavigationLink } from './Navbar.styled';

const Navbar = () => {
  const isLogin = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="inherit"
            noWrap
            sx={{
              mr: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 800,
              letterSpacing: '.3rem',
            }}
          >
            <NavigationLink to="goit-react-hw-08-phonebook/home">
              <HomeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 10 }} />
            </NavigationLink>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {isLogin && <NavbarMenu />}
          </Typography>
          {isLogin ? (
            <NavbarUser color="inherit" />
          ) : (
            <NavbarAuth color="inherit" />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
