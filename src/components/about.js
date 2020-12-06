import React, { useEffect, useRef } from 'react'
import Benefit from './About/benefits';
import { Styledabout, Aboutus } from '../styles/aboutstyle';
import { gsap } from 'gsap/gsap-core';
import scrollTrigger from 'gsap/ScrollTrigger';
import { HeaderBig, HeaderSmall } from '../styles/Reusable/subheaderstyle';
import { WrapperContainer } from '../styles/Reusable/wrapperdivstyle';


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
        <WrapperContainer>
          <Styledabout>
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
            <Aboutus>
               We are a community of researchers, educators and mentors passionate about introducing a new way of thinking to children.
            </Aboutus>
            <Aboutus fontsize fontwght bposition>
               Our goal is to create a thriving thought-pool of methods and tools to help children master the art of generating insights using networks in real world.
            </Aboutus>
          </Styledabout>
            <Styledabout hgt="auto">
              <Benefit />
            </Styledabout>
        </WrapperContainer>
    );
}

export default About;