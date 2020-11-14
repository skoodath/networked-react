import styled from 'styled-components';

/* Menu Style */

export const Menu = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  color: #272727;
  justify-content: space-around;
  margin: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  height: 100vh;
  //opacity: ${({show}) => show? 1 : 0 };
  opacity: 0;
  //transform: ${({show}) => show? `scale3d(1.0,1.0,1.0)` : `scale3d(0.003,0.003,0.003)` };
  //transition-property: opacity, transform, border-radius;
  //perspective: 100px;
  //transform-style: preserve-3d;
  //transform-origin: top right;
  //transition-duration: 2000ms;
  //transition-timing-function: cubic-bezier(0.75, 0.0082, 0.0165, 1);
`;

/* Menu Item Style */

export const Menuitems = styled.ul`
  padding: 0 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  li {
    position: relative;
    margin: 0 0 3rem 0;
    cursor: pointer;
    color: #272727;
    text-transform: uppercase;
  
    a{
      font-size: 2.5rem;
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
  }
`;