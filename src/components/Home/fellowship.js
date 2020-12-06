import React, {useRef, useEffect} from 'react';
import { FellowshipText, StyledFellowship } from '../../styles/fellowshipstyle';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { gsap } from 'gsap/gsap-core';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { HeaderBig, HeaderSmall } from '../../styles/Reusable/subheaderstyle';
import { WrapperContainer } from '../../styles/Reusable/wrapperdivstyle';
import NewPathway from './Fellowship/pathway';
import pathway from './Fellowship/pathwaycards';
import SectionHeader from '../sectionheader';
import { PathwayList, PathwayWrap } from '../../styles/newpathwaystyle';

//import * as Scroll from 'react-scroll';
//import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const Fellowship = () => {

    const subheadRef = useRef(null);
    const smalltxt = useRef(null);
    const para1Ref = useRef(null);
    const para2Ref = useRef(null);
    const para3Ref = useRef(null);
    const para4Ref = useRef(null);

    const animateTitle = (el) => {

        gsap.from(el, {
            scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'restart none none none',
            scrub: 3
        },
        autoAlpha: 0,
        duration: 1,
        y: 50,
        ease: 'Expo.easeOut',
        })
    }

    const animatePara = () => {

        const tl = gsap.timeline()
        tl.from(para1Ref.current, {
                scrollTrigger: {
                trigger: para1Ref.current,
                start: 'top 80%',
                end: 'top 40%',
                toggleActions: 'restart none none none',
                scrub: 3

            },
            autoAlpha: 0,
            duration: 1,
            delay: 1,
            y: 50,
            ease: "Expo.easeOut"
            }
        )
        tl.from(para2Ref.current, {
            scrollTrigger: {
            trigger: para2Ref.current,
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'restart none none none',
            scrub: 3

            },
            autoAlpha: 0,
            duration: 1,
            delay: 1,
            y: 20,
            ease: "Expo.easeOut"
            }
        )
        tl.from(para3Ref.current, {
            scrollTrigger: {
            trigger: para3Ref.current,
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'restart none none none',
            scrub: 3

            },
            autoAlpha: 0,
            duration: 1,
            delay: 1,
            y: 20,
            ease: "Expo.easeOut"
            }
        )
        tl.from(para4Ref.current, {
            scrollTrigger: {
            trigger: para4Ref.current,
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'restart none none none',
            scrub: 3

            },
            autoAlpha: 0,
            duration: 1,
            y: 20,
            delay: 1,
            ease: "Expo.easeOut"
            }
        )
    }
    

  
    useEffect(()=>{
        
        animateTitle(smalltxt.current);
        animateTitle(subheadRef.current);
        animatePara(para2Ref.current);
    });

    return (
        <WrapperContainer>
            <StyledFellowship>   
                <HeaderSmall
                    ref={smalltxt}
                >the</HeaderSmall>
                <HeaderBig
                    ref={subheadRef}
                >Fellowship</HeaderBig>
        
                <FellowshipText fontsize fontwght bposition ref={para1Ref}>
                    Every year networkED hosts a fellowship program bringing children from diverse backgrounds together to investigate real-world situations.
                </FellowshipText>
                <FellowshipText ref={para2Ref}>
                    It acts as a launchpad for children to explore real world complexity through various pathways. 
                </FellowshipText>
                <FellowshipText ref={para3Ref}>
                    Children investigate real world biological, physical and social connections through a range of experiences, virtual and real.
                </FellowshipText>
                <FellowshipText ref={para4Ref}>
                    It is designed with the help of domain experts, researchers and educators to craft a meaningful and explorative experience grounded in impact for children.
                </FellowshipText>
            </StyledFellowship>
            <StyledFellowship hgt="auto">
                <SectionHeader
                    text={`Fellowship Pathway`} 
                />
                <PathwayWrap>
                    <PathwayList>
                    {pathway.map(paths => 
                                <NewPathway key={paths.id}
                                    pathwaySteps={paths}
                                />
                                )}
                    </PathwayList>
                </PathwayWrap>
                
                
            </StyledFellowship>
        </WrapperContainer>
    )
};

export default Fellowship;
