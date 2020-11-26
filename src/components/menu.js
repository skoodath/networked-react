import React, {useRef } from 'react';
import { Menu, Menuitems } from './../styles/menustyle';
import { gsap } from 'gsap';
import {CSSPlugin} from 'gsap/CSSPlugin';
import { Link } from 'react-router-dom';
//import { MenuList } from '../components/Home/Menu/menuitems';

gsap.registerPlugin(CSSPlugin);


const MenuPage = () => {

    /* const [open, setOpen] = useContext(MyMenucontext);
    const handleMenu = () => {
        setOpen(!open);
    } */

    const menuRef = useRef(null);
    const hmRef = useRef(null);
    const abtRef = useRef(null);
    const blogRef = useRef(null);

    /* const menuRefs = useRef([]);
    menuRefs.current = [];
 
    const addToRefs = el => {
        if (el && !menuRefs.current.includes(el)) {
            menuRefs.current.push(el);
        }
        
    }; */

    /* useEffect(() => {

            let clickStatus = open;
            
            if(clickStatus){
                const tl1 = gsap.timeline();
                /* tl1.to(menuRef.current,{
                    height: '100vh',
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    skewX: '0deg',
                    ease: Expo.easeInOut
                })
                    
                    tl1.to([hmRef.current ,abtRef.current, blogRef.current], {
                        x: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: {
                            amount: 0.5
                        },
                        ease: Expo.easeOut
                    }, "-=0.3")

                    } else if (!clickStatus) {
                        const tl2 = gsap.timeline();

                    tl2.to([hmRef.current ,abtRef.current, blogRef.current], {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        ease: Expo.easeOut,
                        stagger: {
                            amount: 0.5
                        }

                    })
        
                    tl2.to(menuRef.current,{
                        height: 0,
                        y: '-100%',
                        opacity: 1,
                        duration: 0.8,
                        ease: Expo.easeOut
                    }, "-=0.5")
                }
            },[open]) */

    return (
        <Menu className="menuAnimation" ref={menuRef}>
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
                        >
                          Home
                    </Link>
                </Menuitems>
                <Menuitems
                    ref={abtRef}
                >
                    <Link 
                        to="/about" 
                    >
                    About Us
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
        </Menu>
    )
};

export default MenuPage;
