import React from 'react';
import styled from 'styled-components';
import cardone from '../../illustrations/inf7.png';
import cardtwo from '../../illustrations/inf1.png';
import cardthree from '../../illustrations/inf2.png';
import cardfour from '../../illustrations/inf6.png';
import cardfive from '../../illustrations/inf5.png';
import SectionHeader from '../sectionheader';


const BenefitContainer = styled.section`
    width: 80%;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(12, 1fr);
    margin: 0 auto;
    gap: 10px;
    padding: 4rem 0;
`;


const GridItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin: 0 0 0.4rem 0;
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

    return (
      <BenefitContainer>
        <SectionHeader text="
          Community Benefits
        "
        />
        <GridItem className="actionable-item">
          <CardImage src={cardone} alt="Actionable Solutions" />
          <CardHeader>Actionable Solutions</CardHeader>
          <Overlay>
            <p>
              A library of educational resources (curriculum, tools and methods)
              that can be immediately put to practice
            </p>
          </Overlay>
        </GridItem>
        <GridItem>
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
        <GridItem>
          <CardImage src={cardthree} alt="Actionable Solutions" />
          <CardHeader>Peer Networks</CardHeader>
          <Overlay>
            <p>
              Connect with like minded people of your choice to enrich your
              learning process
            </p>
          </Overlay>
        </GridItem>
        <GridItem>
          <CardImage src={cardfour} alt="Actionable Solutions" />
          <CardHeader>Latest Events</CardHeader>
          <Overlay>
            <p>
              Stay informed on conferences and news around network thinking
              across the globe
            </p>
          </Overlay>
        </GridItem>
        <GridItem>
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
