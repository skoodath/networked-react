import React from 'react';
import Subtitle from './subtitle';
import { Link } from 'react-router-dom';
import { MoreLinks, MoreListItems } from '../../styles/footerstyle';


const MoreIcons = () => {
    return (
      <MoreLinks>
        <Subtitle title={`More`} />
        <MoreListItems>
          <li>
            <Link to="blog.networked.in">Blog</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/credit">Credit</Link>
          </li>
        </MoreListItems>
      </MoreLinks>
    );
}

export default MoreIcons;
