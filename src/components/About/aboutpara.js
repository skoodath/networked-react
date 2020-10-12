import React from 'react';
import styled from 'styled-components';

const Aboutus = styled.p`
  width: 80%;
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
        We’re an open community of passionate researchers, educators and
        industry mentors with a common interest to introduce this new way of
        thinking to kids across different countries. The goal of the community
        is to create a thriving thought-pool of methods and tools to help
        children master the art of insight generation using real-world networks.
      </Aboutus>
    );
}

export default AboutPara;
