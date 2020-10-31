import React, {useContext} from 'react';
import { MyMenucontext } from '../context/context';
import { Hamburger } from '../styles/hamburgerstyle';


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