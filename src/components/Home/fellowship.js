import React, {useRef, useEffect} from 'react';
import SubHeader from '../subheaders';
import FellowshipDesc from './Fellowship/fellowshippara';
import SectionHeader from '../../components/sectionheader';
import SubText from '../../components/subtext';
import { StyledFellowship } from '../../styles/fellowshipstyle';
import ScrollTrigger from 'gsap/ScrollTrigger';
import EasePack from 'gsap/EasePack';
import { gsap } from 'gsap/gsap-core';
import { CSSPlugin } from 'gsap/CSSPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerEffect(EasePack);
gsap.registerPlugin(CSSPlugin);

const Fellowship = () => {

    const subheadRef = useRef(null);
    const sectionhead1Ref = useRef(null);
    const sectionhead2Ref = useRef(null);
    const subtextRef = useRef(null);
    const rwtextRef = useRef(null);
    const designtextRef = useRef(null);

    const animateSections = el => {

        gsap.from(el, {
                scrollTrigger: {
                trigger: el,
                start: 'top 70%',
                end: 'top 30%',
                toggleActions: 'play pause reverse reverse',
                scrub: 1
            },
            opacity: 0,
            duration: 1,
            x: 50,
            scale: 1.05,

            }
        )
    }

    const animatePara = el => {

        gsap.from(el, {
                scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                end: 'top 40%',
                toggleActions: 'play pause reverse reverse',
                scrub: 1
            },
            opacity: 0,
            duration: 1,
            delay: 1,
            x: -50 
            }
        )
    }
    

  
    useEffect(()=>{

        animateSections(subheadRef.current);
        animateSections(sectionhead1Ref.current);
        animateSections(sectionhead2Ref.current);
        animatePara(subtextRef.current);
        animatePara(rwtextRef.current);
        animatePara(designtextRef.current);

    });

    return (
        <>
            <StyledFellowship
            >
                <SubHeader 
                    smalltext={`the`} 
                    text={`Fellowship`}
                    ref={subheadRef}
                    ></SubHeader>
                <SubText
                    text={`An immersive program for children to  investigate wicked problems in a highly interconnected world.`}
                    ref={subtextRef}
                />    
            </StyledFellowship>
            <StyledFellowship>
                <SectionHeader 
                    text=
                    {
                        `
                        Real-world Complex problems
                        `
                    }
                    ref={sectionhead1Ref}
                />
                <FellowshipDesc 
                text={
                    `
                    NetworkED hosts a fellowship program bringing children from diverse backgrounds together to investigate real-world social problems. 
This acts as a launchpad for children to explore real world complexity through different pathways. Through a range of challenging and immersive virtual and physical experiences, children investigate networks in the world around them, be it biological, physical or social. 

                    `
                }
                ref={rwtextRef}
                />
            </StyledFellowship>
            <StyledFellowship>
                <SectionHeader 
                    text=
                    {
                        `
                        Design of the Fellowship
                        `
                    }
                    ref={sectionhead2Ref}
                />
                <FellowshipDesc 
                text={
                    `
                    The fellowship is designed in collaboration with domain experts, researchers and educators to craft a meaningful and explorative experience focused on impact. Data and observations from the program forms the basis for research and development of a pedagogy centered around understanding the science of network thinking in children.
                    `
                }
                ref={designtextRef}
                />
            </StyledFellowship>
            
        </>
    )
};

export default Fellowship;
