import React from 'react';
import styled from 'styled-components';
import Subtitle from './subtitle';
import { Link } from 'react-router-dom';

const MoreLinks = styled.article`
  color: #fff;
  padding: 1em 0;
  margin: 0 auto;
  width: 80%;
  border-top: 1px solid #4e4e4e;
`;
const MoreListItems = styled.ul`
    display: flex;
    li{
        margin: 0 0.7rem 0 0;
        a{
            color: #fff;
            text-decoration: underline;
        }
    }
`;

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
