import styled from 'styled-components';
import { device } from './device';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaVimeoV } from 'react-icons/fa';
import { Link } from 'react-scroll';

/* Footer main skills */

export const Styledfooter = styled.footer`
    //background: #00155A;
    background-color: #272727;
    padding: 2rem 0 0;
    display: flex;
    justify-content: center;
    `;
export const StyledFooterInner = styled.div`
    width: 80%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;
export const StyledFooterWrapper = styled.div`
    
`;

/* Footer Title styling */

export const TitleName = styled.h5`
    color: #ffffffbd;
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
`;



/* Footer logo styling */

export const FooterLogo = styled.article`
  color: #ffffffbd;
  padding: 1em 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FooterLogoLink = styled(Link)`
  color: #ffffffbd;
    font-size: 2rem;
    &:visited {
      color: #ffffffbd;
    }
`;

/* Copywrite styling */

export const Copy = styled.article`
  color: #ffffffbd;
  padding: 1em 0 0 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

/* More link styles */

export const MoreLinks = styled.article`
  color: #ffffffbd;
  padding: 1em 0;
  margin: 0;
  width: 100%;
  border-top: 1px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.laptop}{
    border-top: 1px solid transparent;
  }
`;
export const MoreListItems = styled.ul`
    display: flex;
    li{
        margin: 0 0.7rem 0 0;
        a{
            color: #ffffffbd;
            text-decoration: underline;
        }
    }
`;

export const FooterLinks = styled(Link)`
    color: #ffffffbd;
    text-decoration: underline;
    cursor: pointer;
`;



/* Social media icon style */

export const SocialLinks = styled.article`
  color: #ffffffbd;
  padding: 0 0 1em 0;
  margin: 0;
  width: 100%;
  border-top: 1px solid transparent;
  display: flex;
  justify-content: center;
  @media ${device.laptop}{
    border-top: 1px solid transparent;
  }
`;

export const SocialItems = styled.ul`
  display: flex;
  li {
    margin: 0 0.7rem 0 0;
    width: 2.1rem;
    height: 2.1rem;
    border-radius: 50%;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      color: #ffffffbd;
      text-decoration: underline;
    }
  }
`;

export const TwitterIcon = styled(FaTwitter)`
        fill: #ffffffbd;
        height: 1.5rem;
        width: 1.5rem;
        vertical-align: middle;
        &:hover{
          fill: #dadada;
        }
`;

export const LinkedIcon = TwitterIcon.withComponent(FaLinkedinIn);
export const InstaIcon = TwitterIcon.withComponent(FaInstagram);
export const VimeoIcon = TwitterIcon.withComponent(FaVimeoV);