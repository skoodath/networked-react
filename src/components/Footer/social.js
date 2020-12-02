import React from 'react';
import { SocialLinks, SocialItems, TwitterIcon, LinkedIcon, InstaIcon, VimeoIcon } from '../../styles/footerstyle';


const SocialMedia = () => {
    return (
      <SocialLinks>
        <SocialItems>
          <li>
            <a href="https://twitter.com/networkED_in">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/networkedkids/">
              <InstaIcon />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/networkedkids">
              <LinkedIcon />
            </a>
          </li>
          <li>
            <a href="/credit">
              <VimeoIcon />
            </a>
          </li>
        </SocialItems>
      </SocialLinks>
    );
}

export default SocialMedia;
