import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import cardone from '../../illustrations/inf7.png';
import cardtwo from '../../illustrations/inf1.png';
import cardthree from '../../illustrations/inf2.png';
import cardfour from '../../illustrations/inf6.png';
import cardfive from '../../illustrations/inf5.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const BenefitContainer = styled.section`
    display: grid;
    width: 80%;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(12, 1fr);
    height: 100%;
    margin: 0 auto;
    gap: 10px;
`;

const CommunityBenefits = styled.h2`
    font-size: 2em;
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    margin: 4rem 0 0 0;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-self: center;
  grid-column-start: ${({ gcstart }) => gcstart};
  grid-column-end: ${({ gcend }) => gcend};
  grid-row-start: ${({ grstart }) => grstart};
  grid-row-end: ${({ grend }) => grend};
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 146px;
  &:hover div {
    opacity: 1;
  }
  &:focus div {
    opacity: 1;
  }
`;


const CardHeader = styled.h3`
    font-weight: bold;
`;

const CardImage = styled.img`
    width: 120px;
    height: 120px;
    display: block;

`;
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #fff;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  transition-property: opacity;
  transition-timer-function: ease-in-out;
  transition-duration: 0.7s;
  &:hover {
    opacity: 1;
  }
`;

const Benefits = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
      
      gsap.from(".actionable-item",{ 
        scrollTrigger: {
          trigger: ".actionable-item",
          toggleActions: "restart pause restart pause"
        },
        y: "100",
        start: "10% 80%",
        opacity: 0,
        duration: 2,
        ease: "Power4.easeOut" });
    }, []);

    const actionable = useRef(null);

    return (
      <BenefitContainer>
        <CommunityBenefits>Community Benefits</CommunityBenefits>
        <GridItem className="actionable-item"
          gcstart="1"
          gcend="4"
          grstart="3"
          grend="6"
          onClick={() => {
            return (actionable.current.style.opacity? "" : "1");
          }}
        >
          <CardImage src={cardone} alt="Actionable Solutions" />
          <CardHeader>Actionable Solutions</CardHeader>
          <Overlay ref={actionable}>
            <p>
              A library of educational resources (curriculum, tools and methods)
              that can be immediately put to practice
            </p>
          </Overlay>
        </GridItem>
        <GridItem gcstart="4" gcend="-1" grstart="3" grend="6">
          <CardImage src={cardtwo} alt="Actionable Solutions" />
          <CardHeader>Domain Expertise</CardHeader>
          <Overlay>
            <p>
              Access to academia and opportunities that are relevant and provide
              exposure to the field of Systems, Complex Systems and Network
              Science
            </p>
          </Overlay>
        </GridItem>
        <GridItem gcstart="1" gcend="4" grstart="6" grend="9">
          <CardImage src={cardthree} alt="Actionable Solutions" />
          <CardHeader>Peer Networks</CardHeader>
          <Overlay>
            <p>
              Connect with like minded people of your choice to enrich your
              learning process
            </p>
          </Overlay>
        </GridItem>
        <GridItem gcstart="4" gcend="-1" grstart="6" grend="9">
          <CardImage src={cardfour} alt="Actionable Solutions" />
          <CardHeader>Latest Events</CardHeader>
          <Overlay>
            <p>
              Stay informed on conferences and news around network thinking
              across the globe
            </p>
          </Overlay>
        </GridItem>
        <GridItem gcstart="2" gcend="6" grstart="9" grend="12">
          <CardImage src={cardfive} alt="Actionable Solutions" />
          <CardHeader>Small Wins</CardHeader>
          <Overlay>
            <p>
              A space to celebrate your progress, be it classroom victories or
              nailing project milestones
            </p>
          </Overlay>
        </GridItem>
      </BenefitContainer>
    );
}

export default Benefits;
