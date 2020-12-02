import React, { useState } from 'react';
import Logo from './Header/logo';
import { Wrapper } from '../../styles/headerstyle';
import MenuPage from '../menu';


const Header = () => {

    const [headerColor, setHeaderColor] = useState(false);


    const setBackground = () => {
        if(window.scrollY > 100){
            setHeaderColor(true);
        }
        else {
            setHeaderColor(false);
        }
    }

    window.addEventListener('scroll', setBackground);

    return (
        <Wrapper scroll={headerColor}>
            <Logo />
            <MenuPage />
        </Wrapper>
    )
}

export default Header;

