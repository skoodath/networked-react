import styled from 'styled-components';
import { device } from './device';

export const Title = styled.div`
position: absolute;
display: block;
margin: 0 auto;
background: #fff;
justify-self: center;
width: 10rem;
height: 10rem;
z-index: 99;
top: 2%;
left: 50%;
transform: translate(-50%, -5%);
border-radius: 50%;
@media ${device.laptop}{
    top: 5%;
    width: 8rem;
    height: 8rem;
  }
img {
    display: block;
    width: 7rem;
    max-width: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media ${device.laptop}{
    width: 6rem;
  }
}
`;