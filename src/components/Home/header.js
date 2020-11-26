
import React from 'react';
import Logo from './Header/logo';
import { Wrapper } from '../../styles/headerstyle';
import MenuPage from '../menu';


const Header = () => {
    return (
        <Wrapper>
            <Logo />
            <MenuPage />
        </Wrapper>
    )
}

export default Header;

