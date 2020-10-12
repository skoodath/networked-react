import React, {useContext} from 'react';
import styled from 'styled-components';
import { MyMenucontext } from '../context/context';


const Hamburger = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 0 2rem;
  cursor: pointer;
  z-index: 9999;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  &::before {
    position: absolute;
    content: "";
    top: ${({ open }) => (open ? "30px" : "20px")};
    right: 0;
    width: ${({ open }) => (open ? "30px" : "40px")};
    height: 3px;
    border-radius: 10px;
    background: #03243C;
    transform-origin: center;
    transform: ${({ open }) => (open ? "rotate(-135deg)" : "rotate(0)")};
    transition: all 0.5s;
    mix-blend-mode: difference;
  }
  &::after {
    position: absolute;
    content: "";
    top: 30px;
    right: 0;
    width: 30px;
    height: 3px;
    background: #03243C;
    border-radius: 10px;
    transform-origin: center;
    transform: ${({ open }) => (open ? "rotate(135deg)" : "rotate(0)")};
    transition: all 0.5s;
    mix-blend-mode: difference;
  }
  &:hover{
    &::before{
      width: 30px;
    }
    &::after{
      width: ${({ open }) => (open ? "30px" : "40px")};
    }
  }
`;

const Navbar = () => {

    const [open, setOpen] = useContext(MyMenucontext);
    
    const handleNavbar = () => {
      setOpen(!open)
    }

    return (
          <Hamburger open={open} onClick={handleNavbar} />
    )
}

export default Navbar;