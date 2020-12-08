import React, { useEffect, useRef } from 'react'
import Benefit from './About/benefits';
import { Styledabout, Aboutus } from '../styles/aboutstyle';
import { gsap } from 'gsap/gsap-core';
import scrollTrigger from 'gsap/ScrollTrigger';
import { HeaderBig, HeaderSmall } from '../styles/Reusable/subheaderstyle';
import { WrapperContainer } from '../styles/Reusable/wrapperdivstyle';


gsap.registerPlugin(scrollTrigger);




const About = () => {

    const abtRef = useRef(null);
    const benefitRef = useRef(null);
    const subheadRef = useRef(null);
    const smalltxt = useRef(null);
    const para1Ref = useRef(null);
    const para2Ref = useRef(null);

  const animateTitle = (el) => {

    gsap.from(el, {
        scrollTrigger: {
        trigger: abtRef.current,
        start: 'top 25%',
        end: 'top 15%',
        toggleActions: 'restart none none none',
        scrub: 3
    },
      autoAlpha: 0,
      duration: 1,
      y: 100,
      ease: 'Expo.easeOut',
    })
}

const animatePara = () => {

    const tl = gsap.timeline()
    tl.from(para1Ref.current, {
          scrollTrigger: {
          trigger: abtRef.current,
          start: 'top 25%',
          end: 'top 15%',
          toggleActions: 'restart none none none',
          scrub: 4

        },
          autoAlpha: 0,
          duration: 0.5,
          delay: 1,
          y: 100,
          ease: "Expo.easeOut"
        }, "+=1.5")
    tl.from(para2Ref.current, {
          scrollTrigger: {
          trigger: abtRef.current,
          start: 'top 25%',
          end: 'top 15%',
          toggleActions: 'restart none none none',
          scrub: 5

        },
          autoAlpha: 0,
          duration: 1,
          y: 100,
          ease: "Expo.easeOut"
        }, "+=2")
    }


useEffect(()=>{
    
    animateTitle(smalltxt.current);
    animateTitle(subheadRef.current);
    animatePara();
});

    return (
        <WrapperContainer>
          <Styledabout name="about" ref={abtRef}>
            <HeaderSmall
              ref={smalltxt}
            >
              About
            </HeaderSmall>
            <HeaderBig 
              ref={subheadRef}
            >
              networkED
            </HeaderBig>
            <Aboutus ref={para1Ref}>
               We are a community of researchers, educators and mentors passionate about introducing a new way of thinking to children.
            </Aboutus>
            <Aboutus fontsize fontwght bposition ref={para2Ref}>
               Our goal is to create a thriving thought-pool of methods and tools to help children master the art of generating insights using networks in real world.
            </Aboutus>
          </Styledabout>
            <Styledabout hgt="auto" ref={benefitRef}>
              <Benefit />
            </Styledabout>
        </WrapperContainer>
    );
}

export default About;