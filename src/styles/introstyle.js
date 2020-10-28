import styled from 'styled-components';

export const Styledintro = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  height: 100vh;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
`;

/* Intro Text Style */

export const StyledintroWrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  justify-content: center;
  align-items: center;

`;

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
    background: #272727;
    padding: 0;
    margin: 0;
    video{
        width: 100%;
        max-width: 1440px;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;