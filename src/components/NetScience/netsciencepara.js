import React from 'react';
import styled from 'styled-components';

const AboutNetWorkScience = styled.p`
  border-bottom: 2px solid #ffd54d;
  margin: 2rem auto 2rem;
  padding: 0 0 2rem 0;
  letter-spacing: 2px;
  line-height: 2;
  font-size: 1.1rem;
`;

const NetSciPara = () => {
    return (
        <AboutNetWorkScience>
            It is an emerging science which provides a wiring diagram of any complex real world system be it society, spread of diseases or even the wiring of the brain. It unpacks the similarities, differences, relationships and connectivity amongst all parts within the networks revealing the mechanistic nature of the world we live in.
        </AboutNetWorkScience>
    );
}

export default NetSciPara;