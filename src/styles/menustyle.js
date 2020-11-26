import styled from 'styled-components';

/* Menu Style */

export const Menu = styled.nav`
  position: relative;
  color: #272727;
  align-items: flex-end;
  text-align: left;
  margin: 0;
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

/* Menu Item Style */

/* export const MenuWrap = styled.ul`
  padding: 0 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`; */

export const Menuitems = styled.span`
    position: relative;
    margin: 0 1rem 0 0;
    cursor: pointer;
    color: #fff;
    text-transform: uppercase;
    a{
      font-size: 1rem;
      position: relative;
      &::after {
      content: "";
      width: 0;
      height: 3px;
      display: block;
      background: #ffd54d;
      transition: width 0.5s;
      transition-timing-function: cubic-bezier(0.1, 0.5, 0.0065, 0.71);
      position: absolute;
      left: 0;
      }
      &:hover {
        &::after {
            width: 100%;
          }
        }
    }
`;

