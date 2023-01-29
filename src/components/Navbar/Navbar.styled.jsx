import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: 0, 5px;
  font-weight: 500;
  :hover {
    font-weight: 700;
    color: #191970;
  }
  &.active {
    font-weight: 700;
    color: #191970;
  }
`;

export const NavigationMenu = styled(NavLink)`
  text-decoration: none;
  color: white;
  text-transform: uppercase;
`;

export const NavigationItem = styled.ul`
  list-style-type: none;
`;
