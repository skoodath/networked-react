import styled from 'styled-components';
import { device } from './device';

/* Footer main skills */

export const Styledfooter = styled.footer`
    background: #00155A;
    padding: 2rem 0 0;
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

/* Footer contact styling */

export const ContactLinks = styled.article`
    color: #fff;
    padding: 1em 0;
    margin: 0 auto;
    width: 80%;
`;

export const MyEmail = styled.span`
    color: #fff;
    svg{
        fill: #fff;
        height: 1.5rem;
        width: 1.5rem;
        vertical-align: middle;
    }
`;

/* Footer logo styling */

export const FooterLogo = styled.article`
  color: #fff;
  padding: 1em 0;
  margin: 0 auto;
  width: 80%;
  a {
    color: #fff;
    font-size: 2rem;
    &:visited {
      color: #fff;
    }
  }
`;

/* Copywrite styling */

export const Copy = styled.article`
  color: #fff;
  padding: 1em 0;
  margin: 0 auto;
  width: 80%;
  border-top: 1px solid #4e4e4e;
`;

/* More link styles */

export const MoreLinks = styled.article`
  color: #fff;
  padding: 1em 0;
  margin: 0 auto;
  width: 80%;
  border-top: 1px solid #4e4e4e;
  @media ${device.laptop}{
    border-top: 1px solid transparent;
  }
`;
export const MoreListItems = styled.ul`
    display: flex;
    li{
        margin: 0 0.7rem 0 0;
        a{
            color: #fff;
            text-decoration: underline;
        }
    }
`;

/* Social media icon style */

export const SocialLinks = styled.article`
  color: #fff;
  padding: 1em 0;
  margin: 0 auto;
  width: 80%;
  border-top: 1px solid #4e4e4e;
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