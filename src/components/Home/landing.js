import React, { useEffect, useRef } from 'react';
import Particles from 'react-particles-js';
import { Styledlanding, Styledheader } from '../../styles/landingstyle';
import { CSSPlugin, gsap} from 'gsap';
import {EasePack} from 'gsap/EasePack';
import Scroll from './Landing/scrolldown';

gsap.registerPlugin(EasePack);
gsap.registerPlugin(CSSPlugin);

const Landing = () => {

   let theRef = useRef(null);
   let languageRef = useRef(null);
   let ofRef = useRef(null);
   let thoughtRef = useRef(null);
   let particleRef = useRef(null);

   useEffect(() => {

      gsap.from(theRef.current,{
        opacity: 0,
        y: 100,
        duration: 1,
        delay: 1

      });
      gsap.from(ofRef.current,{
        opacity: 0,
        y: -100,
        duration: 1,
        delay: 1

      });

      gsap.from(languageRef.current,{
          opacity: 0,
          duration: 1,
          delay: 2
        
        });
        gsap.from(thoughtRef.current,{
          opacity: 0,
          duration: 1,
          delay: 2
        });

   });

    return (
      <Styledlanding>
        <Scroll />
        <Styledheader boldness="300" mysize="2rem" textt="lowercase"
          ref={theRef}
        >
            The
        </Styledheader>
        <Styledheader boldness="300" mysize="4rem" textt="uppercase"
          ref={languageRef}
        >
            Language
        </Styledheader>
        <Styledheader boldness="300" mysize="2rem" textt="lowercase"
          ref={ofRef}
        >
            Of
        </Styledheader>
        <Styledheader boldness="300" mysize="5.5rem" textt="Proper"
          ref={thoughtRef}
    
        >
            Thought
        </Styledheader>

        <Particles
          ref={particleRef}
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
                value: 30,
                density: {
                  enable: true,
                  value_area: 1440,
                },
              },
              color: {
                value: "#fff",
              },
              shape: {
                type: "square",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 6,
                },
                image: {
                  src: "./src/illustrations/networkEd.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.8,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.2,
                  sync: true,
                },
              },
              size: {
                value: 40,
                random: true,
                anim: {
                  enable: false,
                  speed: 10,
                  size_min: 0.3,
                  sync: true,
                },
              },
              line_linked: {
                enable: true,
                distance: 300,
                color: "#fff",
                opacity: 0.6,
                width: 0.8,
              },
              move: {
                enable: false,
                speed: 1,
                direction: "random",
                random: true,
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
