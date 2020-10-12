import React from 'react';
import styled from 'styled-components';
import SubHeader from '../subheaders';
import FellowshipDesc from './Fellowship/fellowshippara';
import SectionHeader from '../../components/sectionheader';
import SubText from '../../components/subtext';
import LearnMore from '../../components/learnmore';


const StyledFellowship = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0;
    height: 100vh;
    justify-content: center;
    align-items: center;
    margin: 3rem 0 0 0;
`;

const Fellowship = () => {
    return (
        <>
            <StyledFellowship>
                <SubHeader smalltext={`the`} text={`Fellowship`}></SubHeader>
                <SubText
                    text={`An immersive program for children to  investigate wicked problems in a highly interconnected world.`}
                />    
                <LearnMore />
            </StyledFellowship>
            <StyledFellowship>
                <SectionHeader 
                    text=
                    {
                        `
                        Real-world Complex problems
                        `
                    } 
                />
                <FellowshipDesc 
                text={
                    `
                    Every year, NetworkED hosts a short fellowship program which brings together children from diverse economic and cultural backgrounds to investigate real-world social problems. 
The fellowship acts as a launchpad for children to explore real world complexity through different pathways. The fellowship is immersive and challenging, as children investigate real world biological, physical and social networks through a range of digital and physical experiences.

                    `
                }/>
            </StyledFellowship>
            <StyledFellowship>
                <SectionHeader 
                    text=
                    {
                        `
                        Design of the Fellowship
                        `
                    } 
                />
                <FellowshipDesc 
                text={
                    `
                    The design of the fellowship is done well in advance in collaboration with domain experts, researchers and educators to craft a meaningful and explorative experience grounded in impact. Data and observations from the fellowship program feed into long term research and pedagogy development centered around understanding the science of network thinking in children.
                    `
                }/>
            </StyledFellowship>
            
        </>
    )
}

export default Fellowship;
