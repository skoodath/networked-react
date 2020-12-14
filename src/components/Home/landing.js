import React, { useEffect, useRef } from 'react';
import Particles from 'react-particles-js';
import { Styledlanding, Styledheader, LandingOverlay } from '../../styles/landingstyle';
import { CSSPlugin, gsap} from 'gsap';
import Scroll from './Landing/scrolldown';
import networked from '../../illustrations/NetworkEd.png';
import hummingbirds from '../../illustrations/hummingbird.svg';

gsap.registerPlugin(CSSPlugin);

const Landing = () => {

    const overlayRef = useRef(null);
    const logoRef = useRef(null);
    const headerRef1 = useRef(null);
    const headerRef2 = useRef(null);
    const scrollRef = useRef(null);

    const animateLanding = () => {

      gsap.from(headerRef1.current, {
        opacity: 0,
        y: 90,
        duration: 1.5,
        delay: 2.3,
        ease: 'Expo.easeOut'
      })
      gsap.from(headerRef2.current, {
        autoAlpha: 0,
        y: 90,
        duration: 1.5,
        delay: 2.4,
        ease: 'Expo.easeOut'
      })
      gsap.from(logoRef.current, {
        autoAlpha: 0,
        duration: 1,
        delay: 2.2,
        scale: 0.8,
        ease: 'Expo.easeOut'
      })
      gsap.from(overlayRef.current, {
        opacity: 0,
        backgroundColor: '#ffd54e',
        duration: 2,
        delay: 2,
        ease: 'Expo.easeOut'
      })
      
      gsap.from(scrollRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 2.6,
        ease: 'Power4.easeOut'
      })
    }

    useEffect(()=> {
      animateLanding();
    }, [])

    return (
      <Styledlanding name="landing">
        <Scroll ref={scrollRef} />
        <LandingOverlay ref={overlayRef}>
          <img src={networked} alt={'networkED Logo in the center'} ref={logoRef} />
        </LandingOverlay>
        <Styledheader>
            <div ref={headerRef1}>The Language</div>
        </Styledheader>
        <Styledheader>
            <div ref={headerRef2}>Of Thought</div>
        </Styledheader>
        <Particles
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
          }}
          params={{
            particles: {
              number: {
                value: 20,
                density: {
                  enable: true,
                  value_area: 1440,
                },
              },
              color: {
                value: "#fff",
              },
              shape: {
                type: "image",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 6,
                },
                image: {
                  src: hummingbirds,
                  width: 800,
                  height: 800,
                },
              },
              opacity: {
                value: 0.8,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.2,
                  sync: false,
                },
              },
              size: {
                value: 40,
                random: true,
                anim: {
                  enable: true,
                  speed: 5,
                  size_min: 1,
                  sync: true,
                },
              },
              line_linked: {
                enable: true,
                distance: 300,
                color: "#e6b000",
                opacity: 0.7,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.2,
                direction: "random",
                random: false,
                straight: false,
                out_mode: "bounce",
                bounce: false,
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: {
                  enable: false,
                  mode: "grab",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 30,
                  duration: 2,
                  opacity: 6,
                  speed: 2,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </Styledlanding>
    );
}

export default Landing;
