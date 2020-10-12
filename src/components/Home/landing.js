import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';


const Styledlanding = styled.section`
  height: 100vh;
  background: #ffd54d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: relative;

`;

const Styledheader = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-weight: ${({ boldness }) => boldness};;
  font-size: ${({ mysize }) => mysize};
  text-transform: ${({ textt }) => textt};
  display: block;
`;


const Landing = () => {
    return (
      <Styledlanding>
        <Styledheader boldness="300" mysize="2rem" textt="lowercase">
            The
        </Styledheader>
        <Styledheader boldness="300" mysize="4rem" textt="uppercase">
            Language
        </Styledheader>
        <Styledheader boldness="300" mysize="2rem" textt="lowercase">
            Of
        </Styledheader>
        <Styledheader boldness="300" mysize="5.5rem" textt="Proper">
            Thought
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
                value: 60,
                density: {
                  enable: true,
                  value_area: 1200,
                },
              },
              color: {
                value: "#977e2b",
              },
              shape: {
                type: "polygon",
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
                value: 0.6,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 20,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 200,
                color: "#977e2b",
                opacity: 0.4,
                width: 0.6,
              },
              move: {
                enable: true,
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
