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

export const Styledintropara = styled.p`
    line-height: 2;
    letter-spacing: 2px;
    margin: 0;
    padding: 0 0 2rem 0;
    font-size: 1.1rem;
    max-width: 1280px;
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