import styled, { keyframes } from 'styled-components';
import { device } from './device';
import { FaArrowDown } from 'react-icons/fa';

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
  overflow: hidden;
  @media ${device.laptop} {
    padding: 2rem 0 0 0;
  }
`;

export const LandingOverlay = styled.div`
  width: 13rem;
  height: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #fff;
  border-radius: 50%;
  z-index: 5;
  img{
    width: 70%;
  }
`;


export const Styledheader = styled.h1`
  text-align: center;
  display: block;
  color: #272727;
  font-size: 3rem;
  font-weight: 300;
  padding: 0 1rem;
  position: relative;
  margin: 0;
  overflow: hidden;
  div{
    font-size: 3rem;
  }
  @media ${device.laptop}{
    font-size: 4rem;
    div{
    font-size: 4rem;
    }
  }
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
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  span{
    font-size: 1rem;
    display: inline-block;
    margin: 0 0 1rem 0;
  }
`;

export const ScrollArrow = styled(FaArrowDown)`
  display: inline-block;
    font-size: 1rem;
    animation: 1.5s ${bounce} cubic-bezier(0.0075, 0.52, 0.0095, 0.6) infinite;
`;