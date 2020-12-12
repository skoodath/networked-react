import React from 'react';
import { MoreLinks, MoreListItems, FooterLinks } from '../../styles/footerstyle';


const MoreIcons = () => {
    return (
      <MoreLinks>
        <MoreListItems>
          <li>
            <FooterLinks 
              to="about"
              smooth={true} 
              offset={-50} 
              duration={500}
              >
                About
              </FooterLinks>
          </li>
          <li>
            <FooterLinks 
              to="fellowship"
              smooth={true} 
              offset={-100} 
              duration={500}
              >
                Fellowship
              </FooterLinks>
          </li>
          <li>
            <a href="http://blog.networked.in/">Blog</a>
          </li>
        </MoreListItems>
      </MoreLinks>
    );
}

export default MoreIcons;
