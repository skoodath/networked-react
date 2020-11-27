import React, { useEffect, useRef } from 'react'
import SubText from './subtext';
import AboutPara from './About/aboutpara';
import WhoCan from './About/whocan';
import Benefit from './About/benefits';
import { Styledabout } from '../styles/aboutstyle';
import { gsap } from 'gsap/gsap-core';
import scrollTrigger from 'gsap/ScrollTrigger';
import { HeaderBig, HeaderSmall } from '../styles/Reusable/subheaderstyle';
import Header from './Home/header';
import Scroll from './Home/Landing/scrolldown';


gsap.registerPlugin(scrollTrigger);




const About = () => {

    const subheadRef = useRef(null);
    const smalltxt = useRef(null);
    const sectionhead1Ref = useRef(null);
    const subtextRef = useRef(null);

    const animateLanding = (s, b, el) => {

      const tl = gsap.timeline();

      tl.from(s, {
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.5,
        y: -10,
        scale: 1.01,
        transformOrigin: 'top left',
        ease: 'Power4.easeOut'
      })
      tl.from(b, {
        autoAlpha: 0,
        duration: 0.8,
        x: -10,
        scale: 1.02,
        transformOrigin: 'top left',
        ease: 'Power4.easeOut'
      }, '-=0.3')
      tl.from(el, {
        autoAlpha: 0,
        duration: 0.8,
        y: 20,
        transformOrigin: 'top left',
        color: '#ffd54d',
        ease: 'Power4.easeOut'
        }, '-=0.5')

    };


    const animateSections = el => {

      gsap.fromTo(el, {
            autoAlpha: 0,
            y: 100
            },
            {
              scrollTrigger: {
              trigger: el,
              start: '0% 65%',
              end: '0% 30%',
              toggleActions: 'play none none reverse',
              },
              autoAlpha: 1,
              duration: 1,
              delay: 0.3,
              y: 0,
              ease: 'Power4.easeOut'
          }
      )
    }

    useEffect(()=>{
      window.scrollTo(0, 0);
    },[]);
    useEffect(()=>{

        animateLanding(smalltxt.current, subheadRef.current, subtextRef.current);
        animateSections(sectionhead1Ref.current);


    });

    return (
      <>
        <Header />
        <Scroll />
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
          <Styledabout>
            <Benefit />
          </Styledabout>
        <Styledabout hgt="100vh">
          <WhoCan />
        </Styledabout>

      </>
    );
}

export default About;