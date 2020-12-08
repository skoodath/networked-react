import styled from 'styled-components';
import { device } from './device';
import { Link } from 'react-scroll';

export const Wrapper = styled.header`
    padding: 1rem;
    position: fixed;
    top: 0;
    display: flex;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: transparent;
    transition-property: background-color, height;
    transition-timing-function: ease-in-out;
    transition-duration: 0.7s;
    width: 100vw;
    height: 52px;
    @media ${device.laptop}{
      height: 65px;
    }
    `;
export const Headeroverlay = styled.div`
    position: fixed;
    margin-top: ${({ scroll }) => scroll? '0': '-52px'};
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: ${({ scroll }) => scroll? '0 0 4px -1px #ffd54d': 'none'};
    z-index: 101;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: margin-top 0.2s cubic-bezier(0.98, 0.84, 0.44, 0.001);
    visibility: ${({ scroll }) => scroll? 'visible': 'hidden'};
    @media ${device.laptop}{
      height: 65px;
      margin-top: ${({ scroll }) => scroll? '0': '-65px'};
    }
`;

export const Title = styled(Link)`
position: relative;
display: flex;
justify-content: center;
margin: 0 auto 0 1rem;
justify-self: center;
z-index: 99;
cursor: pointer;
@media ${device.laptop}{
  margin: 0 auto 0 7rem;
}

img {
    display: block;
    width: 6rem;
    max-width: auto;
    position: relative;
    @media ${device.laptop}{
      width: 5rem;
    }
    @media ${device.desktop}{
      width: 7rem;
    }
}
`;