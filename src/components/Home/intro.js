import React, {useRef, useEffect} from 'react';
import SubText from '../subtext';
import { Styledintro } from '../../styles/introstyle';
import { gsap } from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
import IntroText from './Intro/introtext';
import IntroVideo from './Intro/video';

gsap.registerPlugin(scrollTrigger);

const Intro = () => {
  const introRef = useRef(null);
  const videoRef = useRef(null);
  const introtextRef = useRef(null);
  const containerRef = useRef(null);

      
  const animateSections = el => {

      gsap.fromTo(el, {
            autoAlpha: 0,
            scale: 0.9,
            y: 70
            },
            {
              scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              end: 'top 50%',
              toggleActions: 'restart none reverse reverse',
              scrub: 3
          },
          autoAlpha: 1,
          duration: 1,
          scale: 1,
          y: 0,
          ease: 'Expo.easeOut'
          }
      )
  }

  useEffect(()=>{
      animateSections(introRef.current);
      animateSections(videoRef.current);
      animateSections(introtextRef.current);

  });

    return (
      <>
        <Styledintro
          ref={containerRef}
          topBottom='0'
          leftRight='10%'
        >
          <SubText
            ref={introRef}
            text={`NetworkED is an initiative for children to discover how everything is connected in the world around them. 
            The method integrates the core principles of Network Theory, complex adaptive systems and Relational Thinking, enabling children to explore complexity with ease`}
          />

        </Styledintro>
        <Styledintro
          topBottom='0'
          leftRight='0'
          hgt='auto'
        >
          <IntroVideo
            ref={videoRef} 
          />

        </Styledintro>
        <Styledintro
          topBottom='0'
          leftRight='10%'
        >
          <IntroText
           ref={introtextRef}
          />
        </Styledintro>
      </>
    );
}

export default Intro;


