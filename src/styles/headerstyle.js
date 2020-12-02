import styled from 'styled-components';
import { device } from './device';

export const Wrapper = styled.header`
    padding: 1rem;
    position: fixed;
    top: 0;
    display: flex;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: #ffffff;
    transition-property: background-color, height;
    transition-timing-function: ease-in-out;
    transition-duration: 0.7s;
    width: 100vw;
    `;

export const Title = styled.div`
position: relative;
display: block;
margin: 0;
justify-self: center;
z-index: 99;

@media ${device.laptop}{
    top: 3%;
  }
@media ${device.desktop}{
    top: 5%;
}
img {
    display: block;
    width: 6rem;
    max-width: auto;
    position: relative;
    @media ${device.laptop}{
      width: 4.5rem;
    }
    @media ${device.desktop}{
      width: 5rem;
    }
}
`;