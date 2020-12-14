import React, { useState } from 'react';
import Logo from './Header/logo';
import { Headeroverlay, Wrapper } from '../../styles/headerstyle';
import MenuPage from '../menu';


const Header = () => {

    const [headerColor, setHeaderColor] = useState(false);


    const setMenu = () => {
        if(window.scrollY > 150){
            setHeaderColor(true);
        }
        else {
            setHeaderColor(false);
        }
    }

    window.addEventListener('scroll', setMenu);

    return (
        <Wrapper scroll={headerColor}>
        <Headeroverlay scroll={headerColor}>
            <Logo />
        </Headeroverlay>
            <MenuPage scroll={headerColor} />
        </Wrapper>
    )
}

export default Header;

