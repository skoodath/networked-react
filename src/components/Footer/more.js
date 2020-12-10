import React from 'react';
import { MoreLinks, MoreListItems, FooterLinks } from '../../styles/footerstyle';


const MoreIcons = () => {
    return (
      <MoreLinks>
        <MoreListItems>
          <li>
            <FooterLinks to="about">About</FooterLinks>
          </li>
          <li>
            <FooterLinks to="fellowship">Fellowship</FooterLinks>
          </li>
          <li>
            <a href="http://blog.networked.in/">Blog</a>
          </li>
        </MoreListItems>
      </MoreLinks>
    );
}

export default MoreIcons;
