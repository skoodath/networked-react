import styled from 'styled-components';
import { device } from './../../styles/device';


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