import styled from 'styled-components';
import underline from '../illustrations/underline.png';
import { device } from './device';

export const StyledFellowship = styled.section`
    display: flex;
    flex-direction: column;
    padding: ${({topBottom, leftRight}) => `${topBottom} ${leftRight}`};
    height: 100vh;
    justify-content: center;
    margin: 3rem auto 0;
    width: 100%;
    max-width: 1280px;
    overflow-x: hidden;
    position: relative;
    @media ${device.laptop}{
    padding: 0;
    width: 80%;
  }
`;


export const FellowshipPara = styled.p`
  margin: 2rem auto;
  border-bottom: 2px solid #ffd54d;
  padding: 0 0 2rem 0;
  letter-spacing: 2px;
  line-height: 2;
  font-size: 1.1rem;
`;

/* Fellowship subheader */

export const FellowHeaderBig = styled.h2`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 3rem;
  letter-spacing: 3px;
  padding: 0;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    background: url(${underline});
    background-repeat: no-repeat;
    background-position-x: left;
    background-position-y: bottom;
  }
`;
export const FellowHeaderSmall = styled.h2`
    font-weight: normal;
    display: block;
`;
