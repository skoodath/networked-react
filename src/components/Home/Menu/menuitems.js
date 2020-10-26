import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import { MyMenucontext } from '../../../context/context';
import { Menuitems } from './../../../styles/menu/menuitemstyle';

const MenuList = () => {

  const [open, setOpen] = useContext(MyMenucontext);

  const handleMenu = () => {
    setOpen(!open);
  }

  return (
    <Menuitems>
      <li>
        <Link to="/" onClick={handleMenu}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" onClick={handleMenu}>
          About Us
        </Link>
      </li>
      <li>
        <Link to="/what-is-network-science" onClick={handleMenu}>
          What is Network Science
        </Link>
      </li>
      <li>
        <Link to="http://blog.networked.in" onClick={handleMenu}>
          Blog
        </Link>
      </li>
    </Menuitems>
  );
}

export default MenuList;

