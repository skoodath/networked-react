import styled from 'styled-components';
import underline from '../illustrations/underline.png';
import { device } from './device';

export const StyledFellowship = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0;
    justify-content: center;
    margin: 5rem auto;
    height: ${({ hgt }) => hgt? hgt: '100vh'};
    max-width: 1280px;
    position: relative;
    width: 80%;
    @media ${device.laptop}{
      height: ${({ hgt }) => hgt? hgt: '100vh'};
    }
`;


export const FellowshipText = styled.p`
  margin: 0 0 2rem 0;
  padding-left: ${({ paddingleft })=> paddingleft? '1rem' : '0'};
  letter-spacing: 1px;
  line-height: 1.6;
  position: relative;
  text-align: ${({ textalign })=> textalign? 'right' : 'left'};
  font-size: ${({ fontsize })=> fontsize? '1.2rem' : '1rem'};
  font-weight: ${({ fontwght })=> fontwght? '700' : '400'};
  align-self: ${({ alignitems })=> alignitems? 'flex-end' : 'flex-start'};
  border-left: ${({ borderleft })=> borderleft? '10px solid #ffd54d' : '0'};
  &::before{
        position: ${({ bposition })=> bposition? 'absolute' : 'relative'};
        content: '';
        width: 20%;
        height: 10px;
        background-color: #ffd54d;
        left: 0;
        bottom: -10px;
        z-index: 0;
    }
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

/* Fellowship Pathway Style */

export const FellowShipPathWayWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-self: center;
    position: relative;
    width: 100%;
    max-width: 1280px;
    height: 320px;
    margin: 0 auto;
    overflow: hidden;

`;
