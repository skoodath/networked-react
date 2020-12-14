import React from 'react';
import { Menu, MenuLinks } from './../styles/menustyle';
import { gsap } from 'gsap';
import {CSSPlugin} from 'gsap/CSSPlugin';

gsap.registerPlugin(CSSPlugin);


const MenuPage = ({scroll}) => {

    return (
        <Menu>
                <MenuLinks
                    to="about"
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}
                    scroll={scroll}
                >
                    About
                </MenuLinks>
                <MenuLinks 
                    to="fellowship"
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}
                    scroll={scroll}
                    >
                    Fellowship
                </MenuLinks>
        </Menu>
    )
};

export default MenuPage;
