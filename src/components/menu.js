import React, {useContext, useRef, useEffect } from 'react';
import { Menu, Menuitems, MenuWrap } from './../styles/menustyle';
import { MyMenucontext } from '../context/context';
import { gsap, Expo, Power2 } from 'gsap';
import {CSSPlugin} from 'gsap/CSSPlugin';
import { Link } from 'react-router-dom';
//import { MenuList } from '../components/Home/Menu/menuitems';

gsap.registerPlugin(CSSPlugin);


const MenuPage = () => {

    const [open, setOpen] = useContext(MyMenucontext);
    const handleMenu = () => {
        setOpen(!open);
    }

    const menuRef = useRef(null);
    const hmRef = useRef(null);
    const abtRef = useRef(null);
    const netRef = useRef(null);
    const blogRef = useRef(null);

    /* const menuRefs = useRef([]);
    menuRefs.current = [];
 
    const addToRefs = el => {
        if (el && !menuRefs.current.includes(el)) {
            menuRefs.current.push(el);
        }
        
    }; */

    useEffect(() => {

            const tl = gsap.timeline();

            let clickStatus = open;

            if(clickStatus){
                tl.to(menuRef.current,{
                    height: '100vh',
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    skewX: '0deg',
                    ease: Expo.easeInOut
                })
                    
                    tl.to([hmRef.current ,abtRef.current, netRef.current, blogRef.current], {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: {
                            amount: 0.5
                        },
                        ease: Power2.easeInOut
                    }, "-=0.5")

                    } else if (!clickStatus) {

                    tl.to([hmRef.current ,abtRef.current, netRef.current, blogRef.current], {
                        y: -100,
                        opacity: 0,
                        duration: 1,
                        ease: Power2.easeInOut,
                        stagger: {
                            amount: 0.5
                        }

                    })
        
                    tl.to(menuRef.current,{
                        height: 0,
                        y: '-100%',
                        opacity: 0,
                        duration: 0.8,
                        ease: Expo.easeInOut
                    }, "-=0.3")
                }
            })

    return (
        <Menu show={open} className="menuAnimation" ref={menuRef}>
            <MenuWrap>
                {/* {MenuList.map( link =>
                    <Menuitems 
                        key={link.name}
                        ref={addToRefs}
                        >
                        <Link
                            to={link.path}
                            onClick={handleMenu}
                        >
                            {link.name}
                        </Link>
                    </Menuitems>
                    )} */}
                <Menuitems
                    ref={hmRef}
                >
                    <Link
                        to="/" 
                        onClick={handleMenu}
                        >
                          Home
                    </Link>
                </Menuitems>
                <Menuitems
                    ref={abtRef}
                >
                    <Link 
                        to="/about" 
                        onClick={handleMenu}
                    >
                    About Us
                    </Link>
                </Menuitems>
                <Menuitems
                    ref={netRef}
                >
                    <Link
                        to="/what-is-network-science" 
                        onClick={handleMenu}

                    >
                        What is Network Science
                    </Link>
                </Menuitems>
                <Menuitems
                    ref={blogRef}
                >
                    <Link 
                        to="" 
                        onClick={()=>window.open('http://blog.networked.in')}
                        
                    >
                        Blog
                    </Link>
                </Menuitems>
            </MenuWrap>
        </Menu>
    )
};

export default MenuPage;
