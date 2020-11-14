import React, {useContext, useRef, useEffect} from 'react';
import { Link } from "react-router-dom";
import { MyMenucontext } from '../../../context/context';
import { Menuitems } from './../../../styles/menustyle';
import { gsap, Power4 } from 'gsap';

const MenuList = () => {

  const [open, setOpen] = useContext(MyMenucontext);
  const handleMenu = () => {
    setOpen(!open);
    }
    const hmRef = useRef(null);
    const abtRef = useRef(null);
    const netscienceRef = useRef(null);
    const blogRef = useRef(null);
   useEffect(()=>{
     let menuState = open;
     if(menuState){
      gsap.to([hmRef.current, abtRef.current, netscienceRef.current, blogRef.current], {
        delay: 0.8,
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: Power4.easeOut,
        stagger: {
          amount: 0.7
        }
      })
     } else if (!menuState){
      gsap.to([hmRef.current, abtRef.current, netscienceRef.current, blogRef.current], {
        duration: 0.8,
        opacity: 0,
        y: 10,
        ease: Power4.easeOut,
        stagger: {
          amount: 0.7
        }
      })
     }
     
   })

  return (
    <Menuitems>
      <li
        ref={hmRef}
      >
        <Link to="/" 
        onClick={handleMenu}>
          Home
        </Link>
      </li>
      <li
        ref={abtRef}
      >
        <Link to="/about" 
        onClick={handleMenu}>
          About Us
        </Link>
      </li>
      <li
        ref={netscienceRef}
      >
        <Link to="/what-is-network-science" 
        onClick={handleMenu}>
          What is Network Science
        </Link>
      </li>
      <li
        ref={blogRef}
      >
        <a href="http://blog.networked.in" 
        onClick={handleMenu}>
          Blog
        </a>
      </li>
    </Menuitems>
  );
};

export default MenuList;

