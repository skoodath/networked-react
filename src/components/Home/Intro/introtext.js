import React from 'react';
import styled from 'styled-components';

const Styledintro = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const Styledintropara = styled.p`
    line-height: 2;
    letter-spacing: 2px;
    border-bottom: 2px solid #ffd54d;
    margin: 0;
    padding: 0 0 2rem 0;
    font-size: 1.1rem;
`;

const IntroText = () => {
    return (
      <Styledintro>
        <Styledintropara>
          Our minds make connections naturally all the time, trying to make
          sense of the patterns we see and the information we absorb. These
          interconnections when taught to be viewed holistically, as against
          singularly, can open up young minds to immense possibilities, fuel
          curiosity and enhance their learning appetites significantly.
          NetworkED is an initiative that introduces this new way of thinking to
          children, using real-world networks.
        </Styledintropara>
      </Styledintro>
    );
}

export default IntroText;
