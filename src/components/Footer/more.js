import React from 'react';
import { MoreLinks, MoreListItems } from '../../styles/footerstyle';


const MoreIcons = () => {
    return (
      <MoreLinks>
        <MoreListItems>
          <li>
            <a href="blog.networked.in">About</a>
          </li>
          <li>
            <a href="/resources">Fellowship</a>
          </li>
          <li>
            <a href="/people">Blog</a>
          </li>
        </MoreListItems>
      </MoreLinks>
    );
}

export default MoreIcons;
