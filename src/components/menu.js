import React, {useContext, useRef, useEffect } from 'react';
import { Menu } from './../styles/menustyle';
import MenuList from './Home/Menu/menuitems';
import { MyMenucontext } from '../context/context';
import { gsap, Expo } from 'gsap';
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
                        height: 0,
                        y: '-100%',
                        opacity: 0,
                        visibility: 'hidden'
                    },
                    {
                        height: '100vh',
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        ease: Expo.easeOut,
                        visibility: 'visible'
                    }
                )
            } else if (!clickStatus) {
                gsap.to(menuRef.current, 
                    {
                        height: 0,
                        y: '-100%',
                        opacity: 0,
                        duration: 0.5,
                        delay: 0.9,
                        visibility: 'hidden',
                        ease: Expo.easeOut,
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
