import React, { useEffect, useRef } from 'react';
import { StyledGetInvolved, StyledGetInvolvedWrapper, StyledInnerWrapper } from '../../styles/aboutstyle';
import SectionHeader from '../../components/sectionheader';
import Contact from './contact';
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(scrollTrigger);


const WhoCan = () => {

    const getinvolvedRef = useRef(null);
    const whocanRef = useRef(null);

    const animateSections = el => {

      gsap.from(el, {
              scrollTrigger: {
              trigger: el,
              start: 'top 70%',
              end: 'top 30%',
              toggleActions: 'play pause reverse reverse',
              scrub: 3
          },
          opacity: 0,
          duration: 1,
          scale: 1.1,
          letterSpacing: '5px',
          transformOrigin: 'top left'
          }
      )
  }

  const animatePara = el => {

    gsap.from(el, {
            scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top center+=70',
            toggleActions: 'play pause reverse reverse',
            scrub: 0.1,
 
        },
        autoAlpha: 0,
        duration: 0.5,
        delay: 1,
        y: 50 
        }
    )
}

    useEffect(() => {
      animateSections(getinvolvedRef.current);
      animatePara(whocanRef.current);
    })

    return (
      <>
        
        
        <StyledGetInvolvedWrapper>
          <SectionHeader text="Get Involved" ref={getinvolvedRef} />
          <StyledInnerWrapper>
            
            <StyledGetInvolved ref={whocanRef}>
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
