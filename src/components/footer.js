import React from 'react'
import styled from 'styled-components';
import FooterLogo from './Footer/footerlogo';
import MoreIcons from './Footer/more';
import SocialMedia from './Footer/social';
import ContactUs from './Footer/contact';
import Copywrite from './Footer/copywrite';


const Styledfooter = styled.section`
  background: #03243c;
  padding: 2rem 0 0;
  display: flex;
  flex-direction: column;
`;

const Footer = () => (
  <Styledfooter>
    <FooterLogo />
    <ContactUs />
    <MoreIcons />
    <SocialMedia />
    <Copywrite />
  </Styledfooter>
);

export default Footer;