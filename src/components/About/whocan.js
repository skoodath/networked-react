import React, { useEffect, useRef } from 'react';
import { StyledGetInvolved, StyledGetInvolvedWrapper, StyledInnerWrapper } from '../../styles/aboutstyle';
import Contact from './joinform';
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
import ContactUs from './contact';
import SectionHeader from '../sectionheader';

gsap.registerPlugin(scrollTrigger);


const WhoCan = () => {

    const getinvolvedRef = useRef(null);
    const whocanRef = useRef(null);
    const formRef = useRef(null);
    const contactmeRef = useRef(null);

    const animateSections = el => {

      gsap.from(el, {
              scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              end: 'top 40%',
              toggleActions: 'play none none none',
              scrub: 3
          },
          autoAlpha: 0,
          duration: 0.5,
          y: 50,
          }
      )
  }
  

  const animatePara = el => {

    gsap.from(el, {
            scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'play none none none',
            scrub: 3,
 
        },
        autoAlpha: 0,
        duration: 0.5,
        y: 50
        }
    )
}

    useEffect(() => {
      animateSections(getinvolvedRef.current);
      animatePara(whocanRef.current);
      animatePara(formRef.current);
    })
    useEffect(() => {
      gsap.from(contactmeRef.current, {
        scrollTrigger: {
        trigger: formRef.current,
        start: 'top 80%',
        end: 'top 60%',
        toggleActions: 'play none none none',
        scrub: 5,

      },
        opacity: 0,
        duration: 0.5,
        y: 50
      })
    })

    return (
      <>
        
        
        <StyledGetInvolvedWrapper>
          <SectionHeader     
              text={`Get Involved`}
              ref={getinvolvedRef}
            />
          <StyledInnerWrapper>
            
            <StyledGetInvolved ref={whocanRef}>
              Anyone interested in knowing how to enhance cognitive functions of children
              using network representations from real world experiences.
            </StyledGetInvolved>
          </StyledInnerWrapper>
          <StyledInnerWrapper>
            <Contact
              ref={formRef}
            />
            <ContactUs
              ref={contactmeRef}
            />
          </StyledInnerWrapper>
          
        </StyledGetInvolvedWrapper>
      </>
    );
}

export default WhoCan;
