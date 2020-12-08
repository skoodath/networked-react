import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';
import { device } from './device';

export const InnerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 3rem 0;
  justify-content: center;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;
`;

/* Intro Text Style */
export const IntroParaWrapper = styled.article`
    margin: 0;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
`;
export const Styledintropara = styled.p`
    line-height: 1.6;
    letter-spacing: 2px;
    margin: 0 0 2rem 0;
    position: relative;
    padding: 0;
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


/* Video Styling */

export const StyledCloseBtn = styled.span`
    display: inline-block;
    color: #fff;
    position: absolute;
    top: 10%;
    right: 10%;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: bold;
    text-transform: uppercase;
    &::after{
        content: '';
        position: absolute;
        width: 0;
        height: 100%;
        transition: width 0.5s ease-in-out;
      }
    &:hover{
      &::after{
        width: 100%;
        left: 0;
        bottom: 0;
        border-bottom: 2px solid #fff;
        transform-origin: bottom center;
        transition: width 0.5s ease-in-out;
      }
    
  }

`;

export const StyledPlayWrapper  = styled.div`
    display: flex;
    cursor: pointer;
    justify-content: space-around;
    align-items: center;
    width: 150px;
    background-color: #ffd54d;
    padding: 0.5rem;
    margin: 1rem 0 0 0;
    border-radius: 5px;
    box-shadow: 0 0 7px #ddd;
    @media ${device.laptop}{
        width: 200px;
    }
`;
export const StyledPlaytext = styled.span`
    color: #fff;
`;
export const StyledPlaybtn = styled(FaPlay)`
    fill: #fff;
`;