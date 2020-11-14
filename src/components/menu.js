import React, {useContext, useRef, useEffect } from 'react';
import { Menu } from './../styles/menustyle';
import MenuList from './Home/Menu/menuitems';
import { MyMenucontext } from '../context/context';
import { gsap, Power4, Power2 } from 'gsap';
import {CSSPlugin} from 'gsap/CSSPlugin';

gsap.registerPlugin(CSSPlugin);


const MenuPage = () => {
    const menuRef = useRef(null);

    const [open] = useContext(MyMenucontext);

    useEffect(() => {
            let clickStatus = open;
            if(clickStatus){
                gsap.fromTo(menuRef.current,
                    {
                        opacity: 0,
                        x: '-100%',
                        duration: 1,
                        ease: Power2.easeOut,
                        skewX: '15deg'
                    },
                    {
                        opacity: 1,
                        x: '0%',
                        duration: 1,
                        ease: Power2.easeOut,
                        skewX: '0deg'
                    }
                )
            } else if (!clickStatus) {
                gsap.to(menuRef.current,
                    {
                        opacity: 0,
                        x: '-100%',
                        duration: 1,
                        ease: Power4.easeOut,
                        skewX: '15deg',
                        delay: 0.9
                    },
            
                )
            } 
    })

    return (
        <Menu show={open} className="menuAnimation" ref={menuRef}>
            <MenuList />
        </Menu>
    )
};

export default MenuPage;
