import React from 'react'
import FooterLogo from './Footer/footerlogo';
import MoreIcons from './Footer/more';
import SocialMedia from './Footer/social';
import Copywrite from './Footer/copywrite';

import { Styledfooter, StyledFooterInner, StyledFooterWrapper } from '../styles/footerstyle';

const Footer = () => (
  <Styledfooter>
    <StyledFooterInner>
      <StyledFooterWrapper>
          <MoreIcons />
      </StyledFooterWrapper>
      <StyledFooterWrapper>
          <FooterLogo  />
      </StyledFooterWrapper>
      <StyledFooterWrapper>
        <Copywrite />
        <SocialMedia />
      </StyledFooterWrapper>
    </StyledFooterInner>
  </Styledfooter>
);

export default Footer;