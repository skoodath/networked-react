import React, {useRef, useEffect, useState} from 'react';
import SubText from '../subtext';
import { gsap } from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { WrapperContainer } from '../../styles/Reusable/wrapperdivstyle';
import { InnerWrapper, IntroParaWrapper, Styledintropara, StyledPlaybtn, StyledPlaytext, StyledPlayWrapper } from '../../styles/introstyle';
import IntroVideo from './Intro/video';
import { CTAButton } from '../../styles/Reusable/getinvolvedbtnstyle';

gsap.registerPlugin(scrollTrigger);
gsap.registerPlugin(CSSPlugin);

const Intro = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [ctaHover, setctaHover] = useState(false);

  const modalOpener = () => {
    setModalOpen(true);
  }

  const innerRef = useRef(null);
  const introRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const para3Ref = useRef(null);
  const ctaRef = useRef(null);

      
  const animateSections = (el, trigger) => {

      const tl = gsap.timeline();
      tl.fromTo(introRef.current, {
            autoAlpha: 0,
            y: 100
            },
            {
              scrollTrigger: {
              trigger: innerRef.current,
              start: 'top 25%',
              end: 'top 15%',
              toggleActions: 'play none none none',
              scrub: 3
          },
          autoAlpha: 1,
          duration: 1,
          y: 0,
          ease: 'Expo.easeOut'
          },"+=2.5")
      tl.fromTo(para1Ref.current, {
        autoAlpha: 0,
        y: 100
        },
        {
          scrollTrigger: {
          trigger: innerRef.current,
          start: 'top 25%',
          end: 'top 15%',
          toggleActions: 'play none none none',
          scrub: 4
      },
      autoAlpha: 1,
      duration: 1,
      y: 0,
      ease: 'Expo.easeOut'
    },"+=0.5")
      tl.fromTo(para2Ref.current, {
        autoAlpha: 0,
        y: 100
        },
        {
          scrollTrigger: {
          trigger: innerRef.current,
          start: 'top 25%',
          end: 'top 15%',
          toggleActions: 'play none none none',
          scrub: 5
      },
      autoAlpha: 1,
      duration: 1,
      y: 0,
      ease: 'Expo.easeOut'
    },"+=0.1")
    tl.fromTo(para3Ref.current, {
      autoAlpha: 0,
      y: 100
      },
      {
        scrollTrigger: {
        trigger: innerRef.current,
        start: 'top 25%',
        end: 'top 15%',
        toggleActions: 'play none none none',
        scrub: 6
    },
    autoAlpha: 1,
    duration: 1,
    y: 0,
    ease: 'Expo.easeOut'
    }, "+=1.5")
      
  }


  useEffect(()=>{
      animateSections();
      
  },[]);
  useEffect(()=> {

      let catchHover = ctaHover;

      if (catchHover) {
        console.log(catchHover);
        gsap.to(ctaRef.current, {
          css: {
            backgroundColor: '#ffd54d',
            color: '#ffffff'
          },
          duration: 0.3
        })
      } else if (!catchHover) {
        console.log(catchHover)
        gsap.to(ctaRef.current, {
          css: {
            backgroundColor: '#ffffff',
            color: '#ffd54d'
          },
          duration: 0.3
        })
      }
      
  })

    return (
      <>
        <WrapperContainer>
          <InnerWrapper ref={innerRef}>
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
            <StyledPlayWrapper onClick={modalOpener}>
              <StyledPlaybtn />
              <StyledPlaytext>Watch Video</StyledPlaytext>
            </StyledPlayWrapper>
            <IntroVideo openModal={modalOpen} setOpenModel={setModalOpen} />
            <CTAButton 
              to="getinvolved"
              smooth={true} 
              offset={-50} 
              duration={500}
              ref={ctaRef}
              onMouseEnter={()=>setctaHover(true)}
              onMouseLeave={()=>setctaHover(false)}
              >
                Get Involved
              </CTAButton>
          </InnerWrapper>
          
        </WrapperContainer>
      </>
    );
}

export default Intro;


