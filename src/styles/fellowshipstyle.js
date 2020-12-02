import styled from 'styled-components';
import underline from '../illustrations/underline.png';

export const StyledFellowship = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0;
    height: 100vh;
    justify-content: center;
    margin: 3rem auto 0;
    max-width: 1280px;
    position: relative;
    width: 80%;
`;


export const FellowshipText = styled.p`
  margin: 2rem auto;
  border-bottom: 2px solid #ffd54d;
  padding: 0 0 2rem 0;
  letter-spacing: 2px;
  line-height: 2;
  font-size: 1rem;
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
