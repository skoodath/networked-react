import styled from 'styled-components';

/* Menu Style */

export const Menu = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  color: #272727;
  justify-content: space-around;
  transition-property: opacity, visibility, transform, height;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier( 0.0088, 0.08, 0.078, 0.98 );
  transform-origin: top right;
  margin: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  height: ${({ show }) => (show ? "100%" : "0")};
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
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
      font-size: 2.2rem;
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