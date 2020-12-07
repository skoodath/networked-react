import React, {useRef, useEffect} from 'react';
import SubText from '../subtext';
import { gsap } from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
//import { CTAButton } from '../../styles/Reusable/getinvolvedbtnstyle';
import { WrapperContainer } from '../../styles/Reusable/wrapperdivstyle';
import { InnerWrapper, IntroParaWrapper, Styledintropara } from '../../styles/introstyle';

gsap.registerPlugin(scrollTrigger);

const Intro = () => {
  const introRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const para3Ref = useRef(null);

      
  const animateSections = (el, trigger) => {

      const tl = gsap.timeline();
      tl.fromTo(introRef.current, {
            autoAlpha: 0,
            y: 50
            },
            {
              scrollTrigger: {
              trigger: introRef.current,
              start: 'top 80%',
              end: 'top 40%',
              toggleActions: 'restart none none none',
              scrub: 3
          },
          autoAlpha: 1,
          duration: 1,
          y: 0,
          ease: 'Expo.easeOut'
          })
      tl.fromTo(para1Ref.current, {
        autoAlpha: 0,
        y: 50
        },
        {
          scrollTrigger: {
          trigger: para1Ref.current,
          start: 'top 80%',
          end: 'top 40%',
          toggleActions: 'restart none none none',
          scrub: 3
      },
      autoAlpha: 1,
      duration: 1,
      y: 0,
      ease: 'Expo.easeOut'
    },"+=1")
      tl.fromTo(para2Ref.current, {
        autoAlpha: 0,
        y: 50
        },
        {
          scrollTrigger: {
          trigger: para2Ref.current,
          start: 'top 80%',
          end: 'top 40%',
          toggleActions: 'restart none none none',
          scrub: 3
      },
      autoAlpha: 1,
      duration: 1,
      y: 0,
      ease: 'Expo.easeOut'
    })
    tl.fromTo(para3Ref.current, {
      autoAlpha: 0,
      y: 50
      },
      {
        scrollTrigger: {
        trigger: para3Ref.current,
        start: 'top 80%',
        end: 'top 40%',
        toggleActions: 'restart none none none',
        scrub: 3
    },
    autoAlpha: 1,
    duration: 1,
    y: 0,
    ease: 'Expo.easeOut'
    })
      
  }


  useEffect(()=>{
      animateSections();
  });

    return (
      <>
        <WrapperContainer>
          <InnerWrapper>
            <SubText
              ref={introRef}
              text={`A new way of thinking`}
            />
            <IntroParaWrapper>
            <Styledintropara ref={para1Ref}>
                Our minds make connections all the time, trying to make
                sense of the patterns we see and the information we absorb.
            </Styledintropara>
            <Styledintropara ref={para2Ref}>
                These
                interconnections when taught to be viewed holistically, can open up young minds to immense possibilities, fuel
                curiosity and enhance their learning appetite.
            </Styledintropara>
            <Styledintropara ref={para3Ref} fontsize fontwght bposition>
                networkED introduces this new way of thinking to
                children, using networks interconnecting the real world.
            </Styledintropara>
        </IntroParaWrapper>
          </InnerWrapper>
        </WrapperContainer>
      </>
    );
}

export default Intro;


