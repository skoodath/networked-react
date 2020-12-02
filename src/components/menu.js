import React from 'react';
import { Menu, MenuLinks } from './../styles/menustyle';
import { gsap } from 'gsap';
import {CSSPlugin} from 'gsap/CSSPlugin';

gsap.registerPlugin(CSSPlugin);


const MenuPage = () => {

    return (
        <Menu>
                <MenuLinks>
                    About
                </MenuLinks>
                <MenuLinks>
                    Fellowship
                </MenuLinks>
        </Menu>
    )
};

export default MenuPage;
