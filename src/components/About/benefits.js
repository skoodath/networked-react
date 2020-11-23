import React from 'react';
import cardone from '../../illustrations/inf7.png';
import cardtwo from '../../illustrations/inf1.png';
import cardthree from '../../illustrations/inf2.png';
import cardfour from '../../illustrations/inf6.png';
import cardfive from '../../illustrations/inf5.png';
import SectionHeader from '../sectionheader';
import { 
      BenefitContainer,
      CardWrapper,
      CardItem,
      CardHeader,
      CardImage,
      Overlay
      } from '../../styles/aboutstyle';


const Benefits = () => {

    return (
      <>
      <SectionHeader text="
          Community Benefits
        "
        />
      <BenefitContainer>
        <CardWrapper>
        <CardItem className="actionable-item">
          <CardImage src={cardone} alt="Actionable Solutions" />
          <CardHeader>Actionable Solutions</CardHeader>
          <Overlay>
            <p>
              A library of educational resources (curriculum, tools and methods)
              that can be immediately put to practice
            </p>
          </Overlay>
        </CardItem>
        <CardItem>
          <CardImage src={cardtwo} alt="Actionable Solutions" />
          <CardHeader>Domain Expertise</CardHeader>
          <Overlay>
            <p>
              Access to academia and opportunities that are relevant and provide
              exposure to the field of Systems, Complex Systems and Network
              Science
            </p>
          </Overlay>
        </CardItem>
        <CardItem>
          <CardImage src={cardthree} alt="Actionable Solutions" />
          <CardHeader>Peer Networks</CardHeader>
          <Overlay>
            <p>
              Connect with like minded people of your choice to enrich your
              learning process
            </p>
          </Overlay>
        </CardItem>
        <CardItem>
          <CardImage src={cardfour} alt="Actionable Solutions" />
          <CardHeader>Latest Events</CardHeader>
          <Overlay>
            <p>
              Stay informed on conferences and news around network thinking
              across the globe
            </p>
          </Overlay>
        </CardItem>
        <CardItem>
          <CardImage src={cardfive} alt="Actionable Solutions" />
          <CardHeader>Small Wins</CardHeader>
          <Overlay>
            <p>
              A space to celebrate your progress, be it classroom victories or
              nailing project milestones
            </p>
          </Overlay>
        </CardItem>
        </CardWrapper>
      </BenefitContainer>
    </>
    );
}

export default Benefits;
