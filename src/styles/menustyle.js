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
    font-size: 0.9rem;
    border: 2px solid transparent;
    &::after{
        content: '';
        position: absolute;
        width: 0;
        height: 100%;
      }
    &.active{
      &::after{
        width: 100%;
        left: 0;
        bottom: 0;
        border-bottom: 2px solid #ffd54d;
        transform-origin: bottom center;
        transition: width 0.5s ease-in-out;
      }
    
  }
`;

