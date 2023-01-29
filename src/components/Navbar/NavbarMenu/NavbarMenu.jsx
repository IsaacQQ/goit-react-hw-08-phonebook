import { NavigationMenu, NavigationItem } from '../Navbar.styled';

import items from './items';

const NavbarMenu = () => {
  const elements = items.map(({ id, to, text }) => (
    <li key={id}>
      <NavigationMenu to={to}>{text}</NavigationMenu>
    </li>
  ));

  return <NavigationItem>{elements}</NavigationItem>;
};

export default NavbarMenu;
