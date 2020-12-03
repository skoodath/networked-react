import styled from 'styled-components';
import underline from '../illustrations/underline.png';

export const StyledFellowship = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0;
    justify-content: center;
    margin: 3rem auto 0;
    max-width: 1280px;
    position: relative;
    width: 80%;
`;


export const FellowshipText = styled.p`
  margin: 0 0 2rem 0;
  padding: 0;
  letter-spacing: 2px;
  line-height: 1.6;
  position: relative;
  text-align: ${({ textalign })=> textalign? 'right' : 'left'};
  font-size: ${({ fontsize })=> fontsize? '1.2rem' : '1rem'};
  font-weight: ${({ fontwght })=> fontwght? '700' : '400'};
  border-radius: 5px;
  align-self: ${({ alignitems })=> alignitems? 'flex-end' : 'flex-start'};
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
