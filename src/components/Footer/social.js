import React from 'react';
import styled from 'styled-components';
import Subtitle from './subtitle';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaVimeoV } from 'react-icons/fa';



const SocialLinks = styled.article`
  color: #fff;
  padding: 1em 0;
  margin: 0 auto;
  width: 80%;
  border-top: 1px solid #4e4e4e;
`;

const SocialItems = styled.ul`
  display: flex;
  li {
    margin: 0 0.7rem 0 0;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      color: #fff;
      text-decoration: underline;
      svg{
        fill: #fff;
        height: 1.5rem;
        width: 1.5rem;
        vertical-align: middle;
        &:hover{
          fill: #dadada;
        }
      }
    }
  }
`;

const SocialMedia = () => {
    return (
      <SocialLinks>
        <Subtitle title={`Follow Us`} />
        <SocialItems>
          <li>
            <a href="https://twitter.com/networkED_in">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/networkedkids/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/networkedkids">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="/credit">
              <FaVimeoV />
            </a>
          </li>
        </SocialItems>
      </SocialLinks>
    );
}

export default SocialMedia;
