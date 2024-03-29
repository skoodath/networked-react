import styled from 'styled-components';
import { Link } from 'react-scroll';
import { device } from './device';

/* Menu Style */

export const Menu = styled.nav`
  color: #272727;
  align-items: center;
  margin: 0 1rem 0 auto;
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media ${device.laptop}{
    margin: 0 7rem 0 auto;
}
`;

/* Menu Item Style */


export const MenuLinks = styled(Link)`
    position: relative;
    margin: 0 1rem 0 0;
    cursor: pointer;
    color: ${({ scroll}) => scroll? '#272727' : '#fff'};
    text-transform: uppercase;
    border: 2px solid transparent;
    font-weight: bold;
    display: block;
    z-index: 999;
    text-shadow: ${({ scroll}) => scroll? 'none' : '0 0 4px #e6b000'};
    &::after{
        content: '';
        position: absolute;
        width: 0;
        height: 100%;
        bottom: -10px;
        z-index: 100;
      }
    &:hover{
      &::after{
        width: 100%;
        left: 0;
        bottom: -2px;
        z-index: 100;
        border-bottom: 2px solid #ffd54d;
        transform-origin: bottom center;
        transition: width 0.5s ease-in-out;
      }
    
  }
`;

