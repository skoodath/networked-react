import React, {useContext} from 'react';
import { Menu } from './../styles/menustyle';
import MenuList from './Home/Menu/menuitems';
import { MyMenucontext } from '../context/context';

const MenuPage = () => {


    const [open] = useContext(MyMenucontext);
    return (
        <Menu show={open} className="menuAnimation" >
            <MenuList />
        </Menu>
    )
};

export default MenuPage;
