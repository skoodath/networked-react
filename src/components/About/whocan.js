import React from 'react';
import { StyledGetInvolved, StyledGetInvolvedWrapper, StyledInnerWrapper } from '../../styles/aboutstyle';
import SectionHeader from '../../components/sectionheader';
import JoinUs from './joinform';


const WhoCan = () => {
    return (
      <>
        
        
        <StyledGetInvolvedWrapper>
          <StyledInnerWrapper>
            <SectionHeader text="Get Involved" />
            <StyledGetInvolved>
            Anyone interested in how to enhance cognitive functions of children
            using network representations from real world experiences.
        </StyledGetInvolved>
          </StyledInnerWrapper>
          
        <JoinUs />
        </StyledGetInvolvedWrapper>
        
      </>
    );
}

export default WhoCan;
