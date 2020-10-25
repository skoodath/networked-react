import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../../components/sectionheader';


const StyledGetInvolved = styled.p`
  width: 80%;
  border-bottom: 3px solid #ffd54d;
  margin: 1rem auto 0;
  padding: 0 0 2rem 0;
  letter-spacing: 2px;
  line-height: 2;
  font-size: 1.1em;
`;


const WhoCan = () => {
    return (
      <>
        
        <SectionHeader 
        text="Get Involved" 
        />

        <StyledGetInvolved>
          Anyone interested in how to enhance cognitive functions of children
          using network representations from real world experiences.
        </StyledGetInvolved>
      </>
    );
}

export default WhoCan;
