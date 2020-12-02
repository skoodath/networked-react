import React from 'react';
import Particles from 'react-particles-js';
import { Styledlanding, Styledheader, LandingOverlay } from '../../styles/landingstyle';
import { CSSPlugin, gsap} from 'gsap';
import {EasePack} from 'gsap/EasePack';
import Scroll from './Landing/scrolldown';
import networked from '../../illustrations/NetworkEd.png';

gsap.registerPlugin(EasePack);
gsap.registerPlugin(CSSPlugin);

const Landing = () => {

    return (
      <Styledlanding>
        <Scroll />
        <LandingOverlay>
          <img src={networked} alt={'networkED Logo in the center'} />
        </LandingOverlay>
        <Styledheader
        >
            The Language of Thought
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
                type: ['circle'],
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
                  sync: false,
                },
              },
              size: {
                value: 20,
                random: true,
                anim: {
                  enable: true,
                  speed: 5,
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
