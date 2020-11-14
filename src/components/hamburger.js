import React, {useContext} from 'react';
import { MyMenucontext } from '../context/context';
import { HamburgerNew, HamburgerNewItemsTwo, HamburgerNewItemsOne } from '../styles/hamburgerstyle';


const Navbar = () => {

    const [open, setOpen] = useContext(MyMenucontext);
    
    const handleNavbar = () => {
      setOpen(!open)
    }

    return (
      <>
          <HamburgerNew open={open} onClick={handleNavbar}>
            <HamburgerNewItemsOne  open={open} />
            <HamburgerNewItemsTwo  open={open} />
          </HamburgerNew>
      </>
    )
}

export default Navbar;