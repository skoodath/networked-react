import React, {useContext} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { MyMenucontext } from '../../../context/context';

const Menuitems = styled.ul`
  padding: 0 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  li {
    position: relative;
    margin: 0 0 3rem 0;
    cursor: pointer;
    color: #272727;
    text-transform: uppercase;

    a{
      font-size: 2rem;
      position: relative;
      &::after {
      content: "";
      width: 0;
      height: 3px;
      display: block;
      background: #ffd54d;
      transition: width 0.5s;
      transition-timing-function: cubic-bezier(0.1, 0.5, 0.0065, 0.71);
      position: absolute;
      left: 0;
      }
      &:hover {
      &::after {
        width: 100%;
      }
    }
    }
  }
`;

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
      <li>Blog</li>
    </Menuitems>
  );
};

export default MenuList;

