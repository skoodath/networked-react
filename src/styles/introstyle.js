import styled from 'styled-components';

export const Styledintro = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({bgColor}) => bgColor ? bgColor : '#fff'};
  //padding: 0 10%;
  padding: ${({topBottom, leftRight}) => `${topBottom} ${leftRight}`};
  justify-content: center;
  height: ${({hgt}) => hgt? hgt : '100vh'};
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

/* Intro Text Style */

export const Styledintropara = styled.p`
    line-height: 2;
    letter-spacing: 2px;
    border-bottom: 2px solid #ffd54d;
    margin: 0;
    padding: 0 0 2rem 0;
    font-size: 1.1rem;
`;


/* Video Styling */

export const Styledvideo = styled.div`
    background: #ffd54d;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    video{
        width: 100%;
        max-width: 1440px;
        height: 100vh;
    }
`;