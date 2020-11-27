import styled from 'styled-components';
import { device } from './device';

export const Wrapper = styled.header`
    padding: 1rem;
    position: fixed;
    top: 0;
    display: flex;
    height: 6.5rem;
    left: 0;
    right: 0;
    z-index: 999;
    background-image: #fff;

    `;

export const Title = styled.div`
position: relative;
display: block;
margin: 0 auto 0 0;
background: #fff;
justify-self: center;
width: 7rem;
height: 7rem;
z-index: 99;
border-radius: 50%;
//border: 1px solid #ffd54d;
@media ${device.laptop}{
    top: 3%;
    width: 5rem;
    height: 5rem;
  }
@media ${device.desktop}{
    top: 5%;
    width: 6rem;
    height: 6rem;
}
img {
    display: block;
    width: 6rem;
    max-width: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media ${device.laptop}{
      width: 4.5rem;
    }
    @media ${device.desktop}{
      width: 5rem;
    }
}
`;