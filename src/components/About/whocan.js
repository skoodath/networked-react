import React from 'react';
import { StyledGetInvolved, StyledGetInvolvedWrapper, StyledInnerWrapper } from '../../styles/aboutstyle';
import SectionHeader from '../../components/sectionheader';
import Contact from './contact';


const WhoCan = () => {
    return (
      <>
        
        
        <StyledGetInvolvedWrapper>
          <SectionHeader text="Get Involved" />
          <StyledInnerWrapper>
            
            <StyledGetInvolved>
            Anyone interested in how to enhance cognitive functions of children
            using network representations from real world experiences.
            </StyledGetInvolved>
          </StyledInnerWrapper>
          <Contact />
        </StyledGetInvolvedWrapper>
        
      </>
    );
}

export default WhoCan;
