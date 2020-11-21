import React, {useRef, useEffect} from 'react';
import SubText from '../subtext';
import { Styledintro } from '../../styles/introstyle';
import { gsap, Power2 } from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
import IntroText from './Intro/introtext';
import IntroVideo from './Intro/video';

gsap.registerPlugin(scrollTrigger);

const Intro = () => {
  const introRef = useRef(null);
  const videoRef = useRef(null);
  const introtextRef = useRef(null);
      
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
          duration: 1,
          delay: 0.3,
          y: 0,
          ease: Power2.easeOut
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


