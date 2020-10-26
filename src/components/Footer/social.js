import React from 'react';
import Subtitle from './subtitle';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaVimeoV } from 'react-icons/fa';
import { SocialLinks, SocialItems } from './../../styles/footer/socialstyle';


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
