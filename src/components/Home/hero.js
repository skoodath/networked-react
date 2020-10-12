import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  position: relative;
  display: grid;
  padding: 1rem 0 0 0;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, auto);
  justify-content: center;
  margin: 3rem 0;
  height: 50vh;
  background: #03243c;

  blockquote {
    color: #fff;
    font-size: 2.5rem;
    font-weight: bold;
    grid-column: 1/-1;
    grid-row: 1/4;
    margin: 0;
    align-self: center;
    width: 80%;
    justify-self: center;
  }
  span {
    color: #fff;
    font-size: 1.2rem;
    background-color: transparent;
    grid-column: 4/-1;
    grid-row: 3/4;
    margin: 0.5rem 0 0 2rem;
    width: 80%;
    align-self: flex-end;
    justify-self: center;
  }
  p {
    color: #fff;
    font-size: 1rem;
    background-color: transparent;
    grid-column: 1/-1;
    grid-row: 4/5;
    margin: 0.5rem 0 0 2rem;
    width: 80%;
    align-self: flex-start;
    justify-self: center;
    font-style: italic;
  }
`;

const Hero = () => {
    return (
      <HeroContainer>
        <blockquote>
          "Life is at base a network. It thrives on connection."
        </blockquote>
        <span>-Curtis Ogden</span>
        <p>Senior Associate Institute for Social Change</p>
      </HeroContainer>
    );
}

export default Hero;
