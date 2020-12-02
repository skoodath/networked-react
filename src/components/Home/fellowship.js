import React, {useRef, useEffect} from 'react';
import { FellowshipText, StyledFellowship } from '../../styles/fellowshipstyle';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { gsap } from 'gsap/gsap-core';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { HeaderBig, HeaderSmall } from '../../styles/Reusable/subheaderstyle';
import { WrapperContainer } from '../../styles/Reusable/wrapperdivstyle';
//import * as Scroll from 'react-scroll';
//import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const Fellowship = () => {

    const subheadRef = useRef(null);
    const smalltxt = useRef(null);
    const sectionhead1Ref = useRef(null);
    const sectionhead2Ref = useRef(null);
    const subtextRef = useRef(null);
    const rwtextRef = useRef(null);
    const designtextRef = useRef(null);

    const animateTitle = (s, b) => {

        gsap.from([s, b], {
            scrollTrigger: {
            trigger: s,
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'restart none none none',
            scrub: 3
        },
        autoAlpha: 0,
        duration: 0.5,
        x: 20,
        transformOrigin: 'top left',
        stagger: {
            amount: 0.5
        }

        }
    )
    }

    const animateSections = (el) => {

        gsap.from(el, {
                scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                end: 'top 40%',
                toggleActions: 'restart none none none',
                scrub: 1
            },
            autoAlpha: 0,
            duration: 1,
            scale: 1.1,
            transformOrigin: 'top left',
            ease: 'Expo.easeOut'
            }
        )
    }

    const animatePara = el => {

        gsap.from(el, {
                scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                end: 'top 40%',
                toggleActions: 'restart none none none',
                scrub: 1

            },
            autoAlpha: 0,
            duration: 1,
            delay: 0.5,
            y: 50 
            }
        )
    }
    

  
    useEffect(()=>{
        
        animateTitle(smalltxt.current, subheadRef.current);
        animateSections(sectionhead1Ref.current);
        animateSections(sectionhead2Ref.current);
        animateSections(subtextRef.current);
        animatePara(rwtextRef.current);
        animatePara(designtextRef.current);

    });

    /* useEffect(()=>{
        Events.scrollEvent.register('begin', (to, element)=>{
            console.log('begin', to, element);
        });
        Events.scrollEvent.register('end', (to, element)=> {
            console.log('end', to, element);
        })
    })
 */
    return (
        <WrapperContainer>
            <StyledFellowship>   
                <HeaderSmall
                    ref={smalltxt}
                >the</HeaderSmall>
                <HeaderBig
                    ref={subheadRef}
                >Fellowship</HeaderBig>
        
                <FellowshipText>
                    Every year networkED hosts a fellowship program bringing children from diverse backgrounds together to investigate real-world situations. It acts as a launchpad for children to explore real world complexity through various pathways. 
                    Children investigate real world biological, physical and social connections through a range of experiences, virtual and real. It is designed with the help of domain experts, researchers and educators to craft a meaningful and explorative experience grounded in impact for children.
                </FellowshipText>
            </StyledFellowship>
        </WrapperContainer>
    )
};

export default Fellowship;
