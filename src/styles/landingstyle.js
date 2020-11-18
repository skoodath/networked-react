import styled, { keyframes } from 'styled-components';
import { device } from './device';

export const Styledlanding = styled.section`
  height: 100vh;
  background: #ffd54d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 2rem 0 0 0;
  position: relative;
  @media ${device.laptop} {
    padding: 4rem 0 0 0;
  }
`;

export const Styledheader = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-weight: ${({ boldness }) => boldness};
  font-size: ${({ mysize }) => mysize};
  text-transform: ${({ textt }) => textt};
  display: block;

`;

const bounce = keyframes`
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-15px);
      }
    }
`

export const Scrolldown = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  span{
    font-size: 1.2rem;
    display: inline-block;
    margin: 0 0 1rem 0;
  }
  svg{
    display: inline-block;
    font-size: 1.5rem;
    animation: 1.5s ${bounce} cubic-bezier(0.0075, 0.52, 0.00095, 1) infinite;
  }
`;