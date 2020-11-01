import React from 'react'
import FooterLogo from './Footer/footerlogo';
import MoreIcons from './Footer/more';
import SocialMedia from './Footer/social';
import ContactUs from './Footer/contact';
import Copywrite from './Footer/copywrite';

import { Styledfooter, StyledFooterInner, StyledFooterWrapper } from '../styles/footerstyle';

const Footer = () => (
  <Styledfooter>
    <StyledFooterInner>
      <StyledFooterWrapper colStart="1" colEnd="4" rowStart="1" rowEnd="2">
          <FooterLogo  />
      </StyledFooterWrapper>
      <StyledFooterWrapper colStart="1" colEnd="5" rowStart="2" rowEnd="4">
          <ContactUs />
      </StyledFooterWrapper>
      <StyledFooterWrapper colStart="5" colEnd="9" rowStart="2" rowEnd="4">
          <MoreIcons />
      </StyledFooterWrapper>
      <StyledFooterWrapper colStart="10" colEnd="-1" rowStart="2" rowEnd="4">
          <SocialMedia />
      </StyledFooterWrapper>
      <StyledFooterWrapper colStart="1" colEnd="6" rowStart="4" rowEnd="6">
      <Copywrite />
      </StyledFooterWrapper>
    </StyledFooterInner>
  </Styledfooter>
);

export default Footer;