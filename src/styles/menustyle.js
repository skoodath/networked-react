import styled from 'styled-components';
import { Link } from 'react-scroll';

/* Menu Style */

export const Menu = styled.nav`
  color: #272727;
  align-items: center;
  margin: 0 0 0 auto;
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

/* Menu Item Style */


export const MenuLinks = styled(Link)`
    position: relative;
    margin: 0 1rem 0 0;
    cursor: pointer;
    color: #272727;
    text-transform: uppercase;
`;

