import styled from 'styled-components';

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

export const Styledvideo = styled.div`
    background: #ffd54d;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    video{
        width: 100%;
        height: 100%;
    }
`;