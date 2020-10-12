import React from 'react';
import styled from 'styled-components';

const WhoCanJoin = styled.p`
  width: 80%;
  border-bottom: 3px solid #ffd54d;
  margin: 1rem auto 2rem;
  padding: 0 0 2rem 0;
  letter-spacing: 2px;
  line-height: 2;
  font-size: 1.1em;
`;
const WhoCanHeader = styled.h2`
  width: 80%;
  font-size: 2em;
  margin: 1rem auto 0;
`;

const WhoCan = () => {
    return (
      <>
        <WhoCanHeader>Who Can Join</WhoCanHeader>
        <WhoCanJoin>
          Anyone interested in how to enhance cognitive functions of children
          using network representations from real world experiences.
        </WhoCanJoin>
      </>
    );
}

export default WhoCan;
