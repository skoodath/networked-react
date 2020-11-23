import React, { useEffect, useRef } from 'react'
import { ThemeProvider } from 'styled-components';
import SubText from './subtext';
import AboutPara from './About/aboutpara';
import WhoCan from './About/whocan';
import Benefit from './About/benefits';
import { Styledabout } from '../styles/aboutstyle';
import { gsap } from 'gsap/gsap-core';
import scrollTrigger from 'gsap/ScrollTrigger';
import { EasePack } from 'gsap/EasePack';
import { HeaderBig, HeaderSmall } from '../styles/Reusable/subheaderstyle';

gsap.registerPlugin(scrollTrigger);
gsap.registerEffect(EasePack);


const theme = {
  main: "#ffd54d"
};

const About = () => {

    const subheadRef = useRef(null);
    const smalltxt = useRef(null);
    const sectionhead1Ref = useRef(null);
    const subtextRef = useRef(null);

    const animateLanding = (s, b) => {

      const tl = gsap.timeline();

      tl.from(s, {
        opacity: 0,
        duration: 0.5,
        x: 50,
        transformOrigin: 'top left',

      }, '+=1')
      tl.from(b, {
        opacity: 0,
        duration: 0.5,
        x: 50,
        transformOrigin: 'top left',
      })

    };

    const animateSubtext = el => {

      gsap.from(el, {
          opacity: 0,
          duration: 0.5,
          delay: 1.8,
          x: -50 
          }
      )
  }

    const animateSections = el => {

      gsap.fromTo(el, {
            opacity: 0,
            y: 50
            },
            {
              scrollTrigger: {
              trigger: el,
              start: 'top 70%',
              end: 'top 50%',
              toggleActions: 'play none reverse reverse',
              scrub: 2,
              },
              opacity: 1,
              duration: 0.7,
              delay: 0.3,
              y: 0,

          }
      )
    }

  
    useEffect(()=>{

        animateLanding(smalltxt.current, subheadRef.current);
        animateSubtext(subtextRef.current);
        animateSections(sectionhead1Ref.current);


    });

    return (
      <>
        <Styledabout hgt="100vh" >
          <HeaderSmall
            ref={smalltxt}
          >
            About
          </HeaderSmall>
          <HeaderBig 
            ref={subheadRef}
          >
            networked
          </HeaderBig>
          <SubText
            text={`NetworkED is an initiative that introduces this new way of thinking to children, using real-world networks`}
            ref={subtextRef}
          />
        </Styledabout>
        <Styledabout hgt="100vh">
          <AboutPara 
            ref={sectionhead1Ref}
          />
        </Styledabout>
        <ThemeProvider theme={theme}>
          <Styledabout>
            <Benefit />
          </Styledabout>
        </ThemeProvider>
        <Styledabout hgt="100vh">
          <WhoCan />
        </Styledabout>

      </>
    );
}

export default About;