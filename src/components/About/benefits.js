import React, { useEffect, useRef } from 'react';
import { benefit } from '../About/benefitsdata';
import SectionHeader from '../sectionheader';
import { 
      BenefitContainer, CardWrapper,
      } from '../../styles/aboutstyle';
import Benefitcards from '../About/benefitcards';
import gsap from 'gsap';


const Benefits = () => {

    const benefitRef = useRef(null);
    const titleRef = useRef(null);

    const animateSections = el => {

      gsap.from(el, {
              scrollTrigger: {
              trigger: el,
              start: 'top 70%',
              end: 'top 30%',
              toggleActions: 'play pause reverse reverse',
              scrub: 1
          },
          opacity: 0,
          duration: 1,
          x: 50,
          scale: 1.05,
          letterSpacing: '5px'
          }
      )
  }
  const benefitSections = el => {

    gsap.from(el, {
            scrollTrigger: {
            trigger: el,
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play pause pause pause',
            scrub: 1
        },
        opacity: 0,
        duration: 1,
        scale: 1.05,
        letterSpacing: '5px'
        }
    )
}

    useEffect(()=> {
      animateSections(titleRef.current);
      benefitSections(benefitRef.current);

    })

    return (
      <>
      <SectionHeader 
      text="Community Benefits"
      ref={titleRef}
        />
      <BenefitContainer ref={benefitRef}>
        <CardWrapper>
          {benefit.map(ben => 
              <Benefitcards
              key={ben.id}
              benefitinfo = {ben}
              />
            )}
        </CardWrapper>
      </BenefitContainer>
    </>
    );
}

export default Benefits;
