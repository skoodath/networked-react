import React, {useRef, useEffect} from 'react';
import SubText from '../subtext';
import { gsap } from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
import IntroText from './Intro/introtext';
//import { CTAButton } from '../../styles/Reusable/getinvolvedbtnstyle';
import { WrapperContainer } from '../../styles/Reusable/wrapperdivstyle';
import { InnerWrapper } from '../../styles/introstyle';

gsap.registerPlugin(scrollTrigger);

const Intro = () => {
  const introRef = useRef(null);
  const videoRef = useRef(null);
  //const introtextRef = useRef(null);

      
  const animateSections = (el, trigger) => {

      gsap.fromTo(el, {
            autoAlpha: 0,
            y: 120
            },
            {
              scrollTrigger: {
              trigger: trigger,
              start: 'top 80%',
              end: 'top 40%',
              toggleActions: 'restart none reverse reverse',
              scrub: 3
          },
          autoAlpha: 1,
          duration: 0.7,
          y: 0,
          ease: 'Expo.easeOut'
          }
      )
  }


  useEffect(()=>{
      animateSections(introRef.current, introRef.current);
      animateSections(videoRef.current, videoRef.current);
      //animateSections(introtextRef.current, introtextRef.current);

  });

    return (
      <>
        <WrapperContainer>
          <InnerWrapper>
            <SubText
              ref={introRef}
              text={`A new way of thinking`}
            />
            <IntroText
            //ref={introtextRef}
            />
          </InnerWrapper>
        </WrapperContainer>
      </>
    );
}

export default Intro;


