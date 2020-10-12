import React, {useContext} from 'react';
import styled from 'styled-components';
import MenuList from './Home/Menu/menuitems';
import { MyMenucontext} from '../context/context';



const Menu = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  color: #272727;
  justify-content: space-around;
  transition-property: opacity, visibility, transform;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier( 0.16, 1.08, 0.38, 0.98 );
  margin: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
`;

const MenuPage = () => {


    const [open] = useContext(MyMenucontext);
    return (
        <Menu show={open} className="menuAnimation" >
            <MenuList />
        </Menu>
    )
};

export default MenuPage;
