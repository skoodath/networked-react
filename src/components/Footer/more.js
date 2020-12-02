import React from 'react';
import { MoreLinks, MoreListItems } from '../../styles/footerstyle';


const MoreIcons = () => {
    return (
      <MoreLinks>
        <MoreListItems>
          <li>
            <a href="blog.networked.in">Blog</a>
          </li>
          <li>
            <a href="/resources">Resources</a>
          </li>
          <li>
            <a href="/people">People</a>
          </li>
          <li>
            <a href="/credit">Credit</a>
          </li>
        </MoreListItems>
      </MoreLinks>
    );
}

export default MoreIcons;
