import React from 'react';
import styled from 'styled-components';

const MenuItems = styled.span`
    position: fixed;
    z-index: 9999;
    color: #272727;
    display: inline-block;
    left: ${({ mLeft }) => mLeft };
    top: ${({ mTop }) => mTop };
    right: ${({ mRight }) => mRight };
    bottom: ${({ mBottom }) => mBottom };
    margin: 1rem;
`;

const Newmenu = () => {
    return (
        <>
          <MenuItems mLeft="" mTop="0" mRight="20%" mBottom="">
            Home
          </MenuItems>
          <MenuItems mLeft="" mTop="0" mRight="0" mBottom="">
            Blog
          </MenuItems> 
          <MenuItems mLeft="0" mTop="50%" mRight="" mBottom="">
            What is Network Science
          </MenuItems> 
          <MenuItems mLeft="" mTop="" mRight="0" mBottom="0">
            About
          </MenuItems> 
        </>
    )
};

export default Newmenu;
