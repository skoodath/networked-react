import React from 'react';
import styled from 'styled-components';

const Aboutus = styled.p`
  margin: 2rem auto;
  border-bottom: 2px solid #ffd54d;
  padding: 0 0 2rem 0;
  letter-spacing: 2px;
  line-height: 2;
  font-size: 1.1rem;
`;

const AboutPara = () => {
    return (
      <Aboutus>
        We’re a community of researchers, educators and mentors passionate about introducing this new way of
        thinking to children. The goal is to create a thriving thought-pool of methods and tools to help
        children master the art of generating insights using networks in real world.
      </Aboutus>
    );
}

export default AboutPara;
