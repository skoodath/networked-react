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
                    NetworkED hosts a fellowship program bringing children from diverse backgrounds together to investigate real-world social problems. 
This acts as a launchpad for children to explore real world complexity through different pathways. Through a range of challenging and immersive virtual and physical experiences, children investigate networks in the world around them, be it biological, physical or social. 

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
                    The fellowship is designed in collaboration with domain experts, researchers and educators to craft a meaningful and explorative experience focused on impact. Data and observations from the program forms the basis for research and development of a pedagogy centered around understanding the science of network thinking in children.
                    `
                }/>
            </StyledFellowship>
            
        </>
    )
}

export default Fellowship;
