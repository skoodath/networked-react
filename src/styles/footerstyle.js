import styled from 'styled-components';
import { device } from './device';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaVimeoV, FaEnvelope } from 'react-icons/fa';

/* Footer main skills */

export const Styledfooter = styled.footer`
    background: #00155A;
    padding: 2rem 0 0;
    display: flex;
    justify-content: center;
    `;
export const StyledFooterInner = styled.div`
    width: 80%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    @media ${device.laptop}{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
    }
`;
export const StyledFooterWrapper = styled.div`
    grid-column-start: ${({ colStart }) => colStart };
    grid-column-end: ${({ colEnd })  => colEnd };
    grid-row-start: ${({ rowStart })  => rowStart };
    grid-row-end: ${({ rowEnd })  => rowEnd };
`;

/* Footer Title styling */

export const TitleName = styled.h5`
    color: #ffffffbd;
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
`;

/* Footer contact styling */

export const ContactLinks = styled.article`
    color: #ffffffbd;
    padding: 1em 0;
    margin: 0;
    width: 80%;
`;

export const MyEmail = styled.span`
    color: #ffffffbd;
`;

export const MailIcon = styled(FaEnvelope)`
    fill: #ffffffbd;
    height: 1.5rem;
    width: 1.5rem;
    vertical-align: middle;
`;

/* Footer logo styling */

export const FooterLogo = styled.article`
  color: #ffffffbd;
  padding: 1em 0;
  margin: 0;
  width: 80%;
  a {
    color: #ffffffbd;
    font-size: 2rem;
    &:visited {
      color: #ffffffbd;
    }
  }
`;

/* Copywrite styling */

export const Copy = styled.article`
  color: #ffffffbd;
  padding: 1em 0;
  margin: 0;
  width: 80%;
`;

/* More link styles */

export const MoreLinks = styled.article`
  color: #ffffffbd;
  padding: 1em 0;
  margin: 0;
  width: 80%;
  border-top: 1px solid transparent;
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

/* Social media icon style */

export const SocialLinks = styled.article`
  color: #ffffffbd;
  padding: 1em 0;
  margin: 0;
  width: 80%;
  border-top: 1px solid transparent;
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